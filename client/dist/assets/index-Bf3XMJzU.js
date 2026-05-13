(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Gr(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const X={},Gt=[],Ke=()=>{},Jo=()=>!1,Ns=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),xs=t=>t.startsWith("onUpdate:"),pe=Object.assign,Jr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},hl=Object.prototype.hasOwnProperty,q=(t,e)=>hl.call(t,e),M=Array.isArray,Jt=t=>Vn(t)==="[object Map]",Yo=t=>Vn(t)==="[object Set]",Li=t=>Vn(t)==="[object Date]",U=t=>typeof t=="function",re=t=>typeof t=="string",Je=t=>typeof t=="symbol",z=t=>t!==null&&typeof t=="object",Xo=t=>(z(t)||U(t))&&U(t.then)&&U(t.catch),Qo=Object.prototype.toString,Vn=t=>Qo.call(t),fl=t=>Vn(t).slice(8,-1),Zo=t=>Vn(t)==="[object Object]",Yr=t=>re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,In=Gr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ds=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},dl=/-\w/g,xe=Ds(t=>t.replace(dl,e=>e.slice(1).toUpperCase())),pl=/\B([A-Z])/g,Wt=Ds(t=>t.replace(pl,"-$1").toLowerCase()),ea=Ds(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ys=Ds(t=>t?`on${ea(t)}`:""),qe=(t,e)=>!Object.is(t,e),as=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ta=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Xr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Mi;const Ls=()=>Mi||(Mi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qr(t){if(M(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=re(s)?yl(s):Qr(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(re(t)||z(t))return t}const gl=/;(?![^(]*\))/g,ml=/:([^]+)/,_l=/\/\*[^]*?\*\//g;function yl(t){const e={};return t.replace(_l,"").split(gl).forEach(n=>{if(n){const s=n.split(ml);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function It(t){let e="";if(re(t))e=t;else if(M(t))for(let n=0;n<t.length;n++){const s=It(t[n]);s&&(e+=s+" ")}else if(z(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const vl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bl=Gr(vl);function na(t){return!!t||t===""}function wl(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=xn(t[s],e[s]);return n}function xn(t,e){if(t===e)return!0;let n=Li(t),s=Li(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Je(t),s=Je(e),n||s)return t===e;if(n=M(t),s=M(e),n||s)return n&&s?wl(t,e):!1;if(n=z(t),s=z(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!xn(t[o],e[o]))return!1}}return String(t)===String(e)}const sa=t=>!!(t&&t.__v_isRef===!0),_e=t=>re(t)?t:t==null?"":M(t)||z(t)&&(t.toString===Qo||!U(t.toString))?sa(t)?_e(t.value):JSON.stringify(t,ra,2):String(t),ra=(t,e)=>sa(e)?ra(t,e.value):Jt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Xs(s,i)+" =>"]=r,n),{})}:Yo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Xs(n))}:Je(e)?Xs(e):z(e)&&!M(e)&&!Zo(e)?String(e):e,Xs=(t,e="")=>{var n;return Je(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ue;class El{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&ue&&(ue.active?(this.parent=ue,this.index=(ue.scopes||(ue.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ue;try{return ue=this,e()}finally{ue=n}}}on(){++this._on===1&&(this.prevScope=ue,ue=this)}off(){if(this._on>0&&--this._on===0){if(ue===this)ue=this.prevScope;else{let e=ue;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Il(){return ue}let te;const Qs=new WeakSet;class ia{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ue&&(ue.active?ue.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Qs.has(this)&&(Qs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||aa(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ui(this),ca(this);const e=te,n=De;te=this,De=!0;try{return this.fn()}finally{la(this),te=e,De=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ti(e);this.deps=this.depsTail=void 0,Ui(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Qs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){vr(this)&&this.run()}get dirty(){return vr(this)}}let oa=0,Tn,Sn;function aa(t,e=!1){if(t.flags|=8,e){t.next=Sn,Sn=t;return}t.next=Tn,Tn=t}function Zr(){oa++}function ei(){if(--oa>0)return;if(Sn){let e=Sn;for(Sn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Tn;){let e=Tn;for(Tn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function ca(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function la(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),ti(s),Tl(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function vr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ua(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ua(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Dn)||(t.globalVersion=Dn,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!vr(t))))return;t.flags|=2;const e=t.dep,n=te,s=De;te=t,De=!0;try{ca(t);const r=t.fn(t._value);(e.version===0||qe(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{te=n,De=s,la(t),t.flags&=-3}}function ti(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ti(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Tl(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let De=!0;const ha=[];function lt(){ha.push(De),De=!1}function ut(){const t=ha.pop();De=t===void 0?!0:t}function Ui(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=te;te=void 0;try{e()}finally{te=n}}}let Dn=0;class Sl{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ni{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!te||!De||te===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==te)n=this.activeLink=new Sl(te,this),te.deps?(n.prevDep=te.depsTail,te.depsTail.nextDep=n,te.depsTail=n):te.deps=te.depsTail=n,fa(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=te.depsTail,n.nextDep=void 0,te.depsTail.nextDep=n,te.depsTail=n,te.deps===n&&(te.deps=s)}return n}trigger(e){this.version++,Dn++,this.notify(e)}notify(e){Zr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ei()}}}function fa(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)fa(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const br=new WeakMap,$t=Symbol(""),wr=Symbol(""),Ln=Symbol("");function fe(t,e,n){if(De&&te){let s=br.get(t);s||br.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new ni),r.map=s,r.key=n),r.track()}}function nt(t,e,n,s,r,i){const o=br.get(t);if(!o){Dn++;return}const a=c=>{c&&c.trigger()};if(Zr(),e==="clear")o.forEach(a);else{const c=M(t),l=c&&Yr(n);if(c&&n==="length"){const h=Number(s);o.forEach((d,p)=>{(p==="length"||p===Ln||!Je(p)&&p>=h)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Ln)),e){case"add":c?l&&a(o.get("length")):(a(o.get($t)),Jt(t)&&a(o.get(wr)));break;case"delete":c||(a(o.get($t)),Jt(t)&&a(o.get(wr)));break;case"set":Jt(t)&&a(o.get($t));break}}ei()}function qt(t){const e=W(t);return e===t?e:(fe(e,"iterate",Ln),Oe(t)?e:e.map(Me))}function Ms(t){return fe(t=W(t),"iterate",Ln),t}function je(t,e){return ht(t)?sn(Ht(t)?Me(e):e):Me(e)}const Cl={__proto__:null,[Symbol.iterator](){return Zs(this,Symbol.iterator,t=>je(this,t))},concat(...t){return qt(this).concat(...t.map(e=>M(e)?qt(e):e))},entries(){return Zs(this,"entries",t=>(t[1]=je(this,t[1]),t))},every(t,e){return Ze(this,"every",t,e,void 0,arguments)},filter(t,e){return Ze(this,"filter",t,e,n=>n.map(s=>je(this,s)),arguments)},find(t,e){return Ze(this,"find",t,e,n=>je(this,n),arguments)},findIndex(t,e){return Ze(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ze(this,"findLast",t,e,n=>je(this,n),arguments)},findLastIndex(t,e){return Ze(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ze(this,"forEach",t,e,void 0,arguments)},includes(...t){return er(this,"includes",t)},indexOf(...t){return er(this,"indexOf",t)},join(t){return qt(this).join(t)},lastIndexOf(...t){return er(this,"lastIndexOf",t)},map(t,e){return Ze(this,"map",t,e,void 0,arguments)},pop(){return pn(this,"pop")},push(...t){return pn(this,"push",t)},reduce(t,...e){return Bi(this,"reduce",t,e)},reduceRight(t,...e){return Bi(this,"reduceRight",t,e)},shift(){return pn(this,"shift")},some(t,e){return Ze(this,"some",t,e,void 0,arguments)},splice(...t){return pn(this,"splice",t)},toReversed(){return qt(this).toReversed()},toSorted(t){return qt(this).toSorted(t)},toSpliced(...t){return qt(this).toSpliced(...t)},unshift(...t){return pn(this,"unshift",t)},values(){return Zs(this,"values",t=>je(this,t))}};function Zs(t,e,n){const s=Ms(t),r=s[e]();return s!==t&&!Oe(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=n(i.value)),i}),r}const Al=Array.prototype;function Ze(t,e,n,s,r,i){const o=Ms(t),a=o!==t&&!Oe(t),c=o[e];if(c!==Al[e]){const d=c.apply(t,i);return a?Me(d):d}let l=n;o!==t&&(a?l=function(d,p){return n.call(this,je(t,d),p,t)}:n.length>2&&(l=function(d,p){return n.call(this,d,p,t)}));const h=c.call(o,l,s);return a&&r?r(h):h}function Bi(t,e,n,s){const r=Ms(t),i=r!==t&&!Oe(t);let o=n,a=!1;r!==t&&(i?(a=s.length===0,o=function(l,h,d){return a&&(a=!1,l=je(t,l)),n.call(this,l,je(t,h),d,t)}):n.length>3&&(o=function(l,h,d){return n.call(this,l,h,d,t)}));const c=r[e](o,...s);return a?je(t,c):c}function er(t,e,n){const s=W(t);fe(s,"iterate",Ln);const r=s[e](...n);return(r===-1||r===!1)&&oi(n[0])?(n[0]=W(n[0]),s[e](...n)):r}function pn(t,e,n=[]){lt(),Zr();const s=W(t)[e].apply(t,n);return ei(),ut(),s}const Rl=Gr("__proto__,__v_isRef,__isVue"),da=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Je));function Ol(t){Je(t)||(t=String(t));const e=W(this);return fe(e,"has",t),e.hasOwnProperty(t)}class pa{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Fl:ya:i?_a:ma).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=M(e);if(!r){let c;if(o&&(c=Cl[n]))return c;if(n==="hasOwnProperty")return Ol}const a=Reflect.get(e,n,de(e)?e:s);if((Je(n)?da.has(n):Rl(n))||(r||fe(e,"get",n),i))return a;if(de(a)){const c=o&&Yr(n)?a:a.value;return r&&z(c)?Ir(c):c}return z(a)?r?Ir(a):ri(a):a}}class ga extends pa{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];const o=M(e)&&Yr(n);if(!this._isShallow){const l=ht(i);if(!Oe(s)&&!ht(s)&&(i=W(i),s=W(s)),!o&&de(i)&&!de(s))return l||(i.value=s),!0}const a=o?Number(n)<e.length:q(e,n),c=Reflect.set(e,n,s,de(e)?e:r);return e===W(r)&&(a?qe(s,i)&&nt(e,"set",n,s):nt(e,"add",n,s)),c}deleteProperty(e,n){const s=q(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&nt(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Je(n)||!da.has(n))&&fe(e,"has",n),s}ownKeys(e){return fe(e,"iterate",M(e)?"length":$t),Reflect.ownKeys(e)}}class kl extends pa{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Pl=new ga,Nl=new kl,xl=new ga(!0);const Er=t=>t,ts=t=>Reflect.getPrototypeOf(t);function Dl(t,e,n){return function(...s){const r=this.__v_raw,i=W(r),o=Jt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),h=n?Er:e?sn:Me;return!e&&fe(i,"iterate",c?wr:$t),pe(Object.create(l),{next(){const{value:d,done:p}=l.next();return p?{value:d,done:p}:{value:a?[h(d[0]),h(d[1])]:h(d),done:p}}})}}function ns(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ll(t,e){const n={get(r){const i=this.__v_raw,o=W(i),a=W(r);t||(qe(r,a)&&fe(o,"get",r),fe(o,"get",a));const{has:c}=ts(o),l=e?Er:t?sn:Me;if(c.call(o,r))return l(i.get(r));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&fe(W(r),"iterate",$t),r.size},has(r){const i=this.__v_raw,o=W(i),a=W(r);return t||(qe(r,a)&&fe(o,"has",r),fe(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,c=W(a),l=e?Er:t?sn:Me;return!t&&fe(c,"iterate",$t),a.forEach((h,d)=>r.call(i,l(h),l(d),o))}};return pe(n,t?{add:ns("add"),set:ns("set"),delete:ns("delete"),clear:ns("clear")}:{add(r){const i=W(this),o=ts(i),a=W(r),c=!e&&!Oe(r)&&!ht(r)?a:r;return o.has.call(i,c)||qe(r,c)&&o.has.call(i,r)||qe(a,c)&&o.has.call(i,a)||(i.add(c),nt(i,"add",c,c)),this},set(r,i){!e&&!Oe(i)&&!ht(i)&&(i=W(i));const o=W(this),{has:a,get:c}=ts(o);let l=a.call(o,r);l||(r=W(r),l=a.call(o,r));const h=c.call(o,r);return o.set(r,i),l?qe(i,h)&&nt(o,"set",r,i):nt(o,"add",r,i),this},delete(r){const i=W(this),{has:o,get:a}=ts(i);let c=o.call(i,r);c||(r=W(r),c=o.call(i,r)),a&&a.call(i,r);const l=i.delete(r);return c&&nt(i,"delete",r,void 0),l},clear(){const r=W(this),i=r.size!==0,o=r.clear();return i&&nt(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Dl(r,t,e)}),n}function si(t,e){const n=Ll(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(q(n,r)&&r in s?n:s,r,i)}const Ml={get:si(!1,!1)},Ul={get:si(!1,!0)},Bl={get:si(!0,!1)};const ma=new WeakMap,_a=new WeakMap,ya=new WeakMap,Fl=new WeakMap;function $l(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hl(t){return t.__v_skip||!Object.isExtensible(t)?0:$l(fl(t))}function ri(t){return ht(t)?t:ii(t,!1,Pl,Ml,ma)}function Vl(t){return ii(t,!1,xl,Ul,_a)}function Ir(t){return ii(t,!0,Nl,Bl,ya)}function ii(t,e,n,s,r){if(!z(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Hl(t);if(i===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,i===2?s:n);return r.set(t,a),a}function Ht(t){return ht(t)?Ht(t.__v_raw):!!(t&&t.__v_isReactive)}function ht(t){return!!(t&&t.__v_isReadonly)}function Oe(t){return!!(t&&t.__v_isShallow)}function oi(t){return t?!!t.__v_raw:!1}function W(t){const e=t&&t.__v_raw;return e?W(e):t}function jl(t){return!q(t,"__v_skip")&&Object.isExtensible(t)&&ta(t,"__v_skip",!0),t}const Me=t=>z(t)?ri(t):t,sn=t=>z(t)?Ir(t):t;function de(t){return t?t.__v_isRef===!0:!1}function ae(t){return Wl(t,!1)}function Wl(t,e){return de(t)?t:new ql(t,e)}class ql{constructor(e,n){this.dep=new ni,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:W(e),this._value=n?e:Me(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Oe(e)||ht(e);e=s?e:W(e),qe(e,n)&&(this._rawValue=e,this._value=s?e:Me(e),this.dep.trigger())}}function va(t){return de(t)?t.value:t}const Kl={get:(t,e,n)=>e==="__v_raw"?t:va(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return de(r)&&!de(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function ba(t){return Ht(t)?t:new Proxy(t,Kl)}class zl{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ni(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Dn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&te!==this)return aa(this,!0),!0}get value(){const e=this.dep.track();return ua(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Gl(t,e,n=!1){let s,r;return U(t)?s=t:(s=t.get,r=t.set),new zl(s,r,n)}const ss={},ys=new WeakMap;let Lt;function Jl(t,e=!1,n=Lt){if(n){let s=ys.get(n);s||ys.set(n,s=[]),s.push(t)}}function Yl(t,e,n=X){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:c}=n,l=k=>r?k:Oe(k)||r===!1||r===0?st(k,1):st(k);let h,d,p,w,D=!1,C=!1;if(de(t)?(d=()=>t.value,D=Oe(t)):Ht(t)?(d=()=>l(t),D=!0):M(t)?(C=!0,D=t.some(k=>Ht(k)||Oe(k)),d=()=>t.map(k=>{if(de(k))return k.value;if(Ht(k))return l(k);if(U(k))return c?c(k,2):k()})):U(t)?e?d=c?()=>c(t,2):t:d=()=>{if(p){lt();try{p()}finally{ut()}}const k=Lt;Lt=h;try{return c?c(t,3,[w]):t(w)}finally{Lt=k}}:d=Ke,e&&r){const k=d,ne=r===!0?1/0:r;d=()=>st(k(),ne)}const A=Il(),B=()=>{h.stop(),A&&A.active&&Jr(A.effects,h)};if(i&&e){const k=e;e=(...ne)=>{k(...ne),B()}}let S=C?new Array(t.length).fill(ss):ss;const F=k=>{if(!(!(h.flags&1)||!h.dirty&&!k))if(e){const ne=h.run();if(r||D||(C?ne.some((we,ge)=>qe(we,S[ge])):qe(ne,S))){p&&p();const we=Lt;Lt=h;try{const ge=[ne,S===ss?void 0:C&&S[0]===ss?[]:S,w];S=ne,c?c(e,3,ge):e(...ge)}finally{Lt=we}}}else h.run()};return a&&a(F),h=new ia(d),h.scheduler=o?()=>o(F,!1):F,w=k=>Jl(k,!1,h),p=h.onStop=()=>{const k=ys.get(h);if(k){if(c)c(k,4);else for(const ne of k)ne();ys.delete(h)}},e?s?F(!0):S=h.run():o?o(F.bind(null,!0),!0):h.run(),B.pause=h.pause.bind(h),B.resume=h.resume.bind(h),B.stop=B,B}function st(t,e=1/0,n){if(e<=0||!z(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,de(t))st(t.value,e,n);else if(M(t))for(let s=0;s<t.length;s++)st(t[s],e,n);else if(Yo(t)||Jt(t))t.forEach(s=>{st(s,e,n)});else if(Zo(t)){for(const s in t)st(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&st(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function jn(t,e,n,s){try{return s?t(...s):t()}catch(r){Us(r,e,n)}}function Ye(t,e,n,s){if(U(t)){const r=jn(t,e,n,s);return r&&Xo(r)&&r.catch(i=>{Us(i,e,n)}),r}if(M(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Ye(t[i],e,n,s));return r}}function Us(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||X;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,c,l)===!1)return}a=a.parent}if(i){lt(),jn(i,null,10,[t,c,l]),ut();return}}Xl(t,n,r,s,o)}function Xl(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const ye=[];let Ve=-1;const Yt=[];let vt=null,Kt=0;const wa=Promise.resolve();let vs=null;function Ea(t){const e=vs||wa;return t?e.then(this?t.bind(this):t):e}function Ql(t){let e=Ve+1,n=ye.length;for(;e<n;){const s=e+n>>>1,r=ye[s],i=Mn(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function ai(t){if(!(t.flags&1)){const e=Mn(t),n=ye[ye.length-1];!n||!(t.flags&2)&&e>=Mn(n)?ye.push(t):ye.splice(Ql(e),0,t),t.flags|=1,Ia()}}function Ia(){vs||(vs=wa.then(Sa))}function Zl(t){M(t)?Yt.push(...t):vt&&t.id===-1?vt.splice(Kt+1,0,t):t.flags&1||(Yt.push(t),t.flags|=1),Ia()}function Fi(t,e,n=Ve+1){for(;n<ye.length;n++){const s=ye[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;ye.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Ta(t){if(Yt.length){const e=[...new Set(Yt)].sort((n,s)=>Mn(n)-Mn(s));if(Yt.length=0,vt){vt.push(...e);return}for(vt=e,Kt=0;Kt<vt.length;Kt++){const n=vt[Kt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}vt=null,Kt=0}}const Mn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Sa(t){try{for(Ve=0;Ve<ye.length;Ve++){const e=ye[Ve];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),jn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ve<ye.length;Ve++){const e=ye[Ve];e&&(e.flags&=-2)}Ve=-1,ye.length=0,Ta(),vs=null,(ye.length||Yt.length)&&Sa()}}let Re=null,Ca=null;function bs(t){const e=Re;return Re=t,Ca=t&&t.type.__scopeId||null,e}function eu(t,e=Re,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Yi(-1);const i=bs(e);let o;try{o=t(...r)}finally{bs(i),s._d&&Yi(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function zt(t,e){if(Re===null)return t;const n=Vs(Re),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,c=X]=e[r];i&&(U(i)&&(i={mounted:i,updated:i}),i.deep&&st(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function xt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(lt(),Ye(c,n,8,[t.el,a,t,e]),ut())}}function tu(t,e){if(ve){let n=ve.provides;const s=ve.parent&&ve.parent.provides;s===n&&(n=ve.provides=Object.create(s)),n[t]=e}}function cs(t,e,n=!1){const s=Zu();if(s||Xt){let r=Xt?Xt._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&U(e)?e.call(s&&s.proxy):e}}const nu=Symbol.for("v-scx"),su=()=>cs(nu);function tr(t,e,n){return Aa(t,e,n)}function Aa(t,e,n=X){const{immediate:s,deep:r,flush:i,once:o}=n,a=pe({},n),c=e&&s||!e&&i!=="post";let l;if(Bn){if(i==="sync"){const w=su();l=w.__watcherHandles||(w.__watcherHandles=[])}else if(!c){const w=()=>{};return w.stop=Ke,w.resume=Ke,w.pause=Ke,w}}const h=ve;a.call=(w,D,C)=>Ye(w,h,D,C);let d=!1;i==="post"?a.scheduler=w=>{Ee(w,h&&h.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(w,D)=>{D?w():ai(w)}),a.augmentJob=w=>{e&&(w.flags|=4),d&&(w.flags|=2,h&&(w.id=h.uid,w.i=h))};const p=Yl(t,e,a);return Bn&&(l?l.push(p):c&&p()),p}function ru(t,e,n){const s=this.proxy,r=re(t)?t.includes(".")?Ra(s,t):()=>s[t]:t.bind(s,s);let i;U(e)?i=e:(i=e.handler,n=e);const o=Wn(this),a=Aa(r,i.bind(s),n);return o(),a}function Ra(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const iu=Symbol("_vte"),ou=t=>t.__isTeleport,au=Symbol("_leaveCb");function ci(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ci(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Oa(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function $i(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const ws=new WeakMap;function Cn(t,e,n,s,r=!1){if(M(t)){t.forEach((C,A)=>Cn(C,e&&(M(e)?e[A]:e),n,s,r));return}if(An(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Cn(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Vs(s.component):s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,h=a.refs===X?a.refs={}:a.refs,d=a.setupState,p=W(d),w=d===X?Jo:C=>$i(h,C)?!1:q(p,C),D=(C,A)=>!(A&&$i(h,A));if(l!=null&&l!==c){if(Hi(e),re(l))h[l]=null,w(l)&&(d[l]=null);else if(de(l)){const C=e;D(l,C.k)&&(l.value=null),C.k&&(h[C.k]=null)}}if(U(c))jn(c,a,12,[o,h]);else{const C=re(c),A=de(c);if(C||A){const B=()=>{if(t.f){const S=C?w(c)?d[c]:h[c]:D()||!t.k?c.value:h[t.k];if(r)M(S)&&Jr(S,i);else if(M(S))S.includes(i)||S.push(i);else if(C)h[c]=[i],w(c)&&(d[c]=h[c]);else{const F=[i];D(c,t.k)&&(c.value=F),t.k&&(h[t.k]=F)}}else C?(h[c]=o,w(c)&&(d[c]=o)):A&&(D(c,t.k)&&(c.value=o),t.k&&(h[t.k]=o))};if(o){const S=()=>{B(),ws.delete(t)};S.id=-1,ws.set(t,S),Ee(S,n)}else Hi(t),B()}}}function Hi(t){const e=ws.get(t);e&&(e.flags|=8,ws.delete(t))}Ls().requestIdleCallback;Ls().cancelIdleCallback;const An=t=>!!t.type.__asyncLoader,ka=t=>t.type.__isKeepAlive;function cu(t,e){Pa(t,"a",e)}function lu(t,e){Pa(t,"da",e)}function Pa(t,e,n=ve){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Bs(e,s,n),n){let r=n.parent;for(;r&&r.parent;)ka(r.parent.vnode)&&uu(s,e,n,r),r=r.parent}}function uu(t,e,n,s){const r=Bs(e,t,s,!0);Fs(()=>{Jr(s[e],r)},n)}function Bs(t,e,n=ve,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{lt();const a=Wn(n),c=Ye(e,n,t,o);return a(),ut(),c});return s?r.unshift(i):r.push(i),i}}const pt=t=>(e,n=ve)=>{(!Bn||t==="sp")&&Bs(t,(...s)=>e(...s),n)},hu=pt("bm"),Na=pt("m"),fu=pt("bu"),du=pt("u"),pu=pt("bum"),Fs=pt("um"),gu=pt("sp"),mu=pt("rtg"),_u=pt("rtc");function yu(t,e=ve){Bs("ec",t,e)}const vu=Symbol.for("v-ndc");function Tr(t,e,n,s){let r;const i=n,o=M(t);if(o||re(t)){const a=o&&Ht(t);let c=!1,l=!1;a&&(c=!Oe(t),l=ht(t),t=Ms(t)),r=new Array(t.length);for(let h=0,d=t.length;h<d;h++)r[h]=e(c?l?sn(Me(t[h])):Me(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i)}else if(z(t))if(t[Symbol.iterator])r=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);r=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const h=a[c];r[c]=e(t[h],h,c,i)}}else r=[];return r}const Sr=t=>t?Za(t)?Vs(t):Sr(t.parent):null,Rn=pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Sr(t.parent),$root:t=>Sr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Da(t),$forceUpdate:t=>t.f||(t.f=()=>{ai(t.update)}),$nextTick:t=>t.n||(t.n=Ea.bind(t.proxy)),$watch:t=>ru.bind(t)}),nr=(t,e)=>t!==X&&!t.__isScriptSetup&&q(t,e),bu={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(nr(s,e))return o[e]=1,s[e];if(r!==X&&q(r,e))return o[e]=2,r[e];if(q(i,e))return o[e]=3,i[e];if(n!==X&&q(n,e))return o[e]=4,n[e];Cr&&(o[e]=0)}}const l=Rn[e];let h,d;if(l)return e==="$attrs"&&fe(t.attrs,"get",""),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==X&&q(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,q(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return nr(r,e)?(r[e]=n,!0):s!==X&&q(s,e)?(s[e]=n,!0):q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,props:i,type:o}},a){let c;return!!(n[a]||t!==X&&a[0]!=="$"&&q(t,a)||nr(e,a)||q(i,a)||q(s,a)||q(Rn,a)||q(r.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Vi(t){return M(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Cr=!0;function wu(t){const e=Da(t),n=t.proxy,s=t.ctx;Cr=!1,e.beforeCreate&&ji(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:h,beforeMount:d,mounted:p,beforeUpdate:w,updated:D,activated:C,deactivated:A,beforeDestroy:B,beforeUnmount:S,destroyed:F,unmounted:k,render:ne,renderTracked:we,renderTriggered:ge,errorCaptured:$,serverPrefetch:R,expose:se,inheritAttrs:Ie,components:Q,directives:mt,filters:_t}=e;if(l&&Eu(l,s,null),o)for(const Z in o){const K=o[Z];U(K)&&(s[Z]=K.bind(n))}if(r){const Z=r.call(n,n);z(Z)&&(t.data=ri(Z))}if(Cr=!0,i)for(const Z in i){const K=i[Z],Pt=U(K)?K.bind(n,n):U(K.get)?K.get.bind(n,n):Ke,Zn=!U(K)&&U(K.set)?K.set.bind(n):Ke,Nt=tc({get:Pt,set:Zn});Object.defineProperty(s,Z,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:Ue=>Nt.value=Ue})}if(a)for(const Z in a)xa(a[Z],s,n,Z);if(c){const Z=U(c)?c.call(n):c;Reflect.ownKeys(Z).forEach(K=>{tu(K,Z[K])})}h&&ji(h,t,"c");function ce(Z,K){M(K)?K.forEach(Pt=>Z(Pt.bind(n))):K&&Z(K.bind(n))}if(ce(hu,d),ce(Na,p),ce(fu,w),ce(du,D),ce(cu,C),ce(lu,A),ce(yu,$),ce(_u,we),ce(mu,ge),ce(pu,S),ce(Fs,k),ce(gu,R),M(se))if(se.length){const Z=t.exposed||(t.exposed={});se.forEach(K=>{Object.defineProperty(Z,K,{get:()=>n[K],set:Pt=>n[K]=Pt,enumerable:!0})})}else t.exposed||(t.exposed={});ne&&t.render===Ke&&(t.render=ne),Ie!=null&&(t.inheritAttrs=Ie),Q&&(t.components=Q),mt&&(t.directives=mt),R&&Oa(t)}function Eu(t,e,n=Ke){M(t)&&(t=Ar(t));for(const s in t){const r=t[s];let i;z(r)?"default"in r?i=cs(r.from||s,r.default,!0):i=cs(r.from||s):i=cs(r),de(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function ji(t,e,n){Ye(M(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function xa(t,e,n,s){let r=s.includes(".")?Ra(n,s):()=>n[s];if(re(t)){const i=e[t];U(i)&&tr(r,i)}else if(U(t))tr(r,t.bind(n));else if(z(t))if(M(t))t.forEach(i=>xa(i,e,n,s));else{const i=U(t.handler)?t.handler.bind(n):e[t.handler];U(i)&&tr(r,i,t)}}function Da(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Es(c,l,o,!0)),Es(c,e,o)),z(e)&&i.set(e,c),c}function Es(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Es(t,i,n,!0),r&&r.forEach(o=>Es(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Iu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Iu={data:Wi,props:qi,emits:qi,methods:_n,computed:_n,beforeCreate:me,created:me,beforeMount:me,mounted:me,beforeUpdate:me,updated:me,beforeDestroy:me,beforeUnmount:me,destroyed:me,unmounted:me,activated:me,deactivated:me,errorCaptured:me,serverPrefetch:me,components:_n,directives:_n,watch:Su,provide:Wi,inject:Tu};function Wi(t,e){return e?t?function(){return pe(U(t)?t.call(this,this):t,U(e)?e.call(this,this):e)}:e:t}function Tu(t,e){return _n(Ar(t),Ar(e))}function Ar(t){if(M(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function me(t,e){return t?[...new Set([].concat(t,e))]:e}function _n(t,e){return t?pe(Object.create(null),t,e):e}function qi(t,e){return t?M(t)&&M(e)?[...new Set([...t,...e])]:pe(Object.create(null),Vi(t),Vi(e??{})):e}function Su(t,e){if(!t)return e;if(!e)return t;const n=pe(Object.create(null),t);for(const s in e)n[s]=me(t[s],e[s]);return n}function La(){return{app:null,config:{isNativeTag:Jo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cu=0;function Au(t,e){return function(s,r=null){U(s)||(s=pe({},s)),r!=null&&!z(r)&&(r=null);const i=La(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:Cu++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:ih,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&U(h.install)?(o.add(h),h.install(l,...d)):U(h)&&(o.add(h),h(l,...d))),l},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),l},component(h,d){return d?(i.components[h]=d,l):i.components[h]},directive(h,d){return d?(i.directives[h]=d,l):i.directives[h]},mount(h,d,p){if(!c){const w=l._ceVNode||at(s,r);return w.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),t(w,h,p),c=!0,l._container=h,h.__vue_app__=l,Vs(w.component)}},onUnmount(h){a.push(h)},unmount(){c&&(Ye(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(h,d){return i.provides[h]=d,l},runWithContext(h){const d=Xt;Xt=l;try{return h()}finally{Xt=d}}};return l}}let Xt=null;const Ru=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${xe(e)}Modifiers`]||t[`${Wt(e)}Modifiers`];function Ou(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||X;let r=n;const i=e.startsWith("update:"),o=i&&Ru(s,e.slice(7));o&&(o.trim&&(r=n.map(h=>re(h)?h.trim():h)),o.number&&(r=n.map(Xr)));let a,c=s[a=Ys(e)]||s[a=Ys(xe(e))];!c&&i&&(c=s[a=Ys(Wt(e))]),c&&Ye(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ye(l,t,6,r)}}const ku=new WeakMap;function Ma(t,e,n=!1){const s=n?ku:e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!U(t)){const c=l=>{const h=Ma(l,e,!0);h&&(a=!0,pe(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(z(t)&&s.set(t,null),null):(M(i)?i.forEach(c=>o[c]=null):pe(o,i),z(t)&&s.set(t,o),o)}function $s(t,e){return!t||!Ns(e)?!1:(e=e.slice(2).replace(/Once$/,""),q(t,e[0].toLowerCase()+e.slice(1))||q(t,Wt(e))||q(t,e))}function Ki(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:h,props:d,data:p,setupState:w,ctx:D,inheritAttrs:C}=t,A=bs(t);let B,S;try{if(n.shapeFlag&4){const k=r||s,ne=k;B=We(l.call(ne,k,h,d,w,p,D)),S=a}else{const k=e;B=We(k.length>1?k(d,{attrs:a,slots:o,emit:c}):k(d,null)),S=e.props?a:Pu(a)}}catch(k){On.length=0,Us(k,t,1),B=at(At)}let F=B;if(S&&C!==!1){const k=Object.keys(S),{shapeFlag:ne}=F;k.length&&ne&7&&(i&&k.some(xs)&&(S=Nu(S,i)),F=rn(F,S,!1,!0))}return n.dirs&&(F=rn(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&ci(F,n.transition),B=F,bs(A),B}const Pu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ns(n))&&((e||(e={}))[n]=t[n]);return e},Nu=(t,e)=>{const n={};for(const s in t)(!xs(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function xu(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?zi(s,o,l):!!o;if(c&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const p=h[d];if(Ua(o,s,p)&&!$s(l,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?zi(s,o,l):!0:!!o;return!1}function zi(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(Ua(e,t,i)&&!$s(n,i))return!0}return!1}function Ua(t,e,n){const s=t[n],r=e[n];return n==="style"&&z(s)&&z(r)?!xn(s,r):s!==r}function Du({vnode:t,parent:e,suspense:n},s){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.suspense.vnode.el=r.el=s,t=r),r===t)(t=e.vnode).el=s,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=s)}const Ba={},Fa=()=>Object.create(Ba),$a=t=>Object.getPrototypeOf(t)===Ba;function Lu(t,e,n,s=!1){const r={},i=Fa();t.propsDefaults=Object.create(null),Ha(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Vl(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Mu(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=W(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let p=h[d];if($s(t.emitsOptions,p))continue;const w=e[p];if(c)if(q(i,p))w!==i[p]&&(i[p]=w,l=!0);else{const D=xe(p);r[D]=Rr(c,a,D,w,t,!1)}else w!==i[p]&&(i[p]=w,l=!0)}}}else{Ha(t,e,r,i)&&(l=!0);let h;for(const d in a)(!e||!q(e,d)&&((h=Wt(d))===d||!q(e,h)))&&(c?n&&(n[d]!==void 0||n[h]!==void 0)&&(r[d]=Rr(c,a,d,void 0,t,!0)):delete r[d]);if(i!==a)for(const d in i)(!e||!q(e,d))&&(delete i[d],l=!0)}l&&nt(t.attrs,"set","")}function Ha(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(In(c))continue;const l=e[c];let h;r&&q(r,h=xe(c))?!i||!i.includes(h)?n[h]=l:(a||(a={}))[h]=l:$s(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=W(n),l=a||X;for(let h=0;h<i.length;h++){const d=i[h];n[d]=Rr(r,c,d,l[d],t,!q(l,d))}}return o}function Rr(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=q(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&U(c)){const{propsDefaults:l}=r;if(n in l)s=l[n];else{const h=Wn(r);s=l[n]=c.call(null,e),h()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Wt(n))&&(s=!0))}return s}const Uu=new WeakMap;function Va(t,e,n=!1){const s=n?Uu:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!U(t)){const h=d=>{c=!0;const[p,w]=Va(d,e,!0);pe(o,p),w&&a.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!c)return z(t)&&s.set(t,Gt),Gt;if(M(i))for(let h=0;h<i.length;h++){const d=xe(i[h]);Gi(d)&&(o[d]=X)}else if(i)for(const h in i){const d=xe(h);if(Gi(d)){const p=i[h],w=o[d]=M(p)||U(p)?{type:p}:pe({},p),D=w.type;let C=!1,A=!0;if(M(D))for(let B=0;B<D.length;++B){const S=D[B],F=U(S)&&S.name;if(F==="Boolean"){C=!0;break}else F==="String"&&(A=!1)}else C=U(D)&&D.name==="Boolean";w[0]=C,w[1]=A,(C||q(w,"default"))&&a.push(d)}}const l=[o,a];return z(t)&&s.set(t,l),l}function Gi(t){return t[0]!=="$"&&!In(t)}const li=t=>t==="_"||t==="_ctx"||t==="$stable",ui=t=>M(t)?t.map(We):[We(t)],Bu=(t,e,n)=>{if(e._n)return e;const s=eu((...r)=>ui(e(...r)),n);return s._c=!1,s},ja=(t,e,n)=>{const s=t._ctx;for(const r in t){if(li(r))continue;const i=t[r];if(U(i))e[r]=Bu(r,i,s);else if(i!=null){const o=ui(i);e[r]=()=>o}}},Wa=(t,e)=>{const n=ui(e);t.slots.default=()=>n},qa=(t,e,n)=>{for(const s in e)(n||!li(s))&&(t[s]=e[s])},Fu=(t,e,n)=>{const s=t.slots=Fa();if(t.vnode.shapeFlag&32){const r=e._;r?(qa(s,e,n),n&&ta(s,"_",r,!0)):ja(e,s)}else e&&Wa(t,e)},$u=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=X;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:qa(r,e,n):(i=!e.$stable,ja(e,r)),o=e}else e&&(Wa(t,e),o={default:1});if(i)for(const a in r)!li(a)&&o[a]==null&&delete r[a]},Ee=qu;function Hu(t){return Vu(t)}function Vu(t,e){const n=Ls();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:h,parentNode:d,nextSibling:p,setScopeId:w=Ke,insertStaticContent:D}=t,C=(u,f,g,v=null,m=null,_=null,I=void 0,E=null,b=!!f.dynamicChildren)=>{if(u===f)return;u&&!gn(u,f)&&(v=es(u),Ue(u,m,_,!0),u=null),f.patchFlag===-2&&(b=!1,f.dynamicChildren=null);const{type:y,ref:P,shapeFlag:T}=f;switch(y){case Hs:A(u,f,g,v);break;case At:B(u,f,g,v);break;case rr:u==null&&S(f,g,v,I);break;case he:Q(u,f,g,v,m,_,I,E,b);break;default:T&1?ne(u,f,g,v,m,_,I,E,b):T&6?mt(u,f,g,v,m,_,I,E,b):(T&64||T&128)&&y.process(u,f,g,v,m,_,I,E,b,fn)}P!=null&&m?Cn(P,u&&u.ref,_,f||u,!f):P==null&&u&&u.ref!=null&&Cn(u.ref,null,_,u,!0)},A=(u,f,g,v)=>{if(u==null)s(f.el=a(f.children),g,v);else{const m=f.el=u.el;f.children!==u.children&&l(m,f.children)}},B=(u,f,g,v)=>{u==null?s(f.el=c(f.children||""),g,v):f.el=u.el},S=(u,f,g,v)=>{[u.el,u.anchor]=D(u.children,f,g,v,u.el,u.anchor)},F=({el:u,anchor:f},g,v)=>{let m;for(;u&&u!==f;)m=p(u),s(u,g,v),u=m;s(f,g,v)},k=({el:u,anchor:f})=>{let g;for(;u&&u!==f;)g=p(u),r(u),u=g;r(f)},ne=(u,f,g,v,m,_,I,E,b)=>{if(f.type==="svg"?I="svg":f.type==="math"&&(I="mathml"),u==null)we(f,g,v,m,_,I,E,b);else{const y=u.el&&u.el._isVueCE?u.el:null;try{y&&y._beginPatch(),R(u,f,m,_,I,E,b)}finally{y&&y._endPatch()}}},we=(u,f,g,v,m,_,I,E)=>{let b,y;const{props:P,shapeFlag:T,transition:O,dirs:L}=u;if(b=u.el=o(u.type,_,P&&P.is,P),T&8?h(b,u.children):T&16&&$(u.children,b,null,v,m,sr(u,_),I,E),L&&xt(u,null,v,"created"),ge(b,u,u.scopeId,I,v),P){for(const G in P)G!=="value"&&!In(G)&&i(b,G,null,P[G],_,v);"value"in P&&i(b,"value",null,P.value,_),(y=P.onVnodeBeforeMount)&&He(y,v,u)}L&&xt(u,null,v,"beforeMount");const V=ju(m,O);V&&O.beforeEnter(b),s(b,f,g),((y=P&&P.onVnodeMounted)||V||L)&&Ee(()=>{try{y&&He(y,v,u),V&&O.enter(b),L&&xt(u,null,v,"mounted")}finally{}},m)},ge=(u,f,g,v,m)=>{if(g&&w(u,g),v)for(let _=0;_<v.length;_++)w(u,v[_]);if(m){let _=m.subTree;if(f===_||Ja(_.type)&&(_.ssContent===f||_.ssFallback===f)){const I=m.vnode;ge(u,I,I.scopeId,I.slotScopeIds,m.parent)}}},$=(u,f,g,v,m,_,I,E,b=0)=>{for(let y=b;y<u.length;y++){const P=u[y]=E?tt(u[y]):We(u[y]);C(null,P,f,g,v,m,_,I,E)}},R=(u,f,g,v,m,_,I)=>{const E=f.el=u.el;let{patchFlag:b,dynamicChildren:y,dirs:P}=f;b|=u.patchFlag&16;const T=u.props||X,O=f.props||X;let L;if(g&&Dt(g,!1),(L=O.onVnodeBeforeUpdate)&&He(L,g,f,u),P&&xt(f,u,g,"beforeUpdate"),g&&Dt(g,!0),(T.innerHTML&&O.innerHTML==null||T.textContent&&O.textContent==null)&&h(E,""),y?se(u.dynamicChildren,y,E,g,v,sr(f,m),_):I||K(u,f,E,null,g,v,sr(f,m),_,!1),b>0){if(b&16)Ie(E,T,O,g,m);else if(b&2&&T.class!==O.class&&i(E,"class",null,O.class,m),b&4&&i(E,"style",T.style,O.style,m),b&8){const V=f.dynamicProps;for(let G=0;G<V.length;G++){const ee=V[G],ie=T[ee],le=O[ee];(le!==ie||ee==="value")&&i(E,ee,ie,le,m,g)}}b&1&&u.children!==f.children&&h(E,f.children)}else!I&&y==null&&Ie(E,T,O,g,m);((L=O.onVnodeUpdated)||P)&&Ee(()=>{L&&He(L,g,f,u),P&&xt(f,u,g,"updated")},v)},se=(u,f,g,v,m,_,I)=>{for(let E=0;E<f.length;E++){const b=u[E],y=f[E],P=b.el&&(b.type===he||!gn(b,y)||b.shapeFlag&198)?d(b.el):g;C(b,y,P,null,v,m,_,I,!0)}},Ie=(u,f,g,v,m)=>{if(f!==g){if(f!==X)for(const _ in f)!In(_)&&!(_ in g)&&i(u,_,f[_],null,m,v);for(const _ in g){if(In(_))continue;const I=g[_],E=f[_];I!==E&&_!=="value"&&i(u,_,E,I,m,v)}"value"in g&&i(u,"value",f.value,g.value,m)}},Q=(u,f,g,v,m,_,I,E,b)=>{const y=f.el=u?u.el:a(""),P=f.anchor=u?u.anchor:a("");let{patchFlag:T,dynamicChildren:O,slotScopeIds:L}=f;L&&(E=E?E.concat(L):L),u==null?(s(y,g,v),s(P,g,v),$(f.children||[],g,P,m,_,I,E,b)):T>0&&T&64&&O&&u.dynamicChildren&&u.dynamicChildren.length===O.length?(se(u.dynamicChildren,O,g,m,_,I,E),(f.key!=null||m&&f===m.subTree)&&Ka(u,f,!0)):K(u,f,g,P,m,_,I,E,b)},mt=(u,f,g,v,m,_,I,E,b)=>{f.slotScopeIds=E,u==null?f.shapeFlag&512?m.ctx.activate(f,g,v,I,b):_t(f,g,v,m,_,I,b):Qn(u,f,b)},_t=(u,f,g,v,m,_,I)=>{const E=u.component=Qu(u,v,m);if(ka(u)&&(E.ctx.renderer=fn),eh(E,!1,I),E.asyncDep){if(m&&m.registerDep(E,ce,I),!u.el){const b=E.subTree=at(At);B(null,b,f,g),u.placeholder=b.el}}else ce(E,u,f,g,m,_,I)},Qn=(u,f,g)=>{const v=f.component=u.component;if(xu(u,f,g))if(v.asyncDep&&!v.asyncResolved){Z(v,f,g);return}else v.next=f,v.update();else f.el=u.el,v.vnode=f},ce=(u,f,g,v,m,_,I)=>{const E=()=>{if(u.isMounted){let{next:T,bu:O,u:L,parent:V,vnode:G}=u;{const Fe=za(u);if(Fe){T&&(T.el=G.el,Z(u,T,I)),Fe.asyncDep.then(()=>{Ee(()=>{u.isUnmounted||y()},m)});return}}let ee=T,ie;Dt(u,!1),T?(T.el=G.el,Z(u,T,I)):T=G,O&&as(O),(ie=T.props&&T.props.onVnodeBeforeUpdate)&&He(ie,V,T,G),Dt(u,!0);const le=Ki(u),Be=u.subTree;u.subTree=le,C(Be,le,d(Be.el),es(Be),u,m,_),T.el=le.el,ee===null&&Du(u,le.el),L&&Ee(L,m),(ie=T.props&&T.props.onVnodeUpdated)&&Ee(()=>He(ie,V,T,G),m)}else{let T;const{el:O,props:L}=f,{bm:V,m:G,parent:ee,root:ie,type:le}=u,Be=An(f);Dt(u,!1),V&&as(V),!Be&&(T=L&&L.onVnodeBeforeMount)&&He(T,ee,f),Dt(u,!0);{ie.ce&&ie.ce._hasShadowRoot()&&ie.ce._injectChildStyle(le,u.parent?u.parent.type:void 0);const Fe=u.subTree=Ki(u);C(null,Fe,g,v,u,m,_),f.el=Fe.el}if(G&&Ee(G,m),!Be&&(T=L&&L.onVnodeMounted)){const Fe=f;Ee(()=>He(T,ee,Fe),m)}(f.shapeFlag&256||ee&&An(ee.vnode)&&ee.vnode.shapeFlag&256)&&u.a&&Ee(u.a,m),u.isMounted=!0,f=g=v=null}};u.scope.on();const b=u.effect=new ia(E);u.scope.off();const y=u.update=b.run.bind(b),P=u.job=b.runIfDirty.bind(b);P.i=u,P.id=u.uid,b.scheduler=()=>ai(P),Dt(u,!0),y()},Z=(u,f,g)=>{f.component=u;const v=u.vnode.props;u.vnode=f,u.next=null,Mu(u,f.props,v,g),$u(u,f.children,g),lt(),Fi(u),ut()},K=(u,f,g,v,m,_,I,E,b=!1)=>{const y=u&&u.children,P=u?u.shapeFlag:0,T=f.children,{patchFlag:O,shapeFlag:L}=f;if(O>0){if(O&128){Zn(y,T,g,v,m,_,I,E,b);return}else if(O&256){Pt(y,T,g,v,m,_,I,E,b);return}}L&8?(P&16&&hn(y,m,_),T!==y&&h(g,T)):P&16?L&16?Zn(y,T,g,v,m,_,I,E,b):hn(y,m,_,!0):(P&8&&h(g,""),L&16&&$(T,g,v,m,_,I,E,b))},Pt=(u,f,g,v,m,_,I,E,b)=>{u=u||Gt,f=f||Gt;const y=u.length,P=f.length,T=Math.min(y,P);let O;for(O=0;O<T;O++){const L=f[O]=b?tt(f[O]):We(f[O]);C(u[O],L,g,null,m,_,I,E,b)}y>P?hn(u,m,_,!0,!1,T):$(f,g,v,m,_,I,E,b,T)},Zn=(u,f,g,v,m,_,I,E,b)=>{let y=0;const P=f.length;let T=u.length-1,O=P-1;for(;y<=T&&y<=O;){const L=u[y],V=f[y]=b?tt(f[y]):We(f[y]);if(gn(L,V))C(L,V,g,null,m,_,I,E,b);else break;y++}for(;y<=T&&y<=O;){const L=u[T],V=f[O]=b?tt(f[O]):We(f[O]);if(gn(L,V))C(L,V,g,null,m,_,I,E,b);else break;T--,O--}if(y>T){if(y<=O){const L=O+1,V=L<P?f[L].el:v;for(;y<=O;)C(null,f[y]=b?tt(f[y]):We(f[y]),g,V,m,_,I,E,b),y++}}else if(y>O)for(;y<=T;)Ue(u[y],m,_,!0),y++;else{const L=y,V=y,G=new Map;for(y=V;y<=O;y++){const Te=f[y]=b?tt(f[y]):We(f[y]);Te.key!=null&&G.set(Te.key,y)}let ee,ie=0;const le=O-V+1;let Be=!1,Fe=0;const dn=new Array(le);for(y=0;y<le;y++)dn[y]=0;for(y=L;y<=T;y++){const Te=u[y];if(ie>=le){Ue(Te,m,_,!0);continue}let $e;if(Te.key!=null)$e=G.get(Te.key);else for(ee=V;ee<=O;ee++)if(dn[ee-V]===0&&gn(Te,f[ee])){$e=ee;break}$e===void 0?Ue(Te,m,_,!0):(dn[$e-V]=y+1,$e>=Fe?Fe=$e:Be=!0,C(Te,f[$e],g,null,m,_,I,E,b),ie++)}const Ni=Be?Wu(dn):Gt;for(ee=Ni.length-1,y=le-1;y>=0;y--){const Te=V+y,$e=f[Te],xi=f[Te+1],Di=Te+1<P?xi.el||Ga(xi):v;dn[y]===0?C(null,$e,g,Di,m,_,I,E,b):Be&&(ee<0||y!==Ni[ee]?Nt($e,g,Di,2):ee--)}}},Nt=(u,f,g,v,m=null)=>{const{el:_,type:I,transition:E,children:b,shapeFlag:y}=u;if(y&6){Nt(u.component.subTree,f,g,v);return}if(y&128){u.suspense.move(f,g,v);return}if(y&64){I.move(u,f,g,fn);return}if(I===he){s(_,f,g);for(let T=0;T<b.length;T++)Nt(b[T],f,g,v);s(u.anchor,f,g);return}if(I===rr){F(u,f,g);return}if(v!==2&&y&1&&E)if(v===0)E.beforeEnter(_),s(_,f,g),Ee(()=>E.enter(_),m);else{const{leave:T,delayLeave:O,afterLeave:L}=E,V=()=>{u.ctx.isUnmounted?r(_):s(_,f,g)},G=()=>{_._isLeaving&&_[au](!0),T(_,()=>{V(),L&&L()})};O?O(_,V,G):G()}else s(_,f,g)},Ue=(u,f,g,v=!1,m=!1)=>{const{type:_,props:I,ref:E,children:b,dynamicChildren:y,shapeFlag:P,patchFlag:T,dirs:O,cacheIndex:L,memo:V}=u;if(T===-2&&(m=!1),E!=null&&(lt(),Cn(E,null,g,u,!0),ut()),L!=null&&(f.renderCache[L]=void 0),P&256){f.ctx.deactivate(u);return}const G=P&1&&O,ee=!An(u);let ie;if(ee&&(ie=I&&I.onVnodeBeforeUnmount)&&He(ie,f,u),P&6)ul(u.component,g,v);else{if(P&128){u.suspense.unmount(g,v);return}G&&xt(u,null,f,"beforeUnmount"),P&64?u.type.remove(u,f,g,fn,v):y&&!y.hasOnce&&(_!==he||T>0&&T&64)?hn(y,f,g,!1,!0):(_===he&&T&384||!m&&P&16)&&hn(b,f,g),v&&ki(u)}const le=V!=null&&L==null;(ee&&(ie=I&&I.onVnodeUnmounted)||G||le)&&Ee(()=>{ie&&He(ie,f,u),G&&xt(u,null,f,"unmounted"),le&&(u.el=null)},g)},ki=u=>{const{type:f,el:g,anchor:v,transition:m}=u;if(f===he){ll(g,v);return}if(f===rr){k(u);return}const _=()=>{r(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(u.shapeFlag&1&&m&&!m.persisted){const{leave:I,delayLeave:E}=m,b=()=>I(g,_);E?E(u.el,_,b):b()}else _()},ll=(u,f)=>{let g;for(;u!==f;)g=p(u),r(u),u=g;r(f)},ul=(u,f,g)=>{const{bum:v,scope:m,job:_,subTree:I,um:E,m:b,a:y}=u;Ji(b),Ji(y),v&&as(v),m.stop(),_&&(_.flags|=8,Ue(I,u,f,g)),E&&Ee(E,f),Ee(()=>{u.isUnmounted=!0},f)},hn=(u,f,g,v=!1,m=!1,_=0)=>{for(let I=_;I<u.length;I++)Ue(u[I],f,g,v,m)},es=u=>{if(u.shapeFlag&6)return es(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const f=p(u.anchor||u.el),g=f&&f[iu];return g?p(g):f};let Js=!1;const Pi=(u,f,g)=>{let v;u==null?f._vnode&&(Ue(f._vnode,null,null,!0),v=f._vnode.component):C(f._vnode||null,u,f,null,null,null,g),f._vnode=u,Js||(Js=!0,Fi(v),Ta(),Js=!1)},fn={p:C,um:Ue,m:Nt,r:ki,mt:_t,mc:$,pc:K,pbc:se,n:es,o:t};return{render:Pi,hydrate:void 0,createApp:Au(Pi)}}function sr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Dt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ju(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ka(t,e,n=!1){const s=t.children,r=e.children;if(M(s)&&M(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=tt(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Ka(o,a)),a.type===Hs&&(a.patchFlag===-1&&(a=r[i]=tt(a)),a.el=o.el),a.type===At&&!a.el&&(a.el=o.el)}}function Wu(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function za(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:za(e)}function Ji(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Ga(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Ga(e.subTree):null}const Ja=t=>t.__isSuspense;function qu(t,e){e&&e.pendingBranch?M(t)?e.effects.push(...t):e.effects.push(t):Zl(t)}const he=Symbol.for("v-fgt"),Hs=Symbol.for("v-txt"),At=Symbol.for("v-cmt"),rr=Symbol.for("v-stc"),On=[];let Se=null;function j(t=!1){On.push(Se=t?null:[])}function Ku(){On.pop(),Se=On[On.length-1]||null}let Un=1;function Yi(t,e=!1){Un+=t,t<0&&Se&&e&&(Se.hasOnce=!0)}function Ya(t){return t.dynamicChildren=Un>0?Se||Gt:null,Ku(),Un>0&&Se&&Se.push(t),t}function J(t,e,n,s,r,i){return Ya(x(t,e,n,s,r,i,!0))}function Or(t,e,n,s,r){return Ya(at(t,e,n,s,r,!0))}function Xa(t){return t?t.__v_isVNode===!0:!1}function gn(t,e){return t.type===e.type&&t.key===e.key}const Qa=({key:t})=>t??null,ls=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?re(t)||de(t)||U(t)?{i:Re,r:t,k:e,f:!!n}:t:null);function x(t,e=null,n=null,s=0,r=null,i=t===he?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qa(e),ref:e&&ls(e),scopeId:Ca,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Re};return a?(hi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=re(n)?8:16),Un>0&&!o&&Se&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Se.push(c),c}const at=zu;function zu(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===vu)&&(t=At),Xa(t)){const a=rn(t,e,!0);return n&&hi(a,n),Un>0&&!i&&Se&&(a.shapeFlag&6?Se[Se.indexOf(t)]=a:Se.push(a)),a.patchFlag=-2,a}if(rh(t)&&(t=t.__vccOpts),e){e=Gu(e);let{class:a,style:c}=e;a&&!re(a)&&(e.class=It(a)),z(c)&&(oi(c)&&!M(c)&&(c=pe({},c)),e.style=Qr(c))}const o=re(t)?1:Ja(t)?128:ou(t)?64:z(t)?4:U(t)?2:0;return x(t,e,n,s,r,o,i,!0)}function Gu(t){return t?oi(t)||$a(t)?pe({},t):t:null}function rn(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?Ju(r||{},e):r,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Qa(l),ref:e&&e.ref?n&&i?M(i)?i.concat(ls(e)):[i,ls(e)]:ls(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==he?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&rn(t.ssContent),ssFallback:t.ssFallback&&rn(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&ci(h,c.clone(h)),h}function kn(t=" ",e=0){return at(Hs,null,t,e)}function ir(t="",e=!1){return e?(j(),Or(At,null,t)):at(At,null,t)}function We(t){return t==null||typeof t=="boolean"?at(At):M(t)?at(he,null,t.slice()):Xa(t)?tt(t):at(Hs,null,String(t))}function tt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:rn(t)}function hi(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(M(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),hi(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!$a(e)?e._ctx=Re:r===3&&Re&&(Re.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else U(e)?(e={default:e,_ctx:Re},n=32):(e=String(e),s&64?(n=16,e=[kn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ju(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=It([e.class,s.class]));else if(r==="style")e.style=Qr([e.style,s.style]);else if(Ns(r)){const i=e[r],o=s[r];o&&i!==o&&!(M(i)&&i.includes(o))?e[r]=i?[].concat(i,o):o:o==null&&i==null&&!xs(r)&&(e[r]=o)}else r!==""&&(e[r]=s[r])}return e}function He(t,e,n,s=null){Ye(t,e,7,[n,s])}const Yu=La();let Xu=0;function Qu(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Yu,i={uid:Xu++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new El(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Va(s,r),emitsOptions:Ma(s,r),emit:null,emitted:null,propsDefaults:X,inheritAttrs:s.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ou.bind(null,i),t.ce&&t.ce(i),i}let ve=null;const Zu=()=>ve||Re;let Is,kr;{const t=Ls(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Is=e("__VUE_INSTANCE_SETTERS__",n=>ve=n),kr=e("__VUE_SSR_SETTERS__",n=>Bn=n)}const Wn=t=>{const e=ve;return Is(t),t.scope.on(),()=>{t.scope.off(),Is(e)}},Xi=()=>{ve&&ve.scope.off(),Is(null)};function Za(t){return t.vnode.shapeFlag&4}let Bn=!1;function eh(t,e=!1,n=!1){e&&kr(e);const{props:s,children:r}=t.vnode,i=Za(t);Lu(t,s,i,e),Fu(t,r,n||e);const o=i?th(t,e):void 0;return e&&kr(!1),o}function th(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,bu);const{setup:s}=n;if(s){lt();const r=t.setupContext=s.length>1?sh(t):null,i=Wn(t),o=jn(s,t,0,[t.props,r]),a=Xo(o);if(ut(),i(),(a||t.sp)&&!An(t)&&Oa(t),a){if(o.then(Xi,Xi),e)return o.then(c=>{Qi(t,c)}).catch(c=>{Us(c,t,0)});t.asyncDep=o}else Qi(t,o)}else ec(t)}function Qi(t,e,n){U(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:z(e)&&(t.setupState=ba(e)),ec(t)}function ec(t,e,n){const s=t.type;t.render||(t.render=s.render||Ke);{const r=Wn(t);lt();try{wu(t)}finally{ut(),r()}}}const nh={get(t,e){return fe(t,"get",""),t[e]}};function sh(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,nh),slots:t.slots,emit:t.emit,expose:e}}function Vs(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ba(jl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Rn)return Rn[n](t)},has(e,n){return n in e||n in Rn}})):t.proxy}function rh(t){return U(t)&&"__vccOpts"in t}const tc=(t,e)=>Gl(t,e,Bn),ih="3.5.34";/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pr;const Zi=typeof window<"u"&&window.trustedTypes;if(Zi)try{Pr=Zi.createPolicy("vue",{createHTML:t=>t})}catch{}const nc=Pr?t=>Pr.createHTML(t):t=>t,oh="http://www.w3.org/2000/svg",ah="http://www.w3.org/1998/Math/MathML",et=typeof document<"u"?document:null,eo=et&&et.createElement("template"),ch={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?et.createElementNS(oh,t):e==="mathml"?et.createElementNS(ah,t):n?et.createElement(t,{is:n}):et.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>et.createTextNode(t),createComment:t=>et.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>et.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{eo.innerHTML=nc(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=eo.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},lh=Symbol("_vtc");function uh(t,e,n){const s=t[lh];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const to=Symbol("_vod"),hh=Symbol("_vsh"),fh=Symbol(""),dh=/(?:^|;)\s*display\s*:/;function ph(t,e,n){const s=t.style,r=re(n);let i=!1;if(n&&!r){if(e)if(re(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&yn(s,a,"")}else for(const o in e)n[o]==null&&yn(s,o,"");for(const o in n){o==="display"&&(i=!0);const a=n[o];a!=null?mh(t,o,!re(e)&&e?e[o]:void 0,a)||yn(s,o,a):yn(s,o,"")}}else if(r){if(e!==n){const o=s[fh];o&&(n+=";"+o),s.cssText=n,i=dh.test(n)}}else e&&t.removeAttribute("style");to in t&&(t[to]=i?s.display:"",t[hh]&&(s.display="none"))}const no=/\s*!important$/;function yn(t,e,n){if(M(n))n.forEach(s=>yn(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=gh(t,e);no.test(n)?t.setProperty(Wt(s),n.replace(no,""),"important"):t[s]=n}}const so=["Webkit","Moz","ms"],or={};function gh(t,e){const n=or[e];if(n)return n;let s=xe(e);if(s!=="filter"&&s in t)return or[e]=s;s=ea(s);for(let r=0;r<so.length;r++){const i=so[r]+s;if(i in t)return or[e]=i}return e}function mh(t,e,n,s){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&re(s)&&n===s}const ro="http://www.w3.org/1999/xlink";function io(t,e,n,s,r,i=bl(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ro,e.slice(6,e.length)):t.setAttributeNS(ro,e,n):n==null||i&&!na(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Je(n)?String(n):n)}function oo(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?nc(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=na(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function Ut(t,e,n,s){t.addEventListener(e,n,s)}function _h(t,e,n,s){t.removeEventListener(e,n,s)}const ao=Symbol("_vei");function yh(t,e,n,s,r=null){const i=t[ao]||(t[ao]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=vh(e);if(s){const l=i[e]=Eh(s,r);Ut(t,a,l,c)}else o&&(_h(t,a,o,c),i[e]=void 0)}}const co=/(?:Once|Passive|Capture)$/;function vh(t){let e;if(co.test(t)){e={};let s;for(;s=t.match(co);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Wt(t.slice(2)),e]}let ar=0;const bh=Promise.resolve(),wh=()=>ar||(bh.then(()=>ar=0),ar=Date.now());function Eh(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ye(Ih(s,n.value),e,5,[s])};return n.value=t,n.attached=wh(),n}function Ih(t,e){if(M(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const lo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Th=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?uh(t,s,o):e==="style"?ph(t,n,s):Ns(e)?xs(e)||yh(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Sh(t,e,s,o))?(oo(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&io(t,e,s,o,i,e!=="value")):t._isVueCE&&(Ch(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!re(s)))?oo(t,xe(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),io(t,e,s,o))};function Sh(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&lo(e)&&U(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return lo(e)&&re(n)?!1:e in t}function Ch(t,e){const n=t._def.props;if(!n)return!1;const s=xe(e);return Array.isArray(n)?n.some(r=>xe(r)===s):Object.keys(n).some(r=>xe(r)===s)}const Ts=t=>{const e=t.props["onUpdate:modelValue"]||!1;return M(e)?n=>as(e,n):e};function Ah(t){t.target.composing=!0}function uo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Qt=Symbol("_assign");function ho(t,e,n){return e&&(t=t.trim()),n&&(t=Xr(t)),t}const vn={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[Qt]=Ts(r);const i=s||r.props&&r.props.type==="number";Ut(t,e?"change":"input",o=>{o.target.composing||t[Qt](ho(t.value,n,i))}),(n||i)&&Ut(t,"change",()=>{t.value=ho(t.value,n,i)}),e||(Ut(t,"compositionstart",Ah),Ut(t,"compositionend",uo),Ut(t,"change",uo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[Qt]=Ts(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Xr(t.value):t.value,c=e??"";if(a===c)return;const l=t.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===c)||(t.value=c)}},Rh={created(t,{value:e},n){t.checked=xn(e,n.props.value),t[Qt]=Ts(n),Ut(t,"change",()=>{t[Qt](Oh(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t[Qt]=Ts(s),e!==n&&(t.checked=xn(e,s.props.value))}};function Oh(t){return"_value"in t?t._value:t.value}const kh=["ctrl","shift","alt","meta"],Ph={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>kh.some(n=>t[`${n}Key`]&&!e.includes(n))},Nr=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=((r,...i)=>{for(let o=0;o<e.length;o++){const a=Ph[e[o]];if(a&&a(r,e))return}return t(r,...i)}))},Nh=pe({patchProp:Th},ch);let fo;function xh(){return fo||(fo=Hu(Nh))}const Dh=((...t)=>{const e=xh().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Mh(s);if(!r)return;const i=e._component;!U(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Lh(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function Lh(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Mh(t){return re(t)?document.querySelector(t):t}const Uh=()=>{};var po={};/**
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
 */const sc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Bh=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},rc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,w=l&63;c||(w=64,o||(p=64)),s.push(n[h],n[d],n[p],n[w])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Bh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||d==null)throw new Fh;const p=i<<2|a>>4;if(s.push(p),l!==64){const w=a<<4&240|l>>2;if(s.push(w),d!==64){const D=l<<6&192|d;s.push(D)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Fh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $h=function(t){const e=sc(t);return rc.encodeByteArray(e,!0)},ic=function(t){return $h(t).replace(/\./g,"")},oc=function(t){try{return rc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Hh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Vh=()=>Hh().__FIREBASE_DEFAULTS__,jh=()=>{if(typeof process>"u"||typeof po>"u")return;const t=po.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Wh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&oc(t[1]);return e&&JSON.parse(e)},fi=()=>{try{return Uh()||Vh()||jh()||Wh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qh=t=>{var e,n;return(n=(e=fi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ac=()=>{var t;return(t=fi())===null||t===void 0?void 0:t.config},cc=t=>{var e;return(e=fi())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Kh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function js(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function zh(t){return(await fetch(t,{credentials:"include"})).ok}const Pn={};function Gh(){const t={prod:[],emulator:[]};for(const e of Object.keys(Pn))Pn[e]?t.emulator.push(e):t.prod.push(e);return t}function Jh(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let go=!1;function Yh(t,e){if(typeof window>"u"||typeof document>"u"||!js(window.location.host)||Pn[t]===e||Pn[t]||go)return;Pn[t]=e;function n(p){return`__firebase__banner__${p}`}const s="__firebase__banner",i=Gh().prod.length>0;function o(){const p=document.getElementById(s);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function c(p,w){p.setAttribute("width","24"),p.setAttribute("id",w),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function l(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{go=!0,o()},p}function h(p,w){p.setAttribute("id",w),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function d(){const p=Jh(s),w=n("text"),D=document.getElementById(w)||document.createElement("span"),C=n("learnmore"),A=document.getElementById(C)||document.createElement("a"),B=n("preprendIcon"),S=document.getElementById(B)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const F=p.element;a(F),h(A,C);const k=l();c(S,B),F.append(S,D,A,k),document.body.appendChild(F)}i?(D.innerText="Preview backend disconnected.",S.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(S.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function Qh(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Zh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ef(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tf(){const t=be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nf(){try{return typeof indexedDB=="object"}catch{return!1}}function sf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const rf="FirebaseError";class Rt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=rf,Object.setPrototypeOf(this,Rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qn.prototype.create)}}class qn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?of(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Rt(r,a,s)}}function of(t,e){return t.replace(af,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const af=/\{\$([^}]+)}/g;function cf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function on(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(mo(i)&&mo(o)){if(!on(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function mo(t){return t!==null&&typeof t=="object"}/**
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
 */function Kn(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function bn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function wn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function lf(t,e){const n=new uf(t,e);return n.subscribe.bind(n)}class uf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");hf(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=cr),r.error===void 0&&(r.error=cr),r.complete===void 0&&(r.complete=cr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function cr(){}/**
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
 */function Qe(t){return t&&t._delegate?t._delegate:t}class an{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Mt="[DEFAULT]";/**
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
 */class ff{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Kh;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pf(e))try{this.getOrInitializeService({instanceIdentifier:Mt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Mt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mt){return this.instances.has(e)}getOptions(e=Mt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:df(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Mt){return this.component?this.component.multipleInstances?e:Mt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function df(t){return t===Mt?void 0:t}function pf(t){return t.instantiationMode==="EAGER"}/**
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
 */class gf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ff(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const mf={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},_f=Y.INFO,yf={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},vf=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=yf[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lc{constructor(e){this.name=e,this._logLevel=_f,this._logHandler=vf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const bf=(t,e)=>e.some(n=>t instanceof n);let _o,yo;function wf(){return _o||(_o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ef(){return yo||(yo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uc=new WeakMap,xr=new WeakMap,hc=new WeakMap,lr=new WeakMap,di=new WeakMap;function If(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Tt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&uc.set(n,t)}).catch(()=>{}),di.set(e,t),e}function Tf(t){if(xr.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});xr.set(t,e)}let Dr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Sf(t){Dr=t(Dr)}function Cf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ur(this),e,...n);return hc.set(s,e.sort?e.sort():[e]),Tt(s)}:Ef().includes(t)?function(...e){return t.apply(ur(this),e),Tt(uc.get(this))}:function(...e){return Tt(t.apply(ur(this),e))}}function Af(t){return typeof t=="function"?Cf(t):(t instanceof IDBTransaction&&Tf(t),bf(t,wf())?new Proxy(t,Dr):t)}function Tt(t){if(t instanceof IDBRequest)return If(t);if(lr.has(t))return lr.get(t);const e=Af(t);return e!==t&&(lr.set(t,e),di.set(e,t)),e}const ur=t=>di.get(t);function Rf(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Tt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Tt(o.result),c.oldVersion,c.newVersion,Tt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Of=["get","getKey","getAll","getAllKeys","count"],kf=["put","add","delete","clear"],hr=new Map;function vo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hr.get(e))return hr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=kf.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Of.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return hr.set(e,i),i}Sf(t=>({...t,get:(e,n,s)=>vo(e,n)||t.get(e,n,s),has:(e,n)=>!!vo(e,n)||t.has(e,n)}));/**
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
 */class Pf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Nf(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Nf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lr="@firebase/app",bo="0.13.2";/**
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
 */const ft=new lc("@firebase/app"),xf="@firebase/app-compat",Df="@firebase/analytics-compat",Lf="@firebase/analytics",Mf="@firebase/app-check-compat",Uf="@firebase/app-check",Bf="@firebase/auth",Ff="@firebase/auth-compat",$f="@firebase/database",Hf="@firebase/data-connect",Vf="@firebase/database-compat",jf="@firebase/functions",Wf="@firebase/functions-compat",qf="@firebase/installations",Kf="@firebase/installations-compat",zf="@firebase/messaging",Gf="@firebase/messaging-compat",Jf="@firebase/performance",Yf="@firebase/performance-compat",Xf="@firebase/remote-config",Qf="@firebase/remote-config-compat",Zf="@firebase/storage",ed="@firebase/storage-compat",td="@firebase/firestore",nd="@firebase/ai",sd="@firebase/firestore-compat",rd="firebase",id="11.10.0";/**
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
 */const Mr="[DEFAULT]",od={[Lr]:"fire-core",[xf]:"fire-core-compat",[Lf]:"fire-analytics",[Df]:"fire-analytics-compat",[Uf]:"fire-app-check",[Mf]:"fire-app-check-compat",[Bf]:"fire-auth",[Ff]:"fire-auth-compat",[$f]:"fire-rtdb",[Hf]:"fire-data-connect",[Vf]:"fire-rtdb-compat",[jf]:"fire-fn",[Wf]:"fire-fn-compat",[qf]:"fire-iid",[Kf]:"fire-iid-compat",[zf]:"fire-fcm",[Gf]:"fire-fcm-compat",[Jf]:"fire-perf",[Yf]:"fire-perf-compat",[Xf]:"fire-rc",[Qf]:"fire-rc-compat",[Zf]:"fire-gcs",[ed]:"fire-gcs-compat",[td]:"fire-fst",[sd]:"fire-fst-compat",[nd]:"fire-vertex","fire-js":"fire-js",[rd]:"fire-js-all"};/**
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
 */const Ss=new Map,ad=new Map,Ur=new Map;function wo(t,e){try{t.container.addComponent(e)}catch(n){ft.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fn(t){const e=t.name;if(Ur.has(e))return ft.debug(`There were multiple attempts to register component ${e}.`),!1;Ur.set(e,t);for(const n of Ss.values())wo(n,t);for(const n of ad.values())wo(n,t);return!0}function fc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ae(t){return t==null?!1:t.settings!==void 0}/**
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
 */const cd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},St=new qn("app","Firebase",cd);/**
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
 */class ld{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new an("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}}/**
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
 */const zn=id;function dc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Mr,automaticDataCollectionEnabled:!0},e),r=s.name;if(typeof r!="string"||!r)throw St.create("bad-app-name",{appName:String(r)});if(n||(n=ac()),!n)throw St.create("no-options");const i=Ss.get(r);if(i){if(on(n,i.options)&&on(s,i.config))return i;throw St.create("duplicate-app",{appName:r})}const o=new gf(r);for(const c of Ur.values())o.addComponent(c);const a=new ld(n,s,o);return Ss.set(r,a),a}function ud(t=Mr){const e=Ss.get(t);if(!e&&t===Mr&&ac())return dc();if(!e)throw St.create("no-app",{appName:t});return e}function Zt(t,e,n){var s;let r=(s=od[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ft.warn(a.join(" "));return}Fn(new an(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const hd="firebase-heartbeat-database",fd=1,$n="firebase-heartbeat-store";let fr=null;function pc(){return fr||(fr=Rf(hd,fd,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($n)}catch(n){console.warn(n)}}}}).catch(t=>{throw St.create("idb-open",{originalErrorMessage:t.message})})),fr}async function dd(t){try{const n=(await pc()).transaction($n),s=await n.objectStore($n).get(gc(t));return await n.done,s}catch(e){if(e instanceof Rt)ft.warn(e.message);else{const n=St.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ft.warn(n.message)}}}async function Eo(t,e){try{const s=(await pc()).transaction($n,"readwrite");await s.objectStore($n).put(e,gc(t)),await s.done}catch(n){if(n instanceof Rt)ft.warn(n.message);else{const s=St.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ft.warn(s.message)}}}function gc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const pd=1024,gd=30;class md{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yd(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Io();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>gd){const o=vd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ft.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Io(),{heartbeatsToSend:s,unsentEntries:r}=_d(this._heartbeatsCache.heartbeats),i=ic(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ft.warn(n),""}}}function Io(){return new Date().toISOString().substring(0,10)}function _d(t,e=pd){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),To(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),To(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class yd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nf()?sf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await dd(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Eo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Eo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function To(t){return ic(JSON.stringify({version:2,heartbeats:t})).length}function vd(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function bd(t){Fn(new an("platform-logger",e=>new Pf(e),"PRIVATE")),Fn(new an("heartbeat",e=>new md(e),"PRIVATE")),Zt(Lr,bo,t),Zt(Lr,bo,"esm2017"),Zt("fire-js","")}bd("");function pi(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function mc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wd=mc,_c=new qn("auth","Firebase",mc());/**
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
 */const Cs=new lc("@firebase/auth");function Ed(t,...e){Cs.logLevel<=Y.WARN&&Cs.warn(`Auth (${zn}): ${t}`,...e)}function us(t,...e){Cs.logLevel<=Y.ERROR&&Cs.error(`Auth (${zn}): ${t}`,...e)}/**
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
 */function ke(t,...e){throw mi(t,...e)}function Le(t,...e){return mi(t,...e)}function gi(t,e,n){const s=Object.assign(Object.assign({},wd()),{[e]:n});return new qn("auth","Firebase",s).create(e,{appName:t.name})}function ct(t){return gi(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Id(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&ke(t,"argument-error"),gi(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function mi(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return _c.create(t,...e)}function N(t,e,...n){if(!t)throw mi(e,...n)}function it(t){const e="INTERNAL ASSERTION FAILED: "+t;throw us(e),new Error(e)}function dt(t,e){t||it(e)}/**
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
 */function Br(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Td(){return So()==="http:"||So()==="https:"}function So(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Sd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Td()||Zh()||"connection"in navigator)?navigator.onLine:!0}function Cd(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Gn{constructor(e,n){this.shortDelay=e,this.longDelay=n,dt(n>e,"Short delay should be less than long delay!"),this.isMobile=Xh()||ef()}get(){return Sd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _i(t,e){dt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class yc{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;it("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;it("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;it("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Rd=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Od=new Gn(3e4,6e4);function Ot(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gt(t,e,n,s,r={}){return vc(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Kn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:c},i);return Qh()||(l.referrerPolicy="no-referrer"),t.emulatorConfig&&js(t.emulatorConfig.host)&&(l.credentials="include"),yc.fetch()(await bc(t,t.config.apiHost,n,a),l)})}async function vc(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Ad),e);try{const r=new Pd(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw rs(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw rs(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw rs(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw rs(t,"user-disabled",o);const h=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw gi(t,h,l);ke(t,h)}}catch(r){if(r instanceof Rt)throw r;ke(t,"network-request-failed",{message:String(r)})}}async function Jn(t,e,n,s,r={}){const i=await gt(t,e,n,s,r);return"mfaPendingCredential"in i&&ke(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function bc(t,e,n,s){const r=`${e}${n}?${s}`,i=t,o=i.config.emulator?_i(t.config,r):`${t.config.apiScheme}://${r}`;return Rd.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function kd(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Pd{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Le(this.auth,"network-request-failed")),Od.get())})}}function rs(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Le(t,e,s);return r.customData._tokenResponse=n,r}function Co(t){return t!==void 0&&t.enterprise!==void 0}class Nd{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return kd(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function xd(t,e){return gt(t,"GET","/v2/recaptchaConfig",Ot(t,e))}/**
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
 */async function Dd(t,e){return gt(t,"POST","/v1/accounts:delete",e)}async function As(t,e){return gt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Nn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ld(t,e=!1){const n=Qe(t),s=await n.getIdToken(e),r=yi(s);N(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Nn(dr(r.auth_time)),issuedAtTime:Nn(dr(r.iat)),expirationTime:Nn(dr(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function dr(t){return Number(t)*1e3}function yi(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return us("JWT malformed, contained fewer than 3 sections"),null;try{const r=oc(n);return r?JSON.parse(r):(us("Failed to decode base64 JWT payload"),null)}catch(r){return us("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Ao(t){const e=yi(t);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function cn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Rt&&Md(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Md({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Fr{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Nn(this.lastLoginAt),this.creationTime=Nn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Rs(t){var e;const n=t.auth,s=await t.getIdToken(),r=await cn(t,As(n,{idToken:s}));N(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?wc(i.providerUserInfo):[],a=Fd(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Fr(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function Bd(t){const e=Qe(t);await Rs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Fd(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function wc(t){return t.map(e=>{var{providerId:n}=e,s=pi(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function $d(t,e){const n=await vc(t,{},async()=>{const s=Kn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=await bc(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:s};return t.emulatorConfig&&js(t.emulatorConfig.host)&&(c.credentials="include"),yc.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Hd(t,e){return gt(t,"POST","/v2/accounts:revokeToken",Ot(t,e))}/**
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
 */class en{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ao(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){N(e.length!==0,"internal-error");const n=Ao(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(N(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await $d(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new en;return s&&(N(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(N(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(N(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new en,this.toJSON())}_performRefresh(){return it("not implemented")}}/**
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
 */function yt(t,e){N(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ne{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=pi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ud(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Fr(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await cn(this,this.stsTokenManager.getToken(this.auth,e));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ld(this,e)}reload(){return Bd(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ne(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Rs(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ae(this.auth.app))return Promise.reject(ct(this.auth));const e=await this.getIdToken();return await cn(this,Dd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,h;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,w=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,D=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,B=(l=n.createdAt)!==null&&l!==void 0?l:void 0,S=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:F,emailVerified:k,isAnonymous:ne,providerData:we,stsTokenManager:ge}=n;N(F&&ge,e,"internal-error");const $=en.fromJSON(this.name,ge);N(typeof F=="string",e,"internal-error"),yt(d,e.name),yt(p,e.name),N(typeof k=="boolean",e,"internal-error"),N(typeof ne=="boolean",e,"internal-error"),yt(w,e.name),yt(D,e.name),yt(C,e.name),yt(A,e.name),yt(B,e.name),yt(S,e.name);const R=new Ne({uid:F,auth:e,email:p,emailVerified:k,displayName:d,isAnonymous:ne,photoURL:D,phoneNumber:w,tenantId:C,stsTokenManager:$,createdAt:B,lastLoginAt:S});return we&&Array.isArray(we)&&(R.providerData=we.map(se=>Object.assign({},se))),A&&(R._redirectEventId=A),R}static async _fromIdTokenResponse(e,n,s=!1){const r=new en;r.updateFromServerResponse(n);const i=new Ne({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Rs(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];N(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?wc(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new en;a.updateFromIdToken(s);const c=new Ne({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Fr(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
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
 */const Ro=new Map;function ot(t){dt(t instanceof Function,"Expected a class definition");let e=Ro.get(t);return e?(dt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ro.set(t,e),e)}/**
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
 */class Ec{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ec.type="NONE";const Oo=Ec;/**
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
 */function hs(t,e,n){return`firebase:${t}:${e}:${n}`}class tn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=hs(this.userKey,r.apiKey,i),this.fullPersistenceKey=hs("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await As(this.auth,{idToken:e}).catch(()=>{});return n?Ne._fromGetAccountInfoResponse(this.auth,n,e):null}return Ne._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new tn(ot(Oo),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||ot(Oo);const o=hs(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const h=await l._get(o);if(h){let d;if(typeof h=="string"){const p=await As(e,{idToken:h}).catch(()=>{});if(!p)break;d=await Ne._fromGetAccountInfoResponse(e,p,h)}else d=Ne._fromJSON(e,h);l!==i&&(a=d),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new tn(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new tn(i,e,s))}}/**
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
 */function ko(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Cc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ic(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Rc(e))return"Blackberry";if(Oc(e))return"Webos";if(Tc(e))return"Safari";if((e.includes("chrome/")||Sc(e))&&!e.includes("edge/"))return"Chrome";if(Ac(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ic(t=be()){return/firefox\//i.test(t)}function Tc(t=be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sc(t=be()){return/crios\//i.test(t)}function Cc(t=be()){return/iemobile/i.test(t)}function Ac(t=be()){return/android/i.test(t)}function Rc(t=be()){return/blackberry/i.test(t)}function Oc(t=be()){return/webos/i.test(t)}function vi(t=be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Vd(t=be()){var e;return vi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jd(){return tf()&&document.documentMode===10}function kc(t=be()){return vi(t)||Ac(t)||Oc(t)||Rc(t)||/windows phone/i.test(t)||Cc(t)}/**
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
 */function Pc(t,e=[]){let n;switch(t){case"Browser":n=ko(be());break;case"Worker":n=`${ko(be())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zn}/${s}`}/**
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
 */async function qd(t,e={}){return gt(t,"GET","/v2/passwordPolicy",Ot(t,e))}/**
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
 */class Gd{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Po(this),this.idTokenSubscription=new Po(this),this.beforeStateQueue=new Wd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_c,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ot(n)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await tn.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await As(this,{idToken:e}),s=await Ne._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ae(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Rs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Cd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ae(this.app))return Promise.reject(ct(this));const n=e?Qe(e):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ae(this.app)?Promise.reject(ct(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ae(this.app)?Promise.reject(ct(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ot(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qd(this),n=new zd(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new qn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Hd(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ot(e)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await tn.create(this,[ot(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(N(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;if(Ae(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Ed(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function kt(t){return Qe(t)}class Po{constructor(e){this.auth=e,this.observer=null,this.addObserver=lf(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ws={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Jd(t){Ws=t}function Nc(t){return Ws.loadJS(t)}function Yd(){return Ws.recaptchaEnterpriseScript}function Xd(){return Ws.gapiScript}function Qd(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Zd{constructor(){this.enterprise=new ep}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ep{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const tp="recaptcha-enterprise",xc="NO_RECAPTCHA";class np{constructor(e){this.type=tp,this.auth=kt(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{xd(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Nd(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;Co(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(xc)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Zd().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&Co(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Yd();c.length!==0&&(c+=a),Nc(c).then(()=>{r(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function No(t,e,n,s=!1,r=!1){const i=new np(t);let o;if(r)o=xc;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function $r(t,e,n,s,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await No(t,e,n,n==="getOobCode");return s(t,o)}else return s(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await No(t,e,n,n==="getOobCode");return s(t,a)}else return Promise.reject(o)})}/**
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
 */function sp(t,e){const n=fc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(on(i,e??{}))return r;ke(r,"already-initialized")}return n.initialize({options:e})}function rp(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ot);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function ip(t,e,n){const s=kt(t);N(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Dc(e),{host:o,port:a}=op(e),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},h=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){N(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),N(on(l,s.config.emulator)&&on(h,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=l,s.emulatorConfig=h,s.settings.appVerificationDisabledForTesting=!0,js(o)?(zh(`${i}//${o}${c}`),Yh("Auth",!0)):ap()}function Dc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function op(t){const e=Dc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:xo(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:xo(o)}}}function xo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ap(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class bi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return it("not implemented")}_getIdTokenResponse(e){return it("not implemented")}_linkToIdToken(e,n){return it("not implemented")}_getReauthenticationResolver(e){return it("not implemented")}}async function cp(t,e){return gt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function lp(t,e){return Jn(t,"POST","/v1/accounts:signInWithPassword",Ot(t,e))}/**
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
 */async function up(t,e){return Jn(t,"POST","/v1/accounts:signInWithEmailLink",Ot(t,e))}async function hp(t,e){return Jn(t,"POST","/v1/accounts:signInWithEmailLink",Ot(t,e))}/**
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
 */class Hn extends bi{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Hn(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Hn(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $r(e,n,"signInWithPassword",lp);case"emailLink":return up(e,{email:this._email,oobCode:this._password});default:ke(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $r(e,s,"signUpPassword",cp);case"emailLink":return hp(e,{idToken:n,email:this._email,oobCode:this._password});default:ke(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function nn(t,e){return Jn(t,"POST","/v1/accounts:signInWithIdp",Ot(t,e))}/**
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
 */const fp="http://localhost";class Vt extends bi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ke("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=pi(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Vt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return nn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,nn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,nn(e,n)}buildRequest(){const e={requestUri:fp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Kn(n)}return e}}/**
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
 */function dp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pp(t){const e=bn(wn(t)).link,n=e?bn(wn(e)).deep_link_id:null,s=bn(wn(t)).deep_link_id;return(s?bn(wn(s)).link:null)||s||n||e||t}class wi{constructor(e){var n,s,r,i,o,a;const c=bn(wn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,h=(s=c.oobCode)!==null&&s!==void 0?s:null,d=dp((r=c.mode)!==null&&r!==void 0?r:null);N(l&&h&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=h,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=pp(e);try{return new wi(n)}catch{return null}}}/**
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
 */class ln{constructor(){this.providerId=ln.PROVIDER_ID}static credential(e,n){return Hn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=wi.parseLink(n);return N(s,"argument-error"),Hn._fromEmailAndCode(e,s.code,s.tenantId)}}ln.PROVIDER_ID="password";ln.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ln.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Yn extends Ei{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class bt extends Yn{constructor(){super("facebook.com")}static credential(e){return Vt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch{return null}}}bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";bt.PROVIDER_ID="facebook.com";/**
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
 */class rt extends Yn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vt._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return rt.credential(n,s)}catch{return null}}}rt.GOOGLE_SIGN_IN_METHOD="google.com";rt.PROVIDER_ID="google.com";/**
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
 */class wt extends Yn{constructor(){super("github.com")}static credential(e){return Vt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.GITHUB_SIGN_IN_METHOD="github.com";wt.PROVIDER_ID="github.com";/**
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
 */class Et extends Yn{constructor(){super("twitter.com")}static credential(e,n){return Vt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Et.credential(n,s)}catch{return null}}}Et.TWITTER_SIGN_IN_METHOD="twitter.com";Et.PROVIDER_ID="twitter.com";/**
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
 */async function gp(t,e){return Jn(t,"POST","/v1/accounts:signUp",Ot(t,e))}/**
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
 */class jt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Ne._fromIdTokenResponse(e,s,r),o=Do(s);return new jt({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Do(s);return new jt({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Do(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Os extends Rt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Os.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Os(e,n,s,r)}}function Lc(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Os._fromErrorAndOperation(t,i,e,s):i})}async function mp(t,e,n=!1){const s=await cn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jt._forOperation(t,"link",s)}/**
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
 */async function _p(t,e,n=!1){const{auth:s}=t;if(Ae(s.app))return Promise.reject(ct(s));const r="reauthenticate";try{const i=await cn(t,Lc(s,r,e,t),n);N(i.idToken,s,"internal-error");const o=yi(i.idToken);N(o,s,"internal-error");const{sub:a}=o;return N(t.uid===a,s,"user-mismatch"),jt._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ke(s,"user-mismatch"),i}}/**
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
 */async function Mc(t,e,n=!1){if(Ae(t.app))return Promise.reject(ct(t));const s="signIn",r=await Lc(t,s,e),i=await jt._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function yp(t,e){return Mc(kt(t),e)}/**
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
 */async function Uc(t){const e=kt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function vp(t,e,n){if(Ae(t.app))return Promise.reject(ct(t));const s=kt(t),o=await $r(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",gp).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Uc(t),c}),a=await jt._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function bp(t,e,n){return Ae(t.app)?Promise.reject(ct(t)):yp(Qe(t),ln.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Uc(t),s})}/**
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
 */async function wp(t,e){return gt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Ep(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Qe(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await cn(s,wp(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function Ip(t,e,n,s){return Qe(t).onIdTokenChanged(e,n,s)}function Tp(t,e,n){return Qe(t).beforeAuthStateChanged(e,n)}function Sp(t,e,n,s){return Qe(t).onAuthStateChanged(e,n,s)}function Bc(t){return Qe(t).signOut()}const ks="__sak";/**
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
 */class Fc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ks,"1"),this.storage.removeItem(ks),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Cp=1e3,Ap=10;class $c extends Fc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=kc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);jd()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Ap):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Cp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$c.type="LOCAL";const Rp=$c;/**
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
 */class Hc extends Fc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Hc.type="SESSION";const Vc=Hc;/**
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
 */class qs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new qs(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Op(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qs.receivers=[];/**
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
 */class kp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ii("",20);r.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const p=d;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ze(){return window}function Pp(t){ze().location.href=t}/**
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
 */function jc(){return typeof ze().WorkerGlobalScope<"u"&&typeof ze().importScripts=="function"}async function Np(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Dp(){return jc()?self:null}/**
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
 */const Wc="firebaseLocalStorageDb",Lp=1,Ps="firebaseLocalStorage",qc="fbase_key";class Xn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ks(t,e){return t.transaction([Ps],e?"readwrite":"readonly").objectStore(Ps)}function Mp(){const t=indexedDB.deleteDatabase(Wc);return new Xn(t).toPromise()}function Hr(){const t=indexedDB.open(Wc,Lp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ps,{keyPath:qc})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ps)?e(s):(s.close(),await Mp(),e(await Hr()))})})}async function Lo(t,e,n){const s=Ks(t,!0).put({[qc]:e,value:n});return new Xn(s).toPromise()}async function Up(t,e){const n=Ks(t,!1).get(e),s=await new Xn(n).toPromise();return s===void 0?null:s.value}function Mo(t,e){const n=Ks(t,!0).delete(e);return new Xn(n).toPromise()}const Bp=800,Fp=3;class Kc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Fp)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qs._getInstance(Dp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Np(),!this.activeServiceWorker)return;this.sender=new kp(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hr();return await Lo(e,ks,"1"),await Mo(e,ks),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Lo(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Up(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Ks(r,!1).getAll();return new Xn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kc.type="LOCAL";const $p=Kc;new Gn(3e4,6e4);/**
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
 */function zc(t,e){return e?ot(e):(N(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ti extends bi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return nn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return nn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Hp(t){return Mc(t.auth,new Ti(t),t.bypassAuthState)}function Vp(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),_p(n,new Ti(t),t.bypassAuthState)}async function jp(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),mp(n,new Ti(t),t.bypassAuthState)}/**
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
 */class Gc{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hp;case"linkViaPopup":case"linkViaRedirect":return jp;case"reauthViaPopup":case"reauthViaRedirect":return Vp;default:ke(this.auth,"internal-error")}}resolve(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Wp=new Gn(2e3,1e4);async function qp(t,e,n){if(Ae(t.app))return Promise.reject(Le(t,"operation-not-supported-in-this-environment"));const s=kt(t);Id(t,e,Ei);const r=zc(s,n);return new Ft(s,"signInViaPopup",e,r).executeNotNull()}class Ft extends Gc{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Ft.currentPopupAction&&Ft.currentPopupAction.cancel(),Ft.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){dt(this.filter.length===1,"Popup operations only handle one event");const e=Ii();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Le(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Le(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ft.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Le(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Wp.get())};e()}}Ft.currentPopupAction=null;/**
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
 */const Kp="pendingRedirect",fs=new Map;class zp extends Gc{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=fs.get(this.auth._key());if(!e){try{const s=await Gp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}fs.set(this.auth._key(),e)}return this.bypassAuthState||fs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Gp(t,e){const n=Xp(e),s=Yp(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Jp(t,e){fs.set(t._key(),e)}function Yp(t){return ot(t._redirectPersistence)}function Xp(t){return hs(Kp,t.config.apiKey,t.name)}async function Qp(t,e,n=!1){if(Ae(t.app))return Promise.reject(ct(t));const s=kt(t),r=zc(s,e),o=await new zp(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Zp=600*1e3;class eg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Jc(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Le(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Zp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uo(e))}saveEventToCache(e){this.cachedEventUids.add(Uo(e)),this.lastProcessedEventTime=Date.now()}}function Uo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Jc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jc(t);default:return!1}}/**
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
 */async function ng(t,e={}){return gt(t,"GET","/v1/projects",e)}/**
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
 */const sg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rg=/^https?/;async function ig(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ng(t);for(const n of e)try{if(og(n))return}catch{}ke(t,"unauthorized-domain")}function og(t){const e=Br(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!rg.test(n))return!1;if(sg.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const ag=new Gn(3e4,6e4);function Bo(){const t=ze().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function cg(t){return new Promise((e,n)=>{var s,r,i;function o(){Bo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bo(),n(Le(t,"network-request-failed"))},timeout:ag.get()})}if(!((r=(s=ze().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=ze().gapi)===null||i===void 0)&&i.load)o();else{const a=Qd("iframefcb");return ze()[a]=()=>{gapi.load?o():n(Le(t,"network-request-failed"))},Nc(`${Xd()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ds=null,e})}let ds=null;function lg(t){return ds=ds||cg(t),ds}/**
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
 */const ug=new Gn(5e3,15e3),hg="__/auth/iframe",fg="emulator/auth/iframe",dg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gg(t){const e=t.config;N(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_i(e,fg):`https://${t.config.authDomain}/${hg}`,s={apiKey:e.apiKey,appName:t.name,v:zn},r=pg.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Kn(s).slice(1)}`}async function mg(t){const e=await lg(t),n=ze().gapi;return N(n,t,"internal-error"),e.open({where:document.body,url:gg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dg,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Le(t,"network-request-failed"),a=ze().setTimeout(()=>{i(o)},ug.get());function c(){ze().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const _g={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yg=500,vg=600,bg="_blank",wg="http://localhost";class Fo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Eg(t,e,n,s=yg,r=vg){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},_g),{width:s.toString(),height:r.toString(),top:i,left:o}),l=be().toLowerCase();n&&(a=Sc(l)?bg:n),Ic(l)&&(e=e||wg,c.scrollbars="yes");const h=Object.entries(c).reduce((p,[w,D])=>`${p}${w}=${D},`,"");if(Vd(l)&&a!=="_self")return Ig(e||"",a),new Fo(null);const d=window.open(e||"",a,h);N(d,t,"popup-blocked");try{d.focus()}catch{}return new Fo(d)}function Ig(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Tg="__/auth/handler",Sg="emulator/auth/handler",Cg=encodeURIComponent("fac");async function $o(t,e,n,s,r,i){N(t.config.authDomain,t,"auth-domain-config-required"),N(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:zn,eventId:r};if(e instanceof Ei){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Yn){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await t._getAppCheckToken(),l=c?`#${Cg}=${encodeURIComponent(c)}`:"";return`${Ag(t)}?${Kn(a).slice(1)}${l}`}function Ag({config:t}){return t.emulator?_i(t,Sg):`https://${t.authDomain}/${Tg}`}/**
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
 */const pr="webStorageSupport";class Rg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vc,this._completeRedirectFn=Qp,this._overrideRedirectResult=Jp}async _openPopup(e,n,s,r){var i;dt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await $o(e,n,s,Br(),r);return Eg(e,o,Ii())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await $o(e,n,s,Br(),r);return Pp(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(dt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await mg(e),s=new eg(e);return n.register("authEvent",r=>(N(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(pr,{type:pr},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[pr];o!==void 0&&n(!!o),ke(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ig(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return kc()||Tc()||vi()}}const Og=Rg;var Ho="@firebase/auth",Vo="1.10.8";/**
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
 */function Pg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ng(t){Fn(new an("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;N(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pc(t)},l=new Gd(s,r,i,c);return rp(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Fn(new an("auth-internal",e=>{const n=kt(e.getProvider("auth").getImmediate());return(s=>new kg(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(Ho,Vo,Pg(t)),Zt(Ho,Vo,"esm2017")}/**
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
 */const xg=300,Dg=cc("authIdTokenMaxAge")||xg;let jo=null;const Lg=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Dg)return;const r=n==null?void 0:n.token;jo!==r&&(jo=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Mg(t=ud()){const e=fc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=sp(t,{popupRedirectResolver:Og,persistence:[$p,Rp,Vc]}),s=cc("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=Lg(i.toString());Tp(n,o,()=>o(n.currentUser)),Ip(n,a=>o(a))}}const r=qh("auth");return r&&ip(n,`http://${r}`),n}function Ug(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Jd({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Le("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Ug().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ng("Browser");var Bg="firebase",Fg="11.10.0";/**
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
 */Zt(Bg,Fg,"app");const $g={apiKey:"AIzaSyBoshUYnXUquyfJZf9QYSBt9tzcPYmAXoY",authDomain:"whatsapp-clone-91fcb.firebaseapp.com",projectId:"whatsapp-clone-91fcb",storageBucket:"whatsapp-clone-91fcb.firebasestorage.app",messagingSenderId:"290539573480",appId:"1:290539573480:web:eea8271909b0b9dc42795d"},Hg=dc($g),Bt=Mg(Hg),Vg=new rt,Xe=Object.create(null);Xe.open="0";Xe.close="1";Xe.ping="2";Xe.pong="3";Xe.message="4";Xe.upgrade="5";Xe.noop="6";const ps=Object.create(null);Object.keys(Xe).forEach(t=>{ps[Xe[t]]=t});const Vr={type:"error",data:"parser error"},Yc=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Xc=typeof ArrayBuffer=="function",Qc=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,Si=({type:t,data:e},n,s)=>Yc&&e instanceof Blob?n?s(e):Wo(e,s):Xc&&(e instanceof ArrayBuffer||Qc(e))?n?s(e):Wo(new Blob([e]),s):s(Xe[t]+(e||"")),Wo=(t,e)=>{const n=new FileReader;return n.onload=function(){const s=n.result.split(",")[1];e("b"+(s||""))},n.readAsDataURL(t)};function qo(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let gr;function jg(t,e){if(Yc&&t.data instanceof Blob)return t.data.arrayBuffer().then(qo).then(e);if(Xc&&(t.data instanceof ArrayBuffer||Qc(t.data)))return e(qo(t.data));Si(t,!1,n=>{gr||(gr=new TextEncoder),e(gr.encode(n))})}const Ko="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",En=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<Ko.length;t++)En[Ko.charCodeAt(t)]=t;const Wg=t=>{let e=t.length*.75,n=t.length,s,r=0,i,o,a,c;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const l=new ArrayBuffer(e),h=new Uint8Array(l);for(s=0;s<n;s+=4)i=En[t.charCodeAt(s)],o=En[t.charCodeAt(s+1)],a=En[t.charCodeAt(s+2)],c=En[t.charCodeAt(s+3)],h[r++]=i<<2|o>>4,h[r++]=(o&15)<<4|a>>2,h[r++]=(a&3)<<6|c&63;return l},qg=typeof ArrayBuffer=="function",Ci=(t,e)=>{if(typeof t!="string")return{type:"message",data:Zc(t,e)};const n=t.charAt(0);return n==="b"?{type:"message",data:Kg(t.substring(1),e)}:ps[n]?t.length>1?{type:ps[n],data:t.substring(1)}:{type:ps[n]}:Vr},Kg=(t,e)=>{if(qg){const n=Wg(t);return Zc(n,e)}else return{base64:!0,data:t}},Zc=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},el="",zg=(t,e)=>{const n=t.length,s=new Array(n);let r=0;t.forEach((i,o)=>{Si(i,!1,a=>{s[o]=a,++r===n&&e(s.join(el))})})},Gg=(t,e)=>{const n=t.split(el),s=[];for(let r=0;r<n.length;r++){const i=Ci(n[r],e);if(s.push(i),i.type==="error")break}return s};function Jg(){return new TransformStream({transform(t,e){jg(t,n=>{const s=n.length;let r;if(s<126)r=new Uint8Array(1),new DataView(r.buffer).setUint8(0,s);else if(s<65536){r=new Uint8Array(3);const i=new DataView(r.buffer);i.setUint8(0,126),i.setUint16(1,s)}else{r=new Uint8Array(9);const i=new DataView(r.buffer);i.setUint8(0,127),i.setBigUint64(1,BigInt(s))}t.data&&typeof t.data!="string"&&(r[0]|=128),e.enqueue(r),e.enqueue(n)})}})}let mr;function is(t){return t.reduce((e,n)=>e+n.length,0)}function os(t,e){if(t[0].length===e)return t.shift();const n=new Uint8Array(e);let s=0;for(let r=0;r<e;r++)n[r]=t[0][s++],s===t[0].length&&(t.shift(),s=0);return t.length&&s<t[0].length&&(t[0]=t[0].slice(s)),n}function Yg(t,e){mr||(mr=new TextDecoder);const n=[];let s=0,r=-1,i=!1;return new TransformStream({transform(o,a){for(n.push(o);;){if(s===0){if(is(n)<1)break;const c=os(n,1);i=(c[0]&128)===128,r=c[0]&127,r<126?s=3:r===126?s=1:s=2}else if(s===1){if(is(n)<2)break;const c=os(n,2);r=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),s=3}else if(s===2){if(is(n)<8)break;const c=os(n,8),l=new DataView(c.buffer,c.byteOffset,c.length),h=l.getUint32(0);if(h>Math.pow(2,21)-1){a.enqueue(Vr);break}r=h*Math.pow(2,32)+l.getUint32(4),s=3}else{if(is(n)<r)break;const c=os(n,r);a.enqueue(Ci(i?c:mr.decode(c),e)),s=0}if(r===0||r>t){a.enqueue(Vr);break}}}})}const tl=4;function oe(t){if(t)return Xg(t)}function Xg(t){for(var e in oe.prototype)t[e]=oe.prototype[e];return t}oe.prototype.on=oe.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};oe.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this};oe.prototype.off=oe.prototype.removeListener=oe.prototype.removeAllListeners=oe.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var s,r=0;r<n.length;r++)if(s=n[r],s===e||s.fn===e){n.splice(r,1);break}return n.length===0&&delete this._callbacks["$"+t],this};oe.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],s=1;s<arguments.length;s++)e[s-1]=arguments[s];if(n){n=n.slice(0);for(var s=0,r=n.length;s<r;++s)n[s].apply(this,e)}return this};oe.prototype.emitReserved=oe.prototype.emit;oe.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};oe.prototype.hasListeners=function(t){return!!this.listeners(t).length};const zs=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,n)=>n(e,0),Ce=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),Qg="arraybuffer";function nl(t,...e){return e.reduce((n,s)=>(t.hasOwnProperty(s)&&(n[s]=t[s]),n),{})}const Zg=Ce.setTimeout,em=Ce.clearTimeout;function Gs(t,e){e.useNativeTimers?(t.setTimeoutFn=Zg.bind(Ce),t.clearTimeoutFn=em.bind(Ce)):(t.setTimeoutFn=Ce.setTimeout.bind(Ce),t.clearTimeoutFn=Ce.clearTimeout.bind(Ce))}const tm=1.33;function nm(t){return typeof t=="string"?sm(t):Math.ceil((t.byteLength||t.size)*tm)}function sm(t){let e=0,n=0;for(let s=0,r=t.length;s<r;s++)e=t.charCodeAt(s),e<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(s++,n+=4);return n}function sl(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function rm(t){let e="";for(let n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}function im(t){let e={},n=t.split("&");for(let s=0,r=n.length;s<r;s++){let i=n[s].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}class om extends Error{constructor(e,n,s){super(e),this.description=n,this.context=s,this.type="TransportError"}}class Ai extends oe{constructor(e){super(),this.writable=!1,Gs(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,n,s){return super.emitReserved("error",new om(e,n,s)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const n=Ci(e,this.socket.binaryType);this.onPacket(n)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,n={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const n=rm(e);return n.length?"?"+n:""}}class am extends Ai{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const n=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let s=0;this._polling&&(s++,this.once("pollComplete",function(){--s||n()})),this.writable||(s++,this.once("drain",function(){--s||n()}))}else n()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const n=s=>{if(this.readyState==="opening"&&s.type==="open"&&this.onOpen(),s.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(s)};Gg(e,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,zg(e,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=sl()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(e,n)}}let rl=!1;try{rl=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const cm=rl;function lm(){}class um extends am{constructor(e){if(super(e),typeof location<"u"){const n=location.protocol==="https:";let s=location.port;s||(s=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||s!==e.port}}doWrite(e,n){const s=this.request({method:"POST",data:e});s.on("success",n),s.on("error",(r,i)=>{this.onError("xhr post error",r,i)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(n,s)=>{this.onError("xhr poll error",n,s)}),this.pollXhr=e}}class Ge extends oe{constructor(e,n,s){super(),this.createRequest=e,Gs(this,s),this._opts=s,this._method=s.method||"GET",this._uri=n,this._data=s.data!==void 0?s.data:null,this._create()}_create(){var e;const n=nl(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this._opts.xd;const s=this._xhr=this.createRequest(n);try{s.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){s.setDisableHeaderCheck&&s.setDisableHeaderCheck(!0);for(let r in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(r)&&s.setRequestHeader(r,this._opts.extraHeaders[r])}}catch{}if(this._method==="POST")try{s.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{s.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(s),"withCredentials"in s&&(s.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(s.timeout=this._opts.requestTimeout),s.onreadystatechange=()=>{var r;s.readyState===3&&((r=this._opts.cookieJar)===null||r===void 0||r.parseCookies(s.getResponseHeader("set-cookie"))),s.readyState===4&&(s.status===200||s.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof s.status=="number"?s.status:0)},0))},s.send(this._data)}catch(r){this.setTimeoutFn(()=>{this._onError(r)},0);return}typeof document<"u"&&(this._index=Ge.requestsCount++,Ge.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=lm,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Ge.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Ge.requestsCount=0;Ge.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",zo);else if(typeof addEventListener=="function"){const t="onpagehide"in Ce?"pagehide":"unload";addEventListener(t,zo,!1)}}function zo(){for(let t in Ge.requests)Ge.requests.hasOwnProperty(t)&&Ge.requests[t].abort()}const hm=(function(){const t=il({xdomain:!1});return t&&t.responseType!==null})();class fm extends um{constructor(e){super(e);const n=e&&e.forceBase64;this.supportsBinary=hm&&!n}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new Ge(il,this.uri(),e)}}function il(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||cm))return new XMLHttpRequest}catch{}if(!e)try{return new Ce[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const ol=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class dm extends Ai{get name(){return"websocket"}doOpen(){const e=this.uri(),n=this.opts.protocols,s=ol?{}:nl(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(s.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,n,s)}catch(r){return this.emitReserved("error",r)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const s=e[n],r=n===e.length-1;Si(s,this.supportsBinary,i=>{try{this.doWrite(s,i)}catch{}r&&zs(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=sl()),this.supportsBinary||(n.b64=1),this.createUri(e,n)}}const _r=Ce.WebSocket||Ce.MozWebSocket;class pm extends dm{createSocket(e,n,s){return ol?new _r(e,n,s):n?new _r(e,n):new _r(e)}doWrite(e,n){this.ws.send(n)}}class gm extends Ai{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const n=Yg(Number.MAX_SAFE_INTEGER,this.socket.binaryType),s=e.readable.pipeThrough(n).getReader(),r=Jg();r.readable.pipeTo(e.writable),this._writer=r.writable.getWriter();const i=()=>{s.read().then(({done:a,value:c})=>{a||(this.onPacket(c),i())}).catch(a=>{})};i();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const s=e[n],r=n===e.length-1;this._writer.write(s).then(()=>{r&&zs(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const mm={websocket:pm,webtransport:gm,polling:fm},_m=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,ym=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function jr(t){if(t.length>8e3)throw"URI too long";const e=t,n=t.indexOf("["),s=t.indexOf("]");n!=-1&&s!=-1&&(t=t.substring(0,n)+t.substring(n,s).replace(/:/g,";")+t.substring(s,t.length));let r=_m.exec(t||""),i={},o=14;for(;o--;)i[ym[o]]=r[o]||"";return n!=-1&&s!=-1&&(i.source=e,i.host=i.host.substring(1,i.host.length-1).replace(/;/g,":"),i.authority=i.authority.replace("[","").replace("]","").replace(/;/g,":"),i.ipv6uri=!0),i.pathNames=vm(i,i.path),i.queryKey=bm(i,i.query),i}function vm(t,e){const n=/\/{2,9}/g,s=e.replace(n,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&s.splice(0,1),e.slice(-1)=="/"&&s.splice(s.length-1,1),s}function bm(t,e){const n={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(s,r,i){r&&(n[r]=i)}),n}const Wr=typeof addEventListener=="function"&&typeof removeEventListener=="function",gs=[];Wr&&addEventListener("offline",()=>{gs.forEach(t=>t())},!1);class Ct extends oe{constructor(e,n){if(super(),this.binaryType=Qg,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(n=e,e=null),e){const s=jr(e);n.hostname=s.host,n.secure=s.protocol==="https"||s.protocol==="wss",n.port=s.port,s.query&&(n.query=s.query)}else n.host&&(n.hostname=jr(n.host).host);Gs(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},n.transports.forEach(s=>{const r=s.prototype.name;this.transports.push(r),this._transportsByName[r]=s}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=im(this.opts.query)),Wr&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},gs.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const n=Object.assign({},this.opts.query);n.EIO=tl,n.transport=e,this.id&&(n.sid=this.id);const s=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](s)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&Ct.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const n=this.createTransport(e);n.open(),this.setTransport(n)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",n=>this._onClose("transport close",n))}onOpen(){this.readyState="open",Ct.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const n=new Error("server error");n.code=e.data,this._onError(n);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let s=0;s<this.writeBuffer.length;s++){const r=this.writeBuffer[s].data;if(r&&(n+=nm(r)),s>0&&n>this._maxPayload)return this.writeBuffer.slice(0,s);n+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,zs(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,n,s){return this._sendPacket("message",e,n,s),this}send(e,n,s){return this._sendPacket("message",e,n,s),this}_sendPacket(e,n,s,r){if(typeof n=="function"&&(r=n,n=void 0),typeof s=="function"&&(r=s,s=null),this.readyState==="closing"||this.readyState==="closed")return;s=s||{},s.compress=s.compress!==!1;const i={type:e,data:n,options:s};this.emitReserved("packetCreate",i),this.writeBuffer.push(i),r&&this.once("flush",r),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),e()},s=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?s():e()}):this.upgrading?s():e()),this}_onError(e){if(Ct.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Wr&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const s=gs.indexOf(this._offlineEventListener);s!==-1&&gs.splice(s,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,n),this.writeBuffer=[],this._prevBufferLen=0}}}Ct.protocol=tl;class wm extends Ct{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let n=this.createTransport(e),s=!1;Ct.priorWebsocketSuccess=!1;const r=()=>{s||(n.send([{type:"ping",data:"probe"}]),n.once("packet",d=>{if(!s)if(d.type==="pong"&&d.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;Ct.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{s||this.readyState!=="closed"&&(h(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const p=new Error("probe error");p.transport=n.name,this.emitReserved("upgradeError",p)}}))};function i(){s||(s=!0,h(),n.close(),n=null)}const o=d=>{const p=new Error("probe error: "+d);p.transport=n.name,i(),this.emitReserved("upgradeError",p)};function a(){o("transport closed")}function c(){o("socket closed")}function l(d){n&&d.name!==n.name&&i()}const h=()=>{n.removeListener("open",r),n.removeListener("error",o),n.removeListener("close",a),this.off("close",c),this.off("upgrading",l)};n.once("open",r),n.once("error",o),n.once("close",a),this.once("close",c),this.once("upgrading",l),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{s||n.open()},200):n.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const n=[];for(let s=0;s<e.length;s++)~this.transports.indexOf(e[s])&&n.push(e[s]);return n}}let Em=class extends wm{constructor(e,n={}){const s=typeof e=="object"?e:n;(!s.transports||s.transports&&typeof s.transports[0]=="string")&&(s.transports=(s.transports||["polling","websocket","webtransport"]).map(r=>mm[r]).filter(r=>!!r)),super(e,s)}};function Im(t,e="",n){let s=t;n=n||typeof location<"u"&&location,t==null&&(t=n.protocol+"//"+n.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=n.protocol+t:t=n.host+t),/^(https?|wss?):\/\//.test(t)||(typeof n<"u"?t=n.protocol+"//"+t:t="https://"+t),s=jr(t)),s.port||(/^(http|ws)$/.test(s.protocol)?s.port="80":/^(http|ws)s$/.test(s.protocol)&&(s.port="443")),s.path=s.path||"/";const i=s.host.indexOf(":")!==-1?"["+s.host+"]":s.host;return s.id=s.protocol+"://"+i+":"+s.port+e,s.href=s.protocol+"://"+i+(n&&n.port===s.port?"":":"+s.port),s}const Tm=typeof ArrayBuffer=="function",Sm=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,al=Object.prototype.toString,Cm=typeof Blob=="function"||typeof Blob<"u"&&al.call(Blob)==="[object BlobConstructor]",Am=typeof File=="function"||typeof File<"u"&&al.call(File)==="[object FileConstructor]";function Ri(t){return Tm&&(t instanceof ArrayBuffer||Sm(t))||Cm&&t instanceof Blob||Am&&t instanceof File}function ms(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let n=0,s=t.length;n<s;n++)if(ms(t[n]))return!0;return!1}if(Ri(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return ms(t.toJSON(),!0);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&ms(t[n]))return!0;return!1}function Rm(t){const e=[],n=t.data,s=t;return s.data=qr(n,e),s.attachments=e.length,{packet:s,buffers:e}}function qr(t,e){if(!t)return t;if(Ri(t)){const n={_placeholder:!0,num:e.length};return e.push(t),n}else if(Array.isArray(t)){const n=new Array(t.length);for(let s=0;s<t.length;s++)n[s]=qr(t[s],e);return n}else if(typeof t=="object"&&!(t instanceof Date)){const n={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=qr(t[s],e));return n}return t}function Om(t,e){return t.data=Kr(t.data,e),delete t.attachments,t}function Kr(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let n=0;n<t.length;n++)t[n]=Kr(t[n],e);else if(typeof t=="object")for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=Kr(t[n],e));return t}const km=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var H;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(H||(H={}));class Pm{constructor(e){this.replacer=e}encode(e){return(e.type===H.EVENT||e.type===H.ACK)&&ms(e)?this.encodeAsBinary({type:e.type===H.EVENT?H.BINARY_EVENT:H.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let n=""+e.type;return(e.type===H.BINARY_EVENT||e.type===H.BINARY_ACK)&&(n+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(n+=e.nsp+","),e.id!=null&&(n+=e.id),e.data!=null&&(n+=JSON.stringify(e.data,this.replacer)),n}encodeAsBinary(e){const n=Rm(e),s=this.encodeAsString(n.packet),r=n.buffers;return r.unshift(s),r}}class Oi extends oe{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let n;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(e);const s=n.type===H.BINARY_EVENT;s||n.type===H.BINARY_ACK?(n.type=s?H.EVENT:H.ACK,this.reconstructor=new Nm(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(Ri(e)||e.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(e),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let n=0;const s={type:Number(e.charAt(0))};if(H[s.type]===void 0)throw new Error("unknown packet type "+s.type);if(s.type===H.BINARY_EVENT||s.type===H.BINARY_ACK){const i=n+1;for(;e.charAt(++n)!=="-"&&n!=e.length;);const o=e.substring(i,n);if(o!=Number(o)||e.charAt(n)!=="-")throw new Error("Illegal attachments");const a=Number(o);if(!xm(a)||a<0)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");s.attachments=a}if(e.charAt(n+1)==="/"){const i=n+1;for(;++n&&!(e.charAt(n)===","||n===e.length););s.nsp=e.substring(i,n)}else s.nsp="/";const r=e.charAt(n+1);if(r!==""&&Number(r)==r){const i=n+1;for(;++n;){const o=e.charAt(n);if(o==null||Number(o)!=o){--n;break}if(n===e.length)break}s.id=Number(e.substring(i,n+1))}if(e.charAt(++n)){const i=this.tryParse(e.substr(n));if(Oi.isPayloadValid(s.type,i))s.data=i;else throw new Error("invalid payload")}return s}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,n){switch(e){case H.CONNECT:return Go(n);case H.DISCONNECT:return n===void 0;case H.CONNECT_ERROR:return typeof n=="string"||Go(n);case H.EVENT:case H.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&km.indexOf(n[0])===-1);case H.ACK:case H.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Nm{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const n=Om(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const xm=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function Go(t){return Object.prototype.toString.call(t)==="[object Object]"}const Dm=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Oi,Encoder:Pm,get PacketType(){return H}},Symbol.toStringTag,{value:"Module"}));function Pe(t,e,n){return t.on(e,n),function(){t.off(e,n)}}const Lm=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class cl extends oe{constructor(e,n,s){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=n,s&&s.auth&&(this.auth=s.auth),this._opts=Object.assign({},s),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Pe(e,"open",this.onopen.bind(this)),Pe(e,"packet",this.onpacket.bind(this)),Pe(e,"error",this.onerror.bind(this)),Pe(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...n){var s,r,i;if(Lm.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(n.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const o={type:H.EVENT,data:n};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const h=this.ids++,d=n.pop();this._registerAckCallback(h,d),o.id=h}const a=(r=(s=this.io.engine)===null||s===void 0?void 0:s.transport)===null||r===void 0?void 0:r.writable,c=this.connected&&!(!((i=this.io.engine)===null||i===void 0)&&i._hasPingExpired());return this.flags.volatile&&!a||(c?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,n){var s;const r=(s=this.flags.timeout)!==null&&s!==void 0?s:this._opts.ackTimeout;if(r===void 0){this.acks[e]=n;return}const i=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);n.call(this,new Error("operation has timed out"))},r),o=(...a)=>{this.io.clearTimeoutFn(i),n.apply(this,a)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...n){return new Promise((s,r)=>{const i=(o,a)=>o?r(o):s(a);i.withError=!0,n.push(i),this.emit(e,...n)})}_addToQueue(e){let n;typeof e[e.length-1]=="function"&&(n=e.pop());const s={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((r,...i)=>(this._queue[0],r!==null?s.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(r)):(this._queue.shift(),n&&n(null,...i)),s.pending=!1,this._drainQueue())),this._queue.push(s),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!e||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:H.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(s=>String(s.id)===e)){const s=this.acks[e];delete this.acks[e],s.withError&&s.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case H.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case H.EVENT:case H.BINARY_EVENT:this.onevent(e);break;case H.ACK:case H.BINARY_ACK:this.onack(e);break;case H.DISCONNECT:this.ondisconnect();break;case H.CONNECT_ERROR:this.destroy();const s=new Error(e.data.message);s.data=e.data.data,this.emitReserved("connect_error",s);break}}onevent(e){const n=e.data||[];e.id!=null&&n.push(this.ack(e.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const s of n)s.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const n=this;let s=!1;return function(...r){s||(s=!0,n.packet({type:H.ACK,id:e,data:r}))}}onack(e){const n=this.acks[e.id];typeof n=="function"&&(delete this.acks[e.id],n.withError&&e.data.unshift(null),n.apply(this,e.data))}onconnect(e,n){this.id=e,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:H.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const n=this._anyListeners;for(let s=0;s<n.length;s++)if(e===n[s])return n.splice(s,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const n=this._anyOutgoingListeners;for(let s=0;s<n.length;s++)if(e===n[s])return n.splice(s,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const s of n)s.apply(this,e.data)}}}function un(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}un.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-n:t+n}return Math.min(t,this.max)|0};un.prototype.reset=function(){this.attempts=0};un.prototype.setMin=function(t){this.ms=t};un.prototype.setMax=function(t){this.max=t};un.prototype.setJitter=function(t){this.jitter=t};class zr extends oe{constructor(e,n){var s;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(n=e,e=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,Gs(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((s=n.randomizationFactor)!==null&&s!==void 0?s:.5),this.backoff=new un({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=e;const r=n.parser||Dm;this.encoder=new r.Encoder,this.decoder=new r.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var n;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(n=this.backoff)===null||n===void 0||n.setMin(e),this)}randomizationFactor(e){var n;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(n=this.backoff)===null||n===void 0||n.setJitter(e),this)}reconnectionDelayMax(e){var n;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(n=this.backoff)===null||n===void 0||n.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Em(this.uri,this.opts);const n=this.engine,s=this;this._readyState="opening",this.skipReconnect=!1;const r=Pe(n,"open",function(){s.onopen(),e&&e()}),i=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=Pe(n,"error",i);if(this._timeout!==!1){const a=this._timeout,c=this.setTimeoutFn(()=>{r(),i(new Error("timeout")),n.close()},a);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(r),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Pe(e,"ping",this.onping.bind(this)),Pe(e,"data",this.ondata.bind(this)),Pe(e,"error",this.onerror.bind(this)),Pe(e,"close",this.onclose.bind(this)),Pe(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(n){this.onclose("parse error",n)}}ondecoded(e){zs(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,n){let s=this.nsps[e];return s?this._autoConnect&&!s.active&&s.connect():(s=new cl(this,e,n),this.nsps[e]=s),s}_destroy(e){const n=Object.keys(this.nsps);for(const s of n)if(this.nsps[s].active)return;this._close()}_packet(e){const n=this.encoder.encode(e);for(let s=0;s<n.length;s++)this.engine.write(n[s],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,n){var s;this.cleanup(),(s=this.engine)===null||s===void 0||s.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const s=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(r=>{r?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",r)):e.onreconnect()}))},n);this.opts.autoUnref&&s.unref(),this.subs.push(()=>{this.clearTimeoutFn(s)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const mn={};function _s(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const n=Im(t,e.path||"/socket.io"),s=n.source,r=n.id,i=n.path,o=mn[r]&&i in mn[r].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let c;return a?c=new zr(s,e):(mn[r]||(mn[r]=new zr(s,e)),c=mn[r]),n.query&&!e.query&&(e.query=n.queryKey),c.socket(n.path,e)}Object.assign(_s,{Manager:zr,Socket:cl,io:_s,connect:_s});const yr="https://whatsapp-clone-production-65fc.up.railway.app",Mm=_s(yr.startsWith("http")?yr:`https://${yr}`,{transports:["websocket","polling"]}),Um={id:"login-container"},Bm={key:0,id:"login-form"},Fm={class:"auth-tabs"},$m=["disabled"],Hm={key:0},Vm={key:1},jm={class:"email-mode-toggle"},Wm=["disabled"],qm={key:0},Km={key:1},zm={key:2,class:"error-msg"},Gm={class:"user-preview"},Jm=["src"],Ym={key:1,class:"avatar-placeholder"},Xm={class:"avatar-section"},Qm={class:"avatar-actions"},Zm={class:"avatars"},e_=["value"],t_={__name:"LoginView",emits:["login"],setup(t,{emit:e}){const n=e,s=ae("auth"),r=ae(null),i=ae(""),o=ae("👨‍💻"),a=["👨‍💻","👩‍💻","🤖","👻","🦊"],c=ae(null),l=tc(()=>{var $,R;return(($=o.value)==null?void 0:$.startsWith("data:"))||((R=o.value)==null?void 0:R.startsWith("http"))}),h=ae("google"),d=ae("login"),p=ae(""),w=ae(""),D=ae(""),C=ae(!1),A=ae("");async function B(){C.value=!0,A.value="";try{const{user:$}=await qp(Bt,Vg);r.value=$;const R=localStorage.getItem(`user_${$.uid}`);if(R){const se=JSON.parse(R);i.value=se.status||"",o.value=se.avatar||$.photoURL||"👨‍💻"}else o.value=$.photoURL||"👨‍💻";s.value="profile"}catch($){$.code!=="auth/popup-closed-by-user"&&(A.value="Error al iniciar sesión. Inténtalo de nuevo.")}finally{C.value=!1}}async function S(){C.value=!0,A.value="";try{if(d.value==="register"){const{user:R}=await vp(Bt,p.value,w.value);await Ep(R,{displayName:D.value.trim()}),await R.reload(),r.value=Bt.currentUser}else{const{user:R}=await bp(Bt,p.value,w.value);r.value=R}o.value=r.value.photoURL||"👨‍💻";const $=localStorage.getItem(`user_${r.value.uid}`);if($){const R=JSON.parse($);i.value=R.status||"",o.value=R.avatar||r.value.photoURL||"👨‍💻"}s.value="profile"}catch($){A.value=F($.code)}finally{C.value=!1}}function F($){return{"auth/email-already-in-use":"Este correo ya está registrado.","auth/invalid-email":"Correo electrónico no válido.","auth/weak-password":"La contraseña debe tener al menos 6 caracteres.","auth/user-not-found":"No existe una cuenta con este correo.","auth/wrong-password":"Contraseña incorrecta.","auth/invalid-credential":"Correo o contraseña incorrectos.","auth/operation-not-allowed":"El acceso con email no está habilitado en Firebase.","auth/too-many-requests":"Demasiados intentos. Espera un momento."}[$]||`Error (${$}). Inténtalo de nuevo.`}async function k(){await Bc(Bt),r.value=null,s.value="auth",p.value="",w.value="",D.value="",o.value="👨‍💻",A.value=""}function ne(){var $;($=c.value)==null||$.click()}async function we($){var Z;const R=(Z=$.target.files)==null?void 0:Z[0];if(!R)return;const se=new Image;se.src=URL.createObjectURL(R),await new Promise(K=>{se.onload=K});const Ie=80,Q=document.createElement("canvas");Q.width=Ie,Q.height=Ie;const mt=Q.getContext("2d"),_t=Math.min(se.width,se.height),Qn=(se.width-_t)/2,ce=(se.height-_t)/2;mt.drawImage(se,Qn,ce,_t,_t,0,0,Ie,Ie),URL.revokeObjectURL(se.src),o.value=Q.toDataURL("image/jpeg",.75),$.target.value=""}function ge(){n("login",{name:r.value.displayName||r.value.email,status:i.value.trim(),avatar:o.value,uid:r.value.uid})}return($,R)=>{var se,Ie;return j(),J("div",Um,[s.value==="auth"?(j(),J("div",Bm,[R[10]||(R[10]=x("h2",null,"WhatsApp Clone",-1)),R[11]||(R[11]=x("p",{class:"login-subtitle"},"Inicia sesión para continuar",-1)),x("div",Fm,[x("button",{type:"button",class:It(["tab-btn",{active:h.value==="google"}]),onClick:R[0]||(R[0]=Q=>{h.value="google",A.value=""})},"Google",2),x("button",{type:"button",class:It(["tab-btn",{active:h.value==="email"}]),onClick:R[1]||(R[1]=Q=>{h.value="email",A.value=""})},"Email",2)]),h.value==="google"?(j(),J("button",{key:0,onClick:B,disabled:C.value,class:"google-btn"},[C.value?(j(),J("span",Hm,"Cargando...")):(j(),J("span",Vm,"Iniciar sesión con Google"))],8,$m)):(j(),J(he,{key:1},[x("div",jm,[x("button",{type:"button",class:It({active:d.value==="login"}),onClick:R[2]||(R[2]=Q=>{d.value="login",A.value=""})},"Iniciar sesión",2),x("button",{type:"button",class:It({active:d.value==="register"}),onClick:R[3]||(R[3]=Q=>{d.value="register",A.value=""})},"Crear cuenta",2)]),x("form",{onSubmit:Nr(S,["prevent"])},[d.value==="register"?zt((j(),J("input",{key:0,"onUpdate:modelValue":R[4]||(R[4]=Q=>D.value=Q),type:"text",placeholder:"Tu nombre",autocomplete:"name",required:""},null,512)),[[vn,D.value]]):ir("",!0),zt(x("input",{"onUpdate:modelValue":R[5]||(R[5]=Q=>p.value=Q),type:"email",placeholder:"Correo electrónico",autocomplete:"email",required:""},null,512),[[vn,p.value]]),zt(x("input",{"onUpdate:modelValue":R[6]||(R[6]=Q=>w.value=Q),type:"password",placeholder:"Contraseña (mín. 6 caracteres)",autocomplete:"current-password",required:"",minlength:"6"},null,512),[[vn,w.value]]),x("button",{type:"submit",disabled:C.value,class:"submit-btn"},[C.value?(j(),J("span",qm,"Cargando...")):(j(),J("span",Km,_e(d.value==="register"?"Crear cuenta":"Entrar"),1))],8,Wm)],32)],64)),A.value?(j(),J("p",zm,_e(A.value),1)):ir("",!0)])):(j(),J("form",{key:1,id:"login-form",onSubmit:Nr(ge,["prevent"])},[x("div",Gm,[l.value?(j(),J("img",{key:0,src:o.value,class:"google-avatar",alt:"avatar"},null,8,Jm)):(j(),J("div",Ym,_e(o.value),1)),x("strong",null,_e(((se=r.value)==null?void 0:se.displayName)||((Ie=r.value)==null?void 0:Ie.email)),1),x("button",{type:"button",class:"change-account-btn",onClick:k},"↩ Cambiar")]),zt(x("input",{"onUpdate:modelValue":R[7]||(R[7]=Q=>i.value=Q),type:"text",placeholder:"Tu estado (ej: Disponible)",required:""},null,512),[[vn,i.value]]),x("div",Xm,[x("div",Qm,[x("input",{type:"file",ref_key:"fileInputRef",ref:c,accept:"image/*",onChange:we,style:{display:"none"}},null,544),x("button",{type:"button",class:"avatar-upload-btn",onClick:ne},"📷 Subir foto"),l.value?(j(),J("button",{key:0,type:"button",class:"avatar-clear-btn",onClick:R[8]||(R[8]=Q=>o.value="👨‍💻")},"✕ Quitar")):ir("",!0)]),R[12]||(R[12]=x("p",null,"O elige un emoji:",-1)),x("div",Zm,[(j(),J(he,null,Tr(a,Q=>x("label",{key:Q},[zt(x("input",{type:"radio",name:"avatar",value:Q,"onUpdate:modelValue":R[9]||(R[9]=mt=>o.value=mt)},null,8,e_),[[Rh,o.value]]),kn(" "+_e(Q),1)])),64))])]),R[13]||(R[13]=x("button",{type:"submit",class:"submit-btn"},"Entrar al Chat",-1))],32))])}}},n_={id:"app-container"},s_={id:"sidebar"},r_={id:"listausuarios"},i_={class:"user-list-avatar"},o_=["src"],a_={class:"user-list-info"},c_={id:"chat-container"},l_={id:"messages"},u_={class:"avatar"},h_=["src"],f_={class:"msg-content"},d_={class:"msg-header"},p_={class:"msg-text"},g_={id:"escribiendo"},m_={__name:"ChatView",props:["socket","currentUser"],emits:["logout"],setup(t,{emit:e}){const n=t,s=e;async function r(){n.socket.emit("leave"),await Bc(Bt),s("logout")}const i=ae([]),o=ae([]),a=ae(""),c=ae(""),l=new Set;let h=null;function d(){l.size===0?c.value="":l.size===1?c.value=`${Array.from(l)[0]} está escribiendo...`:c.value="Varios usuarios están escribiendo..."}function p(){Ea(()=>{window.scrollTo(0,document.body.scrollHeight)})}function w(){n.socket.emit("escribiendo",!0),clearTimeout(h),h=setTimeout(()=>{n.socket.emit("escribiendo",!1)},1500)}function D(){a.value&&n.currentUser&&(n.socket.emit("chat message",a.value),n.socket.emit("escribiendo",!1),a.value="")}function C(A){return(A==null?void 0:A.startsWith("data:"))||(A==null?void 0:A.startsWith("http"))}return Na(()=>{n.socket.emit("join",n.currentUser),n.socket.on("connect",()=>{n.socket.emit("join",n.currentUser)}),n.socket.on("cargar mensajes",A=>{i.value=A,p()}),n.socket.on("actualizar usuarios",A=>{o.value=A}),n.socket.on("usuario escribiendo",A=>{A.estado?l.add(A.user.name):l.delete(A.user.name),d()}),n.socket.on("chat message",A=>{i.value.push(A),p()})}),Fs(()=>{clearTimeout(h),n.socket.emit("escribiendo",!1);for(const A of["connect","cargar mensajes","actualizar usuarios","usuario escribiendo","chat message"])n.socket.off(A)}),(A,B)=>(j(),J("div",n_,[x("div",s_,[x("div",{class:"sidebar-header"},[B[1]||(B[1]=x("h3",null,"Usuarios Conectados",-1)),x("button",{onClick:r,class:"signout-btn"},"Salir ↩")]),x("ul",r_,[(j(!0),J(he,null,Tr(o.value,S=>(j(),J("li",{key:S.id},[x("span",i_,[C(S.avatar)?(j(),J("img",{key:0,src:S.avatar,class:"sidebar-avatar-img",alt:""},null,8,o_)):(j(),J(he,{key:1},[kn(_e(S.avatar),1)],64))]),x("div",a_,[x("strong",null,_e(S.name),1),x("span",null,_e(S.status),1)])]))),128))])]),x("div",c_,[x("ul",l_,[(j(!0),J(he,null,Tr(i.value,(S,F)=>(j(),J("li",{key:F,class:It({"system-msg":S.system,"my-message":!S.system&&t.currentUser&&S.user.name===t.currentUser.name})},[S.system?(j(),J(he,{key:0},[kn(_e(S.text),1)],64)):(j(),J(he,{key:1},[x("div",u_,[C(S.user.avatar)?(j(),J("img",{key:0,src:S.user.avatar,class:"avatar-img",alt:""},null,8,h_)):(j(),J(he,{key:1},[kn(_e(S.user.avatar),1)],64))]),x("div",f_,[x("div",d_,[x("strong",null,_e(S.user.name),1),x("span",null,_e(S.user.status),1)]),x("div",p_,_e(S.text),1)])],64))],2))),128))]),x("div",g_,_e(c.value),1),x("form",{id:"form",onSubmit:Nr(D,["prevent"])},[zt(x("input",{id:"input","onUpdate:modelValue":B[0]||(B[0]=S=>a.value=S),placeholder:"Escribe un mensaje...",onInput:w},null,544),[[vn,a.value]]),B[2]||(B[2]=x("button",{type:"submit"},"Enviar",-1))],32)])]))}},__={key:0,class:"app-loading"},y_={__name:"App",setup(t){const e=ae(null),n=ae(!0),s=Sp(Bt,o=>{if(n.value){if(o){const a=localStorage.getItem(`user_${o.uid}`);if(a)try{e.value=JSON.parse(a)}catch{e.value=null}else e.value=null}else e.value=null;n.value=!1}});Fs(s);function r(o){e.value=o,localStorage.setItem(`user_${o.uid}`,JSON.stringify(o))}function i(){var o;(o=e.value)!=null&&o.uid&&localStorage.removeItem(`user_${e.value.uid}`),e.value=null}return(o,a)=>n.value?(j(),J("div",__,"Cargando...")):e.value?(j(),Or(m_,{key:2,socket:va(Mm),"current-user":e.value,onLogout:i},null,8,["socket","current-user"])):(j(),Or(t_,{key:1,onLogin:r}))}};Dh(y_).mount("#app");
