import{_ as k}from"./Input.vue_vue_type_script_setup_true_lang-kN2_dvlB.js";import{d as f,o as c,j as m,w as d,l as v,n as g,e,y as b,al as S,v as $,am as z,m as C,p as B,an as V,ao as y,c as p,r as _,s as A,D as M,E as N,a,t as u,b as l,_ as T,F as j,i as D,G as x}from"./index-CxGGKlaI.js";import{S as F}from"./magnifer-outline-BhCGE8H5.js";import{S as P}from"./add-circle-line-duotone-D68rvtnf.js";import{g as E}from"./sellers-Cyexdb9p.js";const I=f({__name:"Avatar",props:{class:{},size:{default:"sm"},shape:{default:"circle"}},setup(o){const t=o;return(s,i)=>(c(),m(e(S),{class:g(e(b)(e(q)({size:s.size,shape:s.shape}),t.class))},{default:d(()=>[v(s.$slots,"default")]),_:3},8,["class"]))}}),L=f({__name:"AvatarImage",props:{src:{},asChild:{type:Boolean},as:{}},setup(o){const t=o;return(s,i)=>(c(),m(e(z),$(t,{class:"h-full w-full object-cover"}),null,16))}}),O=f({__name:"AvatarFallback",props:{delayMs:{},asChild:{type:Boolean},as:{}},setup(o){const t=o;return(s,i)=>(c(),m(e(V),C(B(t)),{default:d(()=>[v(s.$slots,"default")]),_:3},16))}}),q=y("inline-flex items-center justify-center font-normal text-foreground select-none shrink-0 bg-secondary overflow-hidden",{variants:{size:{sm:"h-10 w-10 text-xs",base:"h-16 w-16 text-2xl",lg:"h-32 w-32 text-5xl"},shape:{circle:"rounded-full",square:"rounded-md"}}}),G=f({__name:"Badge",props:{variant:{},class:{}},setup(o){const t=o;return(s,i)=>(c(),p("div",{class:g(e(b)(e(R)({variant:s.variant}),t.class))},[v(s.$slots,"default")],2))}}),R=y("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}}),W={class:"w-full flex flex-col items-center"},H={class:"flex flex-col w-full max-w-3xl"},J={class:"grow relative"},K=a("span",null,"Nuevo",-1),Q={class:"flex-1 overflow-auto rounded-b-lg border border-t-0"},U={class:"divide-y"},X={class:"flex-1"},Y={class:"font-medium capitalize"},Z={class:"text-sm text-foreground/60"},oe=f({__name:"SellersView",setup(o){const t=_(!1),s=_([]),i=_(null),w=A(()=>{var r;return(r=s.value)==null?void 0:r.reduce((h,n)=>h+n.tickets.length,0)});return M(i,([{isIntersecting:r}])=>{t.value=!r},{rootMargin:"-65px"}),N(async()=>{E().then(r=>{console.log({data:r})}).catch(r=>{console.log(r)})}),(r,h)=>(c(),p("div",W,[a("div",null,"Total boletas asignadas: "+u(w.value),1),a("div",{ref_key:"sentinal",ref:i,class:"w-full h-0"},null,512),a("div",H,[a("div",{class:g(["flex flex-row gap-4 transition-all duration-300 bg-background-elevated/90 backdrop-blur px-4 py-3 border rounded-lg rounded-b-none sticky top-16 z-10",{"!bg-background/90 @3xl/main:!bg-background-elevated/90 rounded-none @3xl/main:rounded-b-lg border-t-0 border-x-0 @3xl/main:border-x -mx-4":t.value}])},[a("div",J,[l(e(F),{class:"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"}),l(e(k),{type:"text",placeholder:"Search",class:"w-full pl-11 pr-4 py-2 text-sm"})]),l(e(T),{class:"gap-2"},{default:d(()=>[l(e(P),{class:"w-5 h-5"}),K]),_:1})],2),a("div",Q,[a("div",U,[(c(!0),p(j,null,D(s.value,n=>(c(),p("div",{key:n.id,class:"px-4 py-3 flex items-center gap-4"},[l(e(I),{class:"w-10 h-10"},{default:d(()=>[l(e(L),{class:"",src:n.avatar_url},null,8,["src"]),l(e(O),{class:""},{default:d(()=>[x(u(n.name.charAt(0)),1)]),_:2},1024)]),_:2},1024),a("div",X,[a("div",Y,u(n.name),1),a("div",Z,u(n.email),1)]),l(e(G),null,{default:d(()=>[x(u(n.tickets.length),1)]),_:2},1024)]))),128))])])])]))}});export{oe as default};
