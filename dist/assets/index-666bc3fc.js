import{L as W,Q as O,h as R,A as L,ae as U,w as F,M as K,y as j,af as B,v as N}from"./nav-e3f7efbb.js";function H(r,t={},e){for(const s in r){const n=r[s],o=e?`${e}:${s}`:s;typeof n=="object"&&n!==null?H(n,t,o):typeof n=="function"&&(t[o]=n)}return t}function q(r,t){return r.reduce((e,s)=>e.then(()=>s.apply(void 0,t)),Promise.resolve())}function V(r,t){return Promise.all(r.map(e=>e.apply(void 0,t)))}function k(r,t){for(const e of r)e(t)}class J{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,e,s={}){if(!t||typeof e!="function")return()=>{};const n=t;let o;for(;this._deprecatedHooks[t];)o=this._deprecatedHooks[t],t=o.to;if(o&&!s.allowDeprecated){let i=o.message;i||(i=`${n} hook has been deprecated`+(o.to?`, please use ${o.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(i)||(console.warn(i),this._deprecatedMessages.add(i))}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(e),()=>{e&&(this.removeHook(t,e),e=void 0)}}hookOnce(t,e){let s,n=(...o)=>(typeof s=="function"&&s(),s=void 0,n=void 0,e(...o));return s=this.hook(t,n),s}removeHook(t,e){if(this._hooks[t]){const s=this._hooks[t].indexOf(e);s!==-1&&this._hooks[t].splice(s,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,e){this._deprecatedHooks[t]=typeof e=="string"?{to:e}:e;const s=this._hooks[t]||[];this._hooks[t]=void 0;for(const n of s)this.hook(t,n)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const e in t)this.deprecateHook(e,t[e])}addHooks(t){const e=H(t),s=Object.keys(e).map(n=>this.hook(n,e[n]));return()=>{for(const n of s.splice(0,s.length))n()}}removeHooks(t){const e=H(t);for(const s in e)this.removeHook(s,e[s])}callHook(t,...e){return this.callHookWith(q,t,...e)}callHookParallel(t,...e){return this.callHookWith(V,t,...e)}callHookWith(t,e,...s){const n=this._before||this._after?{name:e,args:s,context:{}}:void 0;this._before&&k(this._before,n);const o=t(this._hooks[e]||[],s);return o instanceof Promise?o.finally(()=>{this._after&&n&&k(this._after,n)}):(this._after&&n&&k(this._after,n),o)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{const e=this._before.indexOf(t);e!==-1&&this._before.splice(e,1)}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{const e=this._after.indexOf(t);e!==-1&&this._after.splice(e,1)}}}function Q(){return new J}const z=["script","style","noscript"],G=["base","meta","link","style","script","noscript"],X=["base","title","titleTemplate","bodyAttrs","htmlAttrs"];function Y(r,t){const{props:e,tag:s}=r;if(X.includes(s))return s;if(s==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";const n=["id"];s==="meta"&&n.push("name","property","http-equiv");for(const o of n)if(typeof e[o]<"u"){const i=String(e[o]);return t&&!t(i)?!1:`${s}:${o}:${i}`}return!1}const m=(r,t)=>{const{tag:e,$el:s}=r;s&&(Object.entries(e.props).forEach(([n,o])=>{o=String(o);const i=`attr:${n}`;if(n==="class"){if(!o)return;for(const a of o.split(" ")){const f=`${i}:${a}`;t&&t(r,f,()=>s.classList.remove(a)),s.classList.contains(a)||s.classList.add(a)}return}t&&!n.startsWith("data-h-")&&t(r,i,()=>s.removeAttribute(n)),s.getAttribute(n)!==o&&s.setAttribute(n,o)}),z.includes(e.tag)&&s.innerHTML!==(e.children||"")&&(s.innerHTML=e.children||""))};function $(r){let t=9;for(let e=0;e<r.length;)t=Math.imul(t^r.charCodeAt(e++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}async function S(r,t={}){var h,y;const e={shouldRender:!0};if(await r.hooks.callHook("dom:beforeRender",e),!e.shouldRender)return;const s=t.document||window.document,n=r._popSideEffectQueue();r.headEntries().map(l=>l._sde).forEach(l=>{Object.entries(l).forEach(([c,d])=>{n[c]=d})});const o=async l=>{const c=r.headEntries().find(g=>g._i===l._e),d={renderId:l._d||$(JSON.stringify({...l,_e:void 0,_p:void 0})),$el:null,shouldRender:!0,tag:l,entry:c,staleSideEffects:n};return await r.hooks.callHook("dom:beforeRenderTag",d),d},i=[],a={body:[],head:[]},f=(l,c,d)=>{c=`${l.renderId}:${c}`,l.entry&&(l.entry._sde[c]=d),delete n[c]},u=l=>{r._elMap[l.renderId]=l.$el,i.push(l),f(l,"el",()=>{var c;(c=l.$el)==null||c.remove(),delete r._elMap[l.renderId]})};for(const l of await r.resolveTags()){const c=await o(l);if(!c.shouldRender)continue;const{tag:d}=c;if(d.tag==="title"){s.title=d.children||"",i.push(c);continue}if(d.tag==="htmlAttrs"||d.tag==="bodyAttrs"){c.$el=s[d.tag==="htmlAttrs"?"documentElement":"body"],m(c,f),i.push(c);continue}if(c.$el=r._elMap[c.renderId],!c.$el&&d._hash&&(c.$el=s.querySelector(`${(h=d.tagPosition)!=null&&h.startsWith("body")?"body":"head"} > ${d.tag}[data-h-${d._hash}]`)),c.$el){c.tag._d&&m(c),u(c);continue}c.$el=s.createElement(d.tag),m(c),a[(y=d.tagPosition)!=null&&y.startsWith("body")?"body":"head"].push(c)}Object.entries(a).forEach(([l,c])=>{if(c.length){for(const d of[...s[l].children].reverse()){const g=d.tagName.toLowerCase();if(!G.includes(g))continue;const D=Y({tag:g,props:d.getAttributeNames().reduce((p,P)=>({...p,[P]:d.getAttribute(P)}),{})}),v=c.findIndex(p=>p&&(p.tag._d===D||d.isEqualNode(p.$el)));if(v!==-1){const p=c[v];p.$el=d,m(p),u(p),delete c[v]}}c.forEach(d=>{if(d.$el){switch(d.tag.tagPosition){case"bodyClose":s.body.appendChild(d.$el);break;case"bodyOpen":s.body.insertBefore(d.$el,s.body.firstChild);break;case"head":default:s.head.appendChild(d.$el);break}u(d)}})}});for(const l of i)await r.hooks.callHook("dom:renderTag",l);Object.values(n).forEach(l=>l())}let _=null;async function Z(r,t={}){function e(){return _=null,S(r,t)}const s=t.delayFn||(n=>setTimeout(n,10));return _=_||new Promise(n=>s(()=>n(e())))}const x={__proto__:null,debouncedRenderDOMHead:Z,get domUpdatePromise(){return _},hashCode:$,renderDOMHead:S},ee=["title","titleTemplate","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],te=["tagPosition","tagPriority","tagDuplicateStrategy"];async function re(r,t){const e={tag:r,props:{}};return r==="title"||r==="titleTemplate"?(e.children=t instanceof Promise?await t:t,e):(e.props=await se({...t}),["children","innerHtml","innerHTML"].forEach(s=>{typeof e.props[s]<"u"&&(e.children=e.props[s],typeof e.children=="object"&&(e.children=JSON.stringify(e.children)),delete e.props[s])}),Object.keys(e.props).filter(s=>te.includes(s)).forEach(s=>{e[s]=e.props[s],delete e.props[s]}),typeof e.props.class=="object"&&!Array.isArray(e.props.class)&&(e.props.class=Object.keys(e.props.class).filter(s=>e.props.class[s])),Array.isArray(e.props.class)&&(e.props.class=e.props.class.join(" ")),e.props.content&&Array.isArray(e.props.content)?e.props.content.map((s,n)=>{const o={...e,props:{...e.props}};return o.props.content=s,o.key=`${e.props.name||e.props.property}:${n}`,o}):e)}async function se(r){for(const t of Object.keys(r))r[t]instanceof Promise&&(r[t]=await r[t]),String(r[t])==="true"?r[t]="":String(r[t])==="false"&&delete r[t];return r}const A=r=>{if(typeof r.tagPriority=="number")return r.tagPriority;switch(r.tagPriority){case"critical":return 2;case"high":return 9;case"low":return 12}switch(r.tag){case"base":return-1;case"title":return 1;case"meta":return r.props.charset?-2:r.props["http-equiv"]==="content-security-policy"?0:10;default:return 10}},ne=(r,t)=>A(r)-A(t),oe=["base","title","titleTemplate","bodyAttrs","htmlAttrs"];function ie(r,t){const{props:e,tag:s}=r;if(oe.includes(s))return s;if(s==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";const n=["id"];s==="meta"&&n.push("name","property","http-equiv");for(const o of n)if(typeof e[o]<"u"){const i=String(e[o]);return t&&!t(i)?!1:`${s}:${o}:${i}`}return!1}const E=(r,t)=>r==null?t||null:typeof r=="function"?r(t):r.replace("%s",t??"");function ae(r){let t=r.findIndex(s=>s.tag==="titleTemplate");const e=r.findIndex(s=>s.tag==="title");if(e!==-1&&t!==-1){const s=E(r[t].children,r[e].children);s!==null?r[e].children=s||r[e].children:delete r[e]}else if(t!==-1){const s=E(r[t].children);s!==null&&(r[t].children=s,r[t].tag="title",t=-1)}return t!==-1&&delete r[t],r.filter(Boolean)}const ce=r=>{r=r||{};const t=r.dedupeKeys||["hid","vmid","key"];return{hooks:{"tag:normalise":function({tag:e}){t.forEach(n=>{e.props[n]&&(e.key=e.props[n],delete e.props[n])});const s=e.key?`${e.tag}:${e.key}`:ie(e);s&&(e._d=s)},"tags:resolve":function(e){const s={};e.tags.forEach(n=>{let o=n._d||n._p;const i=s[o];if(i){let a=n==null?void 0:n.tagDuplicateStrategy;if(!a&&(n.tag==="htmlAttrs"||n.tag==="bodyAttrs")&&(a="merge"),a==="merge"){const u=i.props;["class","style"].forEach(h=>{n.props[h]&&u[h]&&(h==="style"&&!u[h].endsWith(";")&&(u[h]+=";"),n.props[h]=`${u[h]} ${n.props[h]}`)}),s[o].props={...u,...n.props};return}else n._e===i._e&&(o=n._d=`${o}:${n._p}`);const f=Object.keys(n.props).length;if((f===0||f===1&&typeof n.props["data-h-key"]<"u")&&!n.children){delete s[o];return}}s[o]=n}),e.tags=Object.values(s)}}}},de=()=>({hooks:{"tags:resolve":r=>{const t=e=>{var s;return(s=r.tags.find(n=>n._d===e))==null?void 0:s._p};for(const e of r.tags){if(!e.tagPriority||typeof e.tagPriority=="number")continue;const s=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];for(const{prefix:n,offset:o}of s)if(e.tagPriority.startsWith(n)){const i=e.tagPriority.replace(n,""),a=t(i);typeof a<"u"&&(e._p=a+o)}}r.tags.sort((e,s)=>e._p-s._p).sort(ne)}}}),le=()=>({hooks:{"tags:resolve":r=>{r.tags=ae(r.tags)}}}),fe=()=>({hooks:{"tag:normalise":function({tag:r}){typeof r.props.body<"u"&&(r.tagPosition="bodyClose",delete r.props.body)}}}),ue=typeof window<"u",he=()=>({hooks:{"tag:normalise":r=>{var n,o;const{tag:t,entry:e}=r,s=typeof t.props._dynamic<"u";!C.includes(t.tag)||!t.key||(t._hash=$(JSON.stringify({tag:t.tag,key:t.key})),!(ue||(o=(n=M())==null?void 0:n.resolvedOptions)!=null&&o.document)&&(e._m==="server"||s)&&(t.props[`data-h-${t._hash}`]=""))},"tags:resolve":r=>{r.tags=r.tags.map(t=>(delete t.props._dynamic,t))}}}),pe=r=>({hooks:{"entries:updated":function(t){if(typeof(r==null?void 0:r.document)>"u"&&typeof window>"u")return;let e=r==null?void 0:r.delayFn;!e&&typeof requestAnimationFrame<"u"&&(e=requestAnimationFrame),Promise.resolve().then(function(){return x}).then(({debouncedRenderDOMHead:s})=>{s(t,{document:(r==null?void 0:r.document)||window.document,delayFn:e})})}}}),ye=()=>{const r=(t,e)=>{const s={},n={};Object.entries(e.props).forEach(([i,a])=>{i.startsWith("on")&&typeof a=="function"?n[i]=a:s[i]=a});let o;return t==="dom"&&e.tag==="script"&&typeof s.src=="string"&&typeof n.onload<"u"&&(o=s.src,delete s.src),{props:s,eventHandlers:n,delayedSrc:o}};return{hooks:{"ssr:render":function(t){t.tags=t.tags.map(e=>(e.props=r("ssr",e).props,e))},"dom:beforeRenderTag":function(t){const{props:e,eventHandlers:s,delayedSrc:n}=r("dom",t.tag);Object.keys(s).length&&(t.tag.props=e,t.tag._eventHandlers=s,t.tag._delayedSrc=n)},"dom:renderTag":function(t){const e=t.$el;if(!t.tag._eventHandlers||!e)return;const s=t.tag.tag==="bodyAttrs"&&typeof window<"u"?window:e;Object.entries(t.tag._eventHandlers).forEach(([n,o])=>{const i=`${t.tag._d||t.tag._p}:${n}`,a=n.slice(2).toLowerCase(),f=`data-h-${a}`;if(delete t.staleSideEffects[i],e.hasAttribute(f))return;const u=o;e.setAttribute(f,""),s.addEventListener(a,u),t.entry&&(t.entry._sde[i]=()=>{s.removeEventListener(a,u),e.removeAttribute(f)})}),t.tag._delayedSrc&&e.setAttribute("src",t.tag._delayedSrc)}}}};function ge(r){return Array.isArray(r)?r:[r]}const C=["base","meta","link","style","script","noscript"];let I;const me=r=>I=r,M=()=>I,_e=10;async function be(r){const t=[];return Object.entries(r.resolvedInput||r.input).filter(([e,s])=>typeof s<"u"&&ee.includes(e)).forEach(([e,s])=>{const n=ge(s);t.push(...n.map(o=>re(e,o)).flat())}),(await Promise.all(t)).flat().map((e,s)=>(e._e=r._i,e._p=(r._i<<_e)+s,e))}const ve=()=>[ce(),de(),le(),he(),ye(),fe()],ke=(r={})=>[pe({document:r==null?void 0:r.document,delayFn:r==null?void 0:r.domDelayFn})];function He(r={}){const t=$e({...r,plugins:[...ke(r),...(r==null?void 0:r.plugins)||[]]});return me(t),t}function $e(r={}){let t=[],e={},s=0;const n=Q();r!=null&&r.hooks&&n.addHooks(r.hooks),r.plugins=[...ve(),...(r==null?void 0:r.plugins)||[]],r.plugins.forEach(a=>a.hooks&&n.addHooks(a.hooks));const o=()=>n.callHook("entries:updated",i),i={resolvedOptions:r,headEntries(){return t},get hooks(){return n},use(a){a.hooks&&n.addHooks(a.hooks)},push(a,f){const u={_i:s++,input:a,_sde:{}};return f!=null&&f.mode&&(u._m=f==null?void 0:f.mode),t.push(u),o(),{dispose(){t=t.filter(h=>h._i!==u._i?!0:(e={...e,...h._sde||{}},h._sde={},o(),!1))},patch(h){t=t.map(y=>(y._i===u._i&&(u.input=y.input=h,o()),y))}}},async resolveTags(){const a={tags:[],entries:[...t]};await n.callHook("entries:resolve",a);for(const f of a.entries)for(const u of await be(f)){const h={tag:u,entry:f};await n.callHook("tag:normalise",h),a.tags.push(h.tag)}return await n.callHook("tags:resolve",a),a.tags},_elMap:{},_popSideEffectQueue(){const a={...e};return e={},a}};return i.hooks.callHook("init",i),i}function we(r){return typeof r=="function"?r():j(r)}function b(r,t=""){if(r instanceof Promise)return r;const e=we(r);if(!r||!e)return e;if(Array.isArray(e))return e.map(s=>b(s,t));if(typeof e=="object"){let s=!1;const n=Object.fromEntries(Object.entries(e).map(([o,i])=>o==="titleTemplate"||o.startsWith("on")?[o,j(i)]:((typeof i=="function"||B(i))&&(s=!0),[o,b(i,o)])));return s&&C.includes(String(t))&&(n._dynamic=!0),n}return e}const Te=N.startsWith("3"),Pe=typeof window<"u",w="usehead";function T(){return O()&&R(w)||M()}function Se(r={}){const t=He({...r,domDelayFn:s=>setTimeout(()=>W(()=>s()),10),plugins:[Ae(),...(r==null?void 0:r.plugins)||[]]}),e={install(s){Te&&(s.config.globalProperties.$unhead=t,s.provide(w,t))}};return t.install=e.install,t}const Ae=()=>({hooks:{"entries:resolve":function(r){for(const t of r.entries)t.resolvedInput=b(t.input)}}}),Ce=function(r,t){r.mixin({beforeCreate(){const e=this.$options,s=e.provide;e.provide=function(){let n;return typeof s=="function"?n=s.call(this):n=s||{},{...n,[w]:t}}}})};function Ee(r,t={}){const e=T(),s=L({});U(()=>{s.value=b(r)});const n=e.push(s.value,t);return F(s,i=>n.patch(i)),O()&&K(()=>{n.dispose()}),n}function Oe(r,t={}){return T().push(r,t)}function Ie(r,t={}){var s;const e=T();if(e){const n=Pe||!!((s=e.resolvedOptions)!=null&&s.document);return t.mode==="server"&&n||t.mode==="client"&&!n?void 0:n?Ee(r,t):Oe(r,t)}}export{Ce as V,Se as c,Ie as u};
