import{_ as w,S as I}from"./ticket-line-duotone-B5aJIMI6.js";import{_ as q,a as T,b as U,c as Y,d as F,e as Z}from"./CardFooter.vue_vue_type_script_setup_true_lang-DaGuZCEg.js";import{d as S,o as y,j as N,w as u,b as n,e as l,a as d,c as C,a6 as Q,a7 as ee,a8 as g,a9 as j,r as $,aa as R,ab as te,ac as H,s as se,ad as A,ae as ne,af as re,ag as M,ah as le,ai as ae,h as oe,G as ce,t as V,_ as b,aj as W,F as P,i as z,a3 as ue}from"./index-CxGGKlaI.js";import{S as K}from"./cup-star-line-duotone-B4RyQFJS.js";const ie={class:"w-full flex flex-row justify-between"},fe=S({__name:"RaffleCardSkeleton",setup(e){return(t,s)=>(y(),N(l(F),{class:"overflow-hidden"},{default:u(()=>[n(w,{class:"w-full h-60 rounded-none"}),n(l(q),null,{default:u(()=>[d("div",ie,[n(w,{class:"w-32 h-4 rounded-full"}),n(w,{class:"w-8 h-8 rounded-full"})]),n(l(T),null,{default:u(()=>[n(w,{class:"w-20 h-2 rounded-full"})]),_:1})]),_:1}),n(l(U),null,{default:u(()=>[n(w,{class:"mb-4 w-full h-2 rounded-full"})]),_:1}),n(l(Y),{class:"flex-col items-stretch sm:items-center sm:justify-end sm:flex-row gap-x-2 gap-y-4"},{default:u(()=>[n(w,{class:"sm:w-20 h-11 rounded-lg"}),n(w,{class:"sm:w-20 h-11 rounded-lg"}),n(w,{class:"sm:w-20 h-11 rounded-lg"})]),_:1})]),_:1}))}}),de={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},me=d("g",{fill:"none",stroke:"currentColor","stroke-width":"1.5"},[d("path",{"stroke-linecap":"round",d:"M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5",opacity:".5"}),d("path",{d:"m17.3 2.806l-.648.65l-5.965 5.964c-.404.404-.606.606-.78.829c-.205.262-.38.547-.524.848c-.121.255-.211.526-.392 1.068L8.412 13.9l-.374 1.123a.742.742 0 0 0 .94.939l1.122-.374l1.735-.579c.542-.18.813-.27 1.068-.392c.301-.144.586-.32.848-.524c.223-.174.425-.376.83-.78l5.964-5.965l.649-.649A2.753 2.753 0 0 0 17.3 2.806Z"}),d("path",{d:"M16.652 3.455s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298M10.1 15.588L8.413 13.9",opacity:".5"})],-1),_e=[me];function he(e,t){return y(),C("svg",de,[..._e])}const pe={name:"solar-pen-new-square-line-duotone",render:he};function we(e){var t;const s=g(e);return(t=s==null?void 0:s.$el)!=null?t:s}const ve=ae?window:void 0;function ye(...e){let t,s,r,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([s,r,a]=e,t=ve):[t,s,r,a]=e,!t)return A;Array.isArray(s)||(s=[s]),Array.isArray(r)||(r=[r]);const o=[],_=()=>{o.forEach(f=>f()),o.length=0},c=(f,h,p,v)=>(f.addEventListener(h,p,v),()=>f.removeEventListener(h,p,v)),m=j(()=>[we(t),g(a)],([f,h])=>{if(_(),!f)return;const p=le(h)?{...h}:h;o.push(...s.flatMap(v=>r.map(E=>c(f,v,E,p))))},{immediate:!0,flush:"post"}),i=()=>{m(),_()};return H(i),i}function ge(e,t,s){const{immediate:r=!0,delay:a=0,onError:o=A,onSuccess:_=A,resetOnExecute:c=!0,shallow:m=!0,throwError:i}=s??{},f=m?R(t):$(t),h=$(!1),p=$(!1),v=R(void 0);async function E(x=0,...L){c&&(f.value=t),v.value=void 0,h.value=!1,p.value=!0,x>0&&await ne(x);const J=typeof e=="function"?e(...L):e;try{const k=await J;f.value=k,h.value=!0,_(k)}catch(k){if(v.value=k,o(k),i)throw k}finally{p.value=!1}return f.value}r&&E(a);const B={state:f,isReady:h,isLoading:p,error:v,execute:E};function G(){return new Promise((x,L)=>{re(p).toBe(!1).then(()=>x(B)).catch(L)})}return{...B,then(x,L){return G().then(x,L)}}}async function xe(e){return new Promise((t,s)=>{const r=new Image,{src:a,srcset:o,sizes:_,class:c,loading:m,crossorigin:i,referrerPolicy:f}=e;r.src=a,o&&(r.srcset=o),_&&(r.sizes=_),c&&(r.className=c),m&&(r.loading=m),i&&(r.crossOrigin=i),f&&(r.referrerPolicy=f),r.onload=()=>t(r),r.onerror=s})}function ke(e,t={}){const s=ge(()=>xe(g(e)),void 0,{resetOnExecute:!0,...t});return j(()=>g(e),()=>s.execute(t.delay),{deep:!0}),s}const Le=S({name:"UseImage",props:["src","srcset","sizes","as","alt","class","loading","crossorigin","referrerPolicy"],setup(e,{slots:t}){const s=Q(ke(e));return()=>s.isLoading&&t.loading?t.loading(s):s.error&&t.error?t.error(s.error):t.default?t.default(s):ee(e.as||"img",e)}});function D(e){return typeof Window<"u"&&e instanceof Window?e.document.documentElement:typeof Document<"u"&&e instanceof Document?e.documentElement:e}function X(e){const t=window.getComputedStyle(e);if(t.overflowX==="scroll"||t.overflowY==="scroll"||t.overflowX==="auto"&&e.clientWidth<e.scrollWidth||t.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const s=e.parentNode;return!s||s.tagName==="BODY"?!1:X(s)}}function Ce(e){const t=e||window.event,s=t.target;return X(s)?!1:t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)}const O=new WeakMap;function $e(e,t=!1){const s=$(t);let r=null,a="";j(te(e),c=>{const m=D(g(c));if(m){const i=m;if(O.get(i)||O.set(i,i.style.overflow),i.style.overflow!=="hidden"&&(a=i.style.overflow),i.style.overflow==="hidden")return s.value=!0;if(s.value)return i.style.overflow="hidden"}},{immediate:!0});const o=()=>{const c=D(g(e));!c||s.value||(M&&(r=ye(c,"touchmove",m=>{Ce(m)},{passive:!1})),c.style.overflow="hidden",s.value=!0)},_=()=>{const c=D(g(e));!c||!s.value||(M&&(r==null||r()),c.style.overflow=a,O.delete(c),s.value=!1)};return H(_),se({get(){return s.value},set(c){c?o():_()}})}function Ee(){let e=!1;const t=$(!1);return(s,r)=>{if(t.value=r.value,e)return;e=!0;const a=$e(s,r.value);j(t,o=>a.value=o)}}Ee();const Se={class:"w-full h-60"},je={class:"w-full h-full flex justify-center items-center"},be={class:"w-full flex flex-row justify-between"},De=d("span",null," Juega con el sorteo: xxx ",-1),Oe=d("span",null," Editar ",-1),Ae=d("span",null," Vendedores ",-1),Ne=d("span",null," Numeros Disponibles ",-1),Be=S({__name:"RaffleCard",props:{raffle:{type:Object,required:!0,default:()=>{}}},setup(e){const t=e;return(s,r)=>{const a=oe("RouterLink");return y(),N(l(F),{class:"overflow-hidden"},{default:u(()=>[d("div",Se,[n(l(Le),{class:"w-full h-full object-cover",src:t.raffle.image_url||""},{loading:u(()=>[n(l(w),{class:"w-full h-full rounded-none"})]),error:u(()=>[d("div",je,[n(l(K),{class:"w-6 h-6"})])]),_:1},8,["src"])]),n(l(q),null,{default:u(()=>[d("div",be,[n(l(Z),null,{default:u(()=>[ce(V(t.raffle.name),1)]),_:1}),n(l(K),{class:"w-6 h-6"})]),n(l(T),null,{default:u(()=>[De]),_:1})]),_:1}),n(l(U),null,{default:u(()=>[d("p",null,V(t.raffle.description),1)]),_:1}),n(l(Y),{class:"flex-col items-stretch sm:items-center sm:justify-end sm:flex-row gap-y-4 gap-x-2"},{default:u(()=>[n(l(b),{variant:"secondary",type:"button",class:"gap-2 justify-start"},{default:u(()=>[n(l(pe),{class:"w-6 h-6"}),Oe]),_:1}),n(a,{to:{name:"raffle",params:{id:t.raffle.id}},custom:""},{default:u(({navigate:o})=>[n(l(b),{type:"button",class:"gap-2 justify-start",onClick:o,onKeypress:W(o,["enter"]),role:"link"},{default:u(()=>[n(l(I),{class:"w-6 h-6"}),Ae]),_:2},1032,["onClick","onKeypress"])]),_:1},8,["to"]),n(a,{to:{name:"raffle",params:{id:t.raffle.id}},custom:""},{default:u(({navigate:o})=>[n(l(b),{type:"button",class:"gap-2 justify-start",onClick:o,onKeypress:W(o,["enter"]),role:"link"},{default:u(()=>[n(l(I),{class:"w-6 h-6"}),Ne]),_:2},1032,["onClick","onKeypress"])]),_:1},8,["to"])]),_:1})]),_:1})}}}),Ie={class:"flex flex-col gap-4 w-full max-w-2xl"},Re={key:0,class:"flex flex-col gap-4 w-full"},ze=S({__name:"RafflesList",props:{loading:{type:Boolean,default:!1},raffles:{type:Array,required:!0}},setup(e){const t=e;return(s,r)=>(y(),C("div",Ie,[e.loading?(y(),C("div",Re,[(y(),C(P,null,z(2,a=>n(fe,{key:a})),64))])):ue("",!0),(y(!0),C(P,null,z(t.raffles,a=>(y(),N(Be,{key:a.id,raffle:a},null,8,["raffle"]))),128))]))}});export{ze as _};
