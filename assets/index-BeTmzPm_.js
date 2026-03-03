(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function $h(i){const e=Object.create(null);for(const t of i.split(","))e[t]=1;return t=>t in e}const Lt={},Do=[],ar=()=>{},hx=()=>!1,Yc=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),Kh=i=>i.startsWith("onUpdate:"),gn=Object.assign,jh=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},dx=Object.prototype.hasOwnProperty,Mt=(i,e)=>dx.call(i,e),Je=Array.isArray,Io=i=>qc(i)==="[object Map]",s_=i=>qc(i)==="[object Set]",rt=i=>typeof i=="function",Jt=i=>typeof i=="string",ms=i=>typeof i=="symbol",kt=i=>i!==null&&typeof i=="object",o_=i=>(kt(i)||rt(i))&&rt(i.then)&&rt(i.catch),a_=Object.prototype.toString,qc=i=>a_.call(i),px=i=>qc(i).slice(8,-1),l_=i=>qc(i)==="[object Object]",Zh=i=>Jt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Ca=$h(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$c=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},mx=/-(\w)/g,cs=$c(i=>i.replace(mx,(e,t)=>t?t.toUpperCase():"")),_x=/\B([A-Z])/g,to=$c(i=>i.replace(_x,"-$1").toLowerCase()),c_=$c(i=>i.charAt(0).toUpperCase()+i.slice(1)),du=$c(i=>i?`on${c_(i)}`:""),ss=(i,e)=>!Object.is(i,e),pu=(i,...e)=>{for(let t=0;t<i.length;t++)i[t](...e)},u_=(i,e,t,n=!1)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,writable:n,value:t})},gx=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Qd;const Kc=()=>Qd||(Qd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function jc(i){if(Je(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=Jt(n)?Mx(n):jc(n);if(r)for(const s in r)e[s]=r[s]}return e}else if(Jt(i)||kt(i))return i}const xx=/;(?![^(]*\))/g,vx=/:([^]+)/,Sx=/\/\*[^]*?\*\//g;function Mx(i){const e={};return i.replace(Sx,"").split(xx).forEach(t=>{if(t){const n=t.split(vx);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Jh(i){let e="";if(Jt(i))e=i;else if(Je(i))for(let t=0;t<i.length;t++){const n=Jh(i[t]);n&&(e+=n+" ")}else if(kt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const yx="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ex=$h(yx);function f_(i){return!!i||i===""}const h_=i=>!!(i&&i.__v_isRef===!0),tr=i=>Jt(i)?i:i==null?"":Je(i)||kt(i)&&(i.toString===a_||!rt(i.toString))?h_(i)?tr(i.value):JSON.stringify(i,d_,2):String(i),d_=(i,e)=>h_(e)?d_(i,e.value):Io(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r],s)=>(t[mu(n,s)+" =>"]=r,t),{})}:s_(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>mu(t))}:ms(e)?mu(e):kt(e)&&!Je(e)&&!l_(e)?String(e):e,mu=(i,e="")=>{var t;return ms(i)?`Symbol(${(t=i.description)!=null?t:e})`:i};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ai;class bx{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ai,!e&&ai&&(this.index=(ai.scopes||(ai.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=ai;try{return ai=this,e()}finally{ai=t}}}on(){ai=this}off(){ai=this.parent}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Tx(){return ai}let It;const _u=new WeakSet;class p_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ai&&ai.active&&ai.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,_u.has(this)&&(_u.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||__(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ep(this),g_(this);const e=It,t=Gi;It=this,Gi=!0;try{return this.fn()}finally{x_(this),It=e,Gi=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)td(e);this.deps=this.depsTail=void 0,ep(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?_u.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Sf(this)&&this.run()}get dirty(){return Sf(this)}}let m_=0,Pa,Da;function __(i,e=!1){if(i.flags|=8,e){i.next=Da,Da=i;return}i.next=Pa,Pa=i}function Qh(){m_++}function ed(){if(--m_>0)return;if(Da){let e=Da;for(Da=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let i;for(;Pa;){let e=Pa;for(Pa=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(n){i||(i=n)}e=t}}if(i)throw i}function g_(i){for(let e=i.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function x_(i){let e,t=i.depsTail,n=t;for(;n;){const r=n.prevDep;n.version===-1?(n===t&&(t=r),td(n),Ax(n)):e=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=r}i.deps=e,i.depsTail=t}function Sf(i){for(let e=i.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(v_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!i._dirty}function v_(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===$a))return;i.globalVersion=$a;const e=i.dep;if(i.flags|=2,e.version>0&&!i.isSSR&&i.deps&&!Sf(i)){i.flags&=-3;return}const t=It,n=Gi;It=i,Gi=!0;try{g_(i);const r=i.fn(i._value);(e.version===0||ss(r,i._value))&&(i._value=r,e.version++)}catch(r){throw e.version++,r}finally{It=t,Gi=n,x_(i),i.flags&=-3}}function td(i,e=!1){const{dep:t,prevSub:n,nextSub:r}=i;if(n&&(n.nextSub=r,i.prevSub=void 0),r&&(r.prevSub=n,i.nextSub=void 0),t.subs===i&&(t.subs=n,!n&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)td(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Ax(i){const{prevDep:e,nextDep:t}=i;e&&(e.nextDep=t,i.prevDep=void 0),t&&(t.prevDep=e,i.nextDep=void 0)}let Gi=!0;const S_=[];function _s(){S_.push(Gi),Gi=!1}function gs(){const i=S_.pop();Gi=i===void 0?!0:i}function ep(i){const{cleanup:e}=i;if(i.cleanup=void 0,e){const t=It;It=void 0;try{e()}finally{It=t}}}let $a=0;class wx{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class nd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!It||!Gi||It===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==It)t=this.activeLink=new wx(It,this),It.deps?(t.prevDep=It.depsTail,It.depsTail.nextDep=t,It.depsTail=t):It.deps=It.depsTail=t,M_(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const n=t.nextDep;n.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=n),t.prevDep=It.depsTail,t.nextDep=void 0,It.depsTail.nextDep=t,It.depsTail=t,It.deps===t&&(It.deps=n)}return t}trigger(e){this.version++,$a++,this.notify(e)}notify(e){Qh();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ed()}}}function M_(i){if(i.dep.sc++,i.sub.flags&4){const e=i.dep.computed;if(e&&!i.dep.subs){e.flags|=20;for(let n=e.deps;n;n=n.nextDep)M_(n)}const t=i.dep.subs;t!==i&&(i.prevSub=t,t&&(t.nextSub=i)),i.dep.subs=i}}const Mf=new WeakMap,Vs=Symbol(""),yf=Symbol(""),Ka=Symbol("");function Tn(i,e,t){if(Gi&&It){let n=Mf.get(i);n||Mf.set(i,n=new Map);let r=n.get(t);r||(n.set(t,r=new nd),r.map=n,r.key=t),r.track()}}function Tr(i,e,t,n,r,s){const o=Mf.get(i);if(!o){$a++;return}const a=l=>{l&&l.trigger()};if(Qh(),e==="clear")o.forEach(a);else{const l=Je(i),c=l&&Zh(t);if(l&&t==="length"){const u=Number(n);o.forEach((h,f)=>{(f==="length"||f===Ka||!ms(f)&&f>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Ka)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Vs)),Io(i)&&a(o.get(yf)));break;case"delete":l||(a(o.get(Vs)),Io(i)&&a(o.get(yf)));break;case"set":Io(i)&&a(o.get(Vs));break}}ed()}function oo(i){const e=St(i);return e===i?e:(Tn(e,"iterate",Ka),Di(i)?e:e.map(An))}function Zc(i){return Tn(i=St(i),"iterate",Ka),i}const Rx={__proto__:null,[Symbol.iterator](){return gu(this,Symbol.iterator,An)},concat(...i){return oo(this).concat(...i.map(e=>Je(e)?oo(e):e))},entries(){return gu(this,"entries",i=>(i[1]=An(i[1]),i))},every(i,e){return _r(this,"every",i,e,void 0,arguments)},filter(i,e){return _r(this,"filter",i,e,t=>t.map(An),arguments)},find(i,e){return _r(this,"find",i,e,An,arguments)},findIndex(i,e){return _r(this,"findIndex",i,e,void 0,arguments)},findLast(i,e){return _r(this,"findLast",i,e,An,arguments)},findLastIndex(i,e){return _r(this,"findLastIndex",i,e,void 0,arguments)},forEach(i,e){return _r(this,"forEach",i,e,void 0,arguments)},includes(...i){return xu(this,"includes",i)},indexOf(...i){return xu(this,"indexOf",i)},join(i){return oo(this).join(i)},lastIndexOf(...i){return xu(this,"lastIndexOf",i)},map(i,e){return _r(this,"map",i,e,void 0,arguments)},pop(){return aa(this,"pop")},push(...i){return aa(this,"push",i)},reduce(i,...e){return tp(this,"reduce",i,e)},reduceRight(i,...e){return tp(this,"reduceRight",i,e)},shift(){return aa(this,"shift")},some(i,e){return _r(this,"some",i,e,void 0,arguments)},splice(...i){return aa(this,"splice",i)},toReversed(){return oo(this).toReversed()},toSorted(i){return oo(this).toSorted(i)},toSpliced(...i){return oo(this).toSpliced(...i)},unshift(...i){return aa(this,"unshift",i)},values(){return gu(this,"values",An)}};function gu(i,e,t){const n=Zc(i),r=n[e]();return n!==i&&!Di(i)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const Cx=Array.prototype;function _r(i,e,t,n,r,s){const o=Zc(i),a=o!==i&&!Di(i),l=o[e];if(l!==Cx[e]){const h=l.apply(i,s);return a?An(h):h}let c=t;o!==i&&(a?c=function(h,f){return t.call(this,An(h),f,i)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,i)}));const u=l.call(o,c,n);return a&&r?r(u):u}function tp(i,e,t,n){const r=Zc(i);let s=t;return r!==i&&(Di(i)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,i)}):s=function(o,a,l){return t.call(this,o,An(a),l,i)}),r[e](s,...n)}function xu(i,e,t){const n=St(i);Tn(n,"iterate",Ka);const r=n[e](...t);return(r===-1||r===!1)&&od(t[0])?(t[0]=St(t[0]),n[e](...t)):r}function aa(i,e,t=[]){_s(),Qh();const n=St(i)[e].apply(i,t);return ed(),gs(),n}const Px=$h("__proto__,__v_isRef,__isVue"),y_=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(ms));function Dx(i){ms(i)||(i=String(i));const e=St(this);return Tn(e,"has",i),e.hasOwnProperty(i)}class E_{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return n===(r?s?Vx:w_:s?A_:T_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=Je(e);if(!r){let l;if(o&&(l=Rx[t]))return l;if(t==="hasOwnProperty")return Dx}const a=Reflect.get(e,t,In(e)?e:n);return(ms(t)?y_.has(t):Px(t))||(r||Tn(e,"get",t),s)?a:In(a)?o&&Zh(t)?a:a.value:kt(a)?r?R_(a):rd(a):a}}class b_ extends E_{constructor(e=!1){super(!1,e)}set(e,t,n,r){let s=e[t];if(!this._isShallow){const l=js(s);if(!Di(n)&&!js(n)&&(s=St(s),n=St(n)),!Je(e)&&In(s)&&!In(n))return l?!1:(s.value=n,!0)}const o=Je(e)&&Zh(t)?Number(t)<e.length:Mt(e,t),a=Reflect.set(e,t,n,In(e)?e:r);return e===St(r)&&(o?ss(n,s)&&Tr(e,"set",t,n):Tr(e,"add",t,n)),a}deleteProperty(e,t){const n=Mt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Tr(e,"delete",t,void 0),r}has(e,t){const n=Reflect.has(e,t);return(!ms(t)||!y_.has(t))&&Tn(e,"has",t),n}ownKeys(e){return Tn(e,"iterate",Je(e)?"length":Vs),Reflect.ownKeys(e)}}class Ix extends E_{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Lx=new b_,Ux=new Ix,Fx=new b_(!0);const Ef=i=>i,vl=i=>Reflect.getPrototypeOf(i);function Nx(i,e,t){return function(...n){const r=this.__v_raw,s=St(r),o=Io(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?Ef:e?bf:An;return!e&&Tn(s,"iterate",l?yf:Vs),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Sl(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function Ox(i,e){const t={get(r){const s=this.__v_raw,o=St(s),a=St(r);i||(ss(r,a)&&Tn(o,"get",r),Tn(o,"get",a));const{has:l}=vl(o),c=e?Ef:i?bf:An;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!i&&Tn(St(r),"iterate",Vs),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=St(s),a=St(r);return i||(ss(r,a)&&Tn(o,"has",r),Tn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=St(a),c=e?Ef:i?bf:An;return!i&&Tn(l,"iterate",Vs),a.forEach((u,h)=>r.call(s,c(u),c(h),o))}};return gn(t,i?{add:Sl("add"),set:Sl("set"),delete:Sl("delete"),clear:Sl("clear")}:{add(r){!e&&!Di(r)&&!js(r)&&(r=St(r));const s=St(this);return vl(s).has.call(s,r)||(s.add(r),Tr(s,"add",r,r)),this},set(r,s){!e&&!Di(s)&&!js(s)&&(s=St(s));const o=St(this),{has:a,get:l}=vl(o);let c=a.call(o,r);c||(r=St(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?ss(s,u)&&Tr(o,"set",r,s):Tr(o,"add",r,s),this},delete(r){const s=St(this),{has:o,get:a}=vl(s);let l=o.call(s,r);l||(r=St(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Tr(s,"delete",r,void 0),c},clear(){const r=St(this),s=r.size!==0,o=r.clear();return s&&Tr(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Nx(r,i,e)}),t}function id(i,e){const t=Ox(i,e);return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(Mt(t,r)&&r in n?t:n,r,s)}const Bx={get:id(!1,!1)},zx={get:id(!1,!0)},kx={get:id(!0,!1)};const T_=new WeakMap,A_=new WeakMap,w_=new WeakMap,Vx=new WeakMap;function Hx(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gx(i){return i.__v_skip||!Object.isExtensible(i)?0:Hx(px(i))}function rd(i){return js(i)?i:sd(i,!1,Lx,Bx,T_)}function Wx(i){return sd(i,!1,Fx,zx,A_)}function R_(i){return sd(i,!0,Ux,kx,w_)}function sd(i,e,t,n,r){if(!kt(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=Gx(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function Lo(i){return js(i)?Lo(i.__v_raw):!!(i&&i.__v_isReactive)}function js(i){return!!(i&&i.__v_isReadonly)}function Di(i){return!!(i&&i.__v_isShallow)}function od(i){return i?!!i.__v_raw:!1}function St(i){const e=i&&i.__v_raw;return e?St(e):i}function Xx(i){return!Mt(i,"__v_skip")&&Object.isExtensible(i)&&u_(i,"__v_skip",!0),i}const An=i=>kt(i)?rd(i):i,bf=i=>kt(i)?R_(i):i;function In(i){return i?i.__v_isRef===!0:!1}function _t(i){return Yx(i,!1)}function Yx(i,e){return In(i)?i:new qx(i,e)}class qx{constructor(e,t){this.dep=new nd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:St(e),this._value=t?e:An(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this.__v_isShallow||Di(e)||js(e);e=n?e:St(e),ss(e,t)&&(this._rawValue=e,this._value=n?e:An(e),this.dep.trigger())}}function $x(i){return In(i)?i.value:i}const Kx={get:(i,e,t)=>e==="__v_raw"?i:$x(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return In(r)&&!In(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function C_(i){return Lo(i)?i:new Proxy(i,Kx)}class jx{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new nd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=$a-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&It!==this)return __(this,!0),!0}get value(){const e=this.dep.track();return v_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Zx(i,e,t=!1){let n,r;return rt(i)?n=i:(n=i.get,r=i.set),new jx(n,r,t)}const Ml={},Tc=new WeakMap;let Ps;function Jx(i,e=!1,t=Ps){if(t){let n=Tc.get(t);n||Tc.set(t,n=[]),n.push(i)}}function Qx(i,e,t=Lt){const{immediate:n,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=M=>r?M:Di(M)||r===!1||r===0?Zr(M,1):Zr(M);let u,h,f,d,_=!1,g=!1;if(In(i)?(h=()=>i.value,_=Di(i)):Lo(i)?(h=()=>c(i),_=!0):Je(i)?(g=!0,_=i.some(M=>Lo(M)||Di(M)),h=()=>i.map(M=>{if(In(M))return M.value;if(Lo(M))return c(M);if(rt(M))return l?l(M,2):M()})):rt(i)?e?h=l?()=>l(i,2):i:h=()=>{if(f){_s();try{f()}finally{gs()}}const M=Ps;Ps=u;try{return l?l(i,3,[d]):i(d)}finally{Ps=M}}:h=ar,e&&r){const M=h,T=r===!0?1/0:r;h=()=>Zr(M(),T)}const p=Tx(),m=()=>{u.stop(),p&&p.active&&jh(p.effects,u)};if(s&&e){const M=e;e=(...T)=>{M(...T),m()}}let S=g?new Array(i.length).fill(Ml):Ml;const E=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const T=u.run();if(r||_||(g?T.some((R,A)=>ss(R,S[A])):ss(T,S))){f&&f();const R=Ps;Ps=u;try{const A=[T,S===Ml?void 0:g&&S[0]===Ml?[]:S,d];l?l(e,3,A):e(...A),S=T}finally{Ps=R}}}else u.run()};return a&&a(E),u=new p_(h),u.scheduler=o?()=>o(E,!1):E,d=M=>Jx(M,!1,u),f=u.onStop=()=>{const M=Tc.get(u);if(M){if(l)l(M,4);else for(const T of M)T();Tc.delete(u)}},e?n?E(!0):S=u.run():o?o(E.bind(null,!0),!0):u.run(),m.pause=u.pause.bind(u),m.resume=u.resume.bind(u),m.stop=m,m}function Zr(i,e=1/0,t){if(e<=0||!kt(i)||i.__v_skip||(t=t||new Set,t.has(i)))return i;if(t.add(i),e--,In(i))Zr(i.value,e,t);else if(Je(i))for(let n=0;n<i.length;n++)Zr(i[n],e,t);else if(s_(i)||Io(i))i.forEach(n=>{Zr(n,e,t)});else if(l_(i)){for(const n in i)Zr(i[n],e,t);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&Zr(i[n],e,t)}return i}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function hl(i,e,t,n){try{return n?i(...n):i()}catch(r){Jc(r,e,t)}}function fr(i,e,t,n){if(rt(i)){const r=hl(i,e,t,n);return r&&o_(r)&&r.catch(s=>{Jc(s,e,t)}),r}if(Je(i)){const r=[];for(let s=0;s<i.length;s++)r.push(fr(i[s],e,t,n));return r}}function Jc(i,e,t,n=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Lt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](i,l,c)===!1)return}a=a.parent}if(s){_s(),hl(s,null,10,[i,l,c]),gs();return}}ev(i,t,r,n,o)}function ev(i,e,t,n=!0,r=!1){if(r)throw i;console.error(i)}const Vn=[];let Ki=-1;const Uo=[];let $r=null,To=0;const P_=Promise.resolve();let Ac=null;function tv(i){const e=Ac||P_;return i?e.then(this?i.bind(this):i):e}function nv(i){let e=Ki+1,t=Vn.length;for(;e<t;){const n=e+t>>>1,r=Vn[n],s=ja(r);s<i||s===i&&r.flags&2?e=n+1:t=n}return e}function ad(i){if(!(i.flags&1)){const e=ja(i),t=Vn[Vn.length-1];!t||!(i.flags&2)&&e>=ja(t)?Vn.push(i):Vn.splice(nv(e),0,i),i.flags|=1,D_()}}function D_(){Ac||(Ac=P_.then(L_))}function iv(i){Je(i)?Uo.push(...i):$r&&i.id===-1?$r.splice(To+1,0,i):i.flags&1||(Uo.push(i),i.flags|=1),D_()}function np(i,e,t=Ki+1){for(;t<Vn.length;t++){const n=Vn[t];if(n&&n.flags&2){if(i&&n.id!==i.uid)continue;Vn.splice(t,1),t--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function I_(i){if(Uo.length){const e=[...new Set(Uo)].sort((t,n)=>ja(t)-ja(n));if(Uo.length=0,$r){$r.push(...e);return}for($r=e,To=0;To<$r.length;To++){const t=$r[To];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}$r=null,To=0}}const ja=i=>i.id==null?i.flags&2?-1:1/0:i.id;function L_(i){try{for(Ki=0;Ki<Vn.length;Ki++){const e=Vn[Ki];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),hl(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ki<Vn.length;Ki++){const e=Vn[Ki];e&&(e.flags&=-2)}Ki=-1,Vn.length=0,I_(),Ac=null,(Vn.length||Uo.length)&&L_()}}let nr=null,U_=null;function wc(i){const e=nr;return nr=i,U_=i&&i.type.__scopeId||null,e}function rv(i,e=nr,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&up(-1);const s=wc(e);let o;try{o=i(...r)}finally{wc(s),n._d&&up(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Ss(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(_s(),fr(l,t,8,[i.el,a,i,e]),gs())}}const sv=Symbol("_vte"),ov=i=>i.__isTeleport;function ld(i,e){i.shapeFlag&6&&i.component?(i.transition=e,ld(i.component.subTree,e)):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function F_(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}function Rc(i,e,t,n,r=!1){if(Je(i)){i.forEach((_,g)=>Rc(_,e&&(Je(e)?e[g]:e),t,n,r));return}if(Ia(n)&&!r){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Rc(i,e,t,n.component.subTree);return}const s=n.shapeFlag&4?hd(n.component):n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===Lt?a.refs={}:a.refs,h=a.setupState,f=St(h),d=h===Lt?()=>!1:_=>Mt(f,_);if(c!=null&&c!==l&&(Jt(c)?(u[c]=null,d(c)&&(h[c]=null)):In(c)&&(c.value=null)),rt(l))hl(l,a,12,[o,u]);else{const _=Jt(l),g=In(l);if(_||g){const p=()=>{if(i.f){const m=_?d(l)?h[l]:u[l]:l.value;r?Je(m)&&jh(m,s):Je(m)?m.includes(s)||m.push(s):_?(u[l]=[s],d(l)&&(h[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else _?(u[l]=o,d(l)&&(h[l]=o)):g&&(l.value=o,i.k&&(u[i.k]=o))};o?(p.id=-1,oi(p,t)):p()}}}Kc().requestIdleCallback;Kc().cancelIdleCallback;const Ia=i=>!!i.type.__asyncLoader,N_=i=>i.type.__isKeepAlive;function av(i,e){O_(i,"a",e)}function lv(i,e){O_(i,"da",e)}function O_(i,e,t=Hn){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(Qc(e,n,t),t){let r=t.parent;for(;r&&r.parent;)N_(r.parent.vnode)&&cv(n,e,t,r),r=r.parent}}function cv(i,e,t,n){const r=Qc(e,i,n,!0);eu(()=>{jh(n[e],r)},t)}function Qc(i,e,t=Hn,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{_s();const a=dl(t),l=fr(e,t,i,o);return a(),gs(),l});return n?r.unshift(s):r.push(s),s}}const Br=i=>(e,t=Hn)=>{(!Qa||i==="sp")&&Qc(i,(...n)=>e(...n),t)},uv=Br("bm"),ia=Br("m"),fv=Br("bu"),hv=Br("u"),dv=Br("bum"),eu=Br("um"),pv=Br("sp"),mv=Br("rtg"),_v=Br("rtc");function gv(i,e=Hn){Qc("ec",i,e)}const xv=Symbol.for("v-ndc");function Hs(i,e,t,n){let r;const s=t,o=Je(i);if(o||Jt(i)){const a=o&&Lo(i);let l=!1;a&&(l=!Di(i),i=Zc(i)),r=new Array(i.length);for(let c=0,u=i.length;c<u;c++)r[c]=e(l?An(i[c]):i[c],c,void 0,s)}else if(typeof i=="number"){r=new Array(i);for(let a=0;a<i;a++)r[a]=e(a+1,a,void 0,s)}else if(kt(i))if(i[Symbol.iterator])r=Array.from(i,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(i);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(i[u],u,l,s)}}else r=[];return r}const Tf=i=>i?ig(i)?hd(i):Tf(i.parent):null,La=gn(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Tf(i.parent),$root:i=>Tf(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>cd(i),$forceUpdate:i=>i.f||(i.f=()=>{ad(i.update)}),$nextTick:i=>i.n||(i.n=tv.bind(i.proxy)),$watch:i=>kv.bind(i)}),vu=(i,e)=>i!==Lt&&!i.__isScriptSetup&&Mt(i,e),vv={get({_:i},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(vu(n,e))return o[e]=1,n[e];if(r!==Lt&&Mt(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&Mt(c,e))return o[e]=3,s[e];if(t!==Lt&&Mt(t,e))return o[e]=4,t[e];Af&&(o[e]=0)}}const u=La[e];let h,f;if(u)return e==="$attrs"&&Tn(i.attrs,"get",""),u(i);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==Lt&&Mt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,Mt(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return vu(r,e)?(r[e]=t,!0):n!==Lt&&Mt(n,e)?(n[e]=t,!0):Mt(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==Lt&&Mt(i,o)||vu(e,o)||(a=s[0])&&Mt(a,o)||Mt(n,o)||Mt(La,o)||Mt(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:Mt(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function ip(i){return Je(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let Af=!0;function Sv(i){const e=cd(i),t=i.proxy,n=i.ctx;Af=!1,e.beforeCreate&&rp(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:_,activated:g,deactivated:p,beforeDestroy:m,beforeUnmount:S,destroyed:E,unmounted:M,render:T,renderTracked:R,renderTriggered:A,errorCaptured:v,serverPrefetch:y,expose:U,inheritAttrs:D,components:B,directives:H,filters:W}=e;if(c&&Mv(c,n,null),o)for(const O in o){const ee=o[O];rt(ee)&&(n[O]=ee.bind(t))}if(r){const O=r.call(t,t);kt(O)&&(i.data=rd(O))}if(Af=!0,s)for(const O in s){const ee=s[O],se=rt(ee)?ee.bind(t,t):rt(ee.get)?ee.get.bind(t,t):ar,N=!rt(ee)&&rt(ee.set)?ee.set.bind(t):ar,_e=sg({get:se,set:N});Object.defineProperty(n,O,{enumerable:!0,configurable:!0,get:()=>_e.value,set:ge=>_e.value=ge})}if(a)for(const O in a)B_(a[O],n,t,O);if(l){const O=rt(l)?l.call(t):l;Reflect.ownKeys(O).forEach(ee=>{wv(ee,O[ee])})}u&&rp(u,i,"c");function V(O,ee){Je(ee)?ee.forEach(se=>O(se.bind(t))):ee&&O(ee.bind(t))}if(V(uv,h),V(ia,f),V(fv,d),V(hv,_),V(av,g),V(lv,p),V(gv,v),V(_v,R),V(mv,A),V(dv,S),V(eu,M),V(pv,y),Je(U))if(U.length){const O=i.exposed||(i.exposed={});U.forEach(ee=>{Object.defineProperty(O,ee,{get:()=>t[ee],set:se=>t[ee]=se})})}else i.exposed||(i.exposed={});T&&i.render===ar&&(i.render=T),D!=null&&(i.inheritAttrs=D),B&&(i.components=B),H&&(i.directives=H),y&&F_(i)}function Mv(i,e,t=ar){Je(i)&&(i=wf(i));for(const n in i){const r=i[n];let s;kt(r)?"default"in r?s=oc(r.from||n,r.default,!0):s=oc(r.from||n):s=oc(r),In(s)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[n]=s}}function rp(i,e,t){fr(Je(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function B_(i,e,t,n){let r=n.includes(".")?J_(t,n):()=>t[n];if(Jt(i)){const s=e[i];rt(s)&&Mu(r,s)}else if(rt(i))Mu(r,i.bind(t));else if(kt(i))if(Je(i))i.forEach(s=>B_(s,e,t,n));else{const s=rt(i.handler)?i.handler.bind(t):e[i.handler];rt(s)&&Mu(r,s,i)}}function cd(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>Cc(l,c,o,!0)),Cc(l,e,o)),kt(e)&&s.set(e,l),l}function Cc(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&Cc(i,s,t,!0),r&&r.forEach(o=>Cc(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=yv[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const yv={data:sp,props:op,emits:op,methods:va,computed:va,beforeCreate:Fn,created:Fn,beforeMount:Fn,mounted:Fn,beforeUpdate:Fn,updated:Fn,beforeDestroy:Fn,beforeUnmount:Fn,destroyed:Fn,unmounted:Fn,activated:Fn,deactivated:Fn,errorCaptured:Fn,serverPrefetch:Fn,components:va,directives:va,watch:bv,provide:sp,inject:Ev};function sp(i,e){return e?i?function(){return gn(rt(i)?i.call(this,this):i,rt(e)?e.call(this,this):e)}:e:i}function Ev(i,e){return va(wf(i),wf(e))}function wf(i){if(Je(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Fn(i,e){return i?[...new Set([].concat(i,e))]:e}function va(i,e){return i?gn(Object.create(null),i,e):e}function op(i,e){return i?Je(i)&&Je(e)?[...new Set([...i,...e])]:gn(Object.create(null),ip(i),ip(e??{})):e}function bv(i,e){if(!i)return e;if(!e)return i;const t=gn(Object.create(null),i);for(const n in e)t[n]=Fn(i[n],e[n]);return t}function z_(){return{app:null,config:{isNativeTag:hx,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tv=0;function Av(i,e){return function(n,r=null){rt(n)||(n=gn({},n)),r!=null&&!kt(r)&&(r=null);const s=z_(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Tv++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:lS,get config(){return s.config},set config(u){},use(u,...h){return o.has(u)||(u&&rt(u.install)?(o.add(u),u.install(c,...h)):rt(u)&&(o.add(u),u(c,...h))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,h){return h?(s.components[u]=h,c):s.components[u]},directive(u,h){return h?(s.directives[u]=h,c):s.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||Ri(n,r);return d.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),h&&e?e(d,u):i(d,u,f),l=!0,c._container=u,u.__vue_app__=c,hd(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(fr(a,c._instance,16),i(null,c._container),delete c._container.__vue_app__)},provide(u,h){return s.provides[u]=h,c},runWithContext(u){const h=Fo;Fo=c;try{return u()}finally{Fo=h}}};return c}}let Fo=null;function wv(i,e){if(Hn){let t=Hn.provides;const n=Hn.parent&&Hn.parent.provides;n===t&&(t=Hn.provides=Object.create(n)),t[i]=e}}function oc(i,e,t=!1){const n=Hn||nr;if(n||Fo){const r=Fo?Fo._context.provides:n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(r&&i in r)return r[i];if(arguments.length>1)return t&&rt(e)?e.call(n&&n.proxy):e}}const k_={},V_=()=>Object.create(k_),H_=i=>Object.getPrototypeOf(i)===k_;function Rv(i,e,t,n=!1){const r={},s=V_();i.propsDefaults=Object.create(null),G_(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:Wx(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function Cv(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=St(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(tu(i.emitsOptions,f))continue;const d=e[f];if(l)if(Mt(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const _=cs(f);r[_]=Rf(l,a,_,d,i,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{G_(i,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!Mt(e,h)&&((u=to(h))===h||!Mt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=Rf(l,a,h,void 0,i,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!Mt(e,h))&&(delete s[h],c=!0)}c&&Tr(i.attrs,"set","")}function G_(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ca(l))continue;const c=e[l];let u;r&&Mt(r,u=cs(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:tu(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=St(t),c=a||Lt;for(let u=0;u<s.length;u++){const h=s[u];t[h]=Rf(r,l,h,c[h],i,!Mt(c,h))}}return o}function Rf(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=Mt(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&rt(l)){const{propsDefaults:c}=r;if(t in c)n=c[t];else{const u=dl(r);n=c[t]=l.call(null,e),u()}}else n=l;r.ce&&r.ce._setProp(t,n)}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===to(t))&&(n=!0))}return n}const Pv=new WeakMap;function W_(i,e,t=!1){const n=t?Pv:e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!rt(i)){const u=h=>{l=!0;const[f,d]=W_(h,e,!0);gn(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return kt(i)&&n.set(i,Do),Do;if(Je(s))for(let u=0;u<s.length;u++){const h=cs(s[u]);ap(h)&&(o[h]=Lt)}else if(s)for(const u in s){const h=cs(u);if(ap(h)){const f=s[u],d=o[h]=Je(f)||rt(f)?{type:f}:gn({},f),_=d.type;let g=!1,p=!0;if(Je(_))for(let m=0;m<_.length;++m){const S=_[m],E=rt(S)&&S.name;if(E==="Boolean"){g=!0;break}else E==="String"&&(p=!1)}else g=rt(_)&&_.name==="Boolean";d[0]=g,d[1]=p,(g||Mt(d,"default"))&&a.push(h)}}const c=[o,a];return kt(i)&&n.set(i,c),c}function ap(i){return i[0]!=="$"&&!Ca(i)}const X_=i=>i[0]==="_"||i==="$stable",ud=i=>Je(i)?i.map(Ji):[Ji(i)],Dv=(i,e,t)=>{if(e._n)return e;const n=rv((...r)=>ud(e(...r)),t);return n._c=!1,n},Y_=(i,e,t)=>{const n=i._ctx;for(const r in i){if(X_(r))continue;const s=i[r];if(rt(s))e[r]=Dv(r,s,n);else if(s!=null){const o=ud(s);e[r]=()=>o}}},q_=(i,e)=>{const t=ud(e);i.slots.default=()=>t},$_=(i,e,t)=>{for(const n in e)(t||n!=="_")&&(i[n]=e[n])},Iv=(i,e,t)=>{const n=i.slots=V_();if(i.vnode.shapeFlag&32){const r=e._;r?($_(n,e,t),t&&u_(n,"_",r,!0)):Y_(e,n)}else e&&q_(i,e)},Lv=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=Lt;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:$_(r,e,t):(s=!e.$stable,Y_(e,r)),o=e}else e&&(q_(i,e),o={default:1});if(s)for(const a in r)!X_(a)&&o[a]==null&&delete r[a]},oi=qv;function Uv(i){return Fv(i)}function Fv(i,e){const t=Kc();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=ar,insertStaticContent:_}=i,g=(P,F,Y,te=null,L=null,C=null,ue=void 0,oe=null,re=!!F.dynamicChildren)=>{if(P===F)return;P&&!la(P,F)&&(te=le(P),ge(P,L,C,!0),P=null),F.patchFlag===-2&&(re=!1,F.dynamicChildren=null);const{type:$,ref:w,shapeFlag:x}=F;switch($){case nu:p(P,F,Y,te);break;case Za:m(P,F,Y,te);break;case ac:P==null&&S(F,Y,te,ue);break;case wn:B(P,F,Y,te,L,C,ue,oe,re);break;default:x&1?T(P,F,Y,te,L,C,ue,oe,re):x&6?H(P,F,Y,te,L,C,ue,oe,re):(x&64||x&128)&&$.process(P,F,Y,te,L,C,ue,oe,re,Ne)}w!=null&&L&&Rc(w,P&&P.ref,C,F||P,!F)},p=(P,F,Y,te)=>{if(P==null)n(F.el=a(F.children),Y,te);else{const L=F.el=P.el;F.children!==P.children&&c(L,F.children)}},m=(P,F,Y,te)=>{P==null?n(F.el=l(F.children||""),Y,te):F.el=P.el},S=(P,F,Y,te)=>{[P.el,P.anchor]=_(P.children,F,Y,te,P.el,P.anchor)},E=({el:P,anchor:F},Y,te)=>{let L;for(;P&&P!==F;)L=f(P),n(P,Y,te),P=L;n(F,Y,te)},M=({el:P,anchor:F})=>{let Y;for(;P&&P!==F;)Y=f(P),r(P),P=Y;r(F)},T=(P,F,Y,te,L,C,ue,oe,re)=>{F.type==="svg"?ue="svg":F.type==="math"&&(ue="mathml"),P==null?R(F,Y,te,L,C,ue,oe,re):y(P,F,L,C,ue,oe,re)},R=(P,F,Y,te,L,C,ue,oe)=>{let re,$;const{props:w,shapeFlag:x,transition:I,dirs:X}=P;if(re=P.el=o(P.type,C,w&&w.is,w),x&8?u(re,P.children):x&16&&v(P.children,re,null,te,L,Su(P,C),ue,oe),X&&Ss(P,null,te,"created"),A(re,P,P.scopeId,ue,te),w){for(const q in w)q!=="value"&&!Ca(q)&&s(re,q,null,w[q],C,te);"value"in w&&s(re,"value",null,w.value,C),($=w.onVnodeBeforeMount)&&Yi($,te,P)}X&&Ss(P,null,te,"beforeMount");const K=Nv(L,I);K&&I.beforeEnter(re),n(re,F,Y),(($=w&&w.onVnodeMounted)||K||X)&&oi(()=>{$&&Yi($,te,P),K&&I.enter(re),X&&Ss(P,null,te,"mounted")},L)},A=(P,F,Y,te,L)=>{if(Y&&d(P,Y),te)for(let C=0;C<te.length;C++)d(P,te[C]);if(L){let C=L.subTree;if(F===C||eg(C.type)&&(C.ssContent===F||C.ssFallback===F)){const ue=L.vnode;A(P,ue,ue.scopeId,ue.slotScopeIds,L.parent)}}},v=(P,F,Y,te,L,C,ue,oe,re=0)=>{for(let $=re;$<P.length;$++){const w=P[$]=oe?jr(P[$]):Ji(P[$]);g(null,w,F,Y,te,L,C,ue,oe)}},y=(P,F,Y,te,L,C,ue)=>{const oe=F.el=P.el;let{patchFlag:re,dynamicChildren:$,dirs:w}=F;re|=P.patchFlag&16;const x=P.props||Lt,I=F.props||Lt;let X;if(Y&&Ms(Y,!1),(X=I.onVnodeBeforeUpdate)&&Yi(X,Y,F,P),w&&Ss(F,P,Y,"beforeUpdate"),Y&&Ms(Y,!0),(x.innerHTML&&I.innerHTML==null||x.textContent&&I.textContent==null)&&u(oe,""),$?U(P.dynamicChildren,$,oe,Y,te,Su(F,L),C):ue||ee(P,F,oe,null,Y,te,Su(F,L),C,!1),re>0){if(re&16)D(oe,x,I,Y,L);else if(re&2&&x.class!==I.class&&s(oe,"class",null,I.class,L),re&4&&s(oe,"style",x.style,I.style,L),re&8){const K=F.dynamicProps;for(let q=0;q<K.length;q++){const fe=K[q],ce=x[fe],be=I[fe];(be!==ce||fe==="value")&&s(oe,fe,ce,be,L,Y)}}re&1&&P.children!==F.children&&u(oe,F.children)}else!ue&&$==null&&D(oe,x,I,Y,L);((X=I.onVnodeUpdated)||w)&&oi(()=>{X&&Yi(X,Y,F,P),w&&Ss(F,P,Y,"updated")},te)},U=(P,F,Y,te,L,C,ue)=>{for(let oe=0;oe<F.length;oe++){const re=P[oe],$=F[oe],w=re.el&&(re.type===wn||!la(re,$)||re.shapeFlag&70)?h(re.el):Y;g(re,$,w,null,te,L,C,ue,!0)}},D=(P,F,Y,te,L)=>{if(F!==Y){if(F!==Lt)for(const C in F)!Ca(C)&&!(C in Y)&&s(P,C,F[C],null,L,te);for(const C in Y){if(Ca(C))continue;const ue=Y[C],oe=F[C];ue!==oe&&C!=="value"&&s(P,C,oe,ue,L,te)}"value"in Y&&s(P,"value",F.value,Y.value,L)}},B=(P,F,Y,te,L,C,ue,oe,re)=>{const $=F.el=P?P.el:a(""),w=F.anchor=P?P.anchor:a("");let{patchFlag:x,dynamicChildren:I,slotScopeIds:X}=F;X&&(oe=oe?oe.concat(X):X),P==null?(n($,Y,te),n(w,Y,te),v(F.children||[],Y,w,L,C,ue,oe,re)):x>0&&x&64&&I&&P.dynamicChildren?(U(P.dynamicChildren,I,Y,L,C,ue,oe),(F.key!=null||L&&F===L.subTree)&&K_(P,F,!0)):ee(P,F,Y,w,L,C,ue,oe,re)},H=(P,F,Y,te,L,C,ue,oe,re)=>{F.slotScopeIds=oe,P==null?F.shapeFlag&512?L.ctx.activate(F,Y,te,ue,re):W(F,Y,te,L,C,ue,re):G(P,F,re)},W=(P,F,Y,te,L,C,ue)=>{const oe=P.component=nS(P,te,L);if(N_(P)&&(oe.ctx.renderer=Ne),iS(oe,!1,ue),oe.asyncDep){if(L&&L.registerDep(oe,V,ue),!P.el){const re=oe.subTree=Ri(Za);m(null,re,F,Y)}}else V(oe,P,F,Y,L,C,ue)},G=(P,F,Y)=>{const te=F.component=P.component;if(Xv(P,F,Y))if(te.asyncDep&&!te.asyncResolved){O(te,F,Y);return}else te.next=F,te.update();else F.el=P.el,te.vnode=F},V=(P,F,Y,te,L,C,ue)=>{const oe=()=>{if(P.isMounted){let{next:x,bu:I,u:X,parent:K,vnode:q}=P;{const ae=j_(P);if(ae){x&&(x.el=q.el,O(P,x,ue)),ae.asyncDep.then(()=>{P.isUnmounted||oe()});return}}let fe=x,ce;Ms(P,!1),x?(x.el=q.el,O(P,x,ue)):x=q,I&&pu(I),(ce=x.props&&x.props.onVnodeBeforeUpdate)&&Yi(ce,K,x,q),Ms(P,!0);const be=yu(P),Se=P.subTree;P.subTree=be,g(Se,be,h(Se.el),le(Se),P,L,C),x.el=be.el,fe===null&&Yv(P,be.el),X&&oi(X,L),(ce=x.props&&x.props.onVnodeUpdated)&&oi(()=>Yi(ce,K,x,q),L)}else{let x;const{el:I,props:X}=F,{bm:K,m:q,parent:fe,root:ce,type:be}=P,Se=Ia(F);if(Ms(P,!1),K&&pu(K),!Se&&(x=X&&X.onVnodeBeforeMount)&&Yi(x,fe,F),Ms(P,!0),I&&ct){const ae=()=>{P.subTree=yu(P),ct(I,P.subTree,P,L,null)};Se&&be.__asyncHydrate?be.__asyncHydrate(I,P,ae):ae()}else{ce.ce&&ce.ce._injectChildStyle(be);const ae=P.subTree=yu(P);g(null,ae,Y,te,P,L,C),F.el=ae.el}if(q&&oi(q,L),!Se&&(x=X&&X.onVnodeMounted)){const ae=F;oi(()=>Yi(x,fe,ae),L)}(F.shapeFlag&256||fe&&Ia(fe.vnode)&&fe.vnode.shapeFlag&256)&&P.a&&oi(P.a,L),P.isMounted=!0,F=Y=te=null}};P.scope.on();const re=P.effect=new p_(oe);P.scope.off();const $=P.update=re.run.bind(re),w=P.job=re.runIfDirty.bind(re);w.i=P,w.id=P.uid,re.scheduler=()=>ad(w),Ms(P,!0),$()},O=(P,F,Y)=>{F.component=P;const te=P.vnode.props;P.vnode=F,P.next=null,Cv(P,F.props,te,Y),Lv(P,F.children,Y),_s(),np(P),gs()},ee=(P,F,Y,te,L,C,ue,oe,re=!1)=>{const $=P&&P.children,w=P?P.shapeFlag:0,x=F.children,{patchFlag:I,shapeFlag:X}=F;if(I>0){if(I&128){N($,x,Y,te,L,C,ue,oe,re);return}else if(I&256){se($,x,Y,te,L,C,ue,oe,re);return}}X&8?(w&16&&ne($,L,C),x!==$&&u(Y,x)):w&16?X&16?N($,x,Y,te,L,C,ue,oe,re):ne($,L,C,!0):(w&8&&u(Y,""),X&16&&v(x,Y,te,L,C,ue,oe,re))},se=(P,F,Y,te,L,C,ue,oe,re)=>{P=P||Do,F=F||Do;const $=P.length,w=F.length,x=Math.min($,w);let I;for(I=0;I<x;I++){const X=F[I]=re?jr(F[I]):Ji(F[I]);g(P[I],X,Y,null,L,C,ue,oe,re)}$>w?ne(P,L,C,!0,!1,x):v(F,Y,te,L,C,ue,oe,re,x)},N=(P,F,Y,te,L,C,ue,oe,re)=>{let $=0;const w=F.length;let x=P.length-1,I=w-1;for(;$<=x&&$<=I;){const X=P[$],K=F[$]=re?jr(F[$]):Ji(F[$]);if(la(X,K))g(X,K,Y,null,L,C,ue,oe,re);else break;$++}for(;$<=x&&$<=I;){const X=P[x],K=F[I]=re?jr(F[I]):Ji(F[I]);if(la(X,K))g(X,K,Y,null,L,C,ue,oe,re);else break;x--,I--}if($>x){if($<=I){const X=I+1,K=X<w?F[X].el:te;for(;$<=I;)g(null,F[$]=re?jr(F[$]):Ji(F[$]),Y,K,L,C,ue,oe,re),$++}}else if($>I)for(;$<=x;)ge(P[$],L,C,!0),$++;else{const X=$,K=$,q=new Map;for($=K;$<=I;$++){const Me=F[$]=re?jr(F[$]):Ji(F[$]);Me.key!=null&&q.set(Me.key,$)}let fe,ce=0;const be=I-K+1;let Se=!1,ae=0;const de=new Array(be);for($=0;$<be;$++)de[$]=0;for($=X;$<=x;$++){const Me=P[$];if(ce>=be){ge(Me,L,C,!0);continue}let ve;if(Me.key!=null)ve=q.get(Me.key);else for(fe=K;fe<=I;fe++)if(de[fe-K]===0&&la(Me,F[fe])){ve=fe;break}ve===void 0?ge(Me,L,C,!0):(de[ve-K]=$+1,ve>=ae?ae=ve:Se=!0,g(Me,F[ve],Y,null,L,C,ue,oe,re),ce++)}const De=Se?Ov(de):Do;for(fe=De.length-1,$=be-1;$>=0;$--){const Me=K+$,ve=F[Me],Xe=Me+1<w?F[Me+1].el:te;de[$]===0?g(null,ve,Y,Xe,L,C,ue,oe,re):Se&&(fe<0||$!==De[fe]?_e(ve,Y,Xe,2):fe--)}}},_e=(P,F,Y,te,L=null)=>{const{el:C,type:ue,transition:oe,children:re,shapeFlag:$}=P;if($&6){_e(P.component.subTree,F,Y,te);return}if($&128){P.suspense.move(F,Y,te);return}if($&64){ue.move(P,F,Y,Ne);return}if(ue===wn){n(C,F,Y);for(let x=0;x<re.length;x++)_e(re[x],F,Y,te);n(P.anchor,F,Y);return}if(ue===ac){E(P,F,Y);return}if(te!==2&&$&1&&oe)if(te===0)oe.beforeEnter(C),n(C,F,Y),oi(()=>oe.enter(C),L);else{const{leave:x,delayLeave:I,afterLeave:X}=oe,K=()=>n(C,F,Y),q=()=>{x(C,()=>{K(),X&&X()})};I?I(C,K,q):q()}else n(C,F,Y)},ge=(P,F,Y,te=!1,L=!1)=>{const{type:C,props:ue,ref:oe,children:re,dynamicChildren:$,shapeFlag:w,patchFlag:x,dirs:I,cacheIndex:X}=P;if(x===-2&&(L=!1),oe!=null&&Rc(oe,null,Y,P,!0),X!=null&&(F.renderCache[X]=void 0),w&256){F.ctx.deactivate(P);return}const K=w&1&&I,q=!Ia(P);let fe;if(q&&(fe=ue&&ue.onVnodeBeforeUnmount)&&Yi(fe,F,P),w&6)Ke(P.component,Y,te);else{if(w&128){P.suspense.unmount(Y,te);return}K&&Ss(P,null,F,"beforeUnmount"),w&64?P.type.remove(P,F,Y,Ne,te):$&&!$.hasOnce&&(C!==wn||x>0&&x&64)?ne($,F,Y,!1,!0):(C===wn&&x&384||!L&&w&16)&&ne(re,F,Y),te&&He(P)}(q&&(fe=ue&&ue.onVnodeUnmounted)||K)&&oi(()=>{fe&&Yi(fe,F,P),K&&Ss(P,null,F,"unmounted")},Y)},He=P=>{const{type:F,el:Y,anchor:te,transition:L}=P;if(F===wn){Ye(Y,te);return}if(F===ac){M(P);return}const C=()=>{r(Y),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(P.shapeFlag&1&&L&&!L.persisted){const{leave:ue,delayLeave:oe}=L,re=()=>ue(Y,C);oe?oe(P.el,C,re):re()}else C()},Ye=(P,F)=>{let Y;for(;P!==F;)Y=f(P),r(P),P=Y;r(F)},Ke=(P,F,Y)=>{const{bum:te,scope:L,job:C,subTree:ue,um:oe,m:re,a:$}=P;lp(re),lp($),te&&pu(te),L.stop(),C&&(C.flags|=8,ge(ue,P,F,Y)),oe&&oi(oe,F),oi(()=>{P.isUnmounted=!0},F),F&&F.pendingBranch&&!F.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===F.pendingId&&(F.deps--,F.deps===0&&F.resolve())},ne=(P,F,Y,te=!1,L=!1,C=0)=>{for(let ue=C;ue<P.length;ue++)ge(P[ue],F,Y,te,L)},le=P=>{if(P.shapeFlag&6)return le(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const F=f(P.anchor||P.el),Y=F&&F[sv];return Y?f(Y):F};let pe=!1;const Be=(P,F,Y)=>{P==null?F._vnode&&ge(F._vnode,null,null,!0):g(F._vnode||null,P,F,null,null,null,Y),F._vnode=P,pe||(pe=!0,np(),I_(),pe=!1)},Ne={p:g,um:ge,m:_e,r:He,mt:W,mc:v,pc:ee,pbc:U,n:le,o:i};let Oe,ct;return{render:Be,hydrate:Oe,createApp:Av(Be,Oe)}}function Su({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ms({effect:i,job:e},t){t?(i.flags|=32,e.flags|=4):(i.flags&=-33,e.flags&=-5)}function Nv(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function K_(i,e,t=!1){const n=i.children,r=e.children;if(Je(n)&&Je(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=jr(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&K_(o,a)),a.type===nu&&(a.el=o.el)}}function Ov(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function j_(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:j_(e)}function lp(i){if(i)for(let e=0;e<i.length;e++)i[e].flags|=8}const Bv=Symbol.for("v-scx"),zv=()=>oc(Bv);function Mu(i,e,t){return Z_(i,e,t)}function Z_(i,e,t=Lt){const{immediate:n,deep:r,flush:s,once:o}=t,a=gn({},t),l=e&&n||!e&&s!=="post";let c;if(Qa){if(s==="sync"){const d=zv();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=ar,d.resume=ar,d.pause=ar,d}}const u=Hn;a.call=(d,_,g)=>fr(d,u,_,g);let h=!1;s==="post"?a.scheduler=d=>{oi(d,u&&u.suspense)}:s!=="sync"&&(h=!0,a.scheduler=(d,_)=>{_?d():ad(d)}),a.augmentJob=d=>{e&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=Qx(i,e,a);return Qa&&(c?c.push(f):l&&f()),f}function kv(i,e,t){const n=this.proxy,r=Jt(i)?i.includes(".")?J_(n,i):()=>n[i]:i.bind(n,n);let s;rt(e)?s=e:(s=e.handler,t=e);const o=dl(this),a=Z_(r,s.bind(n),t);return o(),a}function J_(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}const Vv=(i,e)=>e==="modelValue"||e==="model-value"?i.modelModifiers:i[`${e}Modifiers`]||i[`${cs(e)}Modifiers`]||i[`${to(e)}Modifiers`];function Hv(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||Lt;let r=t;const s=e.startsWith("update:"),o=s&&Vv(n,e.slice(7));o&&(o.trim&&(r=t.map(u=>Jt(u)?u.trim():u)),o.number&&(r=t.map(gx)));let a,l=n[a=du(e)]||n[a=du(cs(e))];!l&&s&&(l=n[a=du(to(e))]),l&&fr(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,fr(c,i,6,r)}}function Q_(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!rt(i)){const l=c=>{const u=Q_(c,e,!0);u&&(a=!0,gn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(kt(i)&&n.set(i,null),null):(Je(s)?s.forEach(l=>o[l]=null):gn(o,s),kt(i)&&n.set(i,o),o)}function tu(i,e){return!i||!Yc(e)?!1:(e=e.slice(2).replace(/Once$/,""),Mt(i,e[0].toLowerCase()+e.slice(1))||Mt(i,to(e))||Mt(i,e))}function yu(i){const{type:e,vnode:t,proxy:n,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:_,inheritAttrs:g}=i,p=wc(i);let m,S;try{if(t.shapeFlag&4){const M=r||n,T=M;m=Ji(c.call(T,M,u,h,d,f,_)),S=a}else{const M=e;m=Ji(M.length>1?M(h,{attrs:a,slots:o,emit:l}):M(h,null)),S=e.props?a:Gv(a)}}catch(M){Ua.length=0,Jc(M,i,1),m=Ri(Za)}let E=m;if(S&&g!==!1){const M=Object.keys(S),{shapeFlag:T}=E;M.length&&T&7&&(s&&M.some(Kh)&&(S=Wv(S,s)),E=Wo(E,S,!1,!0))}return t.dirs&&(E=Wo(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&ld(E,t.transition),m=E,wc(p),m}const Gv=i=>{let e;for(const t in i)(t==="class"||t==="style"||Yc(t))&&((e||(e={}))[t]=i[t]);return e},Wv=(i,e)=>{const t={};for(const n in i)(!Kh(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function Xv(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?cp(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!tu(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?cp(n,o,c):!0:!!o;return!1}function cp(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!tu(t,s))return!0}return!1}function Yv({vnode:i,parent:e},t){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=e.vnode).el=t,e=e.parent;else break}}const eg=i=>i.__isSuspense;function qv(i,e){e&&e.pendingBranch?Je(i)?e.effects.push(...i):e.effects.push(i):iv(i)}const wn=Symbol.for("v-fgt"),nu=Symbol.for("v-txt"),Za=Symbol.for("v-cmt"),ac=Symbol.for("v-stc"),Ua=[];let pi=null;function $n(i=!1){Ua.push(pi=i?null:[])}function $v(){Ua.pop(),pi=Ua[Ua.length-1]||null}let Ja=1;function up(i,e=!1){Ja+=i,i<0&&pi&&e&&(pi.hasOnce=!0)}function Kv(i){return i.dynamicChildren=Ja>0?pi||Do:null,$v(),Ja>0&&pi&&pi.push(i),i}function Kn(i,e,t,n,r,s){return Kv(Re(i,e,t,n,r,s,!0))}function tg(i){return i?i.__v_isVNode===!0:!1}function la(i,e){return i.type===e.type&&i.key===e.key}const ng=({key:i})=>i??null,lc=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?Jt(i)||In(i)||rt(i)?{i:nr,r:i,k:e,f:!!t}:i:null);function Re(i,e=null,t=null,n=0,r=null,s=i===wn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&ng(e),ref:e&&lc(e),scopeId:U_,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:nr};return a?(fd(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=Jt(t)?8:16),Ja>0&&!o&&pi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&pi.push(l),l}const Ri=jv;function jv(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===xv)&&(i=Za),tg(i)){const a=Wo(i,e,!0);return t&&fd(a,t),Ja>0&&!s&&pi&&(a.shapeFlag&6?pi[pi.indexOf(i)]=a:pi.push(a)),a.patchFlag=-2,a}if(aS(i)&&(i=i.__vccOpts),e){e=Zv(e);let{class:a,style:l}=e;a&&!Jt(a)&&(e.class=Jh(a)),kt(l)&&(od(l)&&!Je(l)&&(l=gn({},l)),e.style=jc(l))}const o=Jt(i)?1:eg(i)?128:ov(i)?64:kt(i)?4:rt(i)?2:0;return Re(i,e,t,n,r,o,s,!0)}function Zv(i){return i?od(i)||H_(i)?gn({},i):i:null}function Wo(i,e,t=!1,n=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=i,c=e?Qv(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&ng(c),ref:e&&e.ref?t&&s?Je(s)?s.concat(lc(e)):[s,lc(e)]:lc(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==wn?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Wo(i.ssContent),ssFallback:i.ssFallback&&Wo(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&ld(u,l.clone(u)),u}function Kr(i=" ",e=0){return Ri(nu,null,i,e)}function Jv(i,e){const t=Ri(ac,null,i);return t.staticCount=e,t}function Ji(i){return i==null||typeof i=="boolean"?Ri(Za):Je(i)?Ri(wn,null,i.slice()):tg(i)?jr(i):Ri(nu,null,String(i))}function jr(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Wo(i)}function fd(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Je(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),fd(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!H_(e)?e._ctx=nr:r===3&&nr&&(nr.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else rt(e)?(e={default:e,_ctx:nr},t=32):(e=String(e),n&64?(t=16,e=[Kr(e)]):t=8);i.children=e,i.shapeFlag|=t}function Qv(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=Jh([e.class,n.class]));else if(r==="style")e.style=jc([e.style,n.style]);else if(Yc(r)){const s=e[r],o=n[r];o&&s!==o&&!(Je(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function Yi(i,e,t,n=null){fr(i,e,7,[t,n])}const eS=z_();let tS=0;function nS(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||eS,s={uid:tS++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new bx(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:W_(n,r),emitsOptions:Q_(n,r),emit:null,emitted:null,propsDefaults:Lt,inheritAttrs:n.inheritAttrs,ctx:Lt,data:Lt,props:Lt,attrs:Lt,slots:Lt,refs:Lt,setupState:Lt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Hv.bind(null,s),i.ce&&i.ce(s),s}let Hn=null,Pc,Cf;{const i=Kc(),e=(t,n)=>{let r;return(r=i[t])||(r=i[t]=[]),r.push(n),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Pc=e("__VUE_INSTANCE_SETTERS__",t=>Hn=t),Cf=e("__VUE_SSR_SETTERS__",t=>Qa=t)}const dl=i=>{const e=Hn;return Pc(i),i.scope.on(),()=>{i.scope.off(),Pc(e)}},fp=()=>{Hn&&Hn.scope.off(),Pc(null)};function ig(i){return i.vnode.shapeFlag&4}let Qa=!1;function iS(i,e=!1,t=!1){e&&Cf(e);const{props:n,children:r}=i.vnode,s=ig(i);Rv(i,n,s,e),Iv(i,r,t);const o=s?rS(i,e):void 0;return e&&Cf(!1),o}function rS(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,vv);const{setup:n}=t;if(n){_s();const r=i.setupContext=n.length>1?oS(i):null,s=dl(i),o=hl(n,i,0,[i.props,r]),a=o_(o);if(gs(),s(),(a||i.sp)&&!Ia(i)&&F_(i),a){if(o.then(fp,fp),e)return o.then(l=>{hp(i,l,e)}).catch(l=>{Jc(l,i,0)});i.asyncDep=o}else hp(i,o,e)}else rg(i,e)}function hp(i,e,t){rt(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:kt(e)&&(i.setupState=C_(e)),rg(i,t)}let dp;function rg(i,e,t){const n=i.type;if(!i.render){if(!e&&dp&&!n.render){const r=n.template||cd(i).template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=gn(gn({isCustomElement:s,delimiters:a},o),l);n.render=dp(r,c)}}i.render=n.render||ar}{const r=dl(i);_s();try{Sv(i)}finally{gs(),r()}}}const sS={get(i,e){return Tn(i,"get",""),i[e]}};function oS(i){const e=t=>{i.exposed=t||{}};return{attrs:new Proxy(i.attrs,sS),slots:i.slots,emit:i.emit,expose:e}}function hd(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(C_(Xx(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in La)return La[t](i)},has(e,t){return t in e||t in La}})):i.proxy}function aS(i){return rt(i)&&"__vccOpts"in i}const sg=(i,e)=>Zx(i,e,Qa),lS="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pf;const pp=typeof window<"u"&&window.trustedTypes;if(pp)try{Pf=pp.createPolicy("vue",{createHTML:i=>i})}catch{}const og=Pf?i=>Pf.createHTML(i):i=>i,cS="http://www.w3.org/2000/svg",uS="http://www.w3.org/1998/Math/MathML",yr=typeof document<"u"?document:null,mp=yr&&yr.createElement("template"),fS={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e==="svg"?yr.createElementNS(cS,i):e==="mathml"?yr.createElementNS(uS,i):t?yr.createElement(i,{is:t}):yr.createElement(i);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>yr.createTextNode(i),createComment:i=>yr.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>yr.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{mp.innerHTML=og(n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i);const a=mp.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},hS=Symbol("_vtc");function dS(i,e,t){const n=i[hS];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const _p=Symbol("_vod"),pS=Symbol("_vsh"),mS=Symbol(""),_S=/(^|;)\s*display\s*:/;function gS(i,e,t){const n=i.style,r=Jt(t);let s=!1;if(t&&!r){if(e)if(Jt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&cc(n,a,"")}else for(const o in e)t[o]==null&&cc(n,o,"");for(const o in t)o==="display"&&(s=!0),cc(n,o,t[o])}else if(r){if(e!==t){const o=n[mS];o&&(t+=";"+o),n.cssText=t,s=_S.test(t)}}else e&&i.removeAttribute("style");_p in i&&(i[_p]=s?n.display:"",i[pS]&&(n.display="none"))}const gp=/\s*!important$/;function cc(i,e,t){if(Je(t))t.forEach(n=>cc(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=xS(i,e);gp.test(t)?i.setProperty(to(n),t.replace(gp,""),"important"):i[n]=t}}const xp=["Webkit","Moz","ms"],Eu={};function xS(i,e){const t=Eu[e];if(t)return t;let n=cs(e);if(n!=="filter"&&n in i)return Eu[e]=n;n=c_(n);for(let r=0;r<xp.length;r++){const s=xp[r]+n;if(s in i)return Eu[e]=s}return e}const vp="http://www.w3.org/1999/xlink";function Sp(i,e,t,n,r,s=Ex(e)){n&&e.startsWith("xlink:")?t==null?i.removeAttributeNS(vp,e.slice(6,e.length)):i.setAttributeNS(vp,e,t):t==null||s&&!f_(t)?i.removeAttribute(e):i.setAttribute(e,s?"":ms(t)?String(t):t)}function Mp(i,e,t,n,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(i[e]=e==="innerHTML"?og(t):t);return}const s=i.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?i.getAttribute("value")||"":i.value,l=t==null?i.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in i))&&(i.value=l),t==null&&i.removeAttribute(e),i._value=t;return}let o=!1;if(t===""||t==null){const a=typeof i[e];a==="boolean"?t=f_(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{i[e]=t}catch{}o&&i.removeAttribute(r||e)}function vS(i,e,t,n){i.addEventListener(e,t,n)}function SS(i,e,t,n){i.removeEventListener(e,t,n)}const yp=Symbol("_vei");function MS(i,e,t,n,r=null){const s=i[yp]||(i[yp]={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=yS(e);if(n){const c=s[e]=TS(n,r);vS(i,a,c,l)}else o&&(SS(i,a,o,l),s[e]=void 0)}}const Ep=/(?:Once|Passive|Capture)$/;function yS(i){let e;if(Ep.test(i)){e={};let n;for(;n=i.match(Ep);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):to(i.slice(2)),e]}let bu=0;const ES=Promise.resolve(),bS=()=>bu||(ES.then(()=>bu=0),bu=Date.now());function TS(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;fr(AS(n,t.value),e,5,[n])};return t.value=i,t.attached=bS(),t}function AS(i,e){if(Je(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const bp=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,wS=(i,e,t,n,r,s)=>{const o=r==="svg";e==="class"?dS(i,n,o):e==="style"?gS(i,t,n):Yc(e)?Kh(e)||MS(i,e,t,n,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):RS(i,e,n,o))?(Mp(i,e,n),!i.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Sp(i,e,n,o,s,e!=="value")):i._isVueCE&&(/[A-Z]/.test(e)||!Jt(n))?Mp(i,cs(e),n,s,e):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),Sp(i,e,n,o))};function RS(i,e,t,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in i&&bp(e)&&rt(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=i.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return bp(e)&&Jt(t)?!1:e in i}const CS=gn({patchProp:wS},fS);let Tp;function PS(){return Tp||(Tp=Uv(CS))}const DS=(...i)=>{const e=PS().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=LS(n);if(!r)return;const s=e._component;!rt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,IS(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function IS(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function LS(i){return Jt(i)?document.querySelector(i):i}function Er(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function ag(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var gi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Xo={duration:.5,overwrite:!1,delay:0},dd,_n,Nt,Ci=1e8,Ct=1/Ci,Df=Math.PI*2,US=Df/4,FS=0,lg=Math.sqrt,NS=Math.cos,OS=Math.sin,hn=function(e){return typeof e=="string"},Ht=function(e){return typeof e=="function"},Lr=function(e){return typeof e=="number"},pd=function(e){return typeof e>"u"},hr=function(e){return typeof e=="object"},jn=function(e){return e!==!1},md=function(){return typeof window<"u"},yl=function(e){return Ht(e)||hn(e)},cg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ln=Array.isArray,BS=/random\([^)]+\)/g,zS=/,\s*/g,Ap=/(?:-?\.?\d|\.)+/gi,ug=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ro=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Tu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,fg=/[+-]=-?[.\d]+/,kS=/[^,'"\[\]\s]+/gi,VS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Bt,ji,If,_d,xi={},Dc={},hg,dg=function(e){return(Dc=Yo(e,xi))&&ni},gd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},el=function(e,t){return!t&&console.warn(e)},pg=function(e,t){return e&&(xi[e]=t)&&Dc&&(Dc[e]=t)||xi},tl=function(){return 0},HS={suppressEvents:!0,isStart:!0,kill:!1},uc={suppressEvents:!0,kill:!1},GS={suppressEvents:!0},xd={},os=[],Lf={},mg,ui={},Au={},wp=30,fc=[],vd="",Sd=function(e){var t=e[0],n,r;if(hr(t)||Ht(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=fc.length;r--&&!fc[r].targetTest(t););n=fc[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new zg(e[r],n)))||e.splice(r,1);return e},Gs=function(e){return e._gsap||Sd(Pi(e))[0]._gsap},_g=function(e,t,n){return(n=e[t])&&Ht(n)?e[t]():pd(n)&&e.getAttribute&&e.getAttribute(t)||n},Zn=function(e,t){return(e=e.split(",")).forEach(t)||e},Xt=function(e){return Math.round(e*1e5)/1e5||0},Ot=function(e){return Math.round(e*1e7)/1e7||0},No=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},WS=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Ic=function(){var e=os.length,t=os.slice(0),n,r;for(Lf={},os.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Md=function(e){return!!(e._initted||e._startAt||e.add)},gg=function(e,t,n,r){os.length&&!_n&&Ic(),e.render(t,n,!!(_n&&t<0&&Md(e))),os.length&&!_n&&Ic()},xg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(kS).length<2?t:hn(e)?e.trim():e},vg=function(e){return e},vi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},XS=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Yo=function(e,t){for(var n in t)e[n]=t[n];return e},Rp=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=hr(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Lc=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Fa=function(e){var t=e.parent||Bt,n=e.keyframes?XS(Ln(e.keyframes)):vi;if(jn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},YS=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Sg=function(e,t,n,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},iu=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},us=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ws=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},qS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Uf=function(e,t,n,r){return e._startAt&&(_n?e._startAt.revert(uc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},$S=function i(e){return!e||e._ts&&i(e.parent)},Cp=function(e){return e._repeat?qo(e._tTime,e=e.duration()+e._rDelay)*e:0},qo=function(e,t){var n=Math.floor(e=Ot(e/t));return e&&n===e?n-1:n},Uc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ru=function(e){return e._end=Ot(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ct)||0))},su=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ot(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ru(e),n._dirty||Ws(n,e)),e},Mg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Uc(e.rawTime(),t),(!t._dur||pl(0,t.totalDuration(),n)-t._tTime>Ct)&&t.render(n,!0)),Ws(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ct}},er=function(e,t,n,r){return t.parent&&us(t),t._start=Ot((Lr(n)?n:n||e!==Bt?yi(e,n,t):e._time)+t._delay),t._end=Ot(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Sg(e,t,"_first","_last",e._sort?"_start":0),Ff(t)||(e._recent=t),r||Mg(e,t),e._ts<0&&su(e,e._tTime),e},yg=function(e,t){return(xi.ScrollTrigger||gd("scrollTrigger",t))&&xi.ScrollTrigger.create(t,e)},Eg=function(e,t,n,r,s){if(Ed(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!_n&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&mg!==hi.frame)return os.push(e),e._lazy=[s,r],1},KS=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Ff=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},jS=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&KS(e)&&!(!e._initted&&Ff(e))||(e._ts<0||e._dp._ts<0)&&!Ff(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=pl(0,e._tDur,t),u=qo(l,a),e._yoyo&&u&1&&(o=1-o),u!==qo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||_n||r||e._zTime===Ct||!t&&e._zTime){if(!e._initted&&Eg(e,t,r,n,l))return;for(h=e._zTime,e._zTime=t||(n?Ct:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Uf(e,t,n,!0),e._onUpdate&&!n&&mi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&mi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&us(e,1),!n&&!_n&&(mi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},ZS=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},$o=function(e,t,n,r){var s=e._repeat,o=Ot(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ot(o*(s+1)+e._rDelay*s):o,a>0&&!r&&su(e,e._tTime=e._tDur*a),e.parent&&ru(e),n||Ws(e.parent,e),e},Pp=function(e){return e instanceof Gn?Ws(e):$o(e,e._dur)},JS={_start:0,endTime:tl,totalDuration:tl},yi=function i(e,t,n){var r=e.labels,s=e._recent||JS,o=e.duration()>=Ci?s.endTime(!1):e._dur,a,l,c;return hn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Ln(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Na=function(e,t,n){var r=Lr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=jn(l.vars.inherit)&&l.parent;o.immediateRender=jn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Zt(t[0],o,t[s+1])},xs=function(e,t){return e||e===0?t(e):t},pl=function(e,t,n){return n<e?e:n>t?t:n},Cn=function(e,t){return!hn(e)||!(t=VS.exec(e))?"":t[1]},QS=function(e,t,n){return xs(n,function(r){return pl(e,t,r)})},Nf=[].slice,bg=function(e,t){return e&&hr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&hr(e[0]))&&!e.nodeType&&e!==ji},eM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return hn(r)&&!t||bg(r,1)?(s=n).push.apply(s,Pi(r)):n.push(r)})||n},Pi=function(e,t,n){return Nt&&!t&&Nt.selector?Nt.selector(e):hn(e)&&!n&&(If||!Ko())?Nf.call((t||_d).querySelectorAll(e),0):Ln(e)?eM(e,n):bg(e)?Nf.call(e,0):e?[e]:[]},Of=function(e){return e=Pi(e)[0]||el("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Pi(t,n.querySelectorAll?n:n===e?el("Invalid scope")||_d.createElement("div"):e)}},Tg=function(e){return e.sort(function(){return .5-Math.random()})},Ag=function(e){if(Ht(e))return e;var t=hr(e)?e:{each:e},n=Xs(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,h=r;return hn(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],h=r[1]),function(f,d,_){var g=(_||t).length,p=o[g],m,S,E,M,T,R,A,v,y;if(!p){if(y=t.grid==="auto"?0:(t.grid||[1,Ci])[1],!y){for(A=-Ci;A<(A=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(p=o[g]=[],m=l?Math.min(y,g)*u-.5:r%y,S=y===Ci?0:l?g*h/y-.5:r/y|0,A=0,v=Ci,R=0;R<g;R++)E=R%y-m,M=S-(R/y|0),p[R]=T=c?Math.abs(c==="y"?M:E):lg(E*E+M*M),T>A&&(A=T),T<v&&(v=T);r==="random"&&Tg(p),p.max=A-v,p.min=v,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(r==="edges"?-1:1),p.b=g<0?s-g:s,p.u=Cn(t.amount||t.each)||0,n=n&&g<0?Ng(n):n}return g=(p[f]-p.min)/p.max||0,Ot(p.b+(n?n(g):g)*p.v)+p.u}},Bf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Ot(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Lr(n)?0:Cn(n))}},wg=function(e,t){var n=Ln(e),r,s;return!n&&hr(e)&&(r=n=e.radius||Ci,e.values?(e=Pi(e.values),(s=!Lr(e[0]))&&(r*=r)):e=Bf(e.increment)),xs(t,n?Ht(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Ci,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!r||c<=r?e[u]:o,s||u===o||Lr(o)?u:u+Cn(o)}:Bf(e))},Rg=function(e,t,n,r){return xs(Ln(e)?!t:n===!0?!!(n=0):!r,function(){return Ln(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},tM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},nM=function(e,t){return function(n){return e(parseFloat(n))+(t||Cn(n))}},iM=function(e,t,n){return Pg(e,t,0,1,n)},Cg=function(e,t,n){return xs(n,function(r){return e[~~t(r)]})},rM=function i(e,t,n){var r=t-e;return Ln(e)?Cg(e,i(0,e.length),t):xs(n,function(s){return(r+(s-e)%r)%r+e})},sM=function i(e,t,n){var r=t-e,s=r*2;return Ln(e)?Cg(e,i(0,e.length-1),t):xs(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},nl=function(e){return e.replace(BS,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(zS);return Rg(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},Pg=function(e,t,n,r,s){var o=t-e,a=r-n;return xs(s,function(l){return n+((l-e)/o*a||0)})},oM=function i(e,t,n,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=hn(e),a={},l,c,u,h,f;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(Ln(e)&&!Ln(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(i(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else r||(e=Yo(Ln(e)?[]:{},e));if(!u){for(l in t)yd.call(a,e,l,"get",t[l]);s=function(_){return Ad(_,a)||(o?e.p:e)}}}return xs(n,s)},Dp=function(e,t,n){var r=e.labels,s=Ci,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},mi=function(e,t,n){var r=e.vars,s=r[t],o=Nt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&os.length&&Ic(),a&&(Nt=a),u=l?s.apply(c,l):s.call(c),Nt=o,u},Sa=function(e){return us(e),e.scrollTrigger&&e.scrollTrigger.kill(!!_n),e.progress()<1&&mi(e,"onInterrupt"),e},Co,Dg=[],Ig=function(e){if(e)if(e=!e.name&&e.default||e,md()||e.headless){var t=e.name,n=Ht(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:tl,render:Ad,add:yd,kill:yM,modifier:MM,rawVars:0},o={targetTest:0,get:0,getSetter:Td,aliases:{},register:0};if(Ko(),e!==r){if(ui[t])return;vi(r,vi(Lc(e,s),o)),Yo(r.prototype,Yo(s,Lc(e,o))),ui[r.prop=t]=r,e.targetTest&&(fc.push(r),xd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}pg(t,r),e.register&&e.register(ni,r,Jn)}else Dg.push(e)},Rt=255,Ma={aqua:[0,Rt,Rt],lime:[0,Rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Rt],navy:[0,0,128],white:[Rt,Rt,Rt],olive:[128,128,0],yellow:[Rt,Rt,0],orange:[Rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Rt,0,0],pink:[Rt,192,203],cyan:[0,Rt,Rt],transparent:[Rt,Rt,Rt,0]},wu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Rt+.5|0},Lg=function(e,t,n){var r=e?Lr(e)?[e>>16,e>>8&Rt,e&Rt]:0:Ma.black,s,o,a,l,c,u,h,f,d,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ma[e])r=Ma[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Rt,r&Rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Rt,e&Rt]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(Ap),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=wu(l+1/3,s,o),r[1]=wu(l,s,o),r[2]=wu(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(ug),n&&r.length<4&&(r[3]=1),r}else r=e.match(Ap)||Ma.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/Rt,o=r[1]/Rt,a=r[2]/Rt,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Ug=function(e){var t=[],n=[],r=-1;return e.split(as).forEach(function(s){var o=s.match(Ro)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},Ip=function(e,t,n){var r="",s=(e+r).match(as),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Lg(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Ug(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(as,"1").split(Ro),h=c.length-1;a<h;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(as),h=c.length-1;a<h;a++)r+=c[a]+s[a];return r+c[h]},as=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ma)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),aM=/hsl[a]?\(/,Fg=function(e){var t=e.join(" "),n;if(as.lastIndex=0,as.test(t))return n=aM.test(t),e[1]=Ip(e[1],n),e[0]=Ip(e[0],n,Ug(e[1])),!0},il,hi=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,_=function g(p){var m=i()-r,S=p===!0,E,M,T,R;if((m>e||m<0)&&(n+=m-t),r+=m,T=r-n,E=T-o,(E>0||S)&&(R=++h.frame,f=T-h.time*1e3,h.time=T=T/1e3,o+=E+(E>=s?4:s-E),M=1),S||(l=c(g)),M)for(d=0;d<a.length;d++)a[d](T,f,R,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){hg&&(!If&&md()&&(ji=If=window,_d=ji.document||{},xi.gsap=ni,(ji.gsapVersions||(ji.gsapVersions=[])).push(ni.version),dg(Dc||ji.GreenSockGlobals||!ji.gsap&&ji||{}),Dg.forEach(Ig)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},il=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),il=0,c=tl},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,m,S){var E=m?function(M,T,R,A){p(M,T,R,A),h.remove(E)}:p;return h.remove(p),a[S?"unshift":"push"](E),Ko(),E},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},h}(),Ko=function(){return!il&&hi.wake()},ft={},lM=/^[\d.\-M][\d.\-,\s]/,cM=/["']/g,uM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(cM,"").trim():+c,r=l.substr(a+1).trim();return t},fM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},hM=function(e){var t=(e+"").split("("),n=ft[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[uM(t[1])]:fM(e).split(",").map(xg)):ft._CE&&lM.test(e)?ft._CE("",e):n},Ng=function(e){return function(t){return 1-e(1-t)}},Og=function i(e,t){for(var n=e._first,r;n;)n instanceof Gn?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},Xs=function(e,t){return e&&(Ht(e)?e:ft[e]||hM(e))||t},no=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return Zn(e,function(a){ft[a]=xi[a]=s,ft[o=a.toLowerCase()]=n;for(var l in s)ft[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ft[a+"."+l]=s[l]}),s},Bg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ru=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Df*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*OS((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Bg(a);return s=Df/s,l.config=function(c,u){return i(e,c,u)},l},Cu=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Bg(n);return r.config=function(s){return i(e,s)},r};Zn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;no(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ft.Linear.easeNone=ft.none=ft.Linear.easeIn;no("Elastic",Ru("in"),Ru("out"),Ru());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};no("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);no("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});no("Circ",function(i){return-(lg(1-i*i)-1)});no("Sine",function(i){return i===1?1:-NS(i*US)+1});no("Back",Cu("in"),Cu("out"),Cu());ft.SteppedEase=ft.steps=xi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-Ct;return function(a){return((r*pl(0,o,a)|0)+s)*n}}};Xo.ease=ft["quad.out"];Zn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return vd+=i+","+i+"Params,"});var zg=function(e,t){this.id=FS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:_g,this.set=t?t.getSetter:Td},rl=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,$o(this,+t.duration,1,1),this.data=t.data,Nt&&(this._ctx=Nt,Nt.data.push(this)),il||hi.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,$o(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Ko(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(su(this,n),!s._dp||s.parent||Mg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&er(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ct||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),gg(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Cp(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Cp(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?qo(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-Ct?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Uc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ct?0:this._rts,this.totalTime(pl(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),ru(this),qS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ko(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ct&&(this._tTime-=Ct)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ot(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&er(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(jn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Uc(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=GS);var r=_n;return _n=n,Md(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),_n=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Pp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Pp(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(yi(this,n),jn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,jn(r)),this._dur||(this._zTime=-Ct),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ct:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ct,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Ct)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this,s=r._prom;return new Promise(function(o){var a=Ht(n)?n:vg,l=function(){var u=r.then;r.then=null,s&&s(),Ht(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Sa(this)},i}();vi(rl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ct,_prom:0,_ps:!1,_rts:1});var Gn=function(i){ag(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=jn(n.sortChildren),Bt&&er(n.parent||Bt,Er(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&yg(Er(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Na(0,arguments,this),this},t.from=function(r,s,o){return Na(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Na(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Fa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Zt(r,s,yi(this,o),1),this},t.call=function(r,s,o){return er(this,Zt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Zt(r,o,yi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Fa(o).immediateRender=jn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,h){return a.startAt=o,Fa(a).immediateRender=jn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Ot(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,d,_,g,p,m,S,E,M,T,R,A;if(this!==Bt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,M=this._start,E=this._ts,m=!E,h&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(R=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(f=Ot(u%p),u===l?(g=this._repeat,f=c):(T=Ot(u/p),g=~~T,g&&g===T&&(f=c,g--),f>c&&(f=c)),T=qo(this._tTime,p),!a&&this._tTime&&T!==g&&this._tTime-T*p-this._dur<=0&&(T=g),R&&g&1&&(f=c-f,A=1),g!==T&&!this._lock){var v=R&&T&1,y=v===(R&&g&1);if(g<T&&(v=!v),a=v?0:u%c?c:u,this._lock=1,this.render(a||(A?0:Ot(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&mi(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,T=g),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=v?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Og(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=ZS(this,Ot(a),Ot(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!T&&(mi(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!m){S=0,_&&(u+=this._zTime=-Ct);break}}d=_}else{d=this._last;for(var U=r<0?r:f;d;){if(_=d._prev,(d._act||U<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(U-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(U-d._start)*d._ts,s,o||_n&&Md(d)),f!==this._time||!this._ts&&!m){S=0,_&&(u+=this._zTime=U?-Ct:Ct);break}}d=_}}if(S&&!s&&(this.pause(),S.render(f>=a?0:-Ct)._zTime=f>=a?1:-1,this._ts))return this._start=M,ru(this),this.render(r,s,o);this._onUpdate&&!s&&mi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(M===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&us(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(mi(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Lr(s)||(s=yi(this,s,r)),!(r instanceof rl)){if(Ln(r))return r.forEach(function(a){return o.add(a,s)}),this;if(hn(r))return this.addLabel(r,s);if(Ht(r))r=Zt.delayedCall(0,r);else return this}return this!==r?er(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ci);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Zt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return hn(r)?this.removeLabel(r):Ht(r)?this.killTweensOf(r):(r.parent===this&&iu(this,r),r===this._recent&&(this._recent=this._last),Ws(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ot(hi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=yi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Zt.delayedCall(0,s||tl,o);return a.data="isPause",this._hasPause=1,er(this,a,yi(this,r))},t.removePause=function(r){var s=this._first;for(r=yi(this,r);s;)s._start===r&&s.data==="isPause"&&us(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Qr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Pi(r),l=this._first,c=Lr(s),u;l;)l instanceof Zt?WS(l._targets,a)&&(c?(!Qr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=yi(o,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=Zt.to(o,vi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ct,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&$o(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,vi({startAt:{time:yi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Dp(this,yi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Dp(this,yi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ct)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=Ot(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Ws(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ws(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Ci,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,er(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Ot(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;$o(o,o===Bt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Bt._ts&&(gg(Bt,Uc(r,Bt)),mg=hi.frame),hi.frame>=wp){wp+=gi.autoSleep||120;var s=Bt._first;if((!s||!s._ts)&&gi.autoSleep&&hi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||hi.sleep()}}},e}(rl);vi(Gn.prototype,{_lock:0,_hasPause:0,_forcing:0});var dM=function(e,t,n,r,s,o,a){var l=new Jn(this._pt,e,t,0,1,Xg,null,s),c=0,u=0,h,f,d,_,g,p,m,S;for(l.b=n,l.e=r,n+="",r+="",(m=~r.indexOf("random("))&&(r=nl(r)),o&&(S=[n,r],o(S,e,t),n=S[0],r=S[1]),f=n.match(Tu)||[];h=Tu.exec(r);)_=h[0],g=r.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?No(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=Tu.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(fg.test(r)||m)&&(l.e=0),this._pt=l,l},yd=function(e,t,n,r,s,o,a,l,c,u){Ht(r)&&(r=r(s||0,e,o));var h=e[t],f=n!=="get"?n:Ht(h)?c?e[t.indexOf("set")||!Ht(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Ht(h)?c?xM:Gg:bd,_;if(hn(r)&&(~r.indexOf("random(")&&(r=nl(r)),r.charAt(1)==="="&&(_=No(f,r)+(Cn(f)||0),(_||_===0)&&(r=_))),!u||f!==r||zf)return!isNaN(f*r)&&r!==""?(_=new Jn(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?SM:Wg,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&gd(t,r),dM.call(this,e,t,f,r,d,l||gi.stringFilter,c))},pM=function(e,t,n,r,s){if(Ht(e)&&(e=Oa(e,s,t,n,r)),!hr(e)||e.style&&e.nodeType||Ln(e)||cg(e))return hn(e)?Oa(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=Oa(e[a],s,t,n,r);return o},kg=function(e,t,n,r,s,o){var a,l,c,u;if(ui[e]&&(a=new ui[e]).init(s,a.rawVars?t[e]:pM(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new Jn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Co))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Qr,zf,Ed=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,f=r.keyframes,d=r.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,S=m&&m.data==="nested"?m.vars.targets:p,E=e._overwrite==="auto"&&!dd,M=e.timeline,T,R,A,v,y,U,D,B,H,W,G,V,O;if(M&&(!f||!s)&&(s="none"),e._ease=Xs(s,Xo.ease),e._yEase=h?Ng(Xs(h===!0?s:h,Xo.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!M&&!!r.runBackwards,!M||f&&!r.stagger){if(B=p[0]?Gs(p[0]).harness:0,V=B&&r[B.prop],T=Lc(r,xd),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?uc:HS),g._lazy=0),o){if(us(e._startAt=Zt.set(p,vi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&jn(l),startAt:null,delay:0,onUpdate:c&&function(){return mi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(_n||!a&&!d)&&e._startAt.revert(uc),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),A=vi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&jn(l),immediateRender:a,stagger:0,parent:m},T),V&&(A[B.prop]=V),us(e._startAt=Zt.set(p,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(_n?e._startAt.revert(uc):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,Ct,Ct);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&jn(l)||l&&!_,R=0;R<p.length;R++){if(y=p[R],D=y._gsap||Sd(p)[R]._gsap,e._ptLookup[R]=W={},Lf[D.id]&&os.length&&Ic(),G=S===p?R:S.indexOf(y),B&&(H=new B).init(y,V||T,e,G,S)!==!1&&(e._pt=v=new Jn(e._pt,y,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(ee){W[ee]=v}),H.priority&&(U=1)),!B||V)for(A in T)ui[A]&&(H=kg(A,T,e,G,y,S))?H.priority&&(U=1):W[A]=v=yd.call(e,y,A,"get",T[A],G,S,0,r.stringFilter);e._op&&e._op[R]&&e.kill(y,e._op[R]),E&&e._pt&&(Qr=e,Bt.killTweensOf(y,W,e.globalTime(t)),O=!e.parent,Qr=0),e._pt&&l&&(Lf[D.id]=1)}U&&Yg(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!O,f&&t<=0&&M.render(Ci,!0,!0)},mM=function(e,t,n,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return zf=1,e.vars[t]="+=0",Ed(e,a),zf=0,l?el(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Xt(n)+Cn(h.e)),h.b&&(h.b=u.s+Cn(h.b))},_M=function(e,t){var n=e[0]?Gs(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=Yo({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},gM=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(Ln(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Oa=function(e,t,n,r,s){return Ht(e)?e.call(t,n,r,s):hn(e)&&~e.indexOf("random(")?nl(e):e},Vg=vd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Hg={};Zn(Vg+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Hg[i]=1});var Zt=function(i){ag(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:Fa(r))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,S=r.parent||Bt,E=(Ln(n)||cg(n)?Lr(n[0]):"length"in r)?[n]:Pi(n),M,T,R,A,v,y,U,D;if(a._targets=E.length?Sd(E):el("GSAP target "+n+" not found. https://gsap.com",!gi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||yl(c)||yl(u)){if(r=a.vars,M=a.timeline=new Gn({data:"nested",defaults:g||{},targets:S&&S.data==="nested"?S.vars.targets:E}),M.kill(),M.parent=M._dp=Er(a),M._start=0,f||yl(c)||yl(u)){if(A=E.length,U=f&&Ag(f),hr(f))for(v in f)~Vg.indexOf(v)&&(D||(D={}),D[v]=f[v]);for(T=0;T<A;T++)R=Lc(r,Hg),R.stagger=0,m&&(R.yoyoEase=m),D&&Yo(R,D),y=E[T],R.duration=+Oa(c,Er(a),T,y,E),R.delay=(+Oa(u,Er(a),T,y,E)||0)-a._delay,!f&&A===1&&R.delay&&(a._delay=u=R.delay,a._start+=u,R.delay=0),M.to(y,R,U?U(T,y,E):0),M._ease=ft.none;M.duration()?c=u=0:a.timeline=0}else if(_){Fa(vi(M.vars.defaults,{ease:"none"})),M._ease=Xs(_.ease||r.ease||"none");var B=0,H,W,G;if(Ln(_))_.forEach(function(V){return M.to(E,V,">")}),M.duration();else{R={};for(v in _)v==="ease"||v==="easeEach"||gM(v,_[v],R,_.easeEach);for(v in R)for(H=R[v].sort(function(V,O){return V.t-O.t}),B=0,T=0;T<H.length;T++)W=H[T],G={ease:W.e,duration:(W.t-(T?H[T-1].t:0))/100*c},G[v]=W.v,M.to(E,G,B),B+=G.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return d===!0&&!dd&&(Qr=Er(a),Bt.killTweensOf(E),Qr=0),er(S,Er(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!c&&!_&&a._start===Ot(S._time)&&jn(h)&&$S(Er(a))&&S.data!=="nested")&&(a._tTime=-Ct,a.render(Math.max(0,-u)||0)),p&&yg(Er(a),p),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-Ct&&!u?l:r<Ct?0:r,f,d,_,g,p,m,S,E,M;if(!c)jS(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,E=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,o);if(f=Ot(h%g),h===l?(_=this._repeat,f=c):(p=Ot(h/g),_=~~p,_&&_===p?(f=c,_--):f>c&&(f=c)),m=this._yoyo&&_&1,m&&(M=this._yEase,f=c-f),p=qo(this._tTime,g),f===a&&!o&&this._initted&&_===p)return this._tTime=h,this;_!==p&&(E&&this._yEase&&Og(E,m),this.vars.repeatRefresh&&!m&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(Ot(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Eg(this,u?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(M||this._ease)(f/c),this._from&&(this.ratio=S=1-S),!a&&h&&!s&&!p&&(mi(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;E&&E.render(r<0?r:E._dur*E._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Uf(this,r,s,o),mi(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&mi(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Uf(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&us(this,1),!s&&!(u&&!a)&&(h||a||m)&&(mi(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){il||hi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ed(this,c),u=this._ease(c/this._dur),mM(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(su(this,0),this.parent||Sg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Sa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!_n),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Qr&&Qr.vars.overwrite!==!0)._first||Sa(this),this.parent&&o!==this.timeline.totalDuration()&&$o(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Pi(r):a,c=this._ptLookup,u=this._pt,h,f,d,_,g,p,m;if((!s||s==="all")&&YS(a,l))return s==="all"&&(this._pt=0),Sa(this);for(h=this._op=this._op||[],s!=="all"&&(hn(s)&&(g={},Zn(s,function(S){return g[S]=1}),s=g),s=_M(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(h[m]=s,_=f,d={}):(d=h[m]=h[m]||{},_=s);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&iu(this,p,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&Sa(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Na(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Na(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Bt.killTweensOf(r,s,o)},e}(rl);vi(Zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Zn("staggerTo,staggerFrom,staggerFromTo",function(i){Zt[i]=function(){var e=new Gn,t=Nf.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var bd=function(e,t,n){return e[t]=n},Gg=function(e,t,n){return e[t](n)},xM=function(e,t,n,r){return e[t](r.fp,n)},vM=function(e,t,n){return e.setAttribute(t,n)},Td=function(e,t){return Ht(e[t])?Gg:pd(e[t])&&e.setAttribute?vM:bd},Wg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},SM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Xg=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Ad=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},MM=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},yM=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?iu(this,t,"_pt"):t.dep||(n=1),t=r;return!n},EM=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Yg=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},Jn=function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||Wg,this.d=l||this,this.set=c||bd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=EM,this.m=n,this.mt=s,this.tween=r},i}();Zn(vd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return xd[i]=1});xi.TweenMax=xi.TweenLite=Zt;xi.TimelineLite=xi.TimelineMax=Gn;Bt=new Gn({sortChildren:!1,defaults:Xo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});gi.stringFilter=Fg;var Ys=[],hc={},bM=[],Lp=0,TM=0,Pu=function(e){return(hc[e]||bM).map(function(t){return t()})},kf=function(){var e=Date.now(),t=[];e-Lp>2&&(Pu("matchMediaInit"),Ys.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=ji.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Pu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Lp=e,Pu("matchMedia"))},qg=function(){function i(t,n){this.selector=n&&Of(n),this.data=[],this._r=[],this.isReverted=!1,this.id=TM++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Ht(n)&&(s=r,r=n,n=Ht);var o=this,a=function(){var c=Nt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Of(s)),Nt=o,h=r.apply(o,arguments),Ht(h)&&o._r.push(h),Nt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Ht?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var r=Nt;Nt=null,n(this),Nt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Zt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Gn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Zt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Ys.length;o--;)Ys[o].id===this.id&&Ys.splice(o,1)},e.revert=function(n){this.kill(n||{})},i}(),AM=function(){function i(t){this.contexts=[],this.scope=t,Nt&&Nt.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){hr(n)||(n={matches:n});var o=new qg(0,s||this.scope),a=o.conditions={},l,c,u;Nt&&!o.selector&&(o.selector=Nt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=ji.matchMedia(n[c]),l&&(Ys.indexOf(o)<0&&Ys.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(kf):l.addEventListener("change",kf)));return u&&r(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),Fc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Ig(r)})},timeline:function(e){return new Gn(e)},getTweensOf:function(e,t){return Bt.getTweensOf(e,t)},getProperty:function(e,t,n,r){hn(e)&&(e=Pi(e)[0]);var s=Gs(e||{}).get,o=n?vg:xg;return n==="native"&&(n=""),e&&(t?o((ui[t]&&ui[t].get||s)(e,t,n,r)):function(a,l,c){return o((ui[a]&&ui[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Pi(e),e.length>1){var r=e.map(function(u){return ni.quickSetter(u,t,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var o=ui[t],a=Gs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Co._pt=0,h.init(e,n?u+n:u,Co,0,[e]),h.render(1,h),Co._pt&&Ad(1,Co)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=ni.to(e,vi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Xs(e.ease,Xo.ease)),Rp(Xo,e||{})},config:function(e){return Rp(gi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!ui[a]&&!xi[a]&&el(t+" effect requires "+a+" plugin.")}),Au[t]=function(a,l,c){return n(Pi(a),vi(l||{},s),c)},o&&(Gn.prototype[t]=function(a,l,c){return this.add(Au[t](a,hr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ft[e]=Xs(t)},parseEase:function(e,t){return arguments.length?Xs(e,t):ft},getById:function(e){return Bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Gn(e),r,s;for(n.smoothChildTiming=jn(e.smoothChildTiming),Bt.remove(n),n._dp=0,n._time=n._tTime=Bt._time,r=Bt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Zt&&r.vars.onComplete===r._targets[0]))&&er(n,r,r._start-r._delay),r=s;return er(Bt,n,0),n},context:function(e,t){return e?new qg(e,t):Nt},matchMedia:function(e){return new AM(e)},matchMediaRefresh:function(){return Ys.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||kf()},addEventListener:function(e,t){var n=hc[e]||(hc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=hc[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:rM,wrapYoyo:sM,distribute:Ag,random:Rg,snap:wg,normalize:iM,getUnit:Cn,clamp:QS,splitColor:Lg,toArray:Pi,selector:Of,mapRange:Pg,pipe:tM,unitize:nM,interpolate:oM,shuffle:Tg},install:dg,effects:Au,ticker:hi,updateRoot:Gn.updateRoot,plugins:ui,globalTimeline:Bt,core:{PropTween:Jn,globals:pg,Tween:Zt,Timeline:Gn,Animation:rl,getCache:Gs,_removeLinkedListItem:iu,reverting:function(){return _n},context:function(e){return e&&Nt&&(Nt.data.push(e),e._ctx=Nt),Nt},suppressOverwrites:function(e){return dd=e}}};Zn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Fc[i]=Zt[i]});hi.add(Gn.updateRoot);Co=Fc.to({},{duration:0});var wM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},RM=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=wM(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},Du=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(hn(s)&&(l={},Zn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}RM(a,s)}}}},ni=Fc.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)_n?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Du("roundProps",Bf),Du("modifiers"),Du("snap",wg))||Fc;Zt.version=Gn.version=ni.version="3.14.2";hg=1;md()&&Ko();ft.Power0;ft.Power1;ft.Power2;ft.Power3;ft.Power4;ft.Linear;ft.Quad;ft.Cubic;ft.Quart;ft.Quint;ft.Strong;ft.Elastic;ft.Back;ft.SteppedEase;ft.Bounce;ft.Sine;ft.Expo;ft.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Up,es,Oo,wd,Os,Fp,Rd,CM=function(){return typeof window<"u"},Ur={},Ds=180/Math.PI,Bo=Math.PI/180,ao=Math.atan2,Np=1e8,Cd=/([A-Z])/g,PM=/(left|right|width|margin|padding|x)/i,DM=/[\s,\(]\S/,ir={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Vf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},IM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},LM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},UM=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},FM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},$g=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Kg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},NM=function(e,t,n){return e.style[t]=n},OM=function(e,t,n){return e.style.setProperty(t,n)},BM=function(e,t,n){return e._gsap[t]=n},zM=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},kM=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},VM=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},zt="transform",Qn=zt+"Origin",HM=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in Ur&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ir[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=br(r,a)}):this.tfm[e]=o.x?o[e]:br(r,e),e===Qn&&(this.tfm.zOrigin=o.zOrigin);else return ir.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(zt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Qn,t,"")),e=zt}(s||t)&&this.props.push(e,t,s[e])},jg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},GM=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Cd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Rd(),(!s||!s.isStart)&&!n[zt]&&(jg(n),r.zOrigin&&n[Qn]&&(n[Qn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Zg=function(e,t){var n={target:e,props:[],revert:GM,save:HM};return e._gsap||ni.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},Jg,Hf=function(e,t){var n=es.createElementNS?es.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):es.createElement(e);return n&&n.style?n:es.createElement(e)},_i=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Cd,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,jo(t)||t,1)||""},Op="O,Moz,ms,Ms,Webkit".split(","),jo=function(e,t,n){var r=t||Os,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Op[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Op[o]:"")+e},Gf=function(){CM()&&window.document&&(Up=window,es=Up.document,Oo=es.documentElement,Os=Hf("div")||{style:{}},Hf("div"),zt=jo(zt),Qn=zt+"Origin",Os.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Jg=!!jo("perspective"),Rd=ni.core.reverting,wd=1)},Bp=function(e){var t=e.ownerSVGElement,n=Hf("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),Oo.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),Oo.removeChild(n),s},zp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Qg=function(e){var t,n;try{t=e.getBBox()}catch{t=Bp(e),n=1}return t&&(t.width||t.height)||n||(t=Bp(e)),t&&!t.width&&!t.x&&!t.y?{x:+zp(e,["x","cx","x1"])||0,y:+zp(e,["y","cy","y1"])||0,width:0,height:0}:t},e0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Qg(e))},fs=function(e,t){if(t){var n=e.style,r;t in Ur&&t!==Qn&&(t=zt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Cd,"-$1").toLowerCase())):n.removeAttribute(t)}},ts=function(e,t,n,r,s,o){var a=new Jn(e._pt,t,n,0,1,o?Kg:$g);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},kp={deg:1,rad:1,turn:1},WM={grid:1,flex:1},hs=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Os.style,l=PM.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",d=r==="%",_,g,p,m;if(r===o||!s||kp[r]||kp[o])return s;if(o!=="px"&&!f&&(s=i(e,t,n,"px")),m=e.getCTM&&e0(e),(d||o==="%")&&(Ur[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],Xt(d?s/_*h:s/100*_);if(a[l?"width":"height"]=h+(f?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===es||!g.appendChild)&&(g=es.body),p=g._gsap,p&&d&&p.width&&l&&p.time===hi.time&&!p.uncache)return Xt(s/p.width*h);if(d&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=h+r,_=e[u],S?e.style[t]=S:fs(e,t)}else(d||o==="%")&&!WM[_i(g,"display")]&&(a.position=_i(e,"position")),g===e&&(a.position="static"),g.appendChild(Os),_=Os[u],g.removeChild(Os),a.position="absolute";return l&&d&&(p=Gs(g),p.time=hi.time,p.width=g[u]),Xt(f?_*s/h:_&&s?h/_*s:0)},br=function(e,t,n,r){var s;return wd||Gf(),t in ir&&t!=="transform"&&(t=ir[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ur[t]&&t!=="transform"?(s=ol(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Oc(_i(e,Qn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Nc[t]&&Nc[t](e,t,n)||_i(e,t)||_g(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?hs(e,t,s,n)+n:s},XM=function(e,t,n,r){if(!n||n==="none"){var s=jo(t,e,1),o=s&&_i(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=_i(e,"borderTopColor"))}var a=new Jn(this._pt,e.style,t,0,1,Xg),l=0,c=0,u,h,f,d,_,g,p,m,S,E,M,T;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=_i(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=_i(e,t)||r,g?e.style[t]=g:fs(e,t)),u=[n,r],Fg(u),n=u[0],r=u[1],f=n.match(Ro)||[],T=r.match(Ro)||[],T.length){for(;h=Ro.exec(r);)p=h[0],S=r.substring(l,h.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),p!==(g=f[c++]||"")&&(d=parseFloat(g)||0,M=g.substr((d+"").length),p.charAt(1)==="="&&(p=No(d,p)+M),m=parseFloat(p),E=p.substr((m+"").length),l=Ro.lastIndex-E.length,E||(E=E||gi.units[t]||M,l===r.length&&(r+=E,a.e+=E)),M!==E&&(d=hs(e,t,g,E)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:d,c:m-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Kg:$g;return fg.test(r)&&(a.e=0),this._pt=a,a},Vp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},YM=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Vp[n]||n,t[1]=Vp[r]||r,t.join(" ")},qM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ur[a]&&(l=1,a=a==="transformOrigin"?Qn:zt),fs(n,a);l&&(fs(n,zt),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",ol(n,1),o.uncache=1,jg(r)))}},Nc={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Jn(e._pt,t,n,0,0,qM);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},sl=[1,0,0,1,0,0],t0={},n0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Hp=function(e){var t=_i(e,zt);return n0(t)?sl:t.substr(7).match(ug).map(Xt)},Pd=function(e,t){var n=e._gsap||Gs(e),r=e.style,s=Hp(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?sl:s):(s===sl&&!e.offsetParent&&e!==Oo&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Oo.appendChild(e)),s=Hp(e),l?r.display=l:fs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Oo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Wf=function(e,t,n,r,s,o){var a=e._gsap,l=s||Pd(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],S=l[5],E=t.split(" "),M=parseFloat(E[0])||0,T=parseFloat(E[1])||0,R,A,v,y;n?l!==sl&&(A=d*p-_*g)&&(v=M*(p/A)+T*(-g/A)+(g*S-p*m)/A,y=M*(-_/A)+T*(d/A)-(d*S-_*m)/A,M=v,T=y):(R=Qg(e),M=R.x+(~E[0].indexOf("%")?M/100*R.width:M),T=R.y+(~(E[1]||E[0]).indexOf("%")?T/100*R.height:T)),r||r!==!1&&a.smooth?(m=M-c,S=T-u,a.xOffset=h+(m*d+S*g)-m,a.yOffset=f+(m*_+S*p)-S):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=T,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[Qn]="0px 0px",o&&(ts(o,a,"xOrigin",c,M),ts(o,a,"yOrigin",u,T),ts(o,a,"xOffset",h,a.xOffset),ts(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",M+" "+T)},ol=function(e,t){var n=e._gsap||new zg(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=_i(e,Qn)||"0",u,h,f,d,_,g,p,m,S,E,M,T,R,A,v,y,U,D,B,H,W,G,V,O,ee,se,N,_e,ge,He,Ye,Ke;return u=h=f=g=p=m=S=E=M=0,d=_=1,n.svg=!!(e.getCTM&&e0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[zt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[zt]!=="none"?l[zt]:"")),r.scale=r.rotate=r.translate="none"),A=Pd(e,n.svg),n.svg&&(n.uncache?(ee=e.getBBox(),c=n.xOrigin-ee.x+"px "+(n.yOrigin-ee.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),Wf(e,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,A)),T=n.xOrigin||0,R=n.yOrigin||0,A!==sl&&(D=A[0],B=A[1],H=A[2],W=A[3],u=G=A[4],h=V=A[5],A.length===6?(d=Math.sqrt(D*D+B*B),_=Math.sqrt(W*W+H*H),g=D||B?ao(B,D)*Ds:0,S=H||W?ao(H,W)*Ds+g:0,S&&(_*=Math.abs(Math.cos(S*Bo))),n.svg&&(u-=T-(T*D+R*H),h-=R-(T*B+R*W))):(Ke=A[6],He=A[7],N=A[8],_e=A[9],ge=A[10],Ye=A[11],u=A[12],h=A[13],f=A[14],v=ao(Ke,ge),p=v*Ds,v&&(y=Math.cos(-v),U=Math.sin(-v),O=G*y+N*U,ee=V*y+_e*U,se=Ke*y+ge*U,N=G*-U+N*y,_e=V*-U+_e*y,ge=Ke*-U+ge*y,Ye=He*-U+Ye*y,G=O,V=ee,Ke=se),v=ao(-H,ge),m=v*Ds,v&&(y=Math.cos(-v),U=Math.sin(-v),O=D*y-N*U,ee=B*y-_e*U,se=H*y-ge*U,Ye=W*U+Ye*y,D=O,B=ee,H=se),v=ao(B,D),g=v*Ds,v&&(y=Math.cos(v),U=Math.sin(v),O=D*y+B*U,ee=G*y+V*U,B=B*y-D*U,V=V*y-G*U,D=O,G=ee),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=Xt(Math.sqrt(D*D+B*B+H*H)),_=Xt(Math.sqrt(V*V+Ke*Ke)),v=ao(G,V),S=Math.abs(v)>2e-4?v*Ds:0,M=Ye?1/(Ye<0?-Ye:Ye):0),n.svg&&(O=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!n0(_i(e,zt)),O&&e.setAttribute("transform",O))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Xt(d),n.scaleY=Xt(_),n.rotation=Xt(g)+a,n.rotationX=Xt(p)+a,n.rotationY=Xt(m)+a,n.skewX=S+a,n.skewY=E+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Qn]=Oc(c)),n.xOffset=n.yOffset=0,n.force3D=gi.force3D,n.renderTransform=n.svg?KM:Jg?i0:$M,n.uncache=0,n},Oc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Iu=function(e,t,n){var r=Cn(t);return Xt(parseFloat(t)+parseFloat(hs(e,"x",n+"px",r)))+r},$M=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,i0(e,t)},ys="0deg",ca="0px",Es=") ",i0=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,S=n.target,E=n.zOrigin,M="",T=m==="auto"&&e&&e!==1||m===!0;if(E&&(h!==ys||u!==ys)){var R=parseFloat(u)*Bo,A=Math.sin(R),v=Math.cos(R),y;R=parseFloat(h)*Bo,y=Math.cos(R),o=Iu(S,o,A*y*-E),a=Iu(S,a,-Math.sin(R)*-E),l=Iu(S,l,v*y*-E+E)}p!==ca&&(M+="perspective("+p+Es),(r||s)&&(M+="translate("+r+"%, "+s+"%) "),(T||o!==ca||a!==ca||l!==ca)&&(M+=l!==ca||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Es),c!==ys&&(M+="rotate("+c+Es),u!==ys&&(M+="rotateY("+u+Es),h!==ys&&(M+="rotateX("+h+Es),(f!==ys||d!==ys)&&(M+="skew("+f+", "+d+Es),(_!==1||g!==1)&&(M+="scale("+_+", "+g+Es),S.style[zt]=M||"translate(0, 0)"},KM=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,S=n.forceCSS,E=parseFloat(o),M=parseFloat(a),T,R,A,v,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Bo,c*=Bo,T=Math.cos(l)*h,R=Math.sin(l)*h,A=Math.sin(l-c)*-f,v=Math.cos(l-c)*f,c&&(u*=Bo,y=Math.tan(c-u),y=Math.sqrt(1+y*y),A*=y,v*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),T*=y,R*=y)),T=Xt(T),R=Xt(R),A=Xt(A),v=Xt(v)):(T=h,v=f,R=A=0),(E&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(E=hs(d,"x",o,"px"),M=hs(d,"y",a,"px")),(_||g||p||m)&&(E=Xt(E+_-(_*T+g*A)+p),M=Xt(M+g-(_*R+g*v)+m)),(r||s)&&(y=d.getBBox(),E=Xt(E+r/100*y.width),M=Xt(M+s/100*y.height)),y="matrix("+T+","+R+","+A+","+v+","+E+","+M+")",d.setAttribute("transform",y),S&&(d.style[zt]=y)},jM=function(e,t,n,r,s){var o=360,a=hn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ds:1),c=l-r,u=r+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Np)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Np)%o-~~(c/o)*o)),e._pt=f=new Jn(e._pt,t,n,r,c,IM),f.e=u,f.u="deg",e._props.push(n),f},Gp=function(e,t){for(var n in t)e[n]=t[n];return e},ZM=function(e,t,n){var r=Gp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,_;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[zt]=t,a=ol(n,1),fs(n,zt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[zt],o[zt]=t,a=ol(n,1),o[zt]=c);for(l in Ur)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Cn(c),_=Cn(u),h=d!==_?hs(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new Jn(e._pt,a,l,h,f-h,Vf),e._pt.u=_||0,e._props.push(l));Gp(a,r)};Zn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});Nc[e>1?"border"+i:i]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(_){return br(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,h)}});var r0={name:"css",register:Gf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,_,g,p,m,S,E,M,T,R,A,v,y;wd||Gf(),this.styles=this.styles||Zg(e),v=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(ui[g]&&kg(g,t,n,r,e,s)))){if(d=typeof u,_=Nc[g],d==="function"&&(u=u.call(n,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=nl(u)),_)_(this,e,g,u,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",as.lastIndex=0,as.test(c)||(p=Cn(c),m=Cn(u),m?p!==m&&(c=hs(e,g,c,m)+m):p&&(u+=p)),this.add(a,"setProperty",c,u,r,s,0,0,g),o.push(g),v.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,s):l[g],hn(c)&&~c.indexOf("random(")&&(c=nl(c)),Cn(c+"")||c==="auto"||(c+=gi.units[g]||Cn(br(e,g))||""),(c+"").charAt(1)==="="&&(c=br(e,g))):c=br(e,g),f=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),g in ir&&(g==="autoAlpha"&&(f===1&&br(e,"visibility")==="hidden"&&h&&(f=0),v.push("visibility",0,a.visibility),ts(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=ir[g],~g.indexOf(",")&&(g=g.split(",")[0]))),E=g in Ur,E){if(this.styles.save(g),y=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=_i(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var U=e.style.perspective;e.style.perspective=u,u=_i(e,"perspective"),U?e.style.perspective=U:fs(e,"perspective")}h=parseFloat(u)}if(M||(T=e._gsap,T.renderTransform&&!t.parseTransform||ol(e,t.parseTransform),R=t.smoothOrigin!==!1&&T.smooth,M=this._pt=new Jn(this._pt,a,zt,0,1,T.renderTransform,T,0,-1),M.dep=1),g==="scale")this._pt=new Jn(this._pt,T,"scaleY",T.scaleY,(S?No(T.scaleY,S+h):h)-T.scaleY||0,Vf),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){v.push(Qn,0,a[Qn]),u=YM(u),T.svg?Wf(e,u,0,R,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==T.zOrigin&&ts(this,T,"zOrigin",T.zOrigin,m),ts(this,a,g,Oc(c),Oc(u)));continue}else if(g==="svgOrigin"){Wf(e,u,1,R,0,this);continue}else if(g in t0){jM(this,T,g,f,S?No(f,S+u):u);continue}else if(g==="smoothOrigin"){ts(this,T,"smooth",T.smooth,u);continue}else if(g==="force3D"){T[g]=u;continue}else if(g==="transform"){ZM(this,u,e);continue}}else g in a||(g=jo(g)||g);if(E||(h||h===0)&&(f||f===0)&&!DM.test(u)&&g in a)p=(c+"").substr((f+"").length),h||(h=0),m=Cn(u)||(g in gi.units?gi.units[g]:p),p!==m&&(f=hs(e,g,c,m)),this._pt=new Jn(this._pt,E?T:a,g,f,(S?No(f,S+h):h)-f,!E&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?FM:Vf),this._pt.u=m||0,E&&y!==u?(this._pt.b=c,this._pt.e=y,this._pt.r=UM):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=LM);else if(g in a)XM.call(this,e,g,c,S?S+u:u);else if(g in e)this.add(e,g,c||e[g],S?S+u:u,r,s);else if(g!=="parseTransform"){gd(g,u);continue}E||(g in a?v.push(g,0,a[g]):typeof e[g]=="function"?v.push(g,2,e[g]()):v.push(g,1,c||e[g])),o.push(g)}}A&&Yg(this)},render:function(e,t){if(t.tween._time||!Rd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:br,aliases:ir,getSetter:function(e,t,n){var r=ir[t];return r&&r.indexOf(",")<0&&(t=r),t in Ur&&t!==Qn&&(e._gsap.x||br(e,"x"))?n&&Fp===n?t==="scale"?zM:BM:(Fp=n||{})&&(t==="scale"?kM:VM):e.style&&!pd(e.style[t])?NM:~t.indexOf("-")?OM:Td(e,t)},core:{_removeProperty:fs,_getMatrix:Pd}};ni.utils.checkPrefix=jo;ni.core.getStyleSaver=Zg;(function(i,e,t,n){var r=Zn(i+","+e+","+t,function(s){Ur[s]=1});Zn(e,function(s){gi.units[s]="deg",t0[s]=1}),ir[r[13]]=i+","+e,Zn(n,function(s){var o=s.split(":");ir[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Zn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){gi.units[i]="px"});ni.registerPlugin(r0);var Rn=ni.registerPlugin(r0)||ni;Rn.core.Tween;function JM(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function QM(i,e,t){return e&&JM(i.prototype,e),i}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var pn,dc,di,ns,is,zo,s0,Is,Ba,o0,Rr,ki,a0,l0=function(){return pn||typeof window<"u"&&(pn=window.gsap)&&pn.registerPlugin&&pn},c0=1,Po=[],lt=[],lr=[],za=Date.now,Xf=function(e,t){return t},ey=function(){var e=Ba.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,lt),r.push.apply(r,lr),lt=n,lr=r,Xf=function(o,a){return t[o](a)}},ls=function(e,t){return~lr.indexOf(e)&&lr[lr.indexOf(e)+1][t]},ka=function(e){return!!~o0.indexOf(e)},Nn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:r!==!1,capture:!!s})},Un=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},El="scrollLeft",bl="scrollTop",Yf=function(){return Rr&&Rr.isPressed||lt.cache++},Bc=function(e,t){var n=function r(s){if(s||s===0){c0&&(di.history.scrollRestoration="manual");var o=Rr&&Rr.isPressed;s=r.v=Math.round(s)||(Rr&&Rr.iOS?1:0),e(s),r.cacheID=lt.cache,o&&Xf("ss",s)}else(t||lt.cache!==r.cacheID||Xf("ref"))&&(r.cacheID=lt.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},Wn={s:El,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Bc(function(i){return arguments.length?di.scrollTo(i,rn.sc()):di.pageXOffset||ns[El]||is[El]||zo[El]||0})},rn={s:bl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Wn,sc:Bc(function(i){return arguments.length?di.scrollTo(Wn.sc(),i):di.pageYOffset||ns[bl]||is[bl]||zo[bl]||0})},qn=function(e,t){return(t&&t._ctx&&t._ctx.selector||pn.utils.toArray)(e)[0]||(typeof e=="string"&&pn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},ty=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},ds=function(e,t){var n=t.s,r=t.sc;ka(e)&&(e=ns.scrollingElement||is);var s=lt.indexOf(e),o=r===rn.sc?1:2;!~s&&(s=lt.push(e)-1),lt[s+o]||Nn(e,"scroll",Yf);var a=lt[s+o],l=a||(lt[s+o]=Bc(ls(e,n),!0)||(ka(e)?r:Bc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=pn.getProperty(e,"scrollBehavior")==="smooth"),l},qf=function(e,t,n){var r=e,s=e,o=za(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,g){var p=za();g||p-o>l?(s=r,r=_,a=o,o=p):n?r+=_:r=s+(_-s)/(p-a)*(o-a)},h=function(){s=r=n?0:r,a=o=0},f=function(_){var g=a,p=s,m=za();return(_||_===0)&&_!==r&&u(_),o===a||m-a>c?0:(r+(n?p:-p))/((n?m:o)-g)*1e3};return{update:u,reset:h,getVelocity:f}},ua=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Wp=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},u0=function(){Ba=pn.core.globals().ScrollTrigger,Ba&&Ba.core&&ey()},f0=function(e){return pn=e||l0(),!dc&&pn&&typeof document<"u"&&document.body&&(di=window,ns=document,is=ns.documentElement,zo=ns.body,o0=[di,ns,is,zo],pn.utils.clamp,a0=pn.core.context||function(){},Is="onpointerenter"in zo?"pointer":"mouse",s0=qt.isTouch=di.matchMedia&&di.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in di||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ki=qt.eventTypes=("ontouchstart"in is?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in is?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return c0=0},500),u0(),dc=1),dc};Wn.op=rn;lt.cache=0;var qt=function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){dc||f0(pn)||console.warn("Please gsap.registerPlugin(Observer)"),Ba||u0();var r=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,S=n.onDrag,E=n.onPress,M=n.onRelease,T=n.onRight,R=n.onLeft,A=n.onUp,v=n.onDown,y=n.onChangeX,U=n.onChangeY,D=n.onChange,B=n.onToggleX,H=n.onToggleY,W=n.onHover,G=n.onHoverEnd,V=n.onMove,O=n.ignoreCheck,ee=n.isNormalizer,se=n.onGestureStart,N=n.onGestureEnd,_e=n.onWheel,ge=n.onEnable,He=n.onDisable,Ye=n.onClick,Ke=n.scrollSpeed,ne=n.capture,le=n.allowClicks,pe=n.lockAxis,Be=n.onLockAxis;this.target=a=qn(a)||is,this.vars=n,d&&(d=pn.utils.toArray(d)),r=r||1e-9,s=s||0,_=_||1,Ke=Ke||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(di.getComputedStyle(zo).lineHeight)||22);var Ne,Oe,ct,P,F,Y,te,L=this,C=0,ue=0,oe=n.passive||!u&&n.passive!==!1,re=ds(a,Wn),$=ds(a,rn),w=re(),x=$(),I=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ki[0]==="pointerdown",X=ka(a),K=a.ownerDocument||ns,q=[0,0,0],fe=[0,0,0],ce=0,be=function(){return ce=za()},Se=function(ze,et){return(L.event=ze)&&d&&ty(ze.target,d)||et&&I&&ze.pointerType!=="touch"||O&&O(ze,et)},ae=function(){L._vx.reset(),L._vy.reset(),Oe.pause(),h&&h(L)},de=function(){var ze=L.deltaX=Wp(q),et=L.deltaY=Wp(fe),we=Math.abs(ze)>=r,qe=Math.abs(et)>=r;D&&(we||qe)&&D(L,ze,et,q,fe),we&&(T&&L.deltaX>0&&T(L),R&&L.deltaX<0&&R(L),y&&y(L),B&&L.deltaX<0!=C<0&&B(L),C=L.deltaX,q[0]=q[1]=q[2]=0),qe&&(v&&L.deltaY>0&&v(L),A&&L.deltaY<0&&A(L),U&&U(L),H&&L.deltaY<0!=ue<0&&H(L),ue=L.deltaY,fe[0]=fe[1]=fe[2]=0),(P||ct)&&(V&&V(L),ct&&(p&&ct===1&&p(L),S&&S(L),ct=0),P=!1),Y&&!(Y=!1)&&Be&&Be(L),F&&(_e(L),F=!1),Ne=0},De=function(ze,et,we){q[we]+=ze,fe[we]+=et,L._vx.update(ze),L._vy.update(et),c?Ne||(Ne=requestAnimationFrame(de)):de()},Me=function(ze,et){pe&&!te&&(L.axis=te=Math.abs(ze)>Math.abs(et)?"x":"y",Y=!0),te!=="y"&&(q[2]+=ze,L._vx.update(ze,!0)),te!=="x"&&(fe[2]+=et,L._vy.update(et,!0)),c?Ne||(Ne=requestAnimationFrame(de)):de()},ve=function(ze){if(!Se(ze,1)){ze=ua(ze,u);var et=ze.clientX,we=ze.clientY,qe=et-L.x,We=we-L.y,$e=L.isDragging;L.x=et,L.y=we,($e||(qe||We)&&(Math.abs(L.startX-et)>=s||Math.abs(L.startY-we)>=s))&&(ct||(ct=$e?2:1),$e||(L.isDragging=!0),Me(qe,We))}},Xe=L.onPress=function(Pe){Se(Pe,1)||Pe&&Pe.button||(L.axis=te=null,Oe.pause(),L.isPressed=!0,Pe=ua(Pe),C=ue=0,L.startX=L.x=Pe.clientX,L.startY=L.y=Pe.clientY,L._vx.reset(),L._vy.reset(),Nn(ee?a:K,ki[1],ve,oe,!0),L.deltaX=L.deltaY=0,E&&E(L))},z=L.onRelease=function(Pe){if(!Se(Pe,1)){Un(ee?a:K,ki[1],ve,!0);var ze=!isNaN(L.y-L.startY),et=L.isDragging,we=et&&(Math.abs(L.x-L.startX)>3||Math.abs(L.y-L.startY)>3),qe=ua(Pe);!we&&ze&&(L._vx.reset(),L._vy.reset(),u&&le&&pn.delayedCall(.08,function(){if(za()-ce>300&&!Pe.defaultPrevented){if(Pe.target.click)Pe.target.click();else if(K.createEvent){var We=K.createEvent("MouseEvents");We.initMouseEvent("click",!0,!0,di,1,qe.screenX,qe.screenY,qe.clientX,qe.clientY,!1,!1,!1,!1,0,null),Pe.target.dispatchEvent(We)}}})),L.isDragging=L.isGesturing=L.isPressed=!1,h&&et&&!ee&&Oe.restart(!0),ct&&de(),m&&et&&m(L),M&&M(L,we)}},xe=function(ze){return ze.touches&&ze.touches.length>1&&(L.isGesturing=!0)&&se(ze,L.isDragging)},me=function(){return(L.isGesturing=!1)||N(L)},Te=function(ze){if(!Se(ze)){var et=re(),we=$();De((et-w)*Ke,(we-x)*Ke,1),w=et,x=we,h&&Oe.restart(!0)}},he=function(ze){if(!Se(ze)){ze=ua(ze,u),_e&&(F=!0);var et=(ze.deltaMode===1?l:ze.deltaMode===2?di.innerHeight:1)*_;De(ze.deltaX*et,ze.deltaY*et,0),h&&!ee&&Oe.restart(!0)}},ie=function(ze){if(!Se(ze)){var et=ze.clientX,we=ze.clientY,qe=et-L.x,We=we-L.y;L.x=et,L.y=we,P=!0,h&&Oe.restart(!0),(qe||We)&&Me(qe,We)}},Ie=function(ze){L.event=ze,W(L)},Ge=function(ze){L.event=ze,G(L)},dt=function(ze){return Se(ze)||ua(ze,u)&&Ye(L)};Oe=L._dc=pn.delayedCall(f||.25,ae).pause(),L.deltaX=L.deltaY=0,L._vx=qf(0,50,!0),L._vy=qf(0,50,!0),L.scrollX=re,L.scrollY=$,L.isDragging=L.isGesturing=L.isPressed=!1,a0(this),L.enable=function(Pe){return L.isEnabled||(Nn(X?K:a,"scroll",Yf),o.indexOf("scroll")>=0&&Nn(X?K:a,"scroll",Te,oe,ne),o.indexOf("wheel")>=0&&Nn(a,"wheel",he,oe,ne),(o.indexOf("touch")>=0&&s0||o.indexOf("pointer")>=0)&&(Nn(a,ki[0],Xe,oe,ne),Nn(K,ki[2],z),Nn(K,ki[3],z),le&&Nn(a,"click",be,!0,!0),Ye&&Nn(a,"click",dt),se&&Nn(K,"gesturestart",xe),N&&Nn(K,"gestureend",me),W&&Nn(a,Is+"enter",Ie),G&&Nn(a,Is+"leave",Ge),V&&Nn(a,Is+"move",ie)),L.isEnabled=!0,L.isDragging=L.isGesturing=L.isPressed=P=ct=!1,L._vx.reset(),L._vy.reset(),w=re(),x=$(),Pe&&Pe.type&&Xe(Pe),ge&&ge(L)),L},L.disable=function(){L.isEnabled&&(Po.filter(function(Pe){return Pe!==L&&ka(Pe.target)}).length||Un(X?K:a,"scroll",Yf),L.isPressed&&(L._vx.reset(),L._vy.reset(),Un(ee?a:K,ki[1],ve,!0)),Un(X?K:a,"scroll",Te,ne),Un(a,"wheel",he,ne),Un(a,ki[0],Xe,ne),Un(K,ki[2],z),Un(K,ki[3],z),Un(a,"click",be,!0),Un(a,"click",dt),Un(K,"gesturestart",xe),Un(K,"gestureend",me),Un(a,Is+"enter",Ie),Un(a,Is+"leave",Ge),Un(a,Is+"move",ie),L.isEnabled=L.isPressed=L.isDragging=!1,He&&He(L))},L.kill=L.revert=function(){L.disable();var Pe=Po.indexOf(L);Pe>=0&&Po.splice(Pe,1),Rr===L&&(Rr=0)},Po.push(L),ee&&ka(a)&&(Rr=L),L.enable(g)},QM(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i}();qt.version="3.14.2";qt.create=function(i){return new qt(i)};qt.register=f0;qt.getAll=function(){return Po.slice()};qt.getById=function(i){return Po.filter(function(e){return e.vars.id===i})[0]};l0()&&pn.registerPlugin(qt);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Fe,Ao,at,Dt,fi,vt,Dd,zc,al,Va,ya,Tl,En,ou,$f,zn,Xp,Yp,wo,h0,Lu,d0,Bn,Kf,p0,m0,qr,jf,Id,ko,Ld,Ha,Zf,Uu,Al=1,bn=Date.now,Fu=bn(),Ii=0,Ea=0,qp=function(e,t,n){var r=ci(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},$p=function(e,t){return t&&(!ci(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},ny=function i(){return Ea&&requestAnimationFrame(i)},Kp=function(){return ou=1},jp=function(){return ou=0},Zi=function(e){return e},ba=function(e){return Math.round(e*1e5)/1e5||0},_0=function(){return typeof window<"u"},g0=function(){return Fe||_0()&&(Fe=window.gsap)&&Fe.registerPlugin&&Fe},Zs=function(e){return!!~Dd.indexOf(e)},x0=function(e){return(e==="Height"?Ld:at["inner"+e])||fi["client"+e]||vt["client"+e]},v0=function(e){return ls(e,"getBoundingClientRect")||(Zs(e)?function(){return xc.width=at.innerWidth,xc.height=Ld,xc}:function(){return Ar(e)})},iy=function(e,t,n){var r=n.d,s=n.d2,o=n.a;return(o=ls(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?x0(s):e["client"+s])||0}},ry=function(e,t){return!t||~lr.indexOf(e)?v0(e):function(){return xc}},rr=function(e,t){var n=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+r)&&(o=ls(e,n))?o()-v0(e)()[s]:Zs(e)?(fi[n]||vt[n])-x0(r):e[n]-e["offset"+r])},wl=function(e,t){for(var n=0;n<wo.length;n+=3)(!t||~t.indexOf(wo[n+1]))&&e(wo[n],wo[n+1],wo[n+2])},ci=function(e){return typeof e=="string"},Pn=function(e){return typeof e=="function"},Ta=function(e){return typeof e=="number"},Ls=function(e){return typeof e=="object"},fa=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Nu=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},lo=Math.abs,S0="left",M0="top",Ud="right",Fd="bottom",qs="width",$s="height",Ga="Right",Wa="Left",Xa="Top",Ya="Bottom",jt="padding",bi="margin",Zo="Width",Nd="Height",nn="px",Ti=function(e){return at.getComputedStyle(e)},sy=function(e){var t=Ti(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Zp=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ar=function(e,t){var n=t&&Ti(e)[$f]!=="matrix(1, 0, 0, 1, 0, 0)"&&Fe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},kc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},y0=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},oy=function(e){return function(t){return Fe.utils.snap(y0(e),t)}},Od=function(e){var t=Fe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<n.length;a++)if(n[a]>=r)return n[a];return n[a-1]}else for(a=n.length,r+=o;a--;)if(n[a]<=r)return n[a];return n[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},ay=function(e){return function(t,n){return Od(y0(e))(t,n.direction)}},Rl=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},fn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},un=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Cl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Jp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Pl={toggleActions:"play",anticipatePin:0},Vc={top:0,left:0,center:.5,bottom:1,right:1},pc=function(e,t){if(ci(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in Vc?Vc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Dl=function(e,t,n,r,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,_=Dt.createElement("div"),g=Zs(n)||ls(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=g?vt:n,S=e.indexOf("start")!==-1,E=S?c:u,M="border-color:"+E+";font-size:"+h+";color:"+E+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(M+=(r===rn?Ud:Fd)+":"+(o+parseFloat(f))+"px;"),a&&(M+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=S,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=M,_.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+r.op.d2],mc(_,0,r,S),_},mc=function(e,t,n,r){var s={display:"block"},o=n[r?"os2":"p2"],a=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+o+Zo]=1,s["border"+a+Zo]=0,s[n.p]=t+"px",Fe.set(e,s)},ot=[],Jf={},ll,Qp=function(){return bn()-Ii>34&&(ll||(ll=requestAnimationFrame(Pr)))},co=function(){(!Bn||!Bn.isPressed||Bn.startX>vt.clientWidth)&&(lt.cache++,Bn?ll||(ll=requestAnimationFrame(Pr)):Pr(),Ii||Qs("scrollStart"),Ii=bn())},Ou=function(){m0=at.innerWidth,p0=at.innerHeight},Aa=function(e){lt.cache++,(e===!0||!En&&!d0&&!Dt.fullscreenElement&&!Dt.webkitFullscreenElement&&(!Kf||m0!==at.innerWidth||Math.abs(at.innerHeight-p0)>at.innerHeight*.25))&&zc.restart(!0)},Js={},ly=[],E0=function i(){return un(nt,"scrollEnd",i)||Bs(!0)},Qs=function(e){return Js[e]&&Js[e].map(function(t){return t()})||ly},li=[],b0=function(e){for(var t=0;t<li.length;t+=5)(!e||li[t+4]&&li[t+4].query===e)&&(li[t].style.cssText=li[t+1],li[t].getBBox&&li[t].setAttribute("transform",li[t+2]||""),li[t+3].uncache=1)},T0=function(){return lt.forEach(function(e){return Pn(e)&&++e.cacheID&&(e.rec=e())})},Bd=function(e,t){var n;for(zn=0;zn<ot.length;zn++)n=ot[zn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Ha=!0,t&&b0(t),t||Qs("revert")},A0=function(e,t){lt.cache++,(t||!kn)&&lt.forEach(function(n){return Pn(n)&&n.cacheID++&&(n.rec=0)}),ci(e)&&(at.history.scrollRestoration=Id=e)},kn,Ks=0,em,cy=function(){if(em!==Ks){var e=em=Ks;requestAnimationFrame(function(){return e===Ks&&Bs(!0)})}},w0=function(){vt.appendChild(ko),Ld=!Bn&&ko.offsetHeight||at.innerHeight,vt.removeChild(ko)},tm=function(e){return al(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Bs=function(e,t){if(fi=Dt.documentElement,vt=Dt.body,Dd=[at,Dt,fi,vt],Ii&&!e&&!Ha){fn(nt,"scrollEnd",E0);return}w0(),kn=nt.isRefreshing=!0,Ha||T0();var n=Qs("refreshInit");h0&&nt.sort(),t||Bd(),lt.forEach(function(r){Pn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),ot.slice(0).forEach(function(r){return r.refresh()}),Ha=!1,ot.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Zf=1,tm(!0),ot.forEach(function(r){var s=rr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),tm(!1),Zf=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),lt.forEach(function(r){Pn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),A0(Id,1),zc.pause(),Ks++,kn=2,Pr(2),ot.forEach(function(r){return Pn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),kn=nt.isRefreshing=!1,Qs("refresh")},Qf=0,_c=1,qa,Pr=function(e){if(e===2||!kn&&!Ha){nt.isUpdating=!0,qa&&qa.update(0);var t=ot.length,n=bn(),r=n-Fu>=50,s=t&&ot[0].scroll();if(_c=Qf>s?-1:1,kn||(Qf=s),r&&(Ii&&!ou&&n-Ii>200&&(Ii=0,Qs("scrollEnd")),ya=Fu,Fu=n),_c<0){for(zn=t;zn-- >0;)ot[zn]&&ot[zn].update(0,r);_c=1}else for(zn=0;zn<t;zn++)ot[zn]&&ot[zn].update(0,r);nt.isUpdating=!1}ll=0},eh=[S0,M0,Fd,Ud,bi+Ya,bi+Ga,bi+Xa,bi+Wa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],gc=eh.concat([qs,$s,"boxSizing","max"+Zo,"max"+Nd,"position",bi,jt,jt+Xa,jt+Ga,jt+Ya,jt+Wa]),uy=function(e,t,n){Vo(n);var r=e._gsap;if(r.spacerIsNative)Vo(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Bu=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=eh.length,o=t.style,a=e.style,l;s--;)l=eh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Fd]=a[Ud]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[qs]=kc(e,Wn)+nn,o[$s]=kc(e,rn)+nn,o[jt]=a[bi]=a[M0]=a[S0]="0",Vo(r),a[qs]=a["max"+Zo]=n[qs],a[$s]=a["max"+Nd]=n[$s],a[jt]=n[jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},fy=/([A-Z])/g,Vo=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,o;for((e.t._gsap||Fe.core.getCache(e.t)).uncache=1;r<n;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(fy,"-$1").toLowerCase())}},Il=function(e){for(var t=gc.length,n=e.style,r=[],s=0;s<t;s++)r.push(gc[s],n[gc[s]]);return r.t=e,r},hy=function(e,t,n){for(var r=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},xc={left:0,top:0},nm=function(e,t,n,r,s,o,a,l,c,u,h,f,d,_){Pn(e)&&(e=e(l)),ci(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?pc("0"+e.substr(3),n):0));var g=d?d.time():0,p,m,S;if(d&&d.seek(0),isNaN(e)||(e=+e),Ta(e))d&&(e=Fe.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&mc(a,n,r,!0);else{Pn(t)&&(t=t(l));var E=(e||"0").split(" "),M,T,R,A;S=qn(t,l)||vt,M=Ar(S)||{},(!M||!M.left&&!M.top)&&Ti(S).display==="none"&&(A=S.style.display,S.style.display="block",M=Ar(S),A?S.style.display=A:S.style.removeProperty("display")),T=pc(E[0],M[r.d]),R=pc(E[1]||"0",n),e=M[r.p]-c[r.p]-u+T+s-R,a&&mc(a,R,r,n-R<20||a._isStart&&R>20),n-=n-R}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var v=e+n,y=o._isStart;p="scroll"+r.d2,mc(o,v,r,y&&v>20||!y&&(h?Math.max(vt[p],fi[p]):o.parentNode[p])<=v+1),h&&(c=Ar(a),h&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+nn))}return d&&S&&(p=Ar(S),d.seek(f),m=Ar(S),d._caScrollDist=p[r.p]-m[r.p],e=e/d._caScrollDist*f),d&&d.seek(g),d?e:Math.round(e)},dy=/(webkit|moz|length|cssText|inset)/i,im=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===vt){e._stOrig=s.cssText,a=Ti(e);for(o in a)!+o&&!dy.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=r}else s.cssText=e._stOrig;Fe.core.getCache(e).uncache=1,t.appendChild(e)}},R0=function(e,t,n){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=r,r=Math.round(o),r}},Ll=function(e,t,n){var r={};r[t.p]="+="+n,Fe.set(e,r)},rm=function(e,t){var n=ds(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,_={};c=c||n();var g=R0(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=_,_[r]=function(){return g(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){lt.cache++,o.tween&&Pr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Fe.to(e,l),f};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},fn(e,"wheel",n.wheelHandler),nt.isTouch&&fn(e,"touchmove",n.wheelHandler),s},nt=function(){function i(t,n){Ao||i.register(Fe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),jf(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ea){this.update=this.refresh=this.kill=Zi;return}n=Zp(ci(n)||Ta(n)||n.nodeType?{trigger:n}:n,Pl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,S=s.onSnapComplete,E=s.once,M=s.snap,T=s.pinReparent,R=s.pinSpacer,A=s.containerAnimation,v=s.fastScrollEnd,y=s.preventOverlaps,U=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Wn:rn,D=!h&&h!==0,B=qn(n.scroller||at),H=Fe.core.getCache(B),W=Zs(B),G=("pinType"in n?n.pinType:ls(B,"pinType")||W&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=D&&n.toggleActions.split(" "),ee="markers"in n?n.markers:Pl.markers,se=W?0:parseFloat(Ti(B)["border"+U.p2+Zo])||0,N=this,_e=n.onRefreshInit&&function(){return n.onRefreshInit(N)},ge=iy(B,W,U),He=ry(B,W),Ye=0,Ke=0,ne=0,le=ds(B,U),pe,Be,Ne,Oe,ct,P,F,Y,te,L,C,ue,oe,re,$,w,x,I,X,K,q,fe,ce,be,Se,ae,de,De,Me,ve,Xe,z,xe,me,Te,he,ie,Ie,Ge;if(N._startClamp=N._endClamp=!1,N._dir=U,p*=45,N.scroller=B,N.scroll=A?A.time.bind(A):le,Oe=le(),N.vars=n,r=r||n.animation,"refreshPriority"in n&&(h0=1,n.refreshPriority===-9999&&(qa=N)),H.tweenScroll=H.tweenScroll||{top:rm(B,rn),left:rm(B,Wn)},N.tweenTo=pe=H.tweenScroll[U.p],N.scrubDuration=function(we){xe=Ta(we)&&we,xe?z?z.duration(we):z=Fe.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:xe,paused:!0,onComplete:function(){return m&&m(N)}}):(z&&z.progress(1).kill(),z=0)},r&&(r.vars.lazy=!1,r._initted&&!N.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),N.animation=r.pause(),r.scrollTrigger=N,N.scrubDuration(h),ve=0,l||(l=r.vars.id)),M&&((!Ls(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in vt.style&&Fe.set(W?[vt,fi]:B,{scrollBehavior:"auto"}),lt.forEach(function(we){return Pn(we)&&we.target===(W?Dt.scrollingElement||fi:B)&&(we.smooth=!1)}),Ne=Pn(M.snapTo)?M.snapTo:M.snapTo==="labels"?oy(r):M.snapTo==="labelsDirectional"?ay(r):M.directional!==!1?function(we,qe){return Od(M.snapTo)(we,bn()-Ke<500?0:qe.direction)}:Fe.utils.snap(M.snapTo),me=M.duration||{min:.1,max:2},me=Ls(me)?Va(me.min,me.max):Va(me,me),Te=Fe.delayedCall(M.delay||xe/2||.1,function(){var we=le(),qe=bn()-Ke<500,We=pe.tween;if((qe||Math.abs(N.getVelocity())<10)&&!We&&!ou&&Ye!==we){var $e=(we-P)/re,Gt=r&&!D?r.totalProgress():$e,Ze=qe?0:(Gt-Xe)/(bn()-ya)*1e3||0,Ut=Fe.utils.clamp(-$e,1-$e,lo(Ze/2)*Ze/.185),Qt=$e+(M.inertia===!1?0:Ut),Ft,yt,xt=M,xn=xt.onStart,Pt=xt.onInterrupt,vn=xt.onComplete;if(Ft=Ne(Qt,N),Ta(Ft)||(Ft=Qt),yt=Math.max(0,Math.round(P+Ft*re)),we<=F&&we>=P&&yt!==we){if(We&&!We._initted&&We.data<=lo(yt-we))return;M.inertia===!1&&(Ut=Ft-$e),pe(yt,{duration:me(lo(Math.max(lo(Qt-Gt),lo(Ft-Gt))*.185/Ze/.05||0)),ease:M.ease||"power3",data:lo(yt-we),onInterrupt:function(){return Te.restart(!0)&&Pt&&Pt(N)},onComplete:function(){N.update(),Ye=le(),r&&!D&&(z?z.resetTo("totalProgress",Ft,r._tTime/r._tDur):r.progress(Ft)),ve=Xe=r&&!D?r.totalProgress():N.progress,S&&S(N),vn&&vn(N)}},we,Ut*re,yt-we-Ut*re),xn&&xn(N,pe.tween)}}else N.isActive&&Ye!==we&&Te.restart(!0)}).pause()),l&&(Jf[l]=N),f=N.trigger=qn(f||d!==!0&&d),Ge=f&&f._gsap&&f._gsap.stRevert,Ge&&(Ge=Ge(N)),d=d===!0?f:qn(d),ci(a)&&(a={targets:f,className:a}),d&&(_===!1||_===bi||(_=!_&&d.parentNode&&d.parentNode.style&&Ti(d.parentNode).display==="flex"?!1:jt),N.pin=d,Be=Fe.core.getCache(d),Be.spacer?$=Be.pinState:(R&&(R=qn(R),R&&!R.nodeType&&(R=R.current||R.nativeElement),Be.spacerIsNative=!!R,R&&(Be.spacerState=Il(R))),Be.spacer=I=R||Dt.createElement("div"),I.classList.add("pin-spacer"),l&&I.classList.add("pin-spacer-"+l),Be.pinState=$=Il(d)),n.force3D!==!1&&Fe.set(d,{force3D:!0}),N.spacer=I=Be.spacer,Me=Ti(d),be=Me[_+U.os2],K=Fe.getProperty(d),q=Fe.quickSetter(d,U.a,nn),Bu(d,I,Me),x=Il(d)),ee){ue=Ls(ee)?Zp(ee,Jp):Jp,L=Dl("scroller-start",l,B,U,ue,0),C=Dl("scroller-end",l,B,U,ue,0,L),X=L["offset"+U.op.d2];var dt=qn(ls(B,"content")||B);Y=this.markerStart=Dl("start",l,dt,U,ue,X,0,A),te=this.markerEnd=Dl("end",l,dt,U,ue,X,0,A),A&&(Ie=Fe.quickSetter([Y,te],U.a,nn)),!G&&!(lr.length&&ls(B,"fixedMarkers")===!0)&&(sy(W?vt:B),Fe.set([L,C],{force3D:!0}),ae=Fe.quickSetter(L,U.a,nn),De=Fe.quickSetter(C,U.a,nn))}if(A){var Pe=A.vars.onUpdate,ze=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){N.update(0,0,1),Pe&&Pe.apply(A,ze||[])})}if(N.previous=function(){return ot[ot.indexOf(N)-1]},N.next=function(){return ot[ot.indexOf(N)+1]},N.revert=function(we,qe){if(!qe)return N.kill(!0);var We=we!==!1||!N.enabled,$e=En;We!==N.isReverted&&(We&&(he=Math.max(le(),N.scroll.rec||0),ne=N.progress,ie=r&&r.progress()),Y&&[Y,te,L,C].forEach(function(Gt){return Gt.style.display=We?"none":"block"}),We&&(En=N,N.update(We)),d&&(!T||!N.isActive)&&(We?uy(d,I,$):Bu(d,I,Ti(d),Se)),We||N.update(We),En=$e,N.isReverted=We)},N.refresh=function(we,qe,We,$e){if(!((En||!N.enabled)&&!qe)){if(d&&we&&Ii){fn(i,"scrollEnd",E0);return}!kn&&_e&&_e(N),En=N,pe.tween&&!We&&(pe.tween.kill(),pe.tween=0),z&&z.pause(),g&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Le){return Le.vars.immediateRender&&Le.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),N.isReverted||N.revert(!0,!0),N._subPinOffset=!1;var Gt=ge(),Ze=He(),Ut=A?A.duration():rr(B,U),Qt=re<=.01||!re,Ft=0,yt=$e||0,xt=Ls(We)?We.end:n.end,xn=n.endTrigger||f,Pt=Ls(We)?We.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),vn=N.pinnedContainer=n.pinnedContainer&&qn(n.pinnedContainer,N),Si=f&&Math.max(0,ot.indexOf(N))||0,en=Si,tn,an,mr,io,b,k,Q,J,j,ye,Ae,Ee,Ue;for(ee&&Ls(We)&&(Ee=Fe.getProperty(L,U.p),Ue=Fe.getProperty(C,U.p));en-- >0;)k=ot[en],k.end||k.refresh(0,1)||(En=N),Q=k.pin,Q&&(Q===f||Q===d||Q===vn)&&!k.isReverted&&(ye||(ye=[]),ye.unshift(k),k.revert(!0,!0)),k!==ot[en]&&(Si--,en--);for(Pn(Pt)&&(Pt=Pt(N)),Pt=qp(Pt,"start",N),P=nm(Pt,f,Gt,U,le(),Y,L,N,Ze,se,G,Ut,A,N._startClamp&&"_startClamp")||(d?-.001:0),Pn(xt)&&(xt=xt(N)),ci(xt)&&!xt.indexOf("+=")&&(~xt.indexOf(" ")?xt=(ci(Pt)?Pt.split(" ")[0]:"")+xt:(Ft=pc(xt.substr(2),Gt),xt=ci(Pt)?Pt:(A?Fe.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,P):P)+Ft,xn=f)),xt=qp(xt,"end",N),F=Math.max(P,nm(xt||(xn?"100% 0":Ut),xn,Gt,U,le()+Ft,te,C,N,Ze,se,G,Ut,A,N._endClamp&&"_endClamp"))||-.001,Ft=0,en=Si;en--;)k=ot[en]||{},Q=k.pin,Q&&k.start-k._pinPush<=P&&!A&&k.end>0&&(tn=k.end-(N._startClamp?Math.max(0,k.start):k.start),(Q===f&&k.start-k._pinPush<P||Q===vn)&&isNaN(Pt)&&(Ft+=tn*(1-k.progress)),Q===d&&(yt+=tn));if(P+=Ft,F+=Ft,N._startClamp&&(N._startClamp+=Ft),N._endClamp&&!kn&&(N._endClamp=F||-.001,F=Math.min(F,rr(B,U))),re=F-P||(P-=.01)&&.001,Qt&&(ne=Fe.utils.clamp(0,1,Fe.utils.normalize(P,F,he))),N._pinPush=yt,Y&&Ft&&(tn={},tn[U.a]="+="+Ft,vn&&(tn[U.p]="-="+le()),Fe.set([Y,te],tn)),d&&!(Zf&&N.end>=rr(B,U)))tn=Ti(d),io=U===rn,mr=le(),fe=parseFloat(K(U.a))+yt,!Ut&&F>1&&(Ae=(W?Dt.scrollingElement||fi:B).style,Ae={style:Ae,value:Ae["overflow"+U.a.toUpperCase()]},W&&Ti(vt)["overflow"+U.a.toUpperCase()]!=="scroll"&&(Ae.style["overflow"+U.a.toUpperCase()]="scroll")),Bu(d,I,tn),x=Il(d),an=Ar(d,!0),J=G&&ds(B,io?Wn:rn)(),_?(Se=[_+U.os2,re+yt+nn],Se.t=I,en=_===jt?kc(d,U)+re+yt:0,en&&(Se.push(U.d,en+nn),I.style.flexBasis!=="auto"&&(I.style.flexBasis=en+nn)),Vo(Se),vn&&ot.forEach(function(Le){Le.pin===vn&&Le.vars.pinSpacing!==!1&&(Le._subPinOffset=!0)}),G&&le(he)):(en=kc(d,U),en&&I.style.flexBasis!=="auto"&&(I.style.flexBasis=en+nn)),G&&(b={top:an.top+(io?mr-P:J)+nn,left:an.left+(io?J:mr-P)+nn,boxSizing:"border-box",position:"fixed"},b[qs]=b["max"+Zo]=Math.ceil(an.width)+nn,b[$s]=b["max"+Nd]=Math.ceil(an.height)+nn,b[bi]=b[bi+Xa]=b[bi+Ga]=b[bi+Ya]=b[bi+Wa]="0",b[jt]=tn[jt],b[jt+Xa]=tn[jt+Xa],b[jt+Ga]=tn[jt+Ga],b[jt+Ya]=tn[jt+Ya],b[jt+Wa]=tn[jt+Wa],w=hy($,b,T),kn&&le(0)),r?(j=r._initted,Lu(1),r.render(r.duration(),!0,!0),ce=K(U.a)-fe+re+yt,de=Math.abs(re-ce)>1,G&&de&&w.splice(w.length-2,2),r.render(0,!0,!0),j||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Lu(0)):ce=re,Ae&&(Ae.value?Ae.style["overflow"+U.a.toUpperCase()]=Ae.value:Ae.style.removeProperty("overflow-"+U.a));else if(f&&le()&&!A)for(an=f.parentNode;an&&an!==vt;)an._pinOffset&&(P-=an._pinOffset,F-=an._pinOffset),an=an.parentNode;ye&&ye.forEach(function(Le){return Le.revert(!1,!0)}),N.start=P,N.end=F,Oe=ct=kn?he:le(),!A&&!kn&&(Oe<he&&le(he),N.scroll.rec=0),N.revert(!1,!0),Ke=bn(),Te&&(Ye=-1,Te.restart(!0)),En=0,r&&D&&(r._initted||ie)&&r.progress()!==ie&&r.progress(ie||0,!0).render(r.time(),!0,!0),(Qt||ne!==N.progress||A||g||r&&!r._initted)&&(r&&!D&&(r._initted||ne||r.vars.immediateRender!==!1)&&r.totalProgress(A&&P<-.001&&!ne?Fe.utils.normalize(P,F,0):ne,!0),N.progress=Qt||(Oe-P)/re===ne?0:ne),d&&_&&(I._pinOffset=Math.round(N.progress*ce)),z&&z.invalidate(),isNaN(Ee)||(Ee-=Fe.getProperty(L,U.p),Ue-=Fe.getProperty(C,U.p),Ll(L,U,Ee),Ll(Y,U,Ee-($e||0)),Ll(C,U,Ue),Ll(te,U,Ue-($e||0))),Qt&&!kn&&N.update(),u&&!kn&&!oe&&(oe=!0,u(N),oe=!1)}},N.getVelocity=function(){return(le()-ct)/(bn()-ya)*1e3||0},N.endAnimation=function(){fa(N.callbackAnimation),r&&(z?z.progress(1):r.paused()?D||fa(r,N.direction<0,1):fa(r,r.reversed()))},N.labelToScroll=function(we){return r&&r.labels&&(P||N.refresh()||P)+r.labels[we]/r.duration()*re||0},N.getTrailing=function(we){var qe=ot.indexOf(N),We=N.direction>0?ot.slice(0,qe).reverse():ot.slice(qe+1);return(ci(we)?We.filter(function($e){return $e.vars.preventOverlaps===we}):We).filter(function($e){return N.direction>0?$e.end<=P:$e.start>=F})},N.update=function(we,qe,We){if(!(A&&!We&&!we)){var $e=kn===!0?he:N.scroll(),Gt=we?0:($e-P)/re,Ze=Gt<0?0:Gt>1?1:Gt||0,Ut=N.progress,Qt,Ft,yt,xt,xn,Pt,vn,Si;if(qe&&(ct=Oe,Oe=A?le():$e,M&&(Xe=ve,ve=r&&!D?r.totalProgress():Ze)),p&&d&&!En&&!Al&&Ii&&(!Ze&&P<$e+($e-ct)/(bn()-ya)*p?Ze=1e-4:Ze===1&&F>$e+($e-ct)/(bn()-ya)*p&&(Ze=.9999)),Ze!==Ut&&N.enabled){if(Qt=N.isActive=!!Ze&&Ze<1,Ft=!!Ut&&Ut<1,Pt=Qt!==Ft,xn=Pt||!!Ze!=!!Ut,N.direction=Ze>Ut?1:-1,N.progress=Ze,xn&&!En&&(yt=Ze&&!Ut?0:Ze===1?1:Ut===1?2:3,D&&(xt=!Pt&&O[yt+1]!=="none"&&O[yt+1]||O[yt],Si=r&&(xt==="complete"||xt==="reset"||xt in r))),y&&(Pt||Si)&&(Si||h||!r)&&(Pn(y)?y(N):N.getTrailing(y).forEach(function(mr){return mr.endAnimation()})),D||(z&&!En&&!Al?(z._dp._time-z._start!==z._time&&z.render(z._dp._time-z._start),z.resetTo?z.resetTo("totalProgress",Ze,r._tTime/r._tDur):(z.vars.totalProgress=Ze,z.invalidate().restart())):r&&r.totalProgress(Ze,!!(En&&(Ke||we)))),d){if(we&&_&&(I.style[_+U.os2]=be),!G)q(ba(fe+ce*Ze));else if(xn){if(vn=!we&&Ze>Ut&&F+1>$e&&$e+1>=rr(B,U),T)if(!we&&(Qt||vn)){var en=Ar(d,!0),tn=$e-P;im(d,vt,en.top+(U===rn?tn:0)+nn,en.left+(U===rn?0:tn)+nn)}else im(d,I);Vo(Qt||vn?w:x),de&&Ze<1&&Qt||q(fe+(Ze===1&&!vn?ce:0))}}M&&!pe.tween&&!En&&!Al&&Te.restart(!0),a&&(Pt||E&&Ze&&(Ze<1||!Uu))&&al(a.targets).forEach(function(mr){return mr.classList[Qt||E?"add":"remove"](a.className)}),o&&!D&&!we&&o(N),xn&&!En?(D&&(Si&&(xt==="complete"?r.pause().totalProgress(1):xt==="reset"?r.restart(!0).pause():xt==="restart"?r.restart(!0):r[xt]()),o&&o(N)),(Pt||!Uu)&&(c&&Pt&&Nu(N,c),V[yt]&&Nu(N,V[yt]),E&&(Ze===1?N.kill(!1,1):V[yt]=0),Pt||(yt=Ze===1?1:3,V[yt]&&Nu(N,V[yt]))),v&&!Qt&&Math.abs(N.getVelocity())>(Ta(v)?v:2500)&&(fa(N.callbackAnimation),z?z.progress(1):fa(r,xt==="reverse"?1:!Ze,1))):D&&o&&!En&&o(N)}if(De){var an=A?$e/A.duration()*(A._caScrollDist||0):$e;ae(an+(L._isFlipped?1:0)),De(an)}Ie&&Ie(-$e/A.duration()*(A._caScrollDist||0))}},N.enable=function(we,qe){N.enabled||(N.enabled=!0,fn(B,"resize",Aa),W||fn(B,"scroll",co),_e&&fn(i,"refreshInit",_e),we!==!1&&(N.progress=ne=0,Oe=ct=Ye=le()),qe!==!1&&N.refresh())},N.getTween=function(we){return we&&pe?pe.tween:z},N.setPositions=function(we,qe,We,$e){if(A){var Gt=A.scrollTrigger,Ze=A.duration(),Ut=Gt.end-Gt.start;we=Gt.start+Ut*we/Ze,qe=Gt.start+Ut*qe/Ze}N.refresh(!1,!1,{start:$p(we,We&&!!N._startClamp),end:$p(qe,We&&!!N._endClamp)},$e),N.update()},N.adjustPinSpacing=function(we){if(Se&&we){var qe=Se.indexOf(U.d)+1;Se[qe]=parseFloat(Se[qe])+we+nn,Se[1]=parseFloat(Se[1])+we+nn,Vo(Se)}},N.disable=function(we,qe){if(we!==!1&&N.revert(!0,!0),N.enabled&&(N.enabled=N.isActive=!1,qe||z&&z.pause(),he=0,Be&&(Be.uncache=1),_e&&un(i,"refreshInit",_e),Te&&(Te.pause(),pe.tween&&pe.tween.kill()&&(pe.tween=0)),!W)){for(var We=ot.length;We--;)if(ot[We].scroller===B&&ot[We]!==N)return;un(B,"resize",Aa),W||un(B,"scroll",co)}},N.kill=function(we,qe){N.disable(we,qe),z&&!qe&&z.kill(),l&&delete Jf[l];var We=ot.indexOf(N);We>=0&&ot.splice(We,1),We===zn&&_c>0&&zn--,We=0,ot.forEach(function($e){return $e.scroller===N.scroller&&(We=1)}),We||kn||(N.scroll.rec=0),r&&(r.scrollTrigger=null,we&&r.revert({kill:!1}),qe||r.kill()),Y&&[Y,te,L,C].forEach(function($e){return $e.parentNode&&$e.parentNode.removeChild($e)}),qa===N&&(qa=0),d&&(Be&&(Be.uncache=1),We=0,ot.forEach(function($e){return $e.pin===d&&We++}),We||(Be.spacer=0)),n.onKill&&n.onKill(N)},ot.push(N),N.enable(!1,!1),Ge&&Ge(N),r&&r.add&&!re){var et=N.update;N.update=function(){N.update=et,lt.cache++,P||F||N.refresh()},Fe.delayedCall(.01,N.update),re=.01,P=F=0}else N.refresh();d&&cy()},i.register=function(n){return Ao||(Fe=n||g0(),_0()&&window.document&&i.enable(),Ao=Ea),Ao},i.defaults=function(n){if(n)for(var r in n)Pl[r]=n[r];return Pl},i.disable=function(n,r){Ea=0,ot.forEach(function(o){return o[r?"kill":"disable"](n)}),un(at,"wheel",co),un(Dt,"scroll",co),clearInterval(Tl),un(Dt,"touchcancel",Zi),un(vt,"touchstart",Zi),Rl(un,Dt,"pointerdown,touchstart,mousedown",Kp),Rl(un,Dt,"pointerup,touchend,mouseup",jp),zc.kill(),wl(un);for(var s=0;s<lt.length;s+=3)Cl(un,lt[s],lt[s+1]),Cl(un,lt[s],lt[s+2])},i.enable=function(){if(at=window,Dt=document,fi=Dt.documentElement,vt=Dt.body,Fe&&(al=Fe.utils.toArray,Va=Fe.utils.clamp,jf=Fe.core.context||Zi,Lu=Fe.core.suppressOverwrites||Zi,Id=at.history.scrollRestoration||"auto",Qf=at.pageYOffset||0,Fe.core.globals("ScrollTrigger",i),vt)){Ea=1,ko=document.createElement("div"),ko.style.height="100vh",ko.style.position="absolute",w0(),ny(),qt.register(Fe),i.isTouch=qt.isTouch,qr=qt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Kf=qt.isTouch===1,fn(at,"wheel",co),Dd=[at,Dt,fi,vt],Fe.matchMedia?(i.matchMedia=function(c){var u=Fe.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Fe.addEventListener("matchMediaInit",function(){T0(),Bd()}),Fe.addEventListener("matchMediaRevert",function(){return b0()}),Fe.addEventListener("matchMedia",function(){Bs(0,1),Qs("matchMedia")}),Fe.matchMedia().add("(orientation: portrait)",function(){return Ou(),Ou})):console.warn("Requires GSAP 3.11.0 or later"),Ou(),fn(Dt,"scroll",co);var n=vt.hasAttribute("style"),r=vt.style,s=r.borderTopStyle,o=Fe.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Ar(vt),rn.m=Math.round(a.top+rn.sc())||0,Wn.m=Math.round(a.left+Wn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),n||(vt.setAttribute("style",""),vt.removeAttribute("style")),Tl=setInterval(Qp,250),Fe.delayedCall(.5,function(){return Al=0}),fn(Dt,"touchcancel",Zi),fn(vt,"touchstart",Zi),Rl(fn,Dt,"pointerdown,touchstart,mousedown",Kp),Rl(fn,Dt,"pointerup,touchend,mouseup",jp),$f=Fe.utils.checkPrefix("transform"),gc.push($f),Ao=bn(),zc=Fe.delayedCall(.2,Bs).pause(),wo=[Dt,"visibilitychange",function(){var c=at.innerWidth,u=at.innerHeight;Dt.hidden?(Xp=c,Yp=u):(Xp!==c||Yp!==u)&&Aa()},Dt,"DOMContentLoaded",Bs,at,"load",Bs,at,"resize",Aa],wl(fn),ot.forEach(function(c){return c.enable(0,1)}),l=0;l<lt.length;l+=3)Cl(un,lt[l],lt[l+1]),Cl(un,lt[l],lt[l+2])}},i.config=function(n){"limitCallbacks"in n&&(Uu=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Tl)||(Tl=r)&&setInterval(Qp,r),"ignoreMobileResize"in n&&(Kf=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(wl(un)||wl(fn,n.autoRefreshEvents||"none"),d0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=qn(n),o=lt.indexOf(s),a=Zs(s);~o&&lt.splice(o,a?6:2),r&&(a?lr.unshift(at,r,vt,r,fi,r):lr.unshift(s,r))},i.clearMatchMedia=function(n){ot.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var o=(ci(n)?qn(n):n).getBoundingClientRect(),a=o[s?qs:$s]*r||0;return s?o.right-a>0&&o.left+a<at.innerWidth:o.bottom-a>0&&o.top+a<at.innerHeight},i.positionInViewport=function(n,r,s){ci(n)&&(n=qn(n));var o=n.getBoundingClientRect(),a=o[s?qs:$s],l=r==null?a/2:r in Vc?Vc[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/at.innerWidth:(o.top+l)/at.innerHeight},i.killAll=function(n){if(ot.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=Js.killAll||[];Js={},r.forEach(function(s){return s()})}},i}();nt.version="3.14.2";nt.saveStyles=function(i){return i?al(i).forEach(function(e){if(e&&e.style){var t=li.indexOf(e);t>=0&&li.splice(t,5),li.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Fe.core.getCache(e),jf())}}):li};nt.revert=function(i,e){return Bd(!i,e)};nt.create=function(i,e){return new nt(i,e)};nt.refresh=function(i){return i?Aa(!0):(Ao||nt.register())&&Bs(!0)};nt.update=function(i){return++lt.cache&&Pr(i===!0?2:0)};nt.clearScrollMemory=A0;nt.maxScroll=function(i,e){return rr(i,e?Wn:rn)};nt.getScrollFunc=function(i,e){return ds(qn(i),e?Wn:rn)};nt.getById=function(i){return Jf[i]};nt.getAll=function(){return ot.filter(function(i){return i.vars.id!=="ScrollSmoother"})};nt.isScrolling=function(){return!!Ii};nt.snapDirectional=Od;nt.addEventListener=function(i,e){var t=Js[i]||(Js[i]=[]);~t.indexOf(e)||t.push(e)};nt.removeEventListener=function(i,e){var t=Js[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};nt.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Fe.delayedCall(r,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||d.restart(!0),h.push(_.trigger),f.push(_),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Pn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Pn(s)&&(s=s(),fn(nt,"refresh",function(){return s=e.batchMax()})),al(i).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(nt.create(c))}),t};var sm=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},zu=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(qt.isTouch?" pinch-zoom":""):"none",e===fi&&i(vt,t)},Ul={auto:1,scroll:1},py=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Fe.core.getCache(s),a=bn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==vt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ul[(l=Ti(s)).overflowY]||Ul[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Zs(s)&&(Ul[(l=Ti(s)).overflowY]||Ul[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},C0=function(e,t,n,r){return qt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&py,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&fn(Dt,qt.eventTypes[0],am,!1,!0)},onDisable:function(){return un(Dt,qt.eventTypes[0],am,!0)}})},my=/(input|label|select|textarea)/i,om,am=function(e){var t=my.test(e.target.tagName);(t||om)&&(e._gsapAllow=!0,om=t)},_y=function(e){Ls(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=qn(e.target)||fi,u=Fe.core.globals().ScrollSmoother,h=u&&u.get(),f=qr&&(e.content&&qn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=ds(c,rn),_=ds(c,Wn),g=1,p=(qt.isTouch&&at.visualViewport?at.visualViewport.scale*at.visualViewport.width:at.outerWidth)/at.innerWidth,m=0,S=Pn(r)?function(){return r(a)}:function(){return r||2.8},E,M,T=C0(c,e.type,!0,s),R=function(){return M=!1},A=Zi,v=Zi,y=function(){l=rr(c,rn),v=Va(qr?1:0,l),n&&(A=Va(0,rr(c,Wn))),E=Ks},U=function(){f._gsap.y=ba(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},D=function(){if(M){requestAnimationFrame(R);var ee=ba(a.deltaY/2),se=v(d.v-ee);if(f&&se!==d.v+d.offset){d.offset=se-d.v;var N=ba((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+N+", 0, 1)",f._gsap.y=N+"px",d.cacheID=lt.cache,Pr()}return!0}d.offset&&U(),M=!0},B,H,W,G,V=function(){y(),B.isActive()&&B.vars.scrollY>l&&(d()>l?B.progress(1)&&d(l):B.resetTo("scrollY",l))};return f&&Fe.set(f,{y:"+=0"}),e.ignoreCheck=function(O){return qr&&O.type==="touchmove"&&D()||g>1.05&&O.type!=="touchstart"||a.isGesturing||O.touches&&O.touches.length>1},e.onPress=function(){M=!1;var O=g;g=ba((at.visualViewport&&at.visualViewport.scale||1)/p),B.pause(),O!==g&&zu(c,g>1.01?!0:n?!1:"x"),H=_(),W=d(),y(),E=Ks},e.onRelease=e.onGestureStart=function(O,ee){if(d.offset&&U(),!ee)G.restart(!0);else{lt.cache++;var se=S(),N,_e;n&&(N=_(),_e=N+se*.05*-O.velocityX/.227,se*=sm(_,N,_e,rr(c,Wn)),B.vars.scrollX=A(_e)),N=d(),_e=N+se*.05*-O.velocityY/.227,se*=sm(d,N,_e,rr(c,rn)),B.vars.scrollY=v(_e),B.invalidate().duration(se).play(.01),(qr&&B.vars.scrollY>=l||N>=l-1)&&Fe.to({},{onUpdate:V,duration:se})}o&&o(O)},e.onWheel=function(){B._ts&&B.pause(),bn()-m>1e3&&(E=0,m=bn())},e.onChange=function(O,ee,se,N,_e){if(Ks!==E&&y(),ee&&n&&_(A(N[2]===ee?H+(O.startX-O.x):_()+ee-N[1])),se){d.offset&&U();var ge=_e[2]===se,He=ge?W+O.startY-O.y:d()+se-_e[1],Ye=v(He);ge&&He!==Ye&&(W+=Ye-He),d(Ye)}(se||ee)&&Pr()},e.onEnable=function(){zu(c,n?!1:"x"),nt.addEventListener("refresh",V),fn(at,"resize",V),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),T.enable()},e.onDisable=function(){zu(c,!0),un(at,"resize",V),nt.removeEventListener("refresh",V),T.kill()},e.lockAxis=e.lockAxis!==!1,a=new qt(e),a.iOS=qr,qr&&!d()&&d(1),qr&&Fe.ticker.add(Zi),G=a._dc,B=Fe.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:R0(d,d(),function(){return B.pause()})},onUpdate:Pr,onComplete:G.vars.onComplete}),a};nt.sort=function(i){if(Pn(i))return ot.sort(i);var e=at.pageYOffset||0;return nt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+at.innerHeight}),ot.sort(i||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};nt.observe=function(i){return new qt(i)};nt.normalizeScroll=function(i){if(typeof i>"u")return Bn;if(i===!0&&Bn)return Bn.enable();if(i===!1){Bn&&Bn.kill(),Bn=i;return}var e=i instanceof qt?i:_y(i);return Bn&&Bn.target===e.target&&Bn.kill(),Zs(e.target)&&(Bn=e),e};nt.core={_getVelocityProp:qf,_inputObserver:C0,_scrollers:lt,_proxies:lr,bridge:{ss:function(){Ii||Qs("scrollStart"),Ii=bn()},ref:function(){return En}}};g0()&&Fe.registerPlugin(nt);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zd="183",gy=0,lm=1,xy=2,vc=1,vy=2,wa=3,ps=0,ei=1,wr=2,Dr=0,Ho=1,cm=2,um=3,fm=4,Sy=5,Fs=100,My=101,yy=102,Ey=103,by=104,Ty=200,Ay=201,wy=202,Ry=203,th=204,nh=205,Cy=206,Py=207,Dy=208,Iy=209,Ly=210,Uy=211,Fy=212,Ny=213,Oy=214,ih=0,rh=1,sh=2,Jo=3,oh=4,ah=5,lh=6,ch=7,P0=0,By=1,zy=2,cr=0,D0=1,I0=2,L0=3,U0=4,F0=5,N0=6,O0=7,B0=300,eo=301,Qo=302,ku=303,Vu=304,au=306,uh=1e3,Cr=1001,fh=1002,mn=1003,ky=1004,Fl=1005,Dn=1006,Hu=1007,zs=1008,wi=1009,z0=1010,k0=1011,cl=1012,kd=1013,dr=1014,sr=1015,Fr=1016,Vd=1017,Hd=1018,ul=1020,V0=35902,H0=35899,G0=1021,W0=1022,Hi=1023,Nr=1026,ks=1027,X0=1028,Gd=1029,ea=1030,Wd=1031,Xd=1033,Sc=33776,Mc=33777,yc=33778,Ec=33779,hh=35840,dh=35841,ph=35842,mh=35843,_h=36196,gh=37492,xh=37496,vh=37488,Sh=37489,Mh=37490,yh=37491,Eh=37808,bh=37809,Th=37810,Ah=37811,wh=37812,Rh=37813,Ch=37814,Ph=37815,Dh=37816,Ih=37817,Lh=37818,Uh=37819,Fh=37820,Nh=37821,Oh=36492,Bh=36494,zh=36495,kh=36283,Vh=36284,Hh=36285,Gh=36286,Vy=3200,Hy=0,Gy=1,Jr="",Ei="srgb",ta="srgb-linear",Hc="linear",Et="srgb",uo=7680,hm=519,Wy=512,Xy=513,Yy=514,Yd=515,qy=516,$y=517,qd=518,Ky=519,dm=35044,pm="300 es",or=2e3,Gc=2001;function jy(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Wc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zy(){const i=Wc("canvas");return i.style.display="block",i}const mm={};function _m(...i){const e="THREE."+i.shift();console.log(e,...i)}function Y0(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function je(...i){i=Y0(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function mt(...i){i=Y0(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Xc(...i){const e=i.join(" ");e in mm||(mm[e]=!0,je(...i))}function Jy(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Qy={[ih]:rh,[sh]:lh,[oh]:ch,[Jo]:ah,[rh]:ih,[lh]:sh,[ch]:oh,[ah]:Jo};class ra{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gu=Math.PI/180,Wh=180/Math.PI;function ml(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function eE(i,e){return(i%e+e)%e}function Wu(i,e,t){return(1-t)*i+t*e}function ha(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class gt{constructor(e=0,t=0){gt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class sa{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],f=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(h!==g||l!==f||c!==d||u!==_){let p=l*f+c*d+u*_+h*g;p<0&&(f=-f,d=-d,_=-_,g=-g,p=-p);let m=1-a;if(p<.9995){const S=Math.acos(p),E=Math.sin(S);m=Math.sin(m*S)/E,a=Math.sin(a*S)/E,l=l*m+f*a,c=c*m+d*a,u=u*m+_*a,h=h*m+g*a}else{l=l*m+f*a,c=c*m+d*a,u=u*m+_*a,h=h*m+g*a;const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-a*d,e[t+2]=c*_+u*d+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),d=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,n=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xu.copy(this).projectOnVector(e),this.sub(Xu)}reflect(e){return this.sub(Xu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xu=new Z,gm=new sa;class tt{constructor(e,t,n,r,s,o,a,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=r[0],p=r[3],m=r[6],S=r[1],E=r[4],M=r[7],T=r[2],R=r[5],A=r[8];return s[0]=o*g+a*S+l*T,s[3]=o*p+a*E+l*R,s[6]=o*m+a*M+l*A,s[1]=c*g+u*S+h*T,s[4]=c*p+u*E+h*R,s[7]=c*m+u*M+h*A,s[2]=f*g+d*S+_*T,s[5]=f*p+d*E+_*R,s[8]=f*m+d*M+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,_=t*h+n*f+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(r*c-u*n)*g,e[2]=(a*n-r*o)*g,e[3]=f*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Yu.makeScale(e,t)),this}rotate(e){return this.premultiply(Yu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yu=new tt,xm=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vm=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tE(){const i={enabled:!0,workingColorSpace:ta,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Et&&(r.r=Ir(r.r),r.g=Ir(r.g),r.b=Ir(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Et&&(r.r=Go(r.r),r.g=Go(r.g),r.b=Go(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Jr?Hc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Xc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Xc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ta]:{primaries:e,whitePoint:n,transfer:Hc,toXYZ:xm,fromXYZ:vm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ei},outputColorSpaceConfig:{drawingBufferColorSpace:Ei}},[Ei]:{primaries:e,whitePoint:n,transfer:Et,toXYZ:xm,fromXYZ:vm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ei}}}),i}const ht=tE();function Ir(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Go(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let fo;class nE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fo===void 0&&(fo=Wc("canvas")),fo.width=e.width,fo.height=e.height;const r=fo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=fo}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ir(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ir(t[n]/255)*255):t[n]=Ir(t[n]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iE=0;class $d{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=ml(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(qu(r[o].image)):s.push(qu(r[o]))}else s=qu(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function qu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?nE.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}let rE=0;const $u=new Z;class Xn extends ra{constructor(e=Xn.DEFAULT_IMAGE,t=Xn.DEFAULT_MAPPING,n=Cr,r=Cr,s=Dn,o=zs,a=Hi,l=wi,c=Xn.DEFAULT_ANISOTROPY,u=Jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=ml(),this.name="",this.source=new $d(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($u).x}get height(){return this.source.getSize($u).y}get depth(){return this.source.getSize($u).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==B0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uh:e.x=e.x-Math.floor(e.x);break;case Cr:e.x=e.x<0?0:1;break;case fh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uh:e.y=e.y-Math.floor(e.y);break;case Cr:e.y=e.y<0?0:1;break;case fh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=B0;Xn.DEFAULT_ANISOTROPY=1;class Yt{constructor(e=0,t=0,n=0,r=1){Yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,M=(d+1)/2,T=(m+1)/2,R=(u+f)/4,A=(h+g)/4,v=(_+p)/4;return E>M&&E>T?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=R/n,s=A/n):M>T?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=R/r,s=v/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=A/s,r=v/s),this.set(n,r,s,t),this}let S=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(h-g)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sE extends ra{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Xn(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new $d(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ur extends sE{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class q0 extends Xn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class oE extends Xn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $t{constructor(e,t,n,r,s,o,a,l,c,u,h,f,d,_,g,p){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,f,d,_,g,p)}set(e,t,n,r,s,o,a,l,c,u,h,f,d,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/ho.setFromMatrixColumn(e,0).length(),s=1/ho.setFromMatrixColumn(e,1).length(),o=1/ho.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aE,e,lE)}lookAt(e,t,n){const r=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Vr.crossVectors(n,ri),Vr.lengthSq()===0&&(Math.abs(n.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Vr.crossVectors(n,ri)),Vr.normalize(),Nl.crossVectors(ri,Vr),r[0]=Vr.x,r[4]=Nl.x,r[8]=ri.x,r[1]=Vr.y,r[5]=Nl.y,r[9]=ri.y,r[2]=Vr.z,r[6]=Nl.z,r[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],S=n[3],E=n[7],M=n[11],T=n[15],R=r[0],A=r[4],v=r[8],y=r[12],U=r[1],D=r[5],B=r[9],H=r[13],W=r[2],G=r[6],V=r[10],O=r[14],ee=r[3],se=r[7],N=r[11],_e=r[15];return s[0]=o*R+a*U+l*W+c*ee,s[4]=o*A+a*D+l*G+c*se,s[8]=o*v+a*B+l*V+c*N,s[12]=o*y+a*H+l*O+c*_e,s[1]=u*R+h*U+f*W+d*ee,s[5]=u*A+h*D+f*G+d*se,s[9]=u*v+h*B+f*V+d*N,s[13]=u*y+h*H+f*O+d*_e,s[2]=_*R+g*U+p*W+m*ee,s[6]=_*A+g*D+p*G+m*se,s[10]=_*v+g*B+p*V+m*N,s[14]=_*y+g*H+p*O+m*_e,s[3]=S*R+E*U+M*W+T*ee,s[7]=S*A+E*D+M*G+T*se,s[11]=S*v+E*B+M*V+T*N,s[15]=S*y+E*H+M*O+T*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],p=e[11],m=e[15],S=l*d-c*f,E=a*d-c*h,M=a*f-l*h,T=o*d-c*u,R=o*f-l*u,A=o*h-a*u;return t*(g*S-p*E+m*M)-n*(_*S-p*T+m*R)+r*(_*E-g*T+m*A)-s*(_*M-g*R+p*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],p=e[14],m=e[15],S=t*a-n*o,E=t*l-r*o,M=t*c-s*o,T=n*l-r*a,R=n*c-s*a,A=r*c-s*l,v=u*g-h*_,y=u*p-f*_,U=u*m-d*_,D=h*p-f*g,B=h*m-d*g,H=f*m-d*p,W=S*H-E*B+M*D+T*U-R*y+A*v;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/W;return e[0]=(a*H-l*B+c*D)*G,e[1]=(r*B-n*H-s*D)*G,e[2]=(g*A-p*R+m*T)*G,e[3]=(f*R-h*A-d*T)*G,e[4]=(l*U-o*H-c*y)*G,e[5]=(t*H-r*U+s*y)*G,e[6]=(p*M-_*A-m*E)*G,e[7]=(u*A-f*M+d*E)*G,e[8]=(o*B-a*U+c*v)*G,e[9]=(n*U-t*B-s*v)*G,e[10]=(_*R-g*M+m*S)*G,e[11]=(h*M-u*R-d*S)*G,e[12]=(a*y-o*D-l*v)*G,e[13]=(t*D-n*y+r*v)*G,e[14]=(g*E-_*T-p*S)*G,e[15]=(u*T-h*E+f*S)*G,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,_=s*h,g=o*u,p=o*h,m=a*h,S=l*c,E=l*u,M=l*h,T=n.x,R=n.y,A=n.z;return r[0]=(1-(g+m))*T,r[1]=(d+M)*T,r[2]=(_-E)*T,r[3]=0,r[4]=(d-M)*R,r[5]=(1-(f+m))*R,r[6]=(p+S)*R,r[7]=0,r[8]=(_+E)*A,r[9]=(p-S)*A,r[10]=(1-(f+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=ho.set(r[0],r[1],r[2]).length();const a=ho.set(r[4],r[5],r[6]).length(),l=ho.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Oi.copy(this);const c=1/o,u=1/a,h=1/l;return Oi.elements[0]*=c,Oi.elements[1]*=c,Oi.elements[2]*=c,Oi.elements[4]*=u,Oi.elements[5]*=u,Oi.elements[6]*=u,Oi.elements[8]*=h,Oi.elements[9]*=h,Oi.elements[10]*=h,t.setFromRotationMatrix(Oi),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,r,s,o,a=or,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r);let _,g;if(l)_=s/(o-s),g=o*s/(o-s);else if(a===or)_=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Gc)_=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=or,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),d=-(n+r)/(n-r);let _,g;if(l)_=1/(o-s),g=o/(o-s);else if(a===or)_=-2/(o-s),g=-(o+s)/(o-s);else if(a===Gc)_=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ho=new Z,Oi=new $t,aE=new Z(0,0,0),lE=new Z(1,1,1),Vr=new Z,Nl=new Z,ri=new Z,Sm=new $t,Mm=new sa;class Or{constructor(e=0,t=0,n=0,r=Or.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mm.setFromEuler(this),this.setFromQuaternion(Mm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Or.DEFAULT_ORDER="XYZ";class $0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cE=0;const ym=new Z,po=new sa,gr=new $t,Ol=new Z,da=new Z,uE=new Z,fE=new sa,Em=new Z(1,0,0),bm=new Z(0,1,0),Tm=new Z(0,0,1),Am={type:"added"},hE={type:"removed"},mo={type:"childadded",child:null},Ku={type:"childremoved",child:null};class ti extends ra{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ti.DEFAULT_UP.clone();const e=new Z,t=new Or,n=new sa,r=new Z(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $t},normalMatrix:{value:new tt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=ti.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return po.setFromAxisAngle(e,t),this.quaternion.multiply(po),this}rotateOnWorldAxis(e,t){return po.setFromAxisAngle(e,t),this.quaternion.premultiply(po),this}rotateX(e){return this.rotateOnAxis(Em,e)}rotateY(e){return this.rotateOnAxis(bm,e)}rotateZ(e){return this.rotateOnAxis(Tm,e)}translateOnAxis(e,t){return ym.copy(e).applyQuaternion(this.quaternion),this.position.add(ym.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Em,e)}translateY(e){return this.translateOnAxis(bm,e)}translateZ(e){return this.translateOnAxis(Tm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ol.copy(e):Ol.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gr.lookAt(da,Ol,this.up):gr.lookAt(Ol,da,this.up),this.quaternion.setFromRotationMatrix(gr),r&&(gr.extractRotation(r.matrixWorld),po.setFromRotationMatrix(gr),this.quaternion.premultiply(po.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Am),mo.child=e,this.dispatchEvent(mo),mo.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hE),Ku.child=e,this.dispatchEvent(Ku),Ku.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gr.multiply(e.parent.matrixWorld)),e.applyMatrix4(gr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Am),mo.child=e,this.dispatchEvent(mo),mo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,e,uE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,fE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ti.DEFAULT_UP=new Z(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Bl extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dE={type:"move"};class ju{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bl;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const K0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},zl={h:0,s:0,l:0};function Zu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class bt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ht.workingColorSpace){if(e=eE(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Zu(o,s,e+1/3),this.g=Zu(o,s,e),this.b=Zu(o,s,e-1/3)}return ht.colorSpaceToWorking(this,r),this}setStyle(e,t=Ei){function n(s){s!==void 0&&parseFloat(s)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ei){const n=K0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}copyLinearToSRGB(e){return this.r=Go(e.r),this.g=Go(e.g),this.b=Go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ei){return ht.workingToColorSpace(yn.copy(this),e),Math.round(ut(yn.r*255,0,255))*65536+Math.round(ut(yn.g*255,0,255))*256+Math.round(ut(yn.b*255,0,255))}getHexString(e=Ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(yn.copy(this),t);const n=yn.r,r=yn.g,s=yn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=Ei){ht.workingToColorSpace(yn.copy(this),e);const t=yn.r,n=yn.g,r=yn.b;return e!==Ei?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+t,Hr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hr),e.getHSL(zl);const n=Wu(Hr.h,zl.h,t),r=Wu(Hr.s,zl.s,t),s=Wu(Hr.l,zl.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new bt;bt.NAMES=K0;class pE extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Or,this.environmentIntensity=1,this.environmentRotation=new Or,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Bi=new Z,xr=new Z,Ju=new Z,vr=new Z,_o=new Z,go=new Z,wm=new Z,Qu=new Z,ef=new Z,tf=new Z,nf=new Yt,rf=new Yt,sf=new Yt;class Vi{constructor(e=new Z,t=new Z,n=new Z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Bi.subVectors(e,t),r.cross(Bi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Bi.subVectors(r,t),xr.subVectors(n,t),Ju.subVectors(e,t);const o=Bi.dot(Bi),a=Bi.dot(xr),l=Bi.dot(Ju),c=xr.dot(xr),u=xr.dot(Ju),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,vr)===null?!1:vr.x>=0&&vr.y>=0&&vr.x+vr.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,vr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vr.x),l.addScaledVector(o,vr.y),l.addScaledVector(a,vr.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return nf.setScalar(0),rf.setScalar(0),sf.setScalar(0),nf.fromBufferAttribute(e,t),rf.fromBufferAttribute(e,n),sf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(nf,s.x),o.addScaledVector(rf,s.y),o.addScaledVector(sf,s.z),o}static isFrontFacing(e,t,n,r){return Bi.subVectors(n,t),xr.subVectors(e,t),Bi.cross(xr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),xr.subVectors(this.a,this.b),Bi.cross(xr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Vi.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;_o.subVectors(r,n),go.subVectors(s,n),Qu.subVectors(e,n);const l=_o.dot(Qu),c=go.dot(Qu);if(l<=0&&c<=0)return t.copy(n);ef.subVectors(e,r);const u=_o.dot(ef),h=go.dot(ef);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(_o,o);tf.subVectors(e,s);const d=_o.dot(tf),_=go.dot(tf);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(go,a);const p=u*_-d*h;if(p<=0&&h-u>=0&&d-_>=0)return wm.subVectors(s,r),a=(h-u)/(h-u+(d-_)),t.copy(r).addScaledVector(wm,a);const m=1/(p+g+f);return o=g*m,a=f*m,t.copy(n).addScaledVector(_o,o).addScaledVector(go,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class _l{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zi):zi.fromBufferAttribute(s,o),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kl.copy(n.boundingBox)),kl.applyMatrix4(e.matrixWorld),this.union(kl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pa),Vl.subVectors(this.max,pa),xo.subVectors(e.a,pa),vo.subVectors(e.b,pa),So.subVectors(e.c,pa),Gr.subVectors(vo,xo),Wr.subVectors(So,vo),bs.subVectors(xo,So);let t=[0,-Gr.z,Gr.y,0,-Wr.z,Wr.y,0,-bs.z,bs.y,Gr.z,0,-Gr.x,Wr.z,0,-Wr.x,bs.z,0,-bs.x,-Gr.y,Gr.x,0,-Wr.y,Wr.x,0,-bs.y,bs.x,0];return!of(t,xo,vo,So,Vl)||(t=[1,0,0,0,1,0,0,0,1],!of(t,xo,vo,So,Vl))?!1:(Hl.crossVectors(Gr,Wr),t=[Hl.x,Hl.y,Hl.z],of(t,xo,vo,So,Vl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Sr=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],zi=new Z,kl=new _l,xo=new Z,vo=new Z,So=new Z,Gr=new Z,Wr=new Z,bs=new Z,pa=new Z,Vl=new Z,Hl=new Z,Ts=new Z;function of(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ts.fromArray(i,s);const a=r.x*Math.abs(Ts.x)+r.y*Math.abs(Ts.y)+r.z*Math.abs(Ts.z),l=e.dot(Ts),c=t.dot(Ts),u=n.dot(Ts);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Kt=new Z,Gl=new gt;let mE=0;class Li{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=dm,this.updateRanges=[],this.gpuType=sr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gl.fromBufferAttribute(this,t),Gl.applyMatrix3(e),this.setXY(t,Gl.x,Gl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ha(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Yn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ha(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ha(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ha(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ha(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),n=Yn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),n=Yn(n,this.array),r=Yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),n=Yn(n,this.array),r=Yn(r,this.array),s=Yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dm&&(e.usage=this.usage),e}}class j0 extends Li{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Z0 extends Li{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ui extends Li{constructor(e,t,n){super(new Float32Array(e),t,n)}}const _E=new _l,ma=new Z,af=new Z;class lu{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_E.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);const t=ma.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ma,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(af.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add(af)),this.expandByPoint(ma.copy(e.center).sub(af))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let gE=0;const Mi=new $t,lf=new ti,Mo=new Z,si=new _l,_a=new _l,cn=new Z;class Fi extends ra{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=ml(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jy(e)?Z0:j0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new tt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,t,n){return Mi.makeTranslation(e,t,n),this.applyMatrix4(Mi),this}scale(e,t,n){return Mi.makeScale(e,t,n),this.applyMatrix4(Mi),this}lookAt(e){return lf.lookAt(e),lf.updateMatrix(),this.applyMatrix4(lf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mo).negate(),this.translate(Mo.x,Mo.y,Mo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ui(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _l);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];si.setFromBufferAttribute(s),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const n=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];_a.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(si.min,_a.min),si.expandByPoint(cn),cn.addVectors(si.max,_a.max),si.expandByPoint(cn)):(si.expandByPoint(_a.min),si.expandByPoint(_a.max))}si.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)cn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(cn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)cn.fromBufferAttribute(a,c),l&&(Mo.fromBufferAttribute(e,c),cn.add(Mo)),r=Math.max(r,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new Z,l[v]=new Z;const c=new Z,u=new Z,h=new Z,f=new gt,d=new gt,_=new gt,g=new Z,p=new Z;function m(v,y,U){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,U),f.fromBufferAttribute(s,v),d.fromBufferAttribute(s,y),_.fromBufferAttribute(s,U),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const D=1/(d.x*_.y-_.x*d.y);isFinite(D)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(D),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(D),a[v].add(g),a[y].add(g),a[U].add(g),l[v].add(p),l[y].add(p),l[U].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,y=S.length;v<y;++v){const U=S[v],D=U.start,B=U.count;for(let H=D,W=D+B;H<W;H+=3)m(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const E=new Z,M=new Z,T=new Z,R=new Z;function A(v){T.fromBufferAttribute(r,v),R.copy(T);const y=a[v];E.copy(y),E.sub(T.multiplyScalar(T.dot(y))).normalize(),M.crossVectors(R,y);const D=M.dot(l[v])<0?-1:1;o.setXYZW(v,E.x,E.y,E.z,D)}for(let v=0,y=S.length;v<y;++v){const U=S[v],D=U.start,B=U.count;for(let H=D,W=D+B;H<W;H+=3)A(e.getX(H+0)),A(e.getX(H+1)),A(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Li(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new Z,s=new Z,o=new Z,a=new Z,l=new Z,c=new Z,u=new Z,h=new Z;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let m=0;m<u;m++)f[_++]=c[d++]}return new Li(f,u,h)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fi,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let xE=0;class gl extends ra{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=ml(),this.name="",this.type="Material",this.blending=Ho,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=th,this.blendDst=nh,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uo,this.stencilZFail=uo,this.stencilZPass=uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ho&&(n.blending=this.blending),this.side!==ps&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==th&&(n.blendSrc=this.blendSrc),this.blendDst!==nh&&(n.blendDst=this.blendDst),this.blendEquation!==Fs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Jo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==uo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==uo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==uo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Mr=new Z,cf=new Z,Wl=new Z,Xr=new Z,uf=new Z,Xl=new Z,ff=new Z;class J0{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mr.copy(this.origin).addScaledVector(this.direction,t),Mr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){cf.copy(e).add(t).multiplyScalar(.5),Wl.copy(t).sub(e).normalize(),Xr.copy(this.origin).sub(cf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Wl),a=Xr.dot(this.direction),l=-Xr.dot(Wl),c=Xr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(cf).addScaledVector(Wl,f),d}intersectSphere(e,t){Mr.subVectors(e.center,this.origin);const n=Mr.dot(this.direction),r=Mr.dot(Mr)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Mr)!==null}intersectTriangle(e,t,n,r,s){uf.subVectors(t,e),Xl.subVectors(n,e),ff.crossVectors(uf,Xl);let o=this.direction.dot(ff),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xr.subVectors(this.origin,e);const l=a*this.direction.dot(Xl.crossVectors(Xr,Xl));if(l<0)return null;const c=a*this.direction.dot(uf.cross(Xr));if(c<0||l+c>o)return null;const u=-a*Xr.dot(ff);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kd extends gl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Or,this.combine=P0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rm=new $t,As=new J0,Yl=new lu,Cm=new Z,ql=new Z,$l=new Z,Kl=new Z,hf=new Z,jl=new Z,Pm=new Z,Zl=new Z;class Wi extends ti{constructor(e=new Fi,t=new Kd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){jl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(hf.fromBufferAttribute(h,e),o?jl.addScaledVector(hf,u):jl.addScaledVector(hf.sub(t),u))}t.add(jl)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yl.copy(n.boundingSphere),Yl.applyMatrix4(s),As.copy(e.ray).recast(e.near),!(Yl.containsPoint(As.origin)===!1&&(As.intersectSphere(Yl,Cm)===null||As.origin.distanceToSquared(Cm)>(e.far-e.near)**2))&&(Rm.copy(s).invert(),As.copy(e.ray).applyMatrix4(Rm),!(n.boundingBox!==null&&As.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=o[p.materialIndex],S=Math.max(p.start,d.start),E=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let M=S,T=E;M<T;M+=3){const R=a.getX(M),A=a.getX(M+1),v=a.getX(M+2);r=Jl(this,m,e,n,c,u,h,R,A,v),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const S=a.getX(p),E=a.getX(p+1),M=a.getX(p+2);r=Jl(this,o,e,n,c,u,h,S,E,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=o[p.materialIndex],S=Math.max(p.start,d.start),E=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let M=S,T=E;M<T;M+=3){const R=M,A=M+1,v=M+2;r=Jl(this,m,e,n,c,u,h,R,A,v),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const S=p,E=p+1,M=p+2;r=Jl(this,o,e,n,c,u,h,S,E,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function vE(i,e,t,n,r,s,o,a){let l;if(e.side===ei?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===ps,a),l===null)return null;Zl.copy(a),Zl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Zl);return c<t.near||c>t.far?null:{distance:c,point:Zl.clone(),object:i}}function Jl(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,ql),i.getVertexPosition(l,$l),i.getVertexPosition(c,Kl);const u=vE(i,e,t,n,ql,$l,Kl,Pm);if(u){const h=new Z;Vi.getBarycoord(Pm,ql,$l,Kl,h),r&&(u.uv=Vi.getInterpolatedAttribute(r,a,l,c,h,new gt)),s&&(u.uv1=Vi.getInterpolatedAttribute(s,a,l,c,h,new gt)),o&&(u.normal=Vi.getInterpolatedAttribute(o,a,l,c,h,new Z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new Z,materialIndex:0};Vi.getNormal(ql,$l,Kl,f.normal),u.face=f,u.barycoord=h}return u}class SE extends Xn{constructor(e=null,t=1,n=1,r,s,o,a,l,c=mn,u=mn,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const df=new Z,ME=new Z,yE=new tt;class Us{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=df.subVectors(n,t).cross(ME.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(df),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||yE.getNormalMatrix(e),r=this.coplanarPoint(df).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new lu,EE=new gt(.5,.5),Ql=new Z;class Q0{constructor(e=new Us,t=new Us,n=new Us,r=new Us,s=new Us,o=new Us){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=or,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],_=s[8],g=s[9],p=s[10],m=s[11],S=s[12],E=s[13],M=s[14],T=s[15];if(r[0].setComponents(c-o,d-u,m-_,T-S).normalize(),r[1].setComponents(c+o,d+u,m+_,T+S).normalize(),r[2].setComponents(c+a,d+h,m+g,T+E).normalize(),r[3].setComponents(c-a,d-h,m-g,T-E).normalize(),n)r[4].setComponents(l,f,p,M).normalize(),r[5].setComponents(c-l,d-f,m-p,T-M).normalize();else if(r[4].setComponents(c-l,d-f,m-p,T-M).normalize(),t===or)r[5].setComponents(c+l,d+f,m+p,T+M).normalize();else if(t===Gc)r[5].setComponents(l,f,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);const t=EE.distanceTo(e.center);return ws.radius=.7071067811865476+t,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ql.x=r.normal.x>0?e.max.x:e.min.x,Ql.y=r.normal.y>0?e.max.y:e.min.y,Ql.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ql)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ex extends gl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Dm=new $t,Xh=new J0,ec=new lu,tc=new Z;class bE extends ti{constructor(e=new Fi,t=new ex){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ec.copy(n.boundingSphere),ec.applyMatrix4(r),ec.radius+=s,e.ray.intersectsSphere(ec)===!1)return;Dm.copy(r).invert(),Xh.copy(e.ray).applyMatrix4(Dm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=f,g=d;_<g;_++){const p=c.getX(_);tc.fromBufferAttribute(h,p),Im(tc,p,l,r,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=f,g=d;_<g;_++)tc.fromBufferAttribute(h,_),Im(tc,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Im(i,e,t,n,r,s,o){const a=Xh.distanceSqToPoint(i);if(a<t){const l=new Z;Xh.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class tx extends Xn{constructor(e=[],t=eo,n,r,s,o,a,l,c,u){super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fl extends Xn{constructor(e,t,n=dr,r,s,o,a=mn,l=mn,c,u=Nr,h=1){if(u!==Nr&&u!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $d(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class TE extends fl{constructor(e,t=dr,n=eo,r,s,o=mn,a=mn,l,c=Nr){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class nx extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xl extends Fi{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ui(c,3)),this.setAttribute("normal",new Ui(u,3)),this.setAttribute("uv",new Ui(h,2));function _(g,p,m,S,E,M,T,R,A,v,y){const U=M/A,D=T/v,B=M/2,H=T/2,W=R/2,G=A+1,V=v+1;let O=0,ee=0;const se=new Z;for(let N=0;N<V;N++){const _e=N*D-H;for(let ge=0;ge<G;ge++){const He=ge*U-B;se[g]=He*S,se[p]=_e*E,se[m]=W,c.push(se.x,se.y,se.z),se[g]=0,se[p]=0,se[m]=R>0?1:-1,u.push(se.x,se.y,se.z),h.push(ge/A),h.push(1-N/v),O+=1}}for(let N=0;N<v;N++)for(let _e=0;_e<A;_e++){const ge=f+_e+G*N,He=f+_e+G*(N+1),Ye=f+(_e+1)+G*(N+1),Ke=f+(_e+1)+G*N;l.push(ge,He,Ke),l.push(He,Ye,Ke),ee+=6}a.addGroup(d,ee,y),d+=ee,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class jd extends Fi{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),c(n),u(),this.setAttribute("position",new Ui(s,3)),this.setAttribute("normal",new Ui(s.slice(),3)),this.setAttribute("uv",new Ui(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const E=new Z,M=new Z,T=new Z;for(let R=0;R<t.length;R+=3)d(t[R+0],E),d(t[R+1],M),d(t[R+2],T),l(E,M,T,S)}function l(S,E,M,T){const R=T+1,A=[];for(let v=0;v<=R;v++){A[v]=[];const y=S.clone().lerp(M,v/R),U=E.clone().lerp(M,v/R),D=R-v;for(let B=0;B<=D;B++)B===0&&v===R?A[v][B]=y:A[v][B]=y.clone().lerp(U,B/D)}for(let v=0;v<R;v++)for(let y=0;y<2*(R-v)-1;y++){const U=Math.floor(y/2);y%2===0?(f(A[v][U+1]),f(A[v+1][U]),f(A[v][U])):(f(A[v][U+1]),f(A[v+1][U+1]),f(A[v+1][U]))}}function c(S){const E=new Z;for(let M=0;M<s.length;M+=3)E.x=s[M+0],E.y=s[M+1],E.z=s[M+2],E.normalize().multiplyScalar(S),s[M+0]=E.x,s[M+1]=E.y,s[M+2]=E.z}function u(){const S=new Z;for(let E=0;E<s.length;E+=3){S.x=s[E+0],S.y=s[E+1],S.z=s[E+2];const M=p(S)/2/Math.PI+.5,T=m(S)/Math.PI+.5;o.push(M,1-T)}_(),h()}function h(){for(let S=0;S<o.length;S+=6){const E=o[S+0],M=o[S+2],T=o[S+4],R=Math.max(E,M,T),A=Math.min(E,M,T);R>.9&&A<.1&&(E<.2&&(o[S+0]+=1),M<.2&&(o[S+2]+=1),T<.2&&(o[S+4]+=1))}}function f(S){s.push(S.x,S.y,S.z)}function d(S,E){const M=S*3;E.x=e[M+0],E.y=e[M+1],E.z=e[M+2]}function _(){const S=new Z,E=new Z,M=new Z,T=new Z,R=new gt,A=new gt,v=new gt;for(let y=0,U=0;y<s.length;y+=9,U+=6){S.set(s[y+0],s[y+1],s[y+2]),E.set(s[y+3],s[y+4],s[y+5]),M.set(s[y+6],s[y+7],s[y+8]),R.set(o[U+0],o[U+1]),A.set(o[U+2],o[U+3]),v.set(o[U+4],o[U+5]),T.copy(S).add(E).add(M).divideScalar(3);const D=p(T);g(R,U+0,S,D),g(A,U+2,E,D),g(v,U+4,M,D)}}function g(S,E,M,T){T<0&&S.x===1&&(o[E]=S.x-1),M.x===0&&M.z===0&&(o[E]=T/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jd(e.vertices,e.indices,e.radius,e.detail)}}class Zd extends jd{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Zd(e.radius,e.detail)}}class cu extends Fi{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,d=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const S=m*f-o;for(let E=0;E<c;E++){const M=E*h-s;_.push(M,-S,0),g.push(0,0,1),p.push(E/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const E=S+c*m,M=S+c*(m+1),T=S+1+c*(m+1),R=S+1+c*m;d.push(E,M,R),d.push(M,T,R)}this.setIndex(d),this.setAttribute("position",new Ui(_,3)),this.setAttribute("normal",new Ui(g,3)),this.setAttribute("uv",new Ui(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cu(e.width,e.height,e.widthSegments,e.heightSegments)}}function na(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function On(i){const e={};for(let t=0;t<i.length;t++){const n=na(i[t]);for(const r in n)e[r]=n[r]}return e}function AE(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ix(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const wE={clone:na,merge:On};var RE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pr extends gl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=RE,this.fragmentShader=CE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=na(e.uniforms),this.uniformsGroups=AE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class PE extends pr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class DE extends gl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class IE extends gl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nc=new Z,ic=new sa,qi=new Z;class rx extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=or,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(nc,ic,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nc,ic,qi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(nc,ic,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nc,ic,qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yr=new Z,Lm=new gt,Um=new gt;class Ai extends rx{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wh*2*Math.atan(Math.tan(Gu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z),Yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z)}getViewSize(e,t){return this.getViewBounds(e,Lm,Um),t.subVectors(Um,Lm)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gu*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class sx extends rx{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const yo=-90,Eo=1;class LE extends ti{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ai(yo,Eo,e,t);r.layers=this.layers,this.add(r);const s=new Ai(yo,Eo,e,t);s.layers=this.layers,this.add(s);const o=new Ai(yo,Eo,e,t);o.layers=this.layers,this.add(o);const a=new Ai(yo,Eo,e,t);a.layers=this.layers,this.add(a);const l=new Ai(yo,Eo,e,t);l.layers=this.layers,this.add(l);const c=new Ai(yo,Eo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===or)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gc)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class UE extends Ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Fm(i,e,t,n){const r=FE(n);switch(t){case G0:return i*e;case X0:return i*e/r.components*r.byteLength;case Gd:return i*e/r.components*r.byteLength;case ea:return i*e*2/r.components*r.byteLength;case Wd:return i*e*2/r.components*r.byteLength;case W0:return i*e*3/r.components*r.byteLength;case Hi:return i*e*4/r.components*r.byteLength;case Xd:return i*e*4/r.components*r.byteLength;case Sc:case Mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yc:case Ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case dh:case mh:return Math.max(i,16)*Math.max(e,8)/4;case hh:case ph:return Math.max(i,8)*Math.max(e,8)/2;case _h:case gh:case vh:case Sh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xh:case Mh:case yh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Th:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case wh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Dh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Nh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Oh:case Bh:case zh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case kh:case Vh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Hh:case Gh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function FE(i){switch(i){case wi:case z0:return{byteLength:1,components:1};case cl:case k0:case Fr:return{byteLength:2,components:1};case Vd:case Hd:return{byteLength:2,components:4};case dr:case kd:case sr:return{byteLength:4,components:1};case V0:case H0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zd}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ox(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function NE(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],g=h[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const g=h[d];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var OE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BE=`#ifdef USE_ALPHAHASH
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
#endif`,zE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,HE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GE=`#ifdef USE_AOMAP
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
#endif`,WE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,XE=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,YE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$E=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jE=`#ifdef USE_IRIDESCENCE
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
#endif`,ZE=`#ifdef USE_BUMPMAP
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
#endif`,JE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,QE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ib=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ob=`#define PI 3.141592653589793
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
} // validated`,ab=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lb=`vec3 transformedNormal = objectNormal;
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
#endif`,cb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ub=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,db="gl_FragColor = linearToOutputTexel( gl_FragColor );",pb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mb=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,_b=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,gb=`#ifdef USE_ENVMAP
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
#endif`,xb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vb=`#ifdef USE_ENVMAP
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
#endif`,Sb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bb=`#ifdef USE_GRADIENTMAP
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
}`,Tb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ab=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rb=`uniform bool receiveShadow;
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
#endif`,Cb=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,Pb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Db=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ib=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ub=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Fb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nb=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,Ob=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,Bb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yb=`#if defined( USE_POINTS_UV )
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
#endif`,qb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$b=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jb=`#ifdef USE_MORPHTARGETS
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
#endif`,Qb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sT=`#ifdef USE_NORMALMAP
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
#endif`,oT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,hT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_T=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,vT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ST=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,MT=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,yT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ET=`#ifdef USE_SKINNING
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
#endif`,bT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TT=`#ifdef USE_SKINNING
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
#endif`,AT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,PT=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,DT=`#ifdef USE_TRANSMISSION
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
#endif`,IT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OT=`uniform sampler2D t2D;
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
}`,BT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HT=`#include <common>
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
}`,GT=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,WT=`#define DISTANCE
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
}`,XT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,YT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$T=`uniform float scale;
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
}`,KT=`uniform vec3 diffuse;
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
}`,jT=`#include <common>
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
}`,ZT=`uniform vec3 diffuse;
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
}`,JT=`#define LAMBERT
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
}`,QT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,eA=`#define MATCAP
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
}`,tA=`#define MATCAP
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
}`,nA=`#define NORMAL
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
}`,iA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rA=`#define PHONG
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
}`,sA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,oA=`#define STANDARD
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
}`,aA=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,lA=`#define TOON
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
}`,cA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,uA=`uniform float size;
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
}`,fA=`uniform vec3 diffuse;
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
}`,hA=`#include <common>
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
}`,dA=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,pA=`uniform float rotation;
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
}`,mA=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:OE,alphahash_pars_fragment:BE,alphamap_fragment:zE,alphamap_pars_fragment:kE,alphatest_fragment:VE,alphatest_pars_fragment:HE,aomap_fragment:GE,aomap_pars_fragment:WE,batching_pars_vertex:XE,batching_vertex:YE,begin_vertex:qE,beginnormal_vertex:$E,bsdfs:KE,iridescence_fragment:jE,bumpmap_pars_fragment:ZE,clipping_planes_fragment:JE,clipping_planes_pars_fragment:QE,clipping_planes_pars_vertex:eb,clipping_planes_vertex:tb,color_fragment:nb,color_pars_fragment:ib,color_pars_vertex:rb,color_vertex:sb,common:ob,cube_uv_reflection_fragment:ab,defaultnormal_vertex:lb,displacementmap_pars_vertex:cb,displacementmap_vertex:ub,emissivemap_fragment:fb,emissivemap_pars_fragment:hb,colorspace_fragment:db,colorspace_pars_fragment:pb,envmap_fragment:mb,envmap_common_pars_fragment:_b,envmap_pars_fragment:gb,envmap_pars_vertex:xb,envmap_physical_pars_fragment:Cb,envmap_vertex:vb,fog_vertex:Sb,fog_pars_vertex:Mb,fog_fragment:yb,fog_pars_fragment:Eb,gradientmap_pars_fragment:bb,lightmap_pars_fragment:Tb,lights_lambert_fragment:Ab,lights_lambert_pars_fragment:wb,lights_pars_begin:Rb,lights_toon_fragment:Pb,lights_toon_pars_fragment:Db,lights_phong_fragment:Ib,lights_phong_pars_fragment:Lb,lights_physical_fragment:Ub,lights_physical_pars_fragment:Fb,lights_fragment_begin:Nb,lights_fragment_maps:Ob,lights_fragment_end:Bb,logdepthbuf_fragment:zb,logdepthbuf_pars_fragment:kb,logdepthbuf_pars_vertex:Vb,logdepthbuf_vertex:Hb,map_fragment:Gb,map_pars_fragment:Wb,map_particle_fragment:Xb,map_particle_pars_fragment:Yb,metalnessmap_fragment:qb,metalnessmap_pars_fragment:$b,morphinstance_vertex:Kb,morphcolor_vertex:jb,morphnormal_vertex:Zb,morphtarget_pars_vertex:Jb,morphtarget_vertex:Qb,normal_fragment_begin:eT,normal_fragment_maps:tT,normal_pars_fragment:nT,normal_pars_vertex:iT,normal_vertex:rT,normalmap_pars_fragment:sT,clearcoat_normal_fragment_begin:oT,clearcoat_normal_fragment_maps:aT,clearcoat_pars_fragment:lT,iridescence_pars_fragment:cT,opaque_fragment:uT,packing:fT,premultiplied_alpha_fragment:hT,project_vertex:dT,dithering_fragment:pT,dithering_pars_fragment:mT,roughnessmap_fragment:_T,roughnessmap_pars_fragment:gT,shadowmap_pars_fragment:xT,shadowmap_pars_vertex:vT,shadowmap_vertex:ST,shadowmask_pars_fragment:MT,skinbase_vertex:yT,skinning_pars_vertex:ET,skinning_vertex:bT,skinnormal_vertex:TT,specularmap_fragment:AT,specularmap_pars_fragment:wT,tonemapping_fragment:RT,tonemapping_pars_fragment:CT,transmission_fragment:PT,transmission_pars_fragment:DT,uv_pars_fragment:IT,uv_pars_vertex:LT,uv_vertex:UT,worldpos_vertex:FT,background_vert:NT,background_frag:OT,backgroundCube_vert:BT,backgroundCube_frag:zT,cube_vert:kT,cube_frag:VT,depth_vert:HT,depth_frag:GT,distance_vert:WT,distance_frag:XT,equirect_vert:YT,equirect_frag:qT,linedashed_vert:$T,linedashed_frag:KT,meshbasic_vert:jT,meshbasic_frag:ZT,meshlambert_vert:JT,meshlambert_frag:QT,meshmatcap_vert:eA,meshmatcap_frag:tA,meshnormal_vert:nA,meshnormal_frag:iA,meshphong_vert:rA,meshphong_frag:sA,meshphysical_vert:oA,meshphysical_frag:aA,meshtoon_vert:lA,meshtoon_frag:cA,points_vert:uA,points_frag:fA,shadow_vert:hA,shadow_frag:dA,sprite_vert:pA,sprite_frag:mA},Ce={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Qi={basic:{uniforms:On([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:On([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new bt(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:On([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:On([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:On([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new bt(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:On([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:On([Ce.points,Ce.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:On([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:On([Ce.common,Ce.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:On([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:On([Ce.sprite,Ce.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:On([Ce.common,Ce.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:On([Ce.lights,Ce.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Qi.physical={uniforms:On([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const rc={r:0,b:0,g:0},Rs=new Or,_A=new $t;function gA(i,e,t,n,r,s){const o=new bt(0);let a=r===!0?0:1,l,c,u=null,h=0,f=null;function d(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){const M=S.backgroundBlurriness>0;E=e.get(E,M)}return E}function _(S){let E=!1;const M=d(S);M===null?p(o,a):M&&M.isColor&&(p(M,1),E=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(S,E){const M=d(E);M&&(M.isCubeTexture||M.mapping===au)?(c===void 0&&(c=new Wi(new xl(1,1,1),new pr({name:"BackgroundCubeMaterial",uniforms:na(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Rs.copy(E.backgroundRotation),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_A.makeRotationFromEuler(Rs)),c.material.toneMapped=ht.getTransfer(M.colorSpace)!==Et,(u!==M||h!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Wi(new cu(2,2),new pr({name:"BackgroundMaterial",uniforms:na(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ht.getTransfer(M.colorSpace)!==Et,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,E){S.getRGB(rc,ix(i)),t.buffers.color.setClear(rc.r,rc.g,rc.b,E,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,E=1){o.set(S),a=E,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,p(o,a)},render:_,addToRenderList:g,dispose:m}}function xA(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(D,B,H,W,G){let V=!1;const O=h(D,W,H,B);s!==O&&(s=O,c(s.object)),V=d(D,W,H,G),V&&_(D,W,H,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,M(D,B,H,W),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function h(D,B,H,W){const G=W.wireframe===!0;let V=n[B.id];V===void 0&&(V={},n[B.id]=V);const O=D.isInstancedMesh===!0?D.id:0;let ee=V[O];ee===void 0&&(ee={},V[O]=ee);let se=ee[H.id];se===void 0&&(se={},ee[H.id]=se);let N=se[G];return N===void 0&&(N=f(l()),se[G]=N),N}function f(D){const B=[],H=[],W=[];for(let G=0;G<t;G++)B[G]=0,H[G]=0,W[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:H,attributeDivisors:W,object:D,attributes:{},index:null}}function d(D,B,H,W){const G=s.attributes,V=B.attributes;let O=0;const ee=H.getAttributes();for(const se in ee)if(ee[se].location>=0){const _e=G[se];let ge=V[se];if(ge===void 0&&(se==="instanceMatrix"&&D.instanceMatrix&&(ge=D.instanceMatrix),se==="instanceColor"&&D.instanceColor&&(ge=D.instanceColor)),_e===void 0||_e.attribute!==ge||ge&&_e.data!==ge.data)return!0;O++}return s.attributesNum!==O||s.index!==W}function _(D,B,H,W){const G={},V=B.attributes;let O=0;const ee=H.getAttributes();for(const se in ee)if(ee[se].location>=0){let _e=V[se];_e===void 0&&(se==="instanceMatrix"&&D.instanceMatrix&&(_e=D.instanceMatrix),se==="instanceColor"&&D.instanceColor&&(_e=D.instanceColor));const ge={};ge.attribute=_e,_e&&_e.data&&(ge.data=_e.data),G[se]=ge,O++}s.attributes=G,s.attributesNum=O,s.index=W}function g(){const D=s.newAttributes;for(let B=0,H=D.length;B<H;B++)D[B]=0}function p(D){m(D,0)}function m(D,B){const H=s.newAttributes,W=s.enabledAttributes,G=s.attributeDivisors;H[D]=1,W[D]===0&&(i.enableVertexAttribArray(D),W[D]=1),G[D]!==B&&(i.vertexAttribDivisor(D,B),G[D]=B)}function S(){const D=s.newAttributes,B=s.enabledAttributes;for(let H=0,W=B.length;H<W;H++)B[H]!==D[H]&&(i.disableVertexAttribArray(H),B[H]=0)}function E(D,B,H,W,G,V,O){O===!0?i.vertexAttribIPointer(D,B,H,G,V):i.vertexAttribPointer(D,B,H,W,G,V)}function M(D,B,H,W){g();const G=W.attributes,V=H.getAttributes(),O=B.defaultAttributeValues;for(const ee in V){const se=V[ee];if(se.location>=0){let N=G[ee];if(N===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(N=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(N=D.instanceColor)),N!==void 0){const _e=N.normalized,ge=N.itemSize,He=e.get(N);if(He===void 0)continue;const Ye=He.buffer,Ke=He.type,ne=He.bytesPerElement,le=Ke===i.INT||Ke===i.UNSIGNED_INT||N.gpuType===kd;if(N.isInterleavedBufferAttribute){const pe=N.data,Be=pe.stride,Ne=N.offset;if(pe.isInstancedInterleavedBuffer){for(let Oe=0;Oe<se.locationSize;Oe++)m(se.location+Oe,pe.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Oe=0;Oe<se.locationSize;Oe++)p(se.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let Oe=0;Oe<se.locationSize;Oe++)E(se.location+Oe,ge/se.locationSize,Ke,_e,Be*ne,(Ne+ge/se.locationSize*Oe)*ne,le)}else{if(N.isInstancedBufferAttribute){for(let pe=0;pe<se.locationSize;pe++)m(se.location+pe,N.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let pe=0;pe<se.locationSize;pe++)p(se.location+pe);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let pe=0;pe<se.locationSize;pe++)E(se.location+pe,ge/se.locationSize,Ke,_e,ge*ne,ge/se.locationSize*pe*ne,le)}}else if(O!==void 0){const _e=O[ee];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(se.location,_e);break;case 3:i.vertexAttrib3fv(se.location,_e);break;case 4:i.vertexAttrib4fv(se.location,_e);break;default:i.vertexAttrib1fv(se.location,_e)}}}}S()}function T(){y();for(const D in n){const B=n[D];for(const H in B){const W=B[H];for(const G in W){const V=W[G];for(const O in V)u(V[O].object),delete V[O];delete W[G]}}delete n[D]}}function R(D){if(n[D.id]===void 0)return;const B=n[D.id];for(const H in B){const W=B[H];for(const G in W){const V=W[G];for(const O in V)u(V[O].object),delete V[O];delete W[G]}}delete n[D.id]}function A(D){for(const B in n){const H=n[B];for(const W in H){const G=H[W];if(G[D.id]===void 0)continue;const V=G[D.id];for(const O in V)u(V[O].object),delete V[O];delete G[D.id]}}}function v(D){for(const B in n){const H=n[B],W=D.isInstancedMesh===!0?D.id:0,G=H[W];if(G!==void 0){for(const V in G){const O=G[V];for(const ee in O)u(O[ee].object),delete O[ee];delete G[V]}delete H[W],Object.keys(H).length===0&&delete n[B]}}}function y(){U(),o=!0,s!==r&&(s=r,c(s.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:y,resetDefaultState:U,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:p,disableUnusedAttributes:S}}function vA(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*f[g];t.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function SA(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Hi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const v=A===Fr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==wi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==sr&&!v)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(je("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:M,maxSamples:T,samples:R}}function MA(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Us,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,m=i.get(h);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const S=s?0:n,E=S*4;let M=m.clippingState||null;l.value=M,M=u(_,f,E,d);for(let T=0;T!==E;++T)M[T]=t[T];m.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,M=d;E!==g;++E,M+=4)o.copy(h[E]).applyMatrix4(S,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}const rs=4,Nm=[.125,.215,.35,.446,.526,.582],Ns=20,yA=256,ga=new sx,Om=new bt;let pf=null,mf=0,_f=0,gf=!1;const EA=new Z;class Bm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=EA}=s;pf=this._renderer.getRenderTarget(),mf=this._renderer.getActiveCubeFace(),_f=this._renderer.getActiveMipmapLevel(),gf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=km(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(pf,mf,_f),this._renderer.xr.enabled=gf,e.scissorTest=!1,bo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===eo||e.mapping===Qo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pf=this._renderer.getRenderTarget(),mf=this._renderer.getActiveCubeFace(),_f=this._renderer.getActiveMipmapLevel(),gf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Fr,format:Hi,colorSpace:ta,depthBuffer:!1},r=zm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zm(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=bA(s)),this._blurMaterial=AA(s,e,t),this._ggxMaterial=TA(s,e,t)}return r}_compileMaterial(e){const t=new Wi(new Fi,e);this._renderer.compile(t,ga)}_sceneToCubeUV(e,t,n,r,s){const l=new Ai(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Om),h.toneMapping=cr,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wi(new xl,new Kd({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,p=g.material;let m=!1;const S=e.background;S?S.isColor&&(p.color.copy(S),e.background=null,m=!0):(p.color.copy(Om),m=!0);for(let E=0;E<6;E++){const M=E%3;M===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[E],s.y,s.z)):M===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[E]));const T=this._cubeSize;bo(r,M*T,E>2?T:0,T,T),h.setRenderTarget(r),m&&h.render(g,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===eo||e.mapping===Qo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=km());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;bo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ga)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:_}=this,g=this._sizeLods[n],p=3*g*(n>_-rs?n-_+rs:0),m=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=_-t,bo(s,p,m,3*g,2*g),r.setRenderTarget(s),r.render(a,ga),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-n,bo(e,p,m,3*g,2*g),r.setRenderTarget(e),r.render(a,ga)}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&mt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=c;const f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ns-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):Ns;p>Ns&&je(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ns}`);const m=[];let S=0;for(let A=0;A<Ns;++A){const v=A/g,y=Math.exp(-v*v/2);m.push(y),A===0?S+=y:A<p&&(S+=2*y)}for(let A=0;A<m.length;A++)m[A]=m[A]/S;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=_,f.mipInt.value=E-n;const M=this._sizeLods[r],T=3*M*(r>E-rs?r-E+rs:0),R=4*(this._cubeSize-M);bo(t,T,R,3*M,2*M),l.setRenderTarget(t),l.render(h,ga)}}function bA(i){const e=[],t=[],n=[];let r=i;const s=i-rs+1+Nm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-rs?l=Nm[o-i+rs-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,p=2,m=1,S=new Float32Array(g*_*d),E=new Float32Array(p*_*d),M=new Float32Array(m*_*d);for(let R=0;R<d;R++){const A=R%3*2/3-1,v=R>2?0:-1,y=[A,v,0,A+2/3,v,0,A+2/3,v+1,0,A,v,0,A+2/3,v+1,0,A,v+1,0];S.set(y,g*_*R),E.set(f,p*_*R);const U=[R,R,R,R,R,R];M.set(U,m*_*R)}const T=new Fi;T.setAttribute("position",new Li(S,g)),T.setAttribute("uv",new Li(E,p)),T.setAttribute("faceIndex",new Li(M,m)),n.push(new Wi(T,null)),r>rs&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function zm(i,e,t){const n=new ur(i,e,t);return n.texture.mapping=au,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function TA(i,e,t){return new pr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function AA(i,e,t){const n=new Float32Array(Ns),r=new Z(0,1,0);return new pr({name:"SphericalGaussianBlur",defines:{n:Ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:uu(),fragmentShader:`

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
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function km(){return new pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uu(),fragmentShader:`

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
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function Vm(){return new pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function uu(){return`

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
	`}class ax extends ur{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new tx(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new xl(5,5,5),s=new pr({name:"CubemapFromEquirect",uniforms:na(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ei,blending:Dr});s.uniforms.tEquirect.value=t;const o=new Wi(r,s),a=t.minFilter;return t.minFilter===zs&&(t.minFilter=Dn),new LE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}function wA(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===ku||d===Vu)if(e.has(f)){const _=e.get(f).texture;return a(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const g=new ax(_.height);return g.fromEquirectangularTexture(i,f),e.set(f,g),f.addEventListener("dispose",c),a(g.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const d=f.mapping,_=d===ku||d===Vu,g=d===eo||d===Qo;if(_||g){let p=t.get(f);const m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Bm(i)),p=_?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const S=f.image;return _&&S&&S.height>0||g&&S&&l(S)?(n===null&&(n=new Bm(i)),p=_?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function a(f,d){return d===ku?f.mapping=eo:d===Vu&&(f.mapping=Qo),f}function l(f){let d=0;const _=6;for(let g=0;g<_;g++)f[g]!==void 0&&d++;return d===_}function c(f){const d=f.target;d.removeEventListener("dispose",c);const _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function u(f){const d=f.target;d.removeEventListener("dispose",u);const _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function RA(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Xc("WebGLRenderer: "+n+" extension not supported."),r}}}function CA(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],i.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(_===void 0)return;if(d!==null){const S=d.array;g=d.version;for(let E=0,M=S.length;E<M;E+=3){const T=S[E+0],R=S[E+1],A=S[E+2];f.push(T,R,R,A,A,T)}}else{const S=_.array;g=_.version;for(let E=0,M=S.length/3-1;E<M;E+=3){const T=E+0,R=E+1,A=E+2;f.push(T,R,R,A,A,T)}}const p=new(_.count>=65535?Z0:j0)(f,1);p.version=g;const m=s.get(h);m&&e.remove(m),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function PA(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,s,f*o),t.update(d,n,1)}function c(f,d,_){_!==0&&(i.drawElementsInstanced(n,d,s,f*o,_),t.update(d,n,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,_);let p=0;for(let m=0;m<_;m++)p+=d[m];t.update(p,n,1)}function h(f,d,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,g,0,_);let m=0;for(let S=0;S<_;S++)m+=d[S]*g[S];t.update(m,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function DA(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:mt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function IA(i,e,t){const n=new WeakMap,r=new Yt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let U=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",U)};var d=U;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),g===!0&&(M=2),p===!0&&(M=3);let T=a.attributes.position.count*M,R=1;T>e.maxTextureSize&&(R=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*R*4*h),v=new q0(A,T,R,h);v.type=sr,v.needsUpdate=!0;const y=M*4;for(let D=0;D<h;D++){const B=m[D],H=S[D],W=E[D],G=T*R*4*D;for(let V=0;V<B.count;V++){const O=V*y;_===!0&&(r.fromBufferAttribute(B,V),A[G+O+0]=r.x,A[G+O+1]=r.y,A[G+O+2]=r.z,A[G+O+3]=0),g===!0&&(r.fromBufferAttribute(H,V),A[G+O+4]=r.x,A[G+O+5]=r.y,A[G+O+6]=r.z,A[G+O+7]=0),p===!0&&(r.fromBufferAttribute(W,V),A[G+O+8]=r.x,A[G+O+9]=r.y,A[G+O+10]=r.z,A[G+O+11]=W.itemSize===4?r.w:1)}}f={count:h,texture:v,size:new gt(T,R)},n.set(a,f),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function LA(i,e,t,n,r){let s=new WeakMap;function o(c){const u=r.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const UA={[D0]:"LINEAR_TONE_MAPPING",[I0]:"REINHARD_TONE_MAPPING",[L0]:"CINEON_TONE_MAPPING",[U0]:"ACES_FILMIC_TONE_MAPPING",[N0]:"AGX_TONE_MAPPING",[O0]:"NEUTRAL_TONE_MAPPING",[F0]:"CUSTOM_TONE_MAPPING"};function FA(i,e,t,n,r){const s=new ur(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),o=new ur(e,t,{type:Fr,depthBuffer:!1,stencilBuffer:!1}),a=new Fi;a.setAttribute("position",new Ui([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Ui([0,2,0,0,2,0],2));const l=new PE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Wi(a,l),u=new sx(-1,1,1,-1,0,1);let h=null,f=null,d=!1,_,g=null,p=[],m=!1;this.setSize=function(S,E){s.setSize(S,E),o.setSize(S,E);for(let M=0;M<p.length;M++){const T=p[M];T.setSize&&T.setSize(S,E)}},this.setEffects=function(S){p=S,m=p.length>0&&p[0].isRenderPass===!0;const E=s.width,M=s.height;for(let T=0;T<p.length;T++){const R=p[T];R.setSize&&R.setSize(E,M)}},this.begin=function(S,E){if(d||S.toneMapping===cr&&p.length===0)return!1;if(g=E,E!==null){const M=E.width,T=E.height;(s.width!==M||s.height!==T)&&this.setSize(M,T)}return m===!1&&S.setRenderTarget(s),_=S.toneMapping,S.toneMapping=cr,!0},this.hasRenderPass=function(){return m},this.end=function(S,E){S.toneMapping=_,d=!0;let M=s,T=o;for(let R=0;R<p.length;R++){const A=p[R];if(A.enabled!==!1&&(A.render(S,T,M,E),A.needsSwap!==!1)){const v=M;M=T,T=v}}if(h!==S.outputColorSpace||f!==S.toneMapping){h=S.outputColorSpace,f=S.toneMapping,l.defines={},ht.getTransfer(h)===Et&&(l.defines.SRGB_TRANSFER="");const R=UA[f];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,S.setRenderTarget(g),S.render(c,u),g=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const lx=new Xn,Yh=new fl(1,1),cx=new q0,ux=new oE,fx=new tx,Hm=[],Gm=[],Wm=new Float32Array(16),Xm=new Float32Array(9),Ym=new Float32Array(4);function oa(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Hm[r];if(s===void 0&&(s=new Float32Array(r),Hm[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function on(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fu(i,e){let t=Gm[e];t===void 0&&(t=new Int32Array(e),Gm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function NA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function OA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2fv(this.addr,e),on(t,e)}}function BA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;i.uniform3fv(this.addr,e),on(t,e)}}function zA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4fv(this.addr,e),on(t,e)}}function kA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;Ym.set(n),i.uniformMatrix2fv(this.addr,!1,Ym),on(t,n)}}function VA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;Xm.set(n),i.uniformMatrix3fv(this.addr,!1,Xm),on(t,n)}}function HA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;Wm.set(n),i.uniformMatrix4fv(this.addr,!1,Wm),on(t,n)}}function GA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function WA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2iv(this.addr,e),on(t,e)}}function XA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3iv(this.addr,e),on(t,e)}}function YA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4iv(this.addr,e),on(t,e)}}function qA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $A(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2uiv(this.addr,e),on(t,e)}}function KA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3uiv(this.addr,e),on(t,e)}}function jA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4uiv(this.addr,e),on(t,e)}}function ZA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Yh.compareFunction=t.isReversedDepthBuffer()?qd:Yd,s=Yh):s=lx,t.setTexture2D(e||s,r)}function JA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ux,r)}function QA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||fx,r)}function e1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||cx,r)}function t1(i){switch(i){case 5126:return NA;case 35664:return OA;case 35665:return BA;case 35666:return zA;case 35674:return kA;case 35675:return VA;case 35676:return HA;case 5124:case 35670:return GA;case 35667:case 35671:return WA;case 35668:case 35672:return XA;case 35669:case 35673:return YA;case 5125:return qA;case 36294:return $A;case 36295:return KA;case 36296:return jA;case 35678:case 36198:case 36298:case 36306:case 35682:return ZA;case 35679:case 36299:case 36307:return JA;case 35680:case 36300:case 36308:case 36293:return QA;case 36289:case 36303:case 36311:case 36292:return e1}}function n1(i,e){i.uniform1fv(this.addr,e)}function i1(i,e){const t=oa(e,this.size,2);i.uniform2fv(this.addr,t)}function r1(i,e){const t=oa(e,this.size,3);i.uniform3fv(this.addr,t)}function s1(i,e){const t=oa(e,this.size,4);i.uniform4fv(this.addr,t)}function o1(i,e){const t=oa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function a1(i,e){const t=oa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function l1(i,e){const t=oa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function c1(i,e){i.uniform1iv(this.addr,e)}function u1(i,e){i.uniform2iv(this.addr,e)}function f1(i,e){i.uniform3iv(this.addr,e)}function h1(i,e){i.uniform4iv(this.addr,e)}function d1(i,e){i.uniform1uiv(this.addr,e)}function p1(i,e){i.uniform2uiv(this.addr,e)}function m1(i,e){i.uniform3uiv(this.addr,e)}function _1(i,e){i.uniform4uiv(this.addr,e)}function g1(i,e,t){const n=this.cache,r=e.length,s=fu(t,r);sn(n,s)||(i.uniform1iv(this.addr,s),on(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Yh:o=lx;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function x1(i,e,t){const n=this.cache,r=e.length,s=fu(t,r);sn(n,s)||(i.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ux,s[o])}function v1(i,e,t){const n=this.cache,r=e.length,s=fu(t,r);sn(n,s)||(i.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||fx,s[o])}function S1(i,e,t){const n=this.cache,r=e.length,s=fu(t,r);sn(n,s)||(i.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||cx,s[o])}function M1(i){switch(i){case 5126:return n1;case 35664:return i1;case 35665:return r1;case 35666:return s1;case 35674:return o1;case 35675:return a1;case 35676:return l1;case 5124:case 35670:return c1;case 35667:case 35671:return u1;case 35668:case 35672:return f1;case 35669:case 35673:return h1;case 5125:return d1;case 36294:return p1;case 36295:return m1;case 36296:return _1;case 35678:case 36198:case 36298:case 36306:case 35682:return g1;case 35679:case 36299:case 36307:return x1;case 35680:case 36300:case 36308:case 36293:return v1;case 36289:case 36303:case 36311:case 36292:return S1}}class y1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=t1(t.type)}}class E1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=M1(t.type)}}class b1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const xf=/(\w+)(\])?(\[|\.)?/g;function qm(i,e){i.seq.push(e),i.map[e.id]=e}function T1(i,e,t){const n=i.name,r=n.length;for(xf.lastIndex=0;;){const s=xf.exec(n),o=xf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){qm(t,c===void 0?new y1(a,i,e):new E1(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new b1(a),qm(t,h)),t=h}}}class bc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);T1(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function $m(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const A1=37297;let w1=0;function R1(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Km=new tt;function C1(i){ht._getMatrix(Km,ht.workingColorSpace,i);const e=`mat3( ${Km.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case Hc:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function jm(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+R1(i.getShaderSource(e),a)}else return s}function P1(i,e){const t=C1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const D1={[D0]:"Linear",[I0]:"Reinhard",[L0]:"Cineon",[U0]:"ACESFilmic",[N0]:"AgX",[O0]:"Neutral",[F0]:"Custom"};function I1(i,e){const t=D1[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const sc=new Z;function L1(){ht.getLuminanceCoefficients(sc);const i=sc.x.toFixed(4),e=sc.y.toFixed(4),t=sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ra).join(`
`)}function F1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function N1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ra(i){return i!==""}function Zm(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const O1=/^[ \t]*#include +<([\w\d./]+)>/gm;function qh(i){return i.replace(O1,z1)}const B1=new Map;function z1(i,e){let t=it[e];if(t===void 0){const n=B1.get(e);if(n!==void 0)t=it[n],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return qh(t)}const k1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qm(i){return i.replace(k1,V1)}function V1(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function e_(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const H1={[vc]:"SHADOWMAP_TYPE_PCF",[wa]:"SHADOWMAP_TYPE_VSM"};function G1(i){return H1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const W1={[eo]:"ENVMAP_TYPE_CUBE",[Qo]:"ENVMAP_TYPE_CUBE",[au]:"ENVMAP_TYPE_CUBE_UV"};function X1(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":W1[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Y1={[Qo]:"ENVMAP_MODE_REFRACTION"};function q1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Y1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $1={[P0]:"ENVMAP_BLENDING_MULTIPLY",[By]:"ENVMAP_BLENDING_MIX",[zy]:"ENVMAP_BLENDING_ADD"};function K1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":$1[i.combine]||"ENVMAP_BLENDING_NONE"}function j1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Z1(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=G1(t),c=X1(t),u=q1(t),h=K1(t),f=j1(t),d=U1(t),_=F1(s),g=r.createProgram();let p,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ra).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ra).join(`
`),m.length>0&&(m+=`
`)):(p=[e_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ra).join(`
`),m=[e_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cr?"#define TONE_MAPPING":"",t.toneMapping!==cr?it.tonemapping_pars_fragment:"",t.toneMapping!==cr?I1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,P1("linearToOutputTexel",t.outputColorSpace),L1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ra).join(`
`)),o=qh(o),o=Zm(o,t),o=Jm(o,t),a=qh(a),a=Zm(a,t),a=Jm(a,t),o=Qm(o),a=Qm(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===pm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=S+p+o,M=S+m+a,T=$m(r,r.VERTEX_SHADER,E),R=$m(r,r.FRAGMENT_SHADER,M);r.attachShader(g,T),r.attachShader(g,R),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(D){if(i.debug.checkShaderErrors){const B=r.getProgramInfoLog(g)||"",H=r.getShaderInfoLog(T)||"",W=r.getShaderInfoLog(R)||"",G=B.trim(),V=H.trim(),O=W.trim();let ee=!0,se=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,T,R);else{const N=jm(r,T,"vertex"),_e=jm(r,R,"fragment");mt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+N+`
`+_e)}else G!==""?je("WebGLProgram: Program Info Log:",G):(V===""||O==="")&&(se=!1);se&&(D.diagnostics={runnable:ee,programLog:G,vertexShader:{log:V,prefix:p},fragmentShader:{log:O,prefix:m}})}r.deleteShader(T),r.deleteShader(R),v=new bc(r,g),y=N1(r,g)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(g,A1)),U},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=w1++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=R,this}let J1=0;class Q1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ew(e),t.set(e,n)),n}}class ew{constructor(e){this.id=J1++,this.code=e,this.usedTimes=0}}function tw(i,e,t,n,r,s){const o=new $0,a=new Q1,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer;let f=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,y,U,D,B){const H=D.fog,W=B.geometry,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,O=e.get(v.envMap||G,V),ee=O&&O.mapping===au?O.image.height:null,se=d[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&je("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const N=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,_e=N!==void 0?N.length:0;let ge=0;W.morphAttributes.position!==void 0&&(ge=1),W.morphAttributes.normal!==void 0&&(ge=2),W.morphAttributes.color!==void 0&&(ge=3);let He,Ye,Ke,ne;if(se){const Pe=Qi[se];He=Pe.vertexShader,Ye=Pe.fragmentShader}else He=v.vertexShader,Ye=v.fragmentShader,a.update(v),Ke=a.getVertexShaderID(v),ne=a.getFragmentShaderID(v);const le=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),Be=B.isInstancedMesh===!0,Ne=B.isBatchedMesh===!0,Oe=!!v.map,ct=!!v.matcap,P=!!O,F=!!v.aoMap,Y=!!v.lightMap,te=!!v.bumpMap,L=!!v.normalMap,C=!!v.displacementMap,ue=!!v.emissiveMap,oe=!!v.metalnessMap,re=!!v.roughnessMap,$=v.anisotropy>0,w=v.clearcoat>0,x=v.dispersion>0,I=v.iridescence>0,X=v.sheen>0,K=v.transmission>0,q=$&&!!v.anisotropyMap,fe=w&&!!v.clearcoatMap,ce=w&&!!v.clearcoatNormalMap,be=w&&!!v.clearcoatRoughnessMap,Se=I&&!!v.iridescenceMap,ae=I&&!!v.iridescenceThicknessMap,de=X&&!!v.sheenColorMap,De=X&&!!v.sheenRoughnessMap,Me=!!v.specularMap,ve=!!v.specularColorMap,Xe=!!v.specularIntensityMap,z=K&&!!v.transmissionMap,xe=K&&!!v.thicknessMap,me=!!v.gradientMap,Te=!!v.alphaMap,he=v.alphaTest>0,ie=!!v.alphaHash,Ie=!!v.extensions;let Ge=cr;v.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Ge=i.toneMapping);const dt={shaderID:se,shaderType:v.type,shaderName:v.name,vertexShader:He,fragmentShader:Ye,defines:v.defines,customVertexShaderID:Ke,customFragmentShaderID:ne,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Ne,batchingColor:Ne&&B._colorsTexture!==null,instancing:Be,instancingColor:Be&&B.instanceColor!==null,instancingMorph:Be&&B.morphTexture!==null,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:ta,alphaToCoverage:!!v.alphaToCoverage,map:Oe,matcap:ct,envMap:P,envMapMode:P&&O.mapping,envMapCubeUVHeight:ee,aoMap:F,lightMap:Y,bumpMap:te,normalMap:L,displacementMap:C,emissiveMap:ue,normalMapObjectSpace:L&&v.normalMapType===Gy,normalMapTangentSpace:L&&v.normalMapType===Hy,metalnessMap:oe,roughnessMap:re,anisotropy:$,anisotropyMap:q,clearcoat:w,clearcoatMap:fe,clearcoatNormalMap:ce,clearcoatRoughnessMap:be,dispersion:x,iridescence:I,iridescenceMap:Se,iridescenceThicknessMap:ae,sheen:X,sheenColorMap:de,sheenRoughnessMap:De,specularMap:Me,specularColorMap:ve,specularIntensityMap:Xe,transmission:K,transmissionMap:z,thicknessMap:xe,gradientMap:me,opaque:v.transparent===!1&&v.blending===Ho&&v.alphaToCoverage===!1,alphaMap:Te,alphaTest:he,alphaHash:ie,combine:v.combine,mapUv:Oe&&_(v.map.channel),aoMapUv:F&&_(v.aoMap.channel),lightMapUv:Y&&_(v.lightMap.channel),bumpMapUv:te&&_(v.bumpMap.channel),normalMapUv:L&&_(v.normalMap.channel),displacementMapUv:C&&_(v.displacementMap.channel),emissiveMapUv:ue&&_(v.emissiveMap.channel),metalnessMapUv:oe&&_(v.metalnessMap.channel),roughnessMapUv:re&&_(v.roughnessMap.channel),anisotropyMapUv:q&&_(v.anisotropyMap.channel),clearcoatMapUv:fe&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ce&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:de&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(v.sheenRoughnessMap.channel),specularMapUv:Me&&_(v.specularMap.channel),specularColorMapUv:ve&&_(v.specularColorMap.channel),specularIntensityMapUv:Xe&&_(v.specularIntensityMap.channel),transmissionMapUv:z&&_(v.transmissionMap.channel),thicknessMapUv:xe&&_(v.thicknessMap.channel),alphaMapUv:Te&&_(v.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(L||$),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!W.attributes.uv&&(Oe||Te),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||W.attributes.normal===void 0&&L===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:pe,skinning:B.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:ge,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Oe&&v.map.isVideoTexture===!0&&ht.getTransfer(v.map.colorSpace)===Et,decodeVideoTextureEmissive:ue&&v.emissiveMap.isVideoTexture===!0&&ht.getTransfer(v.emissiveMap.colorSpace)===Et,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===wr,flipSided:v.side===ei,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ie&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&v.extensions.multiDraw===!0||Ne)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt}function p(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const U in v.defines)y.push(U),y.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(m(y,v),S(y,v),y.push(i.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function m(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function S(v,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),v.push(o.mask)}function E(v){const y=d[v.type];let U;if(y){const D=Qi[y];U=wE.clone(D.uniforms)}else U=v.uniforms;return U}function M(v,y){let U=u.get(y);return U!==void 0?++U.usedTimes:(U=new Z1(i,y,v,r),c.push(U),u.set(y,U)),U}function T(v){if(--v.usedTimes===0){const y=c.indexOf(v);c[y]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function R(v){a.remove(v)}function A(){a.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:E,acquireProgram:M,releaseProgram:T,releaseShaderCache:R,programs:c,dispose:A}}function nw(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function iw(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function t_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function n_(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,_,g,p,m){let S=i[e];return S===void 0?(S={id:f.id,object:f,geometry:d,material:_,materialVariant:o(f),groupOrder:g,renderOrder:f.renderOrder,z:p,group:m},i[e]=S):(S.id=f.id,S.object=f,S.geometry=d,S.material=_,S.materialVariant=o(f),S.groupOrder=g,S.renderOrder=f.renderOrder,S.z=p,S.group=m),e++,S}function l(f,d,_,g,p,m){const S=a(f,d,_,g,p,m);_.transmission>0?n.push(S):_.transparent===!0?r.push(S):t.push(S)}function c(f,d,_,g,p,m){const S=a(f,d,_,g,p,m);_.transmission>0?n.unshift(S):_.transparent===!0?r.unshift(S):t.unshift(S)}function u(f,d){t.length>1&&t.sort(f||iw),n.length>1&&n.sort(d||t_),r.length>1&&r.sort(d||t_)}function h(){for(let f=e,d=i.length;f<d;f++){const _=i[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function rw(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new n_,i.set(n,[o])):r>=s.length?(o=new n_,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function sw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new bt};break;case"SpotLight":t={position:new Z,direction:new Z,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return i[e.id]=t,t}}}function ow(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let aw=0;function lw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function cw(i){const e=new sw,t=ow(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Z);const r=new Z,s=new $t,o=new $t;function a(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,_=0,g=0,p=0,m=0,S=0,E=0,M=0,T=0,R=0,A=0;c.sort(lw);for(let y=0,U=c.length;y<U;y++){const D=c[y],B=D.color,H=D.intensity,W=D.distance;let G=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ea?G=D.shadow.map.texture:G=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=B.r*H,h+=B.g*H,f+=B.b*H;else if(D.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(D.sh.coefficients[V],H);A++}else if(D.isDirectionalLight){const V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const O=D.shadow,ee=t.get(D);ee.shadowIntensity=O.intensity,ee.shadowBias=O.bias,ee.shadowNormalBias=O.normalBias,ee.shadowRadius=O.radius,ee.shadowMapSize=O.mapSize,n.directionalShadow[d]=ee,n.directionalShadowMap[d]=G,n.directionalShadowMatrix[d]=D.shadow.matrix,S++}n.directional[d]=V,d++}else if(D.isSpotLight){const V=e.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(B).multiplyScalar(H),V.distance=W,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,n.spot[g]=V;const O=D.shadow;if(D.map&&(n.spotLightMap[T]=D.map,T++,O.updateMatrices(D),D.castShadow&&R++),n.spotLightMatrix[g]=O.matrix,D.castShadow){const ee=t.get(D);ee.shadowIntensity=O.intensity,ee.shadowBias=O.bias,ee.shadowNormalBias=O.normalBias,ee.shadowRadius=O.radius,ee.shadowMapSize=O.mapSize,n.spotShadow[g]=ee,n.spotShadowMap[g]=G,M++}g++}else if(D.isRectAreaLight){const V=e.get(D);V.color.copy(B).multiplyScalar(H),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),n.rectArea[p]=V,p++}else if(D.isPointLight){const V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),V.distance=D.distance,V.decay=D.decay,D.castShadow){const O=D.shadow,ee=t.get(D);ee.shadowIntensity=O.intensity,ee.shadowBias=O.bias,ee.shadowNormalBias=O.normalBias,ee.shadowRadius=O.radius,ee.shadowMapSize=O.mapSize,ee.shadowCameraNear=O.camera.near,ee.shadowCameraFar=O.camera.far,n.pointShadow[_]=ee,n.pointShadowMap[_]=G,n.pointShadowMatrix[_]=D.shadow.matrix,E++}n.point[_]=V,_++}else if(D.isHemisphereLight){const V=e.get(D);V.skyColor.copy(D.color).multiplyScalar(H),V.groundColor.copy(D.groundColor).multiplyScalar(H),n.hemi[m]=V,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const v=n.hash;(v.directionalLength!==d||v.pointLength!==_||v.spotLength!==g||v.rectAreaLength!==p||v.hemiLength!==m||v.numDirectionalShadows!==S||v.numPointShadows!==E||v.numSpotShadows!==M||v.numSpotMaps!==T||v.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=M+T-R,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,v.directionalLength=d,v.pointLength=_,v.spotLength=g,v.rectAreaLength=p,v.hemiLength=m,v.numDirectionalShadows=S,v.numPointShadows=E,v.numSpotShadows=M,v.numSpotMaps=T,v.numLightProbes=A,n.version=aw++)}function l(c,u){let h=0,f=0,d=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const E=c[m];if(E.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),h++}else if(E.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),d++}else if(E.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(E.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(p),f++}else if(E.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function i_(i){const e=new cw(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function uw(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new i_(i),e.set(r,[a])):s>=o.length?(a=new i_(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const fw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,dw=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],pw=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],r_=new $t,xa=new Z,vf=new Z;function mw(i,e,t){let n=new Q0;const r=new gt,s=new gt,o=new Yt,a=new DE,l=new IE,c={},u=t.maxTextureSize,h={[ps]:ei,[ei]:ps,[wr]:wr},f=new pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:fw,fragmentShader:hw}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Fi;_.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Wi(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vc;let m=this.type;this.render=function(R,A,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;this.type===vy&&(je("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=vc);const y=i.getRenderTarget(),U=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Dr),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const H=m!==this.type;H&&A.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(G=>G.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,G=R.length;W<G;W++){const V=R[W],O=V.shadow;if(O===void 0){je("WebGLShadowMap:",V,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const ee=O.getFrameExtents();r.multiply(ee),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ee.x),r.x=s.x*ee.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ee.y),r.y=s.y*ee.y,O.mapSize.y=s.y));const se=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=se,O.map===null||H===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===wa){if(V.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new ur(r.x,r.y,{format:ea,type:Fr,minFilter:Dn,magFilter:Dn,generateMipmaps:!1}),O.map.texture.name=V.name+".shadowMap",O.map.depthTexture=new fl(r.x,r.y,sr),O.map.depthTexture.name=V.name+".shadowMapDepth",O.map.depthTexture.format=Nr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=mn,O.map.depthTexture.magFilter=mn}else V.isPointLight?(O.map=new ax(r.x),O.map.depthTexture=new TE(r.x,dr)):(O.map=new ur(r.x,r.y),O.map.depthTexture=new fl(r.x,r.y,dr)),O.map.depthTexture.name=V.name+".shadowMap",O.map.depthTexture.format=Nr,this.type===vc?(O.map.depthTexture.compareFunction=se?qd:Yd,O.map.depthTexture.minFilter=Dn,O.map.depthTexture.magFilter=Dn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=mn,O.map.depthTexture.magFilter=mn);O.camera.updateProjectionMatrix()}const N=O.map.isWebGLCubeRenderTarget?6:1;for(let _e=0;_e<N;_e++){if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,_e),i.clear();else{_e===0&&(i.setRenderTarget(O.map),i.clear());const ge=O.getViewport(_e);o.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),B.viewport(o)}if(V.isPointLight){const ge=O.camera,He=O.matrix,Ye=V.distance||ge.far;Ye!==ge.far&&(ge.far=Ye,ge.updateProjectionMatrix()),xa.setFromMatrixPosition(V.matrixWorld),ge.position.copy(xa),vf.copy(ge.position),vf.add(dw[_e]),ge.up.copy(pw[_e]),ge.lookAt(vf),ge.updateMatrixWorld(),He.makeTranslation(-xa.x,-xa.y,-xa.z),r_.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),O._frustum.setFromProjectionMatrix(r_,ge.coordinateSystem,ge.reversedDepth)}else O.updateMatrices(V);n=O.getFrustum(),M(A,v,O.camera,V,this.type)}O.isPointLightShadow!==!0&&this.type===wa&&S(O,v),O.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(y,U,D)};function S(R,A){const v=e.update(g);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ur(r.x,r.y,{format:ea,type:Fr})),f.uniforms.shadow_pass.value=R.map.depthTexture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,v,f,g,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,v,d,g,null)}function E(R,A,v,y){let U=null;const D=v.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)U=D;else if(U=v.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const B=U.uuid,H=A.uuid;let W=c[B];W===void 0&&(W={},c[B]=W);let G=W[H];G===void 0&&(G=U.clone(),W[H]=G,A.addEventListener("dispose",T)),U=G}if(U.visible=A.visible,U.wireframe=A.wireframe,y===wa?U.side=A.shadowSide!==null?A.shadowSide:A.side:U.side=A.shadowSide!==null?A.shadowSide:h[A.side],U.alphaMap=A.alphaMap,U.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,U.map=A.map,U.clipShadows=A.clipShadows,U.clippingPlanes=A.clippingPlanes,U.clipIntersection=A.clipIntersection,U.displacementMap=A.displacementMap,U.displacementScale=A.displacementScale,U.displacementBias=A.displacementBias,U.wireframeLinewidth=A.wireframeLinewidth,U.linewidth=A.linewidth,v.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const B=i.properties.get(U);B.light=v}return U}function M(R,A,v,y,U){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&U===wa)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,R.matrixWorld);const H=e.update(R),W=R.material;if(Array.isArray(W)){const G=H.groups;for(let V=0,O=G.length;V<O;V++){const ee=G[V],se=W[ee.materialIndex];if(se&&se.visible){const N=E(R,se,y,U);R.onBeforeShadow(i,R,A,v,H,N,ee),i.renderBufferDirect(v,null,H,N,R,ee),R.onAfterShadow(i,R,A,v,H,N,ee)}}}else if(W.visible){const G=E(R,W,y,U);R.onBeforeShadow(i,R,A,v,H,G,null),i.renderBufferDirect(v,null,H,G,R,null),R.onAfterShadow(i,R,A,v,H,G,null)}}const B=R.children;for(let H=0,W=B.length;H<W;H++)M(B[H],A,v,y,U)}function T(R){R.target.removeEventListener("dispose",T);for(const v in c){const y=c[v],U=R.target.uuid;U in y&&(y[U].dispose(),delete y[U])}}}function _w(i,e){function t(){let z=!1;const xe=new Yt;let me=null;const Te=new Yt(0,0,0,0);return{setMask:function(he){me!==he&&!z&&(i.colorMask(he,he,he,he),me=he)},setLocked:function(he){z=he},setClear:function(he,ie,Ie,Ge,dt){dt===!0&&(he*=Ge,ie*=Ge,Ie*=Ge),xe.set(he,ie,Ie,Ge),Te.equals(xe)===!1&&(i.clearColor(he,ie,Ie,Ge),Te.copy(xe))},reset:function(){z=!1,me=null,Te.set(-1,0,0,0)}}}function n(){let z=!1,xe=!1,me=null,Te=null,he=null;return{setReversed:function(ie){if(xe!==ie){const Ie=e.get("EXT_clip_control");ie?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),xe=ie;const Ge=he;he=null,this.setClear(Ge)}},getReversed:function(){return xe},setTest:function(ie){ie?le(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(ie){me!==ie&&!z&&(i.depthMask(ie),me=ie)},setFunc:function(ie){if(xe&&(ie=Qy[ie]),Te!==ie){switch(ie){case ih:i.depthFunc(i.NEVER);break;case rh:i.depthFunc(i.ALWAYS);break;case sh:i.depthFunc(i.LESS);break;case Jo:i.depthFunc(i.LEQUAL);break;case oh:i.depthFunc(i.EQUAL);break;case ah:i.depthFunc(i.GEQUAL);break;case lh:i.depthFunc(i.GREATER);break;case ch:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Te=ie}},setLocked:function(ie){z=ie},setClear:function(ie){he!==ie&&(he=ie,xe&&(ie=1-ie),i.clearDepth(ie))},reset:function(){z=!1,me=null,Te=null,he=null,xe=!1}}}function r(){let z=!1,xe=null,me=null,Te=null,he=null,ie=null,Ie=null,Ge=null,dt=null;return{setTest:function(Pe){z||(Pe?le(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(Pe){xe!==Pe&&!z&&(i.stencilMask(Pe),xe=Pe)},setFunc:function(Pe,ze,et){(me!==Pe||Te!==ze||he!==et)&&(i.stencilFunc(Pe,ze,et),me=Pe,Te=ze,he=et)},setOp:function(Pe,ze,et){(ie!==Pe||Ie!==ze||Ge!==et)&&(i.stencilOp(Pe,ze,et),ie=Pe,Ie=ze,Ge=et)},setLocked:function(Pe){z=Pe},setClear:function(Pe){dt!==Pe&&(i.clearStencil(Pe),dt=Pe)},reset:function(){z=!1,xe=null,me=null,Te=null,he=null,ie=null,Ie=null,Ge=null,dt=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],_=null,g=!1,p=null,m=null,S=null,E=null,M=null,T=null,R=null,A=new bt(0,0,0),v=0,y=!1,U=null,D=null,B=null,H=null,W=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,O=0;const ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(ee)[1]),V=O>=1):ee.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),V=O>=2);let se=null,N={};const _e=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),He=new Yt().fromArray(_e),Ye=new Yt().fromArray(ge);function Ke(z,xe,me,Te){const he=new Uint8Array(4),ie=i.createTexture();i.bindTexture(z,ie),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<me;Ie++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(xe+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return ie}const ne={};ne[i.TEXTURE_2D]=Ke(i.TEXTURE_2D,i.TEXTURE_2D,1),ne[i.TEXTURE_CUBE_MAP]=Ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[i.TEXTURE_2D_ARRAY]=Ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ne[i.TEXTURE_3D]=Ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(i.DEPTH_TEST),o.setFunc(Jo),te(!1),L(lm),le(i.CULL_FACE),F(Dr);function le(z){u[z]!==!0&&(i.enable(z),u[z]=!0)}function pe(z){u[z]!==!1&&(i.disable(z),u[z]=!1)}function Be(z,xe){return h[z]!==xe?(i.bindFramebuffer(z,xe),h[z]=xe,z===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=xe),z===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function Ne(z,xe){let me=d,Te=!1;if(z){me=f.get(xe),me===void 0&&(me=[],f.set(xe,me));const he=z.textures;if(me.length!==he.length||me[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Ie=he.length;ie<Ie;ie++)me[ie]=i.COLOR_ATTACHMENT0+ie;me.length=he.length,Te=!0}}else me[0]!==i.BACK&&(me[0]=i.BACK,Te=!0);Te&&i.drawBuffers(me)}function Oe(z){return _!==z?(i.useProgram(z),_=z,!0):!1}const ct={[Fs]:i.FUNC_ADD,[My]:i.FUNC_SUBTRACT,[yy]:i.FUNC_REVERSE_SUBTRACT};ct[Ey]=i.MIN,ct[by]=i.MAX;const P={[Ty]:i.ZERO,[Ay]:i.ONE,[wy]:i.SRC_COLOR,[th]:i.SRC_ALPHA,[Ly]:i.SRC_ALPHA_SATURATE,[Dy]:i.DST_COLOR,[Cy]:i.DST_ALPHA,[Ry]:i.ONE_MINUS_SRC_COLOR,[nh]:i.ONE_MINUS_SRC_ALPHA,[Iy]:i.ONE_MINUS_DST_COLOR,[Py]:i.ONE_MINUS_DST_ALPHA,[Uy]:i.CONSTANT_COLOR,[Fy]:i.ONE_MINUS_CONSTANT_COLOR,[Ny]:i.CONSTANT_ALPHA,[Oy]:i.ONE_MINUS_CONSTANT_ALPHA};function F(z,xe,me,Te,he,ie,Ie,Ge,dt,Pe){if(z===Dr){g===!0&&(pe(i.BLEND),g=!1);return}if(g===!1&&(le(i.BLEND),g=!0),z!==Sy){if(z!==p||Pe!==y){if((m!==Fs||M!==Fs)&&(i.blendEquation(i.FUNC_ADD),m=Fs,M=Fs),Pe)switch(z){case Ho:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cm:i.blendFunc(i.ONE,i.ONE);break;case um:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fm:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:mt("WebGLState: Invalid blending: ",z);break}else switch(z){case Ho:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cm:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case um:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fm:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",z);break}S=null,E=null,T=null,R=null,A.set(0,0,0),v=0,p=z,y=Pe}return}he=he||xe,ie=ie||me,Ie=Ie||Te,(xe!==m||he!==M)&&(i.blendEquationSeparate(ct[xe],ct[he]),m=xe,M=he),(me!==S||Te!==E||ie!==T||Ie!==R)&&(i.blendFuncSeparate(P[me],P[Te],P[ie],P[Ie]),S=me,E=Te,T=ie,R=Ie),(Ge.equals(A)===!1||dt!==v)&&(i.blendColor(Ge.r,Ge.g,Ge.b,dt),A.copy(Ge),v=dt),p=z,y=!1}function Y(z,xe){z.side===wr?pe(i.CULL_FACE):le(i.CULL_FACE);let me=z.side===ei;xe&&(me=!me),te(me),z.blending===Ho&&z.transparent===!1?F(Dr):F(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);const Te=z.stencilWrite;a.setTest(Te),Te&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ue(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(z){U!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),U=z)}function L(z){z!==gy?(le(i.CULL_FACE),z!==D&&(z===lm?i.cullFace(i.BACK):z===xy?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),D=z}function C(z){z!==B&&(V&&i.lineWidth(z),B=z)}function ue(z,xe,me){z?(le(i.POLYGON_OFFSET_FILL),(H!==xe||W!==me)&&(H=xe,W=me,o.getReversed()&&(xe=-xe),i.polygonOffset(xe,me))):pe(i.POLYGON_OFFSET_FILL)}function oe(z){z?le(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function re(z){z===void 0&&(z=i.TEXTURE0+G-1),se!==z&&(i.activeTexture(z),se=z)}function $(z,xe,me){me===void 0&&(se===null?me=i.TEXTURE0+G-1:me=se);let Te=N[me];Te===void 0&&(Te={type:void 0,texture:void 0},N[me]=Te),(Te.type!==z||Te.texture!==xe)&&(se!==me&&(i.activeTexture(me),se=me),i.bindTexture(z,xe||ne[z]),Te.type=z,Te.texture=xe)}function w(){const z=N[se];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(z){mt("WebGLState:",z)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(z){mt("WebGLState:",z)}}function X(){try{i.texSubImage2D(...arguments)}catch(z){mt("WebGLState:",z)}}function K(){try{i.texSubImage3D(...arguments)}catch(z){mt("WebGLState:",z)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(z){mt("WebGLState:",z)}}function fe(){try{i.compressedTexSubImage3D(...arguments)}catch(z){mt("WebGLState:",z)}}function ce(){try{i.texStorage2D(...arguments)}catch(z){mt("WebGLState:",z)}}function be(){try{i.texStorage3D(...arguments)}catch(z){mt("WebGLState:",z)}}function Se(){try{i.texImage2D(...arguments)}catch(z){mt("WebGLState:",z)}}function ae(){try{i.texImage3D(...arguments)}catch(z){mt("WebGLState:",z)}}function de(z){He.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),He.copy(z))}function De(z){Ye.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Ye.copy(z))}function Me(z,xe){let me=c.get(xe);me===void 0&&(me=new WeakMap,c.set(xe,me));let Te=me.get(z);Te===void 0&&(Te=i.getUniformBlockIndex(xe,z.name),me.set(z,Te))}function ve(z,xe){const Te=c.get(xe).get(z);l.get(xe)!==Te&&(i.uniformBlockBinding(xe,Te,z.__bindingPointIndex),l.set(xe,Te))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},se=null,N={},h={},f=new WeakMap,d=[],_=null,g=!1,p=null,m=null,S=null,E=null,M=null,T=null,R=null,A=new bt(0,0,0),v=0,y=!1,U=null,D=null,B=null,H=null,W=null,He.set(0,0,i.canvas.width,i.canvas.height),Ye.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:pe,bindFramebuffer:Be,drawBuffers:Ne,useProgram:Oe,setBlending:F,setMaterial:Y,setFlipSided:te,setCullFace:L,setLineWidth:C,setPolygonOffset:ue,setScissorTest:oe,activeTexture:re,bindTexture:$,unbindTexture:w,compressedTexImage2D:x,compressedTexImage3D:I,texImage2D:Se,texImage3D:ae,updateUBOMapping:Me,uniformBlockBinding:ve,texStorage2D:ce,texStorage3D:be,texSubImage2D:X,texSubImage3D:K,compressedTexSubImage2D:q,compressedTexSubImage3D:fe,scissor:de,viewport:De,reset:Xe}}function gw(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,x){return d?new OffscreenCanvas(w,x):Wc("canvas")}function g(w,x,I){let X=1;const K=$(w);if((K.width>I||K.height>I)&&(X=I/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const q=Math.floor(X*K.width),fe=Math.floor(X*K.height);h===void 0&&(h=_(q,fe));const ce=x?_(q,fe):h;return ce.width=q,ce.height=fe,ce.getContext("2d").drawImage(w,0,0,q,fe),je("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+fe+")."),ce}else return"data"in w&&je("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function p(w){return w.generateMipmaps}function m(w){i.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,x,I,X,K=!1){if(w!==null){if(i[w]!==void 0)return i[w];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=x;if(x===i.RED&&(I===i.FLOAT&&(q=i.R32F),I===i.HALF_FLOAT&&(q=i.R16F),I===i.UNSIGNED_BYTE&&(q=i.R8)),x===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(q=i.R8UI),I===i.UNSIGNED_SHORT&&(q=i.R16UI),I===i.UNSIGNED_INT&&(q=i.R32UI),I===i.BYTE&&(q=i.R8I),I===i.SHORT&&(q=i.R16I),I===i.INT&&(q=i.R32I)),x===i.RG&&(I===i.FLOAT&&(q=i.RG32F),I===i.HALF_FLOAT&&(q=i.RG16F),I===i.UNSIGNED_BYTE&&(q=i.RG8)),x===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(q=i.RG8UI),I===i.UNSIGNED_SHORT&&(q=i.RG16UI),I===i.UNSIGNED_INT&&(q=i.RG32UI),I===i.BYTE&&(q=i.RG8I),I===i.SHORT&&(q=i.RG16I),I===i.INT&&(q=i.RG32I)),x===i.RGB_INTEGER&&(I===i.UNSIGNED_BYTE&&(q=i.RGB8UI),I===i.UNSIGNED_SHORT&&(q=i.RGB16UI),I===i.UNSIGNED_INT&&(q=i.RGB32UI),I===i.BYTE&&(q=i.RGB8I),I===i.SHORT&&(q=i.RGB16I),I===i.INT&&(q=i.RGB32I)),x===i.RGBA_INTEGER&&(I===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),I===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),I===i.UNSIGNED_INT&&(q=i.RGBA32UI),I===i.BYTE&&(q=i.RGBA8I),I===i.SHORT&&(q=i.RGBA16I),I===i.INT&&(q=i.RGBA32I)),x===i.RGB&&(I===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),I===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),x===i.RGBA){const fe=K?Hc:ht.getTransfer(X);I===i.FLOAT&&(q=i.RGBA32F),I===i.HALF_FLOAT&&(q=i.RGBA16F),I===i.UNSIGNED_BYTE&&(q=fe===Et?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function M(w,x){let I;return w?x===null||x===dr||x===ul?I=i.DEPTH24_STENCIL8:x===sr?I=i.DEPTH32F_STENCIL8:x===cl&&(I=i.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===dr||x===ul?I=i.DEPTH_COMPONENT24:x===sr?I=i.DEPTH_COMPONENT32F:x===cl&&(I=i.DEPTH_COMPONENT16),I}function T(w,x){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==mn&&w.minFilter!==Dn?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function R(w){const x=w.target;x.removeEventListener("dispose",R),v(x),x.isVideoTexture&&u.delete(x)}function A(w){const x=w.target;x.removeEventListener("dispose",A),U(x)}function v(w){const x=n.get(w);if(x.__webglInit===void 0)return;const I=w.source,X=f.get(I);if(X){const K=X[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&y(w),Object.keys(X).length===0&&f.delete(I)}n.remove(w)}function y(w){const x=n.get(w);i.deleteTexture(x.__webglTexture);const I=w.source,X=f.get(I);delete X[x.__cacheKey],o.memory.textures--}function U(w){const x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let K=0;K<x.__webglFramebuffer[X].length;K++)i.deleteFramebuffer(x.__webglFramebuffer[X][K]);else i.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)i.deleteFramebuffer(x.__webglFramebuffer[X]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const I=w.textures;for(let X=0,K=I.length;X<K;X++){const q=n.get(I[X]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(I[X])}n.remove(w)}let D=0;function B(){D=0}function H(){const w=D;return w>=r.maxTextures&&je("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),D+=1,w}function W(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function G(w,x){const I=n.get(w);if(w.isVideoTexture&&oe(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&I.__version!==w.version){const X=w.image;if(X===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(I,w,x);return}}else w.isExternalTexture&&(I.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+x)}function V(w,x){const I=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&I.__version!==w.version){ne(I,w,x);return}else w.isExternalTexture&&(I.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+x)}function O(w,x){const I=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&I.__version!==w.version){ne(I,w,x);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+x)}function ee(w,x){const I=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&I.__version!==w.version){le(I,w,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+x)}const se={[uh]:i.REPEAT,[Cr]:i.CLAMP_TO_EDGE,[fh]:i.MIRRORED_REPEAT},N={[mn]:i.NEAREST,[ky]:i.NEAREST_MIPMAP_NEAREST,[Fl]:i.NEAREST_MIPMAP_LINEAR,[Dn]:i.LINEAR,[Hu]:i.LINEAR_MIPMAP_NEAREST,[zs]:i.LINEAR_MIPMAP_LINEAR},_e={[Wy]:i.NEVER,[Ky]:i.ALWAYS,[Xy]:i.LESS,[Yd]:i.LEQUAL,[Yy]:i.EQUAL,[qd]:i.GEQUAL,[qy]:i.GREATER,[$y]:i.NOTEQUAL};function ge(w,x){if(x.type===sr&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Dn||x.magFilter===Hu||x.magFilter===Fl||x.magFilter===zs||x.minFilter===Dn||x.minFilter===Hu||x.minFilter===Fl||x.minFilter===zs)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,se[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,se[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,se[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,N[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,N[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,_e[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===mn||x.minFilter!==Fl&&x.minFilter!==zs||x.type===sr&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function He(w,x){let I=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",R));const X=x.source;let K=f.get(X);K===void 0&&(K={},f.set(X,K));const q=W(x);if(q!==w.__cacheKey){K[q]===void 0&&(K[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,I=!0),K[q].usedTimes++;const fe=K[w.__cacheKey];fe!==void 0&&(K[w.__cacheKey].usedTimes--,fe.usedTimes===0&&y(x)),w.__cacheKey=q,w.__webglTexture=K[q].texture}return I}function Ye(w,x,I){return Math.floor(Math.floor(w/I)/x)}function Ke(w,x,I,X){const q=w.updateRanges;if(q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,I,X,x.data);else{q.sort((ae,de)=>ae.start-de.start);let fe=0;for(let ae=1;ae<q.length;ae++){const de=q[fe],De=q[ae],Me=de.start+de.count,ve=Ye(De.start,x.width,4),Xe=Ye(de.start,x.width,4);De.start<=Me+1&&ve===Xe&&Ye(De.start+De.count-1,x.width,4)===ve?de.count=Math.max(de.count,De.start+De.count-de.start):(++fe,q[fe]=De)}q.length=fe+1;const ce=i.getParameter(i.UNPACK_ROW_LENGTH),be=i.getParameter(i.UNPACK_SKIP_PIXELS),Se=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let ae=0,de=q.length;ae<de;ae++){const De=q[ae],Me=Math.floor(De.start/4),ve=Math.ceil(De.count/4),Xe=Me%x.width,z=Math.floor(Me/x.width),xe=ve,me=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,Xe,z,xe,me,I,X,x.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ce),i.pixelStorei(i.UNPACK_SKIP_PIXELS,be),i.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function ne(w,x,I){let X=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=i.TEXTURE_3D);const K=He(w,x),q=x.source;t.bindTexture(X,w.__webglTexture,i.TEXTURE0+I);const fe=n.get(q);if(q.version!==fe.__version||K===!0){t.activeTexture(i.TEXTURE0+I);const ce=ht.getPrimaries(ht.workingColorSpace),be=x.colorSpace===Jr?null:ht.getPrimaries(x.colorSpace),Se=x.colorSpace===Jr||ce===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let ae=g(x.image,!1,r.maxTextureSize);ae=re(x,ae);const de=s.convert(x.format,x.colorSpace),De=s.convert(x.type);let Me=E(x.internalFormat,de,De,x.colorSpace,x.isVideoTexture);ge(X,x);let ve;const Xe=x.mipmaps,z=x.isVideoTexture!==!0,xe=fe.__version===void 0||K===!0,me=q.dataReady,Te=T(x,ae);if(x.isDepthTexture)Me=M(x.format===ks,x.type),xe&&(z?t.texStorage2D(i.TEXTURE_2D,1,Me,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Me,ae.width,ae.height,0,de,De,null));else if(x.isDataTexture)if(Xe.length>0){z&&xe&&t.texStorage2D(i.TEXTURE_2D,Te,Me,Xe[0].width,Xe[0].height);for(let he=0,ie=Xe.length;he<ie;he++)ve=Xe[he],z?me&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,ve.width,ve.height,de,De,ve.data):t.texImage2D(i.TEXTURE_2D,he,Me,ve.width,ve.height,0,de,De,ve.data);x.generateMipmaps=!1}else z?(xe&&t.texStorage2D(i.TEXTURE_2D,Te,Me,ae.width,ae.height),me&&Ke(x,ae,de,De)):t.texImage2D(i.TEXTURE_2D,0,Me,ae.width,ae.height,0,de,De,ae.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){z&&xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Me,Xe[0].width,Xe[0].height,ae.depth);for(let he=0,ie=Xe.length;he<ie;he++)if(ve=Xe[he],x.format!==Hi)if(de!==null)if(z){if(me)if(x.layerUpdates.size>0){const Ie=Fm(ve.width,ve.height,x.format,x.type);for(const Ge of x.layerUpdates){const dt=ve.data.subarray(Ge*Ie/ve.data.BYTES_PER_ELEMENT,(Ge+1)*Ie/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,Ge,ve.width,ve.height,1,de,dt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,ve.width,ve.height,ae.depth,de,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,Me,ve.width,ve.height,ae.depth,0,ve.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?me&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,ve.width,ve.height,ae.depth,de,De,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,Me,ve.width,ve.height,ae.depth,0,de,De,ve.data)}else{z&&xe&&t.texStorage2D(i.TEXTURE_2D,Te,Me,Xe[0].width,Xe[0].height);for(let he=0,ie=Xe.length;he<ie;he++)ve=Xe[he],x.format!==Hi?de!==null?z?me&&t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,ve.width,ve.height,de,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,he,Me,ve.width,ve.height,0,ve.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?me&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,ve.width,ve.height,de,De,ve.data):t.texImage2D(i.TEXTURE_2D,he,Me,ve.width,ve.height,0,de,De,ve.data)}else if(x.isDataArrayTexture)if(z){if(xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Me,ae.width,ae.height,ae.depth),me)if(x.layerUpdates.size>0){const he=Fm(ae.width,ae.height,x.format,x.type);for(const ie of x.layerUpdates){const Ie=ae.data.subarray(ie*he/ae.data.BYTES_PER_ELEMENT,(ie+1)*he/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,ae.width,ae.height,1,de,De,Ie)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,de,De,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,ae.width,ae.height,ae.depth,0,de,De,ae.data);else if(x.isData3DTexture)z?(xe&&t.texStorage3D(i.TEXTURE_3D,Te,Me,ae.width,ae.height,ae.depth),me&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,de,De,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Me,ae.width,ae.height,ae.depth,0,de,De,ae.data);else if(x.isFramebufferTexture){if(xe)if(z)t.texStorage2D(i.TEXTURE_2D,Te,Me,ae.width,ae.height);else{let he=ae.width,ie=ae.height;for(let Ie=0;Ie<Te;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,Me,he,ie,0,de,De,null),he>>=1,ie>>=1}}else if(Xe.length>0){if(z&&xe){const he=$(Xe[0]);t.texStorage2D(i.TEXTURE_2D,Te,Me,he.width,he.height)}for(let he=0,ie=Xe.length;he<ie;he++)ve=Xe[he],z?me&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,de,De,ve):t.texImage2D(i.TEXTURE_2D,he,Me,de,De,ve);x.generateMipmaps=!1}else if(z){if(xe){const he=$(ae);t.texStorage2D(i.TEXTURE_2D,Te,Me,he.width,he.height)}me&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,De,ae)}else t.texImage2D(i.TEXTURE_2D,0,Me,de,De,ae);p(x)&&m(X),fe.__version=q.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function le(w,x,I){if(x.image.length!==6)return;const X=He(w,x),K=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+I);const q=n.get(K);if(K.version!==q.__version||X===!0){t.activeTexture(i.TEXTURE0+I);const fe=ht.getPrimaries(ht.workingColorSpace),ce=x.colorSpace===Jr?null:ht.getPrimaries(x.colorSpace),be=x.colorSpace===Jr||fe===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Se=x.isCompressedTexture||x.image[0].isCompressedTexture,ae=x.image[0]&&x.image[0].isDataTexture,de=[];for(let ie=0;ie<6;ie++)!Se&&!ae?de[ie]=g(x.image[ie],!0,r.maxCubemapSize):de[ie]=ae?x.image[ie].image:x.image[ie],de[ie]=re(x,de[ie]);const De=de[0],Me=s.convert(x.format,x.colorSpace),ve=s.convert(x.type),Xe=E(x.internalFormat,Me,ve,x.colorSpace),z=x.isVideoTexture!==!0,xe=q.__version===void 0||X===!0,me=K.dataReady;let Te=T(x,De);ge(i.TEXTURE_CUBE_MAP,x);let he;if(Se){z&&xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,Xe,De.width,De.height);for(let ie=0;ie<6;ie++){he=de[ie].mipmaps;for(let Ie=0;Ie<he.length;Ie++){const Ge=he[Ie];x.format!==Hi?Me!==null?z?me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie,0,0,Ge.width,Ge.height,Me,Ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie,Xe,Ge.width,Ge.height,0,Ge.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie,0,0,Ge.width,Ge.height,Me,ve,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie,Xe,Ge.width,Ge.height,0,Me,ve,Ge.data)}}}else{if(he=x.mipmaps,z&&xe){he.length>0&&Te++;const ie=$(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,Xe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ae){z?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,de[ie].width,de[ie].height,Me,ve,de[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Xe,de[ie].width,de[ie].height,0,Me,ve,de[ie].data);for(let Ie=0;Ie<he.length;Ie++){const dt=he[Ie].image[ie].image;z?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie+1,0,0,dt.width,dt.height,Me,ve,dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie+1,Xe,dt.width,dt.height,0,Me,ve,dt.data)}}else{z?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Me,ve,de[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Xe,Me,ve,de[ie]);for(let Ie=0;Ie<he.length;Ie++){const Ge=he[Ie];z?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie+1,0,0,Me,ve,Ge.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie+1,Xe,Me,ve,Ge.image[ie])}}}p(x)&&m(i.TEXTURE_CUBE_MAP),q.__version=K.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function pe(w,x,I,X,K,q){const fe=s.convert(I.format,I.colorSpace),ce=s.convert(I.type),be=E(I.internalFormat,fe,ce,I.colorSpace),Se=n.get(x),ae=n.get(I);if(ae.__renderTarget=x,!Se.__hasExternalTextures){const de=Math.max(1,x.width>>q),De=Math.max(1,x.height>>q);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,q,be,de,De,x.depth,0,fe,ce,null):t.texImage2D(K,q,be,de,De,0,fe,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ue(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,K,ae.__webglTexture,0,C(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,K,ae.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(w,x,I){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){const X=x.depthTexture,K=X&&X.isDepthTexture?X.type:null,q=M(x.stencilBuffer,K),fe=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ue(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C(x),q,x.width,x.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,C(x),q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,w)}else{const X=x.textures;for(let K=0;K<X.length;K++){const q=X[K],fe=s.convert(q.format,q.colorSpace),ce=s.convert(q.type),be=E(q.internalFormat,fe,ce,q.colorSpace);ue(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C(x),be,x.width,x.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,C(x),be,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,be,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(w,x,I){const X=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(x.depthTexture);if(K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X){if(K.__webglInit===void 0&&(K.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ge(i.TEXTURE_CUBE_MAP,x.depthTexture);const Se=s.convert(x.depthTexture.format),ae=s.convert(x.depthTexture.type);let de;x.depthTexture.format===Nr?de=i.DEPTH_COMPONENT24:x.depthTexture.format===ks&&(de=i.DEPTH24_STENCIL8);for(let De=0;De<6;De++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,de,x.width,x.height,0,Se,ae,null)}}else G(x.depthTexture,0);const q=K.__webglTexture,fe=C(x),ce=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+I:i.TEXTURE_2D,be=x.depthTexture.format===ks?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Nr)ue(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,be,ce,q,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,be,ce,q,0);else if(x.depthTexture.format===ks)ue(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,be,ce,q,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,be,ce,q,0);else throw new Error("Unknown depthTexture format")}function Oe(w){const x=n.get(w),I=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const X=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){const K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=X}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(I)for(let X=0;X<6;X++)Ne(x.__webglFramebuffer[X],w,X);else{const X=w.texture.mipmaps;X&&X.length>0?Ne(x.__webglFramebuffer[0],w,0):Ne(x.__webglFramebuffer,w,0)}else if(I){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=i.createRenderbuffer(),Be(x.__webglDepthbuffer[X],w,!1);else{const K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,q)}}else{const X=w.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Be(x.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(w,x,I){const X=n.get(w);x!==void 0&&pe(X.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&Oe(w)}function P(w){const x=w.texture,I=n.get(w),X=n.get(x);w.addEventListener("dispose",A);const K=w.textures,q=w.isWebGLCubeRenderTarget===!0,fe=K.length>1;if(fe||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=x.version,o.memory.textures++),q){I.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[ce]=[];for(let be=0;be<x.mipmaps.length;be++)I.__webglFramebuffer[ce][be]=i.createFramebuffer()}else I.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let ce=0;ce<x.mipmaps.length;ce++)I.__webglFramebuffer[ce]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(fe)for(let ce=0,be=K.length;ce<be;ce++){const Se=n.get(K[ce]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&ue(w)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ce=0;ce<K.length;ce++){const be=K[ce];I.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[ce]);const Se=s.convert(be.format,be.colorSpace),ae=s.convert(be.type),de=E(be.internalFormat,Se,ae,be.colorSpace,w.isXRRenderTarget===!0),De=C(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,de,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,I.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),Be(I.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),ge(i.TEXTURE_CUBE_MAP,x);for(let ce=0;ce<6;ce++)if(x.mipmaps&&x.mipmaps.length>0)for(let be=0;be<x.mipmaps.length;be++)pe(I.__webglFramebuffer[ce][be],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,be);else pe(I.__webglFramebuffer[ce],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(x)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let ce=0,be=K.length;ce<be;ce++){const Se=K[ce],ae=n.get(Se);let de=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(de=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,ae.__webglTexture),ge(de,Se),pe(I.__webglFramebuffer,w,Se,i.COLOR_ATTACHMENT0+ce,de,0),p(Se)&&m(de)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ce=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,X.__webglTexture),ge(ce,x),x.mipmaps&&x.mipmaps.length>0)for(let be=0;be<x.mipmaps.length;be++)pe(I.__webglFramebuffer[be],w,x,i.COLOR_ATTACHMENT0,ce,be);else pe(I.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,ce,0);p(x)&&m(ce),t.unbindTexture()}w.depthBuffer&&Oe(w)}function F(w){const x=w.textures;for(let I=0,X=x.length;I<X;I++){const K=x[I];if(p(K)){const q=S(w),fe=n.get(K).__webglTexture;t.bindTexture(q,fe),m(q),t.unbindTexture()}}}const Y=[],te=[];function L(w){if(w.samples>0){if(ue(w)===!1){const x=w.textures,I=w.width,X=w.height;let K=i.COLOR_BUFFER_BIT;const q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(w),ce=x.length>1;if(ce)for(let Se=0;Se<x.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const be=w.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Se=0;Se<x.length;Se++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[Se]);const ae=n.get(x[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,I,X,0,0,I,X,K,i.NEAREST),l===!0&&(Y.length=0,te.length=0,Y.push(i.COLOR_ATTACHMENT0+Se),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Y.push(q),te.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,te)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Y))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let Se=0;Se<x.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,fe.__webglColorRenderbuffer[Se]);const ae=n.get(x[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,ae,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function C(w){return Math.min(r.maxSamples,w.samples)}function ue(w){const x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function oe(w){const x=o.render.frame;u.get(w)!==x&&(u.set(w,x),w.update())}function re(w,x){const I=w.colorSpace,X=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||I!==ta&&I!==Jr&&(ht.getTransfer(I)===Et?(X!==Hi||K!==wi)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",I)),x}function $(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.setTexture2D=G,this.setTexture2DArray=V,this.setTexture3D=O,this.setTextureCube=ee,this.rebindTextures=ct,this.setupRenderTarget=P,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ue,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function xw(i,e){function t(n,r=Jr){let s;const o=ht.getTransfer(r);if(n===wi)return i.UNSIGNED_BYTE;if(n===Vd)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Hd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===V0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===H0)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===z0)return i.BYTE;if(n===k0)return i.SHORT;if(n===cl)return i.UNSIGNED_SHORT;if(n===kd)return i.INT;if(n===dr)return i.UNSIGNED_INT;if(n===sr)return i.FLOAT;if(n===Fr)return i.HALF_FLOAT;if(n===G0)return i.ALPHA;if(n===W0)return i.RGB;if(n===Hi)return i.RGBA;if(n===Nr)return i.DEPTH_COMPONENT;if(n===ks)return i.DEPTH_STENCIL;if(n===X0)return i.RED;if(n===Gd)return i.RED_INTEGER;if(n===ea)return i.RG;if(n===Wd)return i.RG_INTEGER;if(n===Xd)return i.RGBA_INTEGER;if(n===Sc||n===Mc||n===yc||n===Ec)if(o===Et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Sc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Sc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ec)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===hh||n===dh||n===ph||n===mh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===hh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===dh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ph)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_h||n===gh||n===xh||n===vh||n===Sh||n===Mh||n===yh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===_h||n===gh)return o===Et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===xh)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===vh)return s.COMPRESSED_R11_EAC;if(n===Sh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Mh)return s.COMPRESSED_RG11_EAC;if(n===yh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Eh||n===bh||n===Th||n===Ah||n===wh||n===Rh||n===Ch||n===Ph||n===Dh||n===Ih||n===Lh||n===Uh||n===Fh||n===Nh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Eh)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bh)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Th)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ah)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wh)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rh)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ch)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ph)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dh)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ih)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lh)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uh)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fh)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nh)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oh||n===Bh||n===zh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Oh)return o===Et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kh||n===Vh||n===Hh||n===Gh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===kh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Vh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ul?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const vw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sw=`
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

}`;class Mw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new nx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new pr({vertexShader:vw,fragmentShader:Sw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wi(new cu(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yw extends ra{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=typeof XRWebGLBinding<"u",p=new Mw,m={},S=t.getContextAttributes();let E=null,M=null;const T=[],R=[],A=new gt;let v=null;const y=new Ai;y.viewport=new Yt;const U=new Ai;U.viewport=new Yt;const D=[y,U],B=new UE;let H=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let le=T[ne];return le===void 0&&(le=new ju,T[ne]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ne){let le=T[ne];return le===void 0&&(le=new ju,T[ne]=le),le.getGripSpace()},this.getHand=function(ne){let le=T[ne];return le===void 0&&(le=new ju,T[ne]=le),le.getHandSpace()};function G(ne){const le=R.indexOf(ne.inputSource);if(le===-1)return;const pe=T[le];pe!==void 0&&(pe.update(ne.inputSource,ne.frame,c||o),pe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function V(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",O);for(let ne=0;ne<T.length;ne++){const le=R[ne];le!==null&&(R[ne]=null,T[ne].disconnect(le))}H=null,W=null,p.reset();for(const ne in m)delete m[ne];e.setRenderTarget(E),d=null,f=null,h=null,r=null,M=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,n.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,n.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",V),r.addEventListener("inputsourceschange",O),S.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Be=null,Ne=null;S.depth&&(Ne=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=S.stencil?ks:Nr,Be=S.stencil?ul:dr);const Oe={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Oe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new ur(f.textureWidth,f.textureHeight,{format:Hi,type:wi,depthTexture:new fl(f.textureWidth,f.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const pe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new ur(d.framebufferWidth,d.framebufferHeight,{format:Hi,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ke.setContext(r),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function O(ne){for(let le=0;le<ne.removed.length;le++){const pe=ne.removed[le],Be=R.indexOf(pe);Be>=0&&(R[Be]=null,T[Be].disconnect(pe))}for(let le=0;le<ne.added.length;le++){const pe=ne.added[le];let Be=R.indexOf(pe);if(Be===-1){for(let Oe=0;Oe<T.length;Oe++)if(Oe>=R.length){R.push(pe),Be=Oe;break}else if(R[Oe]===null){R[Oe]=pe,Be=Oe;break}if(Be===-1)break}const Ne=T[Be];Ne&&Ne.connect(pe)}}const ee=new Z,se=new Z;function N(ne,le,pe){ee.setFromMatrixPosition(le.matrixWorld),se.setFromMatrixPosition(pe.matrixWorld);const Be=ee.distanceTo(se),Ne=le.projectionMatrix.elements,Oe=pe.projectionMatrix.elements,ct=Ne[14]/(Ne[10]-1),P=Ne[14]/(Ne[10]+1),F=(Ne[9]+1)/Ne[5],Y=(Ne[9]-1)/Ne[5],te=(Ne[8]-1)/Ne[0],L=(Oe[8]+1)/Oe[0],C=ct*te,ue=ct*L,oe=Be/(-te+L),re=oe*-te;if(le.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(re),ne.translateZ(oe),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ne[10]===-1)ne.projectionMatrix.copy(le.projectionMatrix),ne.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const $=ct+oe,w=P+oe,x=C-re,I=ue+(Be-re),X=F*P/w*$,K=Y*P/w*$;ne.projectionMatrix.makePerspective(x,I,X,K,$,w),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function _e(ne,le){le===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(le.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let le=ne.near,pe=ne.far;p.texture!==null&&(p.depthNear>0&&(le=p.depthNear),p.depthFar>0&&(pe=p.depthFar)),B.near=U.near=y.near=le,B.far=U.far=y.far=pe,(H!==B.near||W!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),H=B.near,W=B.far),B.layers.mask=ne.layers.mask|6,y.layers.mask=B.layers.mask&-5,U.layers.mask=B.layers.mask&-3;const Be=ne.parent,Ne=B.cameras;_e(B,Be);for(let Oe=0;Oe<Ne.length;Oe++)_e(Ne[Oe],Be);Ne.length===2?N(B,y,U):B.projectionMatrix.copy(y.projectionMatrix),ge(ne,B,Be)};function ge(ne,le,pe){pe===null?ne.matrix.copy(le.matrixWorld):(ne.matrix.copy(pe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(le.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(le.projectionMatrix),ne.projectionMatrixInverse.copy(le.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Wh*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(ne){l=ne,f!==null&&(f.fixedFoveation=ne),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ne)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(B)},this.getCameraTexture=function(ne){return m[ne]};let He=null;function Ye(ne,le){if(u=le.getViewerPose(c||o),_=le,u!==null){const pe=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let Be=!1;pe.length!==B.cameras.length&&(B.cameras.length=0,Be=!0);for(let P=0;P<pe.length;P++){const F=pe[P];let Y=null;if(d!==null)Y=d.getViewport(F);else{const L=h.getViewSubImage(f,F);Y=L.viewport,P===0&&(e.setRenderTargetTextures(M,L.colorTexture,L.depthStencilTexture),e.setRenderTarget(M))}let te=D[P];te===void 0&&(te=new Ai,te.layers.enable(P),te.viewport=new Yt,D[P]=te),te.matrix.fromArray(F.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(F.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Y.x,Y.y,Y.width,Y.height),P===0&&(B.matrix.copy(te.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Be===!0&&B.cameras.push(te)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){h=n.getBinding();const P=h.getDepthInformation(pe[0]);P&&P.isValid&&P.texture&&p.init(P,r.renderState)}if(Ne&&Ne.includes("camera-access")&&g){e.state.unbindTexture(),h=n.getBinding();for(let P=0;P<pe.length;P++){const F=pe[P].camera;if(F){let Y=m[F];Y||(Y=new nx,m[F]=Y);const te=h.getCameraImage(F);Y.sourceTexture=te}}}}for(let pe=0;pe<T.length;pe++){const Be=R[pe],Ne=T[pe];Be!==null&&Ne!==void 0&&Ne.update(Be,le,c||o)}He&&He(ne,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),_=null}const Ke=new ox;Ke.setAnimationLoop(Ye),this.setAnimationLoop=function(ne){He=ne},this.dispose=function(){}}}const Cs=new Or,Ew=new $t;function bw(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,ix(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,S,E,M){m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,M)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,E):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===ei&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===ei&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m),E=S.envMap,M=S.envMapRotation;E&&(p.envMap.value=E,Cs.copy(M),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),p.envMapRotation.value.setFromMatrix4(Ew.makeRotationFromEuler(Cs)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=E*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ei&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Tw(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const M=E.program;n.uniformBlockBinding(S,M)}function c(S,E){let M=r[S.id];M===void 0&&(_(S),M=u(S),r[S.id]=M,S.addEventListener("dispose",p));const T=E.program;n.updateUBOMapping(S,T);const R=e.render.frame;s[S.id]!==R&&(f(S),s[S.id]=R)}function u(S){const E=h();S.__bindingPointIndex=E;const M=i.createBuffer(),T=S.__size,R=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,T,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,M),M}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const E=r[S.id],M=S.uniforms,T=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let R=0,A=M.length;R<A;R++){const v=Array.isArray(M[R])?M[R]:[M[R]];for(let y=0,U=v.length;y<U;y++){const D=v[y];if(d(D,R,y,T)===!0){const B=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let G=0;G<H.length;G++){const V=H[G],O=g(V);typeof V=="number"||typeof V=="boolean"?(D.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,B+W,D.__data)):V.isMatrix3?(D.__data[0]=V.elements[0],D.__data[1]=V.elements[1],D.__data[2]=V.elements[2],D.__data[3]=0,D.__data[4]=V.elements[3],D.__data[5]=V.elements[4],D.__data[6]=V.elements[5],D.__data[7]=0,D.__data[8]=V.elements[6],D.__data[9]=V.elements[7],D.__data[10]=V.elements[8],D.__data[11]=0):(V.toArray(D.__data,W),W+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,E,M,T){const R=S.value,A=E+"_"+M;if(T[A]===void 0)return typeof R=="number"||typeof R=="boolean"?T[A]=R:T[A]=R.clone(),!0;{const v=T[A];if(typeof R=="number"||typeof R=="boolean"){if(v!==R)return T[A]=R,!0}else if(v.equals(R)===!1)return v.copy(R),!0}return!1}function _(S){const E=S.uniforms;let M=0;const T=16;for(let A=0,v=E.length;A<v;A++){const y=Array.isArray(E[A])?E[A]:[E[A]];for(let U=0,D=y.length;U<D;U++){const B=y[U],H=Array.isArray(B.value)?B.value:[B.value];for(let W=0,G=H.length;W<G;W++){const V=H[W],O=g(V),ee=M%T,se=ee%O.boundary,N=ee+se;M+=se,N!==0&&T-N<O.storage&&(M+=T-N),B.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=O.storage}}}const R=M%T;return R>0&&(M+=T-R),S.__size=M,S.__cache={},this}function g(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):je("WebGLRenderer: Unsupported uniform value type.",S),E}function p(S){const E=S.target;E.removeEventListener("dispose",p);const M=o.indexOf(E.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function m(){for(const S in r)i.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}const Aw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $i=null;function ww(){return $i===null&&($i=new SE(Aw,16,16,ea,Fr),$i.name="DFG_LUT",$i.minFilter=Dn,$i.magFilter=Dn,$i.wrapS=Cr,$i.wrapT=Cr,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}class Rw{constructor(e={}){const{canvas:t=Zy(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=wi}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;const g=d,p=new Set([Xd,Wd,Gd]),m=new Set([wi,dr,cl,ul,Vd,Hd]),S=new Uint32Array(4),E=new Int32Array(4);let M=null,T=null;const R=[],A=[];let v=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=cr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let U=!1;this._outputColorSpace=Ei;let D=0,B=0,H=null,W=-1,G=null;const V=new Yt,O=new Yt;let ee=null;const se=new bt(0);let N=0,_e=t.width,ge=t.height,He=1,Ye=null,Ke=null;const ne=new Yt(0,0,_e,ge),le=new Yt(0,0,_e,ge);let pe=!1;const Be=new Q0;let Ne=!1,Oe=!1;const ct=new $t,P=new Z,F=new Yt,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function L(){return H===null?He:1}let C=n;function ue(b,k){return t.getContext(b,k)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zd}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",dt,!1),C===null){const k="webgl2";if(C=ue(k,b),C===null)throw ue(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw mt("WebGLRenderer: "+b.message),b}let oe,re,$,w,x,I,X,K,q,fe,ce,be,Se,ae,de,De,Me,ve,Xe,z,xe,me,Te;function he(){oe=new RA(C),oe.init(),xe=new xw(C,oe),re=new SA(C,oe,e,xe),$=new _w(C,oe),re.reversedDepthBuffer&&f&&$.buffers.depth.setReversed(!0),w=new DA(C),x=new nw,I=new gw(C,oe,$,x,re,xe,w),X=new wA(y),K=new NE(C),me=new xA(C,K),q=new CA(C,K,w,me),fe=new LA(C,q,K,me,w),ve=new IA(C,re,I),de=new MA(x),ce=new tw(y,X,oe,re,me,de),be=new bw(y,x),Se=new rw,ae=new uw(oe),Me=new gA(y,X,$,fe,_,l),De=new mw(y,fe,re),Te=new Tw(C,w,re,$),Xe=new vA(C,oe,w),z=new PA(C,oe,w),w.programs=ce.programs,y.capabilities=re,y.extensions=oe,y.properties=x,y.renderLists=Se,y.shadowMap=De,y.state=$,y.info=w}he(),g!==wi&&(v=new FA(g,t.width,t.height,r,s));const ie=new yw(y,C);this.xr=ie,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const b=oe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=oe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return He},this.setPixelRatio=function(b){b!==void 0&&(He=b,this.setSize(_e,ge,!1))},this.getSize=function(b){return b.set(_e,ge)},this.setSize=function(b,k,Q=!0){if(ie.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=b,ge=k,t.width=Math.floor(b*He),t.height=Math.floor(k*He),Q===!0&&(t.style.width=b+"px",t.style.height=k+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(_e*He,ge*He).floor()},this.setDrawingBufferSize=function(b,k,Q){_e=b,ge=k,He=Q,t.width=Math.floor(b*Q),t.height=Math.floor(k*Q),this.setViewport(0,0,b,k)},this.setEffects=function(b){if(g===wi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let k=0;k<b.length;k++)if(b[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(V)},this.getViewport=function(b){return b.copy(ne)},this.setViewport=function(b,k,Q,J){b.isVector4?ne.set(b.x,b.y,b.z,b.w):ne.set(b,k,Q,J),$.viewport(V.copy(ne).multiplyScalar(He).round())},this.getScissor=function(b){return b.copy(le)},this.setScissor=function(b,k,Q,J){b.isVector4?le.set(b.x,b.y,b.z,b.w):le.set(b,k,Q,J),$.scissor(O.copy(le).multiplyScalar(He).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(b){$.setScissorTest(pe=b)},this.setOpaqueSort=function(b){Ye=b},this.setTransparentSort=function(b){Ke=b},this.getClearColor=function(b){return b.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(b=!0,k=!0,Q=!0){let J=0;if(b){let j=!1;if(H!==null){const ye=H.texture.format;j=p.has(ye)}if(j){const ye=H.texture.type,Ae=m.has(ye),Ee=Me.getClearColor(),Ue=Me.getClearAlpha(),Le=Ee.r,Qe=Ee.g,st=Ee.b;Ae?(S[0]=Le,S[1]=Qe,S[2]=st,S[3]=Ue,C.clearBufferuiv(C.COLOR,0,S)):(E[0]=Le,E[1]=Qe,E[2]=st,E[3]=Ue,C.clearBufferiv(C.COLOR,0,E))}else J|=C.COLOR_BUFFER_BIT}k&&(J|=C.DEPTH_BUFFER_BIT),Q&&(J|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&C.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",dt,!1),Me.dispose(),Se.dispose(),ae.dispose(),x.dispose(),X.dispose(),fe.dispose(),me.dispose(),Te.dispose(),ce.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",$e),ie.removeEventListener("sessionend",Gt),Ze.stop()};function Ie(b){b.preventDefault(),_m("WebGLRenderer: Context Lost."),U=!0}function Ge(){_m("WebGLRenderer: Context Restored."),U=!1;const b=w.autoReset,k=De.enabled,Q=De.autoUpdate,J=De.needsUpdate,j=De.type;he(),w.autoReset=b,De.enabled=k,De.autoUpdate=Q,De.needsUpdate=J,De.type=j}function dt(b){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Pe(b){const k=b.target;k.removeEventListener("dispose",Pe),ze(k)}function ze(b){et(b),x.remove(b)}function et(b){const k=x.get(b).programs;k!==void 0&&(k.forEach(function(Q){ce.releaseProgram(Q)}),b.isShaderMaterial&&ce.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,Q,J,j,ye){k===null&&(k=Y);const Ae=j.isMesh&&j.matrixWorld.determinant()<0,Ee=Si(b,k,Q,J,j);$.setMaterial(J,Ae);let Ue=Q.index,Le=1;if(J.wireframe===!0){if(Ue=q.getWireframeAttribute(Q),Ue===void 0)return;Le=2}const Qe=Q.drawRange,st=Q.attributes.position;let Ve=Qe.start*Le,Tt=(Qe.start+Qe.count)*Le;ye!==null&&(Ve=Math.max(Ve,ye.start*Le),Tt=Math.min(Tt,(ye.start+ye.count)*Le)),Ue!==null?(Ve=Math.max(Ve,0),Tt=Math.min(Tt,Ue.count)):st!=null&&(Ve=Math.max(Ve,0),Tt=Math.min(Tt,st.count));const Wt=Tt-Ve;if(Wt<0||Wt===1/0)return;me.setup(j,J,Ee,Q,Ue);let Vt,At=Xe;if(Ue!==null&&(Vt=K.get(Ue),At=z,At.setIndex(Vt)),j.isMesh)J.wireframe===!0?($.setLineWidth(J.wireframeLinewidth*L()),At.setMode(C.LINES)):At.setMode(C.TRIANGLES);else if(j.isLine){let Sn=J.linewidth;Sn===void 0&&(Sn=1),$.setLineWidth(Sn*L()),j.isLineSegments?At.setMode(C.LINES):j.isLineLoop?At.setMode(C.LINE_LOOP):At.setMode(C.LINE_STRIP)}else j.isPoints?At.setMode(C.POINTS):j.isSprite&&At.setMode(C.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Xc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))At.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Sn=j._multiDrawStarts,ke=j._multiDrawCounts,ii=j._multiDrawCount,pt=Ue?K.get(Ue).bytesPerElement:1,Ni=x.get(J).currentProgram.getUniforms();for(let Xi=0;Xi<ii;Xi++)Ni.setValue(C,"_gl_DrawID",Xi),At.render(Sn[Xi]/pt,ke[Xi])}else if(j.isInstancedMesh)At.renderInstances(Ve,Wt,j.count);else if(Q.isInstancedBufferGeometry){const Sn=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,ke=Math.min(Q.instanceCount,Sn);At.renderInstances(Ve,Wt,ke)}else At.render(Ve,Wt)};function we(b,k,Q){b.transparent===!0&&b.side===wr&&b.forceSinglePass===!1?(b.side=ei,b.needsUpdate=!0,xn(b,k,Q),b.side=ps,b.needsUpdate=!0,xn(b,k,Q),b.side=wr):xn(b,k,Q)}this.compile=function(b,k,Q=null){Q===null&&(Q=b),T=ae.get(Q),T.init(k),A.push(T),Q.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),b!==Q&&b.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),T.setupLights();const J=new Set;return b.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const ye=j.material;if(ye)if(Array.isArray(ye))for(let Ae=0;Ae<ye.length;Ae++){const Ee=ye[Ae];we(Ee,Q,j),J.add(Ee)}else we(ye,Q,j),J.add(ye)}),T=A.pop(),J},this.compileAsync=function(b,k,Q=null){const J=this.compile(b,k,Q);return new Promise(j=>{function ye(){if(J.forEach(function(Ae){x.get(Ae).currentProgram.isReady()&&J.delete(Ae)}),J.size===0){j(b);return}setTimeout(ye,10)}oe.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let qe=null;function We(b){qe&&qe(b)}function $e(){Ze.stop()}function Gt(){Ze.start()}const Ze=new ox;Ze.setAnimationLoop(We),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(b){qe=b,ie.setAnimationLoop(b),b===null?Ze.stop():Ze.start()},ie.addEventListener("sessionstart",$e),ie.addEventListener("sessionend",Gt),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const Q=ie.enabled===!0&&ie.isPresenting===!0,J=v!==null&&(H===null||Q)&&v.begin(y,H);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(k),k=ie.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,k,H),T=ae.get(b,A.length),T.init(k),A.push(T),ct.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Be.setFromProjectionMatrix(ct,or,k.reversedDepth),Oe=this.localClippingEnabled,Ne=de.init(this.clippingPlanes,Oe),M=Se.get(b,R.length),M.init(),R.push(M),ie.enabled===!0&&ie.isPresenting===!0){const Ae=y.xr.getDepthSensingMesh();Ae!==null&&Ut(Ae,k,-1/0,y.sortObjects)}Ut(b,k,0,y.sortObjects),M.finish(),y.sortObjects===!0&&M.sort(Ye,Ke),te=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,te&&Me.addToRenderList(M,b),this.info.render.frame++,Ne===!0&&de.beginShadows();const j=T.state.shadowsArray;if(De.render(j,b,k),Ne===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&v.hasRenderPass())===!1){const Ae=M.opaque,Ee=M.transmissive;if(T.setupLights(),k.isArrayCamera){const Ue=k.cameras;if(Ee.length>0)for(let Le=0,Qe=Ue.length;Le<Qe;Le++){const st=Ue[Le];Ft(Ae,Ee,b,st)}te&&Me.render(b);for(let Le=0,Qe=Ue.length;Le<Qe;Le++){const st=Ue[Le];Qt(M,b,st,st.viewport)}}else Ee.length>0&&Ft(Ae,Ee,b,k),te&&Me.render(b),Qt(M,b,k)}H!==null&&B===0&&(I.updateMultisampleRenderTarget(H),I.updateRenderTargetMipmap(H)),J&&v.end(y),b.isScene===!0&&b.onAfterRender(y,b,k),me.resetDefaultState(),W=-1,G=null,A.pop(),A.length>0?(T=A[A.length-1],Ne===!0&&de.setGlobalState(y.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?M=R[R.length-1]:M=null};function Ut(b,k,Q,J){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)Q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Be.intersectsSprite(b)){J&&F.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ct);const Ae=fe.update(b),Ee=b.material;Ee.visible&&M.push(b,Ae,Ee,Q,F.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Be.intersectsObject(b))){const Ae=fe.update(b),Ee=b.material;if(J&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),F.copy(b.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),F.copy(Ae.boundingSphere.center)),F.applyMatrix4(b.matrixWorld).applyMatrix4(ct)),Array.isArray(Ee)){const Ue=Ae.groups;for(let Le=0,Qe=Ue.length;Le<Qe;Le++){const st=Ue[Le],Ve=Ee[st.materialIndex];Ve&&Ve.visible&&M.push(b,Ae,Ve,Q,F.z,st)}}else Ee.visible&&M.push(b,Ae,Ee,Q,F.z,null)}}const ye=b.children;for(let Ae=0,Ee=ye.length;Ae<Ee;Ae++)Ut(ye[Ae],k,Q,J)}function Qt(b,k,Q,J){const{opaque:j,transmissive:ye,transparent:Ae}=b;T.setupLightsView(Q),Ne===!0&&de.setGlobalState(y.clippingPlanes,Q),J&&$.viewport(V.copy(J)),j.length>0&&yt(j,k,Q),ye.length>0&&yt(ye,k,Q),Ae.length>0&&yt(Ae,k,Q),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function Ft(b,k,Q,J){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[J.id]===void 0){const Ve=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[J.id]=new ur(1,1,{generateMipmaps:!0,type:Ve?Fr:wi,minFilter:zs,samples:Math.max(4,re.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace})}const ye=T.state.transmissionRenderTarget[J.id],Ae=J.viewport||V;ye.setSize(Ae.z*y.transmissionResolutionScale,Ae.w*y.transmissionResolutionScale);const Ee=y.getRenderTarget(),Ue=y.getActiveCubeFace(),Le=y.getActiveMipmapLevel();y.setRenderTarget(ye),y.getClearColor(se),N=y.getClearAlpha(),N<1&&y.setClearColor(16777215,.5),y.clear(),te&&Me.render(Q);const Qe=y.toneMapping;y.toneMapping=cr;const st=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),T.setupLightsView(J),Ne===!0&&de.setGlobalState(y.clippingPlanes,J),yt(b,Q,J),I.updateMultisampleRenderTarget(ye),I.updateRenderTargetMipmap(ye),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Tt=0,Wt=k.length;Tt<Wt;Tt++){const Vt=k[Tt],{object:At,geometry:Sn,material:ke,group:ii}=Vt;if(ke.side===wr&&At.layers.test(J.layers)){const pt=ke.side;ke.side=ei,ke.needsUpdate=!0,xt(At,Q,J,Sn,ke,ii),ke.side=pt,ke.needsUpdate=!0,Ve=!0}}Ve===!0&&(I.updateMultisampleRenderTarget(ye),I.updateRenderTargetMipmap(ye))}y.setRenderTarget(Ee,Ue,Le),y.setClearColor(se,N),st!==void 0&&(J.viewport=st),y.toneMapping=Qe}function yt(b,k,Q){const J=k.isScene===!0?k.overrideMaterial:null;for(let j=0,ye=b.length;j<ye;j++){const Ae=b[j],{object:Ee,geometry:Ue,group:Le}=Ae;let Qe=Ae.material;Qe.allowOverride===!0&&J!==null&&(Qe=J),Ee.layers.test(Q.layers)&&xt(Ee,k,Q,Ue,Qe,Le)}}function xt(b,k,Q,J,j,ye){b.onBeforeRender(y,k,Q,J,j,ye),b.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),j.onBeforeRender(y,k,Q,J,b,ye),j.transparent===!0&&j.side===wr&&j.forceSinglePass===!1?(j.side=ei,j.needsUpdate=!0,y.renderBufferDirect(Q,k,J,j,b,ye),j.side=ps,j.needsUpdate=!0,y.renderBufferDirect(Q,k,J,j,b,ye),j.side=wr):y.renderBufferDirect(Q,k,J,j,b,ye),b.onAfterRender(y,k,Q,J,j,ye)}function xn(b,k,Q){k.isScene!==!0&&(k=Y);const J=x.get(b),j=T.state.lights,ye=T.state.shadowsArray,Ae=j.state.version,Ee=ce.getParameters(b,j.state,ye,k,Q),Ue=ce.getProgramCacheKey(Ee);let Le=J.programs;J.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?k.environment:null,J.fog=k.fog;const Qe=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;J.envMap=X.get(b.envMap||J.environment,Qe),J.envMapRotation=J.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Le===void 0&&(b.addEventListener("dispose",Pe),Le=new Map,J.programs=Le);let st=Le.get(Ue);if(st!==void 0){if(J.currentProgram===st&&J.lightsStateVersion===Ae)return vn(b,Ee),st}else Ee.uniforms=ce.getUniforms(b),b.onBeforeCompile(Ee,y),st=ce.acquireProgram(Ee,Ue),Le.set(Ue,st),J.uniforms=Ee.uniforms;const Ve=J.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ve.clippingPlanes=de.uniform),vn(b,Ee),J.needsLights=tn(b),J.lightsStateVersion=Ae,J.needsLights&&(Ve.ambientLightColor.value=j.state.ambient,Ve.lightProbe.value=j.state.probe,Ve.directionalLights.value=j.state.directional,Ve.directionalLightShadows.value=j.state.directionalShadow,Ve.spotLights.value=j.state.spot,Ve.spotLightShadows.value=j.state.spotShadow,Ve.rectAreaLights.value=j.state.rectArea,Ve.ltc_1.value=j.state.rectAreaLTC1,Ve.ltc_2.value=j.state.rectAreaLTC2,Ve.pointLights.value=j.state.point,Ve.pointLightShadows.value=j.state.pointShadow,Ve.hemisphereLights.value=j.state.hemi,Ve.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ve.spotLightMatrix.value=j.state.spotLightMatrix,Ve.spotLightMap.value=j.state.spotLightMap,Ve.pointShadowMatrix.value=j.state.pointShadowMatrix),J.currentProgram=st,J.uniformsList=null,st}function Pt(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=bc.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function vn(b,k){const Q=x.get(b);Q.outputColorSpace=k.outputColorSpace,Q.batching=k.batching,Q.batchingColor=k.batchingColor,Q.instancing=k.instancing,Q.instancingColor=k.instancingColor,Q.instancingMorph=k.instancingMorph,Q.skinning=k.skinning,Q.morphTargets=k.morphTargets,Q.morphNormals=k.morphNormals,Q.morphColors=k.morphColors,Q.morphTargetsCount=k.morphTargetsCount,Q.numClippingPlanes=k.numClippingPlanes,Q.numIntersection=k.numClipIntersection,Q.vertexAlphas=k.vertexAlphas,Q.vertexTangents=k.vertexTangents,Q.toneMapping=k.toneMapping}function Si(b,k,Q,J,j){k.isScene!==!0&&(k=Y),I.resetTextureUnits();const ye=k.fog,Ae=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?k.environment:null,Ee=H===null?y.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:ta,Ue=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Le=X.get(J.envMap||Ae,Ue),Qe=J.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,st=!!Q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ve=!!Q.morphAttributes.position,Tt=!!Q.morphAttributes.normal,Wt=!!Q.morphAttributes.color;let Vt=cr;J.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Vt=y.toneMapping);const At=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Sn=At!==void 0?At.length:0,ke=x.get(J),ii=T.state.lights;if(Ne===!0&&(Oe===!0||b!==G)){const ln=b===G&&J.id===W;de.setState(J,b,ln)}let pt=!1;J.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==ii.state.version||ke.outputColorSpace!==Ee||j.isBatchedMesh&&ke.batching===!1||!j.isBatchedMesh&&ke.batching===!0||j.isBatchedMesh&&ke.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&ke.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&ke.instancing===!1||!j.isInstancedMesh&&ke.instancing===!0||j.isSkinnedMesh&&ke.skinning===!1||!j.isSkinnedMesh&&ke.skinning===!0||j.isInstancedMesh&&ke.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ke.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&ke.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&ke.instancingMorph===!1&&j.morphTexture!==null||ke.envMap!==Le||J.fog===!0&&ke.fog!==ye||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==de.numPlanes||ke.numIntersection!==de.numIntersection)||ke.vertexAlphas!==Qe||ke.vertexTangents!==st||ke.morphTargets!==Ve||ke.morphNormals!==Tt||ke.morphColors!==Wt||ke.toneMapping!==Vt||ke.morphTargetsCount!==Sn)&&(pt=!0):(pt=!0,ke.__version=J.version);let Ni=ke.currentProgram;pt===!0&&(Ni=xn(J,k,j));let Xi=!1,vs=!1,ro=!1;const wt=Ni.getUniforms(),dn=ke.uniforms;if($.useProgram(Ni.program)&&(Xi=!0,vs=!0,ro=!0),J.id!==W&&(W=J.id,vs=!0),Xi||G!==b){$.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),wt.setValue(C,"projectionMatrix",b.projectionMatrix),wt.setValue(C,"viewMatrix",b.matrixWorldInverse);const kr=wt.map.cameraPosition;kr!==void 0&&kr.setValue(C,P.setFromMatrixPosition(b.matrixWorld)),re.logarithmicDepthBuffer&&wt.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&wt.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),G!==b&&(G=b,vs=!0,ro=!0)}if(ke.needsLights&&(ii.state.directionalShadowMap.length>0&&wt.setValue(C,"directionalShadowMap",ii.state.directionalShadowMap,I),ii.state.spotShadowMap.length>0&&wt.setValue(C,"spotShadowMap",ii.state.spotShadowMap,I),ii.state.pointShadowMap.length>0&&wt.setValue(C,"pointShadowMap",ii.state.pointShadowMap,I)),j.isSkinnedMesh){wt.setOptional(C,j,"bindMatrix"),wt.setOptional(C,j,"bindMatrixInverse");const ln=j.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),wt.setValue(C,"boneTexture",ln.boneTexture,I))}j.isBatchedMesh&&(wt.setOptional(C,j,"batchingTexture"),wt.setValue(C,"batchingTexture",j._matricesTexture,I),wt.setOptional(C,j,"batchingIdTexture"),wt.setValue(C,"batchingIdTexture",j._indirectTexture,I),wt.setOptional(C,j,"batchingColorTexture"),j._colorsTexture!==null&&wt.setValue(C,"batchingColorTexture",j._colorsTexture,I));const zr=Q.morphAttributes;if((zr.position!==void 0||zr.normal!==void 0||zr.color!==void 0)&&ve.update(j,Q,Ni),(vs||ke.receiveShadow!==j.receiveShadow)&&(ke.receiveShadow=j.receiveShadow,wt.setValue(C,"receiveShadow",j.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&k.environment!==null&&(dn.envMapIntensity.value=k.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=ww()),vs&&(wt.setValue(C,"toneMappingExposure",y.toneMappingExposure),ke.needsLights&&en(dn,ro),ye&&J.fog===!0&&be.refreshFogUniforms(dn,ye),be.refreshMaterialUniforms(dn,J,He,ge,T.state.transmissionRenderTarget[b.id]),bc.upload(C,Pt(ke),dn,I)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(bc.upload(C,Pt(ke),dn,I),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&wt.setValue(C,"center",j.center),wt.setValue(C,"modelViewMatrix",j.modelViewMatrix),wt.setValue(C,"normalMatrix",j.normalMatrix),wt.setValue(C,"modelMatrix",j.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const ln=J.uniformsGroups;for(let kr=0,so=ln.length;kr<so;kr++){const Jd=ln[kr];Te.update(Jd,Ni),Te.bind(Jd,Ni)}}return Ni}function en(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function tn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(b,k,Q){const J=x.get(b);J.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),x.get(b.texture).__webglTexture=k,x.get(b.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Q,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,k){const Q=x.get(b);Q.__webglFramebuffer=k,Q.__useDefaultFramebuffer=k===void 0};const an=C.createFramebuffer();this.setRenderTarget=function(b,k=0,Q=0){H=b,D=k,B=Q;let J=null,j=!1,ye=!1;if(b){const Ee=x.get(b);if(Ee.__useDefaultFramebuffer!==void 0){$.bindFramebuffer(C.FRAMEBUFFER,Ee.__webglFramebuffer),V.copy(b.viewport),O.copy(b.scissor),ee=b.scissorTest,$.viewport(V),$.scissor(O),$.setScissorTest(ee),W=-1;return}else if(Ee.__webglFramebuffer===void 0)I.setupRenderTarget(b);else if(Ee.__hasExternalTextures)I.rebindTextures(b,x.get(b.texture).__webglTexture,x.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Qe=b.depthTexture;if(Ee.__boundDepthTexture!==Qe){if(Qe!==null&&x.has(Qe)&&(b.width!==Qe.image.width||b.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(b)}}const Ue=b.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ye=!0);const Le=x.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Le[k])?J=Le[k][Q]:J=Le[k],j=!0):b.samples>0&&I.useMultisampledRTT(b)===!1?J=x.get(b).__webglMultisampledFramebuffer:Array.isArray(Le)?J=Le[Q]:J=Le,V.copy(b.viewport),O.copy(b.scissor),ee=b.scissorTest}else V.copy(ne).multiplyScalar(He).floor(),O.copy(le).multiplyScalar(He).floor(),ee=pe;if(Q!==0&&(J=an),$.bindFramebuffer(C.FRAMEBUFFER,J)&&$.drawBuffers(b,J),$.viewport(V),$.scissor(O),$.setScissorTest(ee),j){const Ee=x.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ee.__webglTexture,Q)}else if(ye){const Ee=k;for(let Ue=0;Ue<b.textures.length;Ue++){const Le=x.get(b.textures[Ue]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ue,Le.__webglTexture,Q,Ee)}}else if(b!==null&&Q!==0){const Ee=x.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ee.__webglTexture,Q)}W=-1},this.readRenderTargetPixels=function(b,k,Q,J,j,ye,Ae,Ee=0){if(!(b&&b.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=x.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ue=Ue[Ae]),Ue){$.bindFramebuffer(C.FRAMEBUFFER,Ue);try{const Le=b.textures[Ee],Qe=Le.format,st=Le.type;if(b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ee),!re.textureFormatReadable(Qe)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(st)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-J&&Q>=0&&Q<=b.height-j&&C.readPixels(k,Q,J,j,xe.convert(Qe),xe.convert(st),ye)}finally{const Le=H!==null?x.get(H).__webglFramebuffer:null;$.bindFramebuffer(C.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(b,k,Q,J,j,ye,Ae,Ee=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=x.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ue=Ue[Ae]),Ue)if(k>=0&&k<=b.width-J&&Q>=0&&Q<=b.height-j){$.bindFramebuffer(C.FRAMEBUFFER,Ue);const Le=b.textures[Ee],Qe=Le.format,st=Le.type;if(b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ee),!re.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ve),C.bufferData(C.PIXEL_PACK_BUFFER,ye.byteLength,C.STREAM_READ),C.readPixels(k,Q,J,j,xe.convert(Qe),xe.convert(st),0);const Tt=H!==null?x.get(H).__webglFramebuffer:null;$.bindFramebuffer(C.FRAMEBUFFER,Tt);const Wt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Jy(C,Wt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ve),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ye),C.deleteBuffer(Ve),C.deleteSync(Wt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,k=null,Q=0){const J=Math.pow(2,-Q),j=Math.floor(b.image.width*J),ye=Math.floor(b.image.height*J),Ae=k!==null?k.x:0,Ee=k!==null?k.y:0;I.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,Q,0,0,Ae,Ee,j,ye),$.unbindTexture()};const mr=C.createFramebuffer(),io=C.createFramebuffer();this.copyTextureToTexture=function(b,k,Q=null,J=null,j=0,ye=0){let Ae,Ee,Ue,Le,Qe,st,Ve,Tt,Wt;const Vt=b.isCompressedTexture?b.mipmaps[ye]:b.image;if(Q!==null)Ae=Q.max.x-Q.min.x,Ee=Q.max.y-Q.min.y,Ue=Q.isBox3?Q.max.z-Q.min.z:1,Le=Q.min.x,Qe=Q.min.y,st=Q.isBox3?Q.min.z:0;else{const dn=Math.pow(2,-j);Ae=Math.floor(Vt.width*dn),Ee=Math.floor(Vt.height*dn),b.isDataArrayTexture?Ue=Vt.depth:b.isData3DTexture?Ue=Math.floor(Vt.depth*dn):Ue=1,Le=0,Qe=0,st=0}J!==null?(Ve=J.x,Tt=J.y,Wt=J.z):(Ve=0,Tt=0,Wt=0);const At=xe.convert(k.format),Sn=xe.convert(k.type);let ke;k.isData3DTexture?(I.setTexture3D(k,0),ke=C.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(I.setTexture2DArray(k,0),ke=C.TEXTURE_2D_ARRAY):(I.setTexture2D(k,0),ke=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,k.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,k.unpackAlignment);const ii=C.getParameter(C.UNPACK_ROW_LENGTH),pt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ni=C.getParameter(C.UNPACK_SKIP_PIXELS),Xi=C.getParameter(C.UNPACK_SKIP_ROWS),vs=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Vt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Vt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Le),C.pixelStorei(C.UNPACK_SKIP_ROWS,Qe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,st);const ro=b.isDataArrayTexture||b.isData3DTexture,wt=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){const dn=x.get(b),zr=x.get(k),ln=x.get(dn.__renderTarget),kr=x.get(zr.__renderTarget);$.bindFramebuffer(C.READ_FRAMEBUFFER,ln.__webglFramebuffer),$.bindFramebuffer(C.DRAW_FRAMEBUFFER,kr.__webglFramebuffer);for(let so=0;so<Ue;so++)ro&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,x.get(b).__webglTexture,j,st+so),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,x.get(k).__webglTexture,ye,Wt+so)),C.blitFramebuffer(Le,Qe,Ae,Ee,Ve,Tt,Ae,Ee,C.DEPTH_BUFFER_BIT,C.NEAREST);$.bindFramebuffer(C.READ_FRAMEBUFFER,null),$.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(j!==0||b.isRenderTargetTexture||x.has(b)){const dn=x.get(b),zr=x.get(k);$.bindFramebuffer(C.READ_FRAMEBUFFER,mr),$.bindFramebuffer(C.DRAW_FRAMEBUFFER,io);for(let ln=0;ln<Ue;ln++)ro?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,dn.__webglTexture,j,st+ln):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,dn.__webglTexture,j),wt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,zr.__webglTexture,ye,Wt+ln):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,zr.__webglTexture,ye),j!==0?C.blitFramebuffer(Le,Qe,Ae,Ee,Ve,Tt,Ae,Ee,C.COLOR_BUFFER_BIT,C.NEAREST):wt?C.copyTexSubImage3D(ke,ye,Ve,Tt,Wt+ln,Le,Qe,Ae,Ee):C.copyTexSubImage2D(ke,ye,Ve,Tt,Le,Qe,Ae,Ee);$.bindFramebuffer(C.READ_FRAMEBUFFER,null),$.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else wt?b.isDataTexture||b.isData3DTexture?C.texSubImage3D(ke,ye,Ve,Tt,Wt,Ae,Ee,Ue,At,Sn,Vt.data):k.isCompressedArrayTexture?C.compressedTexSubImage3D(ke,ye,Ve,Tt,Wt,Ae,Ee,Ue,At,Vt.data):C.texSubImage3D(ke,ye,Ve,Tt,Wt,Ae,Ee,Ue,At,Sn,Vt):b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ye,Ve,Tt,Ae,Ee,At,Sn,Vt.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ye,Ve,Tt,Vt.width,Vt.height,At,Vt.data):C.texSubImage2D(C.TEXTURE_2D,ye,Ve,Tt,Ae,Ee,At,Sn,Vt);C.pixelStorei(C.UNPACK_ROW_LENGTH,ii),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,pt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ni),C.pixelStorei(C.UNPACK_SKIP_ROWS,Xi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,vs),ye===0&&k.generateMipmaps&&C.generateMipmap(ke),$.unbindTexture()},this.initRenderTarget=function(b){x.get(b).__webglFramebuffer===void 0&&I.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?I.setTextureCube(b,0):b.isData3DTexture?I.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?I.setTexture2DArray(b,0):I.setTexture2D(b,0),$.unbindTexture()},this.resetState=function(){D=0,B=0,H=null,$.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}const hu=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},Cw={__name:"HeroSection",setup(i){const e=_t(null),t=_t(null),n=_t(null),r=_t(null),s=_t(null),o=_t(null),a=_t(null),l=_t(null),c=_t([]),u=sg(()=>"manivel".split(""));let h,f,d,_,g,p=0,m=0,S=0,E=0;function M(){f=new pE,d=new Ai(75,window.innerWidth/window.innerHeight,.1,1e3),d.position.z=5,h=new Rw({canvas:t.value,alpha:!0,antialias:!0}),h.setSize(window.innerWidth,window.innerHeight),h.setPixelRatio(Math.min(window.devicePixelRatio,2));const y=1800,U=new Fi,D=new Float32Array(y*3),B=new Float32Array(y);for(let W=0;W<y;W++)D[W*3]=(Math.random()-.5)*20,D[W*3+1]=(Math.random()-.5)*20,D[W*3+2]=(Math.random()-.5)*20,B[W]=Math.random()*2+.5;U.setAttribute("position",new Li(D,3)),U.setAttribute("size",new Li(B,1));const H=new ex({color:16777215,size:.025,transparent:!0,opacity:.6,sizeAttenuation:!0});_=new bE(U,H),f.add(_);for(let W=0;W<6;W++){const G=new Zd(Math.random()*.4+.1,0),V=new Kd({color:16777215,wireframe:!0,transparent:!0,opacity:.07+Math.random()*.05}),O=new Wi(G,V);O.position.set((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*5),O.userData.speed=Math.random()*.003+.001,O.userData.floatOffset=Math.random()*Math.PI*2,f.add(O)}}function T(y=0){g=requestAnimationFrame(T),S+=(p-S)*.02,E+=(m-E)*.02,_.rotation.y=y*8e-5+S*.3,_.rotation.x=y*4e-5+E*.2,f.children.forEach(U=>{U instanceof Wi&&(U.rotation.x+=U.userData.speed,U.rotation.y+=U.userData.speed*.7,U.position.y+=Math.sin(y*.001+U.userData.floatOffset)*.002)}),h.render(f,d)}function R(y){p=(y.clientX/window.innerWidth-.5)*.5,m=(y.clientY/window.innerHeight-.5)*.5}function A(){d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)}function v(){Rn.timeline({delay:.3}).from(r.value,{y:30,opacity:0,duration:.8,ease:"power3.out"}).from(c.value,{y:120,opacity:0,duration:1,stagger:.07,ease:"power4.out"},"-=0.4").from(o.value,{y:25,opacity:0,duration:.7,ease:"power3.out"},"-=0.3").from(a.value,{y:20,opacity:0,duration:.7,ease:"power3.out"},"-=0.4").from(l.value,{opacity:0,duration:1,ease:"power2.out"},"-=0.3")}return ia(()=>{M(),T(),v(),window.addEventListener("mousemove",R),window.addEventListener("resize",A)}),eu(()=>{cancelAnimationFrame(g),h==null||h.dispose(),window.removeEventListener("mousemove",R),window.removeEventListener("resize",A)}),(y,U)=>($n(),Kn("section",{class:"hero",ref_key:"heroRef",ref:e},[Re("canvas",{ref_key:"canvasRef",ref:t,class:"hero-canvas"},null,512),Re("div",{class:"hero-content",ref_key:"heroContentRef",ref:n},[Re("div",{class:"hero-label",ref_key:"labelRef",ref:r},"UX/UI Developer & Designer",512),Re("h1",{class:"hero-name",ref_key:"nameRef",ref:s},[($n(!0),Kn(wn,null,Hs(u.value,(D,B)=>($n(),Kn("span",{key:B,class:"char",ref_for:!0,ref:H=>c.value[B]=H},tr(D===" "?" ":D),1))),128))],512),Re("p",{class:"hero-sub",ref_key:"subRef",ref:o},"7+ Years crafting digital experiences",512),Re("div",{class:"hero-cta",ref_key:"ctaRef",ref:a},U[0]||(U[0]=[Re("a",{href:"#contact",class:"btn-outline"},"Let's connect",-1)]),512)],512),Re("div",{class:"scroll-indicator",ref_key:"scrollRef",ref:l},U[1]||(U[1]=[Re("span",null,"scroll",-1),Re("div",{class:"scroll-line"},null,-1)]),512)],512))}},Pw=hu(Cw,[["__scopeId","data-v-49675eb0"]]),Dw="/assets/Manivel-C6ZI7xEb.png",Iw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIkSURBVHgB7ZZBbtNAFIb/cRyJBYt0RQQSSm8wtInUHe4xWLU9AeUEDTcIJ6BdsuIIhA2ylLTMDeoVZIeXSI0z/OMQcNzx2E5cihCf5Hgynuf55/m9eQP8554RZQMGe/JYC7xlM+alhMbF5EqdV7A5YlPy6tDmpMimXMC+vNZAL2cUtdo4DEMVZfsPDmQvmeO91unEv8cLqMlUPastYDCQUi/wucBwTUQ6+Q0+5MWu8NvYzQtO++FgsUCvSKGZaH6D6/7+crFsO0kSBLyd5/s9lxFd2cEd4xTgeYjQEFxMZJ3DZcTgidEQvr+BAMbAMRpiPre/q8wDz9EQ3AuOUFcAcvm8DUXp6eGe+bsF0G0RGsJsx6grgEYXaIiFxkdbv58pNuN8pWPqjPwWXrK57Y4YtxOMbA+yHghM2e3vybNVh1IqpqhX2BaB16G6XYhSAZNLtfswwQ5WEwkM+30ZrAakHlk+22RXjIWHk+lUjYoGtMxPNJt9//J1Fj5+0jXFL+DV4/9f3988e/qo+057lCfwgF1dODDBy/h5w4W9+HSlQtfYtWorpezwm38zyqeXasdmkDkhud56yFWPUYG1LDDfHEtXd4wYm8HPo5YbjTNUxJaGab6yep0W2AQop/IWflsAIza9cxXMiNMgkJukYGUb64mLWTCs40YbjKHSA6/BuhMygIbmKE15Y9wxlVRm4SFUVxm3lQf+JLUFiAoVUjRYRf99fgAoN7tEBlN6RQAAAABJRU5ErkJggg==",Lw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANKSURBVHgB7ZpfbtNAEMa/dRKpD1RyT9D0BBjRSn2rOQFwAo7QcgLKCWhPAJygcALcN6QWsZyA9AQYykOlOF5mXIda3nWaVvbacfcnWUnWtpyZ+WY9+wdwOBwOh8PhcDxMBGoiDAP/6gr+dIpAKfieh7FQ2FSAT6d9ahv/f6i4+V6Erpnk52P6yA76g7ESuEBKvz1IPnd2JiVq4l4OYGMvLxF6AntsGB1BlVENwk6YkAU/6PlyfR1RFMkYd2RpB2xvByFd/JweFtLPAN2EFRKR6j6fn8tomRsWOoAj/fcP9umqA1xLeWUQyNLp6OybPL7lOjO7u8F4luCE5Y0Vhh0xneGJlOb08KpuTKZ4t+rGM5QO4+EAJ1XnjQrgfKc7v6BPCDwz9QtGBdDr6xV6RpVNRgfQe3flpW8gNDVqKRAEgU858ws9JJlho9wZagoYDnsZ/YzRSC/WNAdwGYv+ogVXc4DoZ/5nFMcjc3QHqOZq+uEMW3zkVZp1eHBWbhuWG6hw2ERDfJVykn/dolrjkB72BhYh2zbKbR5agoqSQ9tqoPTWgqt3grA3rGVF0GBli17Gb2EDQwffmgKKtKGGOXon2NKw14YaFJZTQKt1QMNq6GYKlLHZN3TSAXPmakCDdNoBGWtolE47YOdpsE8zU9/RIEN0EJ6PJMPfq4oxfJ2YFHDnufU6KUQ9RP1otpnGAnEbtYCNqAuDAzrRBzQc9YVoCsjW5RSsYDPXGZrrnJTbdAUoO/V4m1EvoisA+N2UADji/Gkz6kWEIbh6J8gyacgDZPhPtEi2zF5CS4E0bWe6ygaegravQHPAYIDaNh90jVQs8RqcTvurgCRZQgG8cqLQPyfQ612alsiNhRA1nqJvKHNqVy2OfkDPIJs+mtqNDsjX0SP0BYFPVXuGqneIzPBS9KAv4NwfJnhdeR63QCs4B1RB7dtcL6iJmKw7fpTgKJLV2+futk1O4QXl0h66uneIok3/8VQtkLx+yz0Ig8C/HCDMV5Ifg9Vh2Sn8qhbXBl+k1F+tzxAtinQVtW2VZXZ2gmybLFJyhgef1+Ly/Qbz7bJ+PtlinHAp1h/ieuga8/BcsZFpZnA8GkGuXSG+j7EOh8PhcDgcDscN/wAi1D6vdsdpQAAAAABJRU5ErkJggg==",Uw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAWmSURBVHgB7Vw5cttIFP1aA23FyVRaqqhsMksnGOoG8gksnoBUNCHJcCJJ4UTinMCabDJSmTMxnchwac1GU1Lg0ur3LMAFA91YGyBE4lV1CQZBsvvhv781aJESJUqUKFFYTEgBsLa2Vnt5ednE4TuMG4wvExMTg/Pz874MGUMlaHV1dRfEtHBY1VxigajOxcVFV4aEoRBEi3l+fj4SPTFeDI2oXAmypdTCqEkyDCYnJ/fylF4uBEFK9C/7KYj5CbCm7szMTMcCJGNkSlAVeHh4oMXsSgbIg6hMCAIvlfv7+wYW0AQ5FckY+J4DEHWYBVFGCcqbGA8sjO7l5WVHDMIYQQzZ8upn8ibGC6MRLzVBCUJ2XjBCVGKCDITsvJAqNYhNkOmQnReSRrzIBGUdsvNCXKJCCRpyZMoMUVODQIIoJ5DyUYrngE2Bjvw9HPlAd4GWINvX9EbJajS4AUnbOpImVSfpb2g5Y0AOUeFa6UpULyoJojOW0ZWVClX42abqBSVBby2EG0JDZUU+gpgAynhZj4PK4+PjpvekjyC7NzyWeHp6ikTQODhmJRDNwiVW4mf4CAKLNzKmUK19ynvi9vb209LS0hccUo/jIjcLo45mW9f7QmCpsbKy0saflowoaDHwuYezs7MHKMmUygktVpeXl6vop7Rx+EFGCCCnj6hVv76+tgKvk4hYX1/fwQfuy9vPkWI10JI0zNj2aMgbI4pyQmu4c3V1dRDnfT4nzeb7wsJC7e7u7pPqDXTi8/Pzf+MLf5FXR154YK6H6P28D7Ia+NsWgtMW1+c+r0oUq/jAfbzhs71T4QN1C4+/izuywacwpKCgn4Gc2Mpo6pwwSyuuFYdtVZIclCiy5XEEko7Y/lBdQKLw5VuYSF1eQ2VRwEZYHXPb1lkN14S19XCTexLgLkIzafag0Qr4TBPU9Uy4tYJQuYVDo5t2cWEneh3ORbfdwzVwLWjpnEbpWsQpNdog6lQnO5owZNem7PDPvyRn2GF7i3PQyYlz5xpEIycV4tZi32WHO3AaJDv6pxxlZ9l+ZluX09DPUE6cu8SMvkmL1U3KLsg/0cRBFJ34nmRAlCMnfkeAn6lgjvv0M0mbgL4wv7i4WMOfmkTDJsx6B+Hxf4RHZTSLkhZQHhi85k+ME4x/Mb6K5m47Yfvs7Owf0QBW08DcjmMSc4L59t0npiU9HNmxZtvDHT32XmCb/i7Kljbk4I4aXSZvOml4yxybyE5QPmM/K0CrMZKjmSDIQRXjI0xau3NpE7FBZ4m72w+rg9zETk1N1YIeRLB3fo9ATE0MIq3EVKDsmvgcyutEdQHliEw9ct+J1+okTD8zNzf3O4jpwpJ/lXTwSSzLjmI7KBtXgYvV5Voq4PN34obtuChEy5UkYpxisf9xMI2IQqyqh2wamRAUJaMl3PmJZzdl03b8gRaYdSpBGCXIIQZOeiMoo3WIiZCfOPVgT5dvESDqAJ+1LRmUOiYJ6oYR4y4Q4+QnvDYsMbUzeOOlTmqCmJtwUphcPYCY7xktF5lmW9spnCMQtWuKqMQEuXot2hrIVTmTmKYYgqfDUFVd46oJ2WWwJCGSEmSF9Fp+ECMZhmB57TD0Qhz5wHbkfUmApARpTTdJSyElqlEiHq45kQRIRBDuxm/ec2laCoYQSBTcwTtJgES1GB0tJWRX4HxCq2W6BkoBJzX4wMJ2enragtQbmN+OJECaYpUS4pAigjfRTg8kDcqnO0JQEhSC8vEXFyBJ39pVBBV2IzBroCnnW7uPIHj9wZha0Y0q8fURxHqKz8zI+OFYdVLppPlAkRRrKzlrWNw8UL2gJIhWxB95jIPUuEauVVdwa8O8/eMONqEsGV1YGNtBv/aZCno3OvzXrk2/iozIQ522Mv6AK6lj89EKvFZiwPlfWt7qw+a2nAaM1LrmXokSJUoUCd8A9niiaNiwMt0AAAAASUVORK5CYII=",Fw="/assets/dribbble-D49Syae7.png",Nw={class:"about-container"},Ow={class:"stat-num"},Bw={class:"stat-label"},zw=["href"],kw=["src","alt"],Vw={__name:"AboutSection",setup(i){Rn.registerPlugin(nt);const e=_t(null),t=_t(null),n=_t(null),r=_t(null),s=_t(null),o=_t(null),a=_t(null),l=[{value:"7+",label:"Years Experience"},{value:"50+",label:"Projects Delivered"},{value:"20+",label:"Startup Clients"}],c=[{label:"GitHub",url:"https://github.com/ManivelManikandan",icon:Iw},{label:"YouTube",url:"https://www.youtube.com/channel/UCq7w1Jwy-8-v-cWe9w0DuFA",icon:Lw},{label:"Dribbble",url:"https://dribbble.com/Manivel9944",icon:Fw},{label:"Email",url:"mailto:manivel_s@icloud.com",icon:Uw}];return ia(()=>{const u=Rn.timeline({scrollTrigger:{trigger:e.value,start:"top 75%",end:"bottom 20%",toggleActions:"play none none none"}});u.from(t.value.querySelector(".section-tag"),{x:-40,opacity:0,duration:.7,ease:"power3.out"}).from(r.value.querySelectorAll("span"),{y:60,opacity:0,duration:.8,stagger:.12,ease:"power3.out"},"-=0.4").from(s.value,{y:40,opacity:0,duration:.9,ease:"power3.out"},"-=0.5"),u.from(n.value.querySelectorAll(".about-bio"),{y:30,opacity:0,duration:.7,stagger:.15,ease:"power3.out"},"-=0.8").from(o.value.querySelectorAll(".stat"),{y:25,opacity:0,duration:.6,stagger:.1,ease:"power3.out"},"-=0.4").from(a.value.querySelectorAll(".social-link"),{y:20,opacity:0,duration:.5,stagger:.08,ease:"power3.out"},"-=0.3"),Rn.to(r.value,{y:-60,ease:"none",scrollTrigger:{trigger:e.value,start:"top bottom",end:"bottom top",scrub:1.5}})}),(u,h)=>($n(),Kn("section",{class:"about",id:"about",ref_key:"sectionRef",ref:e},[Re("div",Nw,[Re("div",{class:"about-left",ref_key:"leftRef",ref:t},[h[2]||(h[2]=Re("div",{class:"section-tag"},"About me",-1)),Re("h2",{class:"about-heading",ref_key:"headingRef",ref:r},h[0]||(h[0]=[Re("span",null,"Designing &",-1),Re("span",null,"building with",-1),Re("span",{class:"outline-text"},"purpose.",-1)]),512),Re("div",{class:"about-image-wrap",ref_key:"imageRef",ref:s},h[1]||(h[1]=[Re("img",{src:Dw,alt:"Manivel",class:"about-img"},null,-1),Re("div",{class:"img-border"},null,-1)]),512)],512),Re("div",{class:"about-right",ref_key:"rightRef",ref:n},[h[3]||(h[3]=Re("p",{class:"about-bio"},[Kr(" Hey there, I'm "),Re("strong",null,"Mani Vel"),Kr(" — a UX/UI Developer and Designer with over "),Re("strong",null,"7 years"),Kr(" of experience shaping digital products for startups and growing brands. ")],-1)),h[4]||(h[4]=Re("p",{class:"about-bio"},[Kr(" I specialize in "),Re("strong",null,"Vue.js, React, and Angular"),Kr(" on the frontend, paired with deep expertise in "),Re("strong",null,"Figma and Adobe XD"),Kr(" for interface design. Google-certified in UX Design, I blend creativity with technical precision to deliver experiences that feel effortless. ")],-1)),Re("div",{class:"about-stats",ref_key:"statsRef",ref:o},[($n(),Kn(wn,null,Hs(l,f=>Re("div",{class:"stat",key:f.label},[Re("span",Ow,tr(f.value),1),Re("span",Bw,tr(f.label),1)])),64))],512),Re("div",{class:"about-links",ref_key:"linksRef",ref:a},[($n(),Kn(wn,null,Hs(c,f=>Re("a",{key:f.label,href:f.url,target:"_blank",rel:"noreferrer noopener",class:"social-link"},[Re("img",{src:f.icon,alt:f.label,width:"22",height:"22"},null,8,kw),Re("span",null,tr(f.label),1)],8,zw)),64))],512)],512)])],512))}},Hw=hu(Vw,[["__scopeId","data-v-6d815619"]]),Gw={class:"tech-inner"},Ww={class:"skill-top"},Xw={class:"skill-name"},Yw={class:"skill-pct"},qw={class:"skill-track"},$w={class:"skill-tags"},Kw={class:"tools-list"},jw={__name:"TechSection",setup(i){Rn.registerPlugin(nt);const e=_t(null),t=_t(null),n=_t(null),r=_t(null),s=_t(null),o=_t([]),a=_t([]),l=[{name:"HTML / CSS",pct:95,tags:["Semantic","SCSS","Animations"]},{name:"JavaScript",pct:85,tags:["ES2024","TypeScript","Async/Await"]},{name:"Vue.js",pct:90,tags:["Vue 3","Pinia","Composition API"]},{name:"React",pct:75,tags:["Hooks","Redux","Next.js"]},{name:"Angular",pct:80,tags:["RxJS","NgRx","Material"]},{name:"UI / UX Design",pct:92,tags:["Figma","Adobe XD","Prototyping"]}],c=["Figma","Adobe XD","VS Code","Git","Vite","Node.js","REST APIs","AWS"];return ia(()=>{Rn.timeline({scrollTrigger:{trigger:e.value,start:"top 75%",toggleActions:"play none none none"}}).from(t.value.querySelector(".section-tag"),{x:-40,opacity:0,duration:.7,ease:"power3.out"}).from(n.value.querySelectorAll("span"),{y:60,opacity:0,duration:.8,stagger:.12,ease:"power3.out"},"-=0.4"),Rn.from(o.value,{y:50,opacity:0,duration:.7,stagger:.1,ease:"power3.out",scrollTrigger:{trigger:r.value,start:"top 80%",toggleActions:"play none none none"}}),r.value.querySelectorAll(".skill-fill").forEach(h=>{const f=h.style.getPropertyValue("--target");Rn.fromTo(h,{width:"0%"},{width:f,duration:1.4,ease:"power3.out",scrollTrigger:{trigger:h,start:"top 85%",toggleActions:"play none none none"}})}),Rn.from(s.value,{y:30,opacity:0,duration:.8,ease:"power3.out",scrollTrigger:{trigger:s.value,start:"top 85%",toggleActions:"play none none none"}}),Rn.to(n.value,{y:-50,ease:"none",scrollTrigger:{trigger:e.value,start:"top bottom",end:"bottom top",scrub:1.5}})}),(u,h)=>($n(),Kn("section",{class:"tech",id:"skills",ref_key:"sectionRef",ref:e},[Re("div",Gw,[Re("div",{class:"tech-header",ref_key:"headerRef",ref:t},[h[1]||(h[1]=Re("div",{class:"section-tag"},"Expertise",-1)),Re("h2",{class:"tech-heading",ref_key:"headingRef",ref:n},h[0]||(h[0]=[Re("span",null,"Tech",-1),Re("span",{class:"outline-text"},"Stack.",-1)]),512)],512),Re("div",{class:"skills-grid",ref_key:"gridRef",ref:r},[($n(),Kn(wn,null,Hs(l,f=>Re("div",{class:"skill-item",key:f.name,ref_for:!0,ref:d=>o.value.push(d)},[Re("div",Ww,[Re("span",Xw,tr(f.name),1),Re("span",Yw,tr(f.pct)+"%",1)]),Re("div",qw,[Re("div",{class:"skill-fill",style:jc({"--target":f.pct+"%"}),ref_for:!0,ref_key:"fillRefs",ref:a},null,4)]),Re("div",$w,[($n(!0),Kn(wn,null,Hs(f.tags,d=>($n(),Kn("span",{key:d,class:"tag"},tr(d),1))),128))])])),64))],512),Re("div",{class:"tools-row",ref_key:"toolsRef",ref:s},[h[2]||(h[2]=Re("div",{class:"tools-label"},"Tools & Platforms",-1)),Re("div",Kw,[($n(),Kn(wn,null,Hs(c,f=>Re("span",{key:f,class:"tool-chip"},tr(f),1)),64))])],512)])],512))}},Zw=hu(jw,[["__scopeId","data-v-5db4e167"]]),Jw={class:"contact-inner"},Qw={class:"contact-links"},eR=["href"],tR={__name:"ContactSection",setup(i){Rn.registerPlugin(nt);const e=_t(null),t=_t(null),n=_t(null),r=_t(null),s=_t(null),o=[{label:"GitHub",url:"https://github.com/ManivelManikandan"},{label:"Dribbble",url:"https://dribbble.com/Manivel9944"},{label:"YouTube",url:"https://www.youtube.com/channel/UCq7w1Jwy-8-v-cWe9w0DuFA"}];return ia(()=>{Rn.timeline({scrollTrigger:{trigger:e.value,start:"top 70%",toggleActions:"play none none none"}}).from(t.value.querySelector(".section-tag"),{x:-40,opacity:0,duration:.7,ease:"power3.out"}).from(n.value.querySelectorAll("span"),{y:80,opacity:0,duration:.9,stagger:.1,ease:"power4.out"},"-=0.4").from(r.value.querySelector(".email-link"),{y:30,opacity:0,duration:.7,ease:"power3.out"},"-=0.4").from(r.value.querySelectorAll(".c-link"),{y:20,opacity:0,duration:.5,stagger:.08,ease:"power3.out"},"-=0.4").from(s.value,{opacity:0,duration:.8,ease:"power2.out"},"-=0.2"),Rn.to(n.value,{y:-60,ease:"none",scrollTrigger:{trigger:e.value,start:"top bottom",end:"bottom top",scrub:1.5}})}),(a,l)=>($n(),Kn("section",{class:"contact",id:"contact",ref_key:"sectionRef",ref:e},[Re("div",Jw,[Re("div",{class:"contact-top",ref_key:"topRef",ref:t},[l[1]||(l[1]=Re("div",{class:"section-tag"},"Get in touch",-1)),Re("h2",{class:"contact-heading",ref_key:"headingRef",ref:n},l[0]||(l[0]=[Re("span",null,"Let's build",-1),Re("span",null,"something",-1),Re("span",{class:"outline-text"},"great.",-1)]),512)],512),Re("div",{class:"contact-body",ref_key:"bodyRef",ref:r},[l[3]||(l[3]=Re("a",{href:"mailto:manivel_s@icloud.com",class:"email-link"},[Kr(" manivel_s@icloud.com "),Re("span",{class:"arrow"},"↗")],-1)),Re("div",Qw,[($n(),Kn(wn,null,Hs(o,c=>Re("a",{key:c.label,href:c.url,target:"_blank",rel:"noreferrer noopener",class:"c-link"},[Re("span",null,tr(c.label),1),l[2]||(l[2]=Re("span",{class:"c-arrow"},"↗",-1))],8,eR)),64))])],512),Re("footer",{class:"footer",ref_key:"footerRef",ref:s},l[4]||(l[4]=[Re("span",{class:"footer-copy"},"© 2025 Mani Vel. Crafted with Vue & Three.js",-1),Re("span",{class:"footer-back"},[Re("a",{href:"#top"},"Back to top ↑")],-1)]),512)])],512))}},nR=hu(tR,[["__scopeId","data-v-b6b2b695"]]),iR={id:"app"},rR={__name:"App",setup(i){Rn.registerPlugin(nt);const e=_t(null),t=_t(null),n=_t(null);let r=0,s=0,o=0,a=0,l;function c(f){r=f.clientX,s=f.clientY}function u(){o+=(r-o)*.12,a+=(s-a)*.12,t.value&&(t.value.style.transform=`translate(${r}px, ${s}px)`),n.value&&(n.value.style.transform=`translate(${o}px, ${a}px)`),l=requestAnimationFrame(u)}function h(f){n.value&&Rn.to(n.value,{scale:f?2.5:1,opacity:f?.4:.5,duration:.3,ease:"power2.out"})}return ia(()=>{nt.create({start:"top -80",onUpdate:f=>{e.value&&e.value.classList.toggle("scrolled",f.scroll()>80)}}),window.addEventListener("mousemove",c),u(),document.querySelectorAll("a, button").forEach(f=>{f.addEventListener("mouseenter",()=>h(!0)),f.addEventListener("mouseleave",()=>h(!1))})}),eu(()=>{window.removeEventListener("mousemove",c),cancelAnimationFrame(l)}),(f,d)=>($n(),Kn("div",iR,[Re("nav",{class:"navbar",ref_key:"navRef",ref:e},d[0]||(d[0]=[Jv('<a href="#top" class="nav-logo">MV</a><div class="nav-links"><a href="#about">About</a><a href="#skills">Skills</a><a href="#contact">Contact</a></div>',2)]),512),Ri(Pw),Ri(Hw),Ri(Zw),Ri(nR),Re("div",{class:"cursor-dot",ref_key:"cursorDot",ref:t},null,512),Re("div",{class:"cursor-ring",ref_key:"cursorRing",ref:n},null,512)]))}};DS(rR).mount("#app");
