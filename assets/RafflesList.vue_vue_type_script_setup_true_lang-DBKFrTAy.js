import{_ as n}from"./Skeleton.vue_vue_type_script_setup_true_lang-Bisf-uAB.js";import{_ as g,b as k,c as $,a as S}from"./CardContent.vue_vue_type_script_setup_true_lang-CKMKWnlI.js";import{_ as C,a as v}from"./CardFooter.vue_vue_type_script_setup_true_lang-Bd4fxrq0.js";import{d,o,j as _,w as t,b as e,e as s,a as l,c as i,h as b,B as L,t as p,_ as u,aI as h,F as w,i as x}from"./index-qB8lAYve.js";import{S as y}from"./cup-star-line-duotone-BKXaNcN0.js";import{S as B}from"./user-speak-line-duotone-KP5ZRWd6.js";import{S as D}from"./ticket-line-duotone-BPoqiscK.js";import{U as V}from"./index-BCHauPhd.js";const M={class:"w-full flex flex-row justify-between"},N=d({__name:"RaffleCardSkeleton",setup(r){return(a,m)=>(o(),_(s($),{class:"overflow-hidden"},{default:t(()=>[e(n,{class:"w-full h-60 rounded-none"}),e(s(g),null,{default:t(()=>[l("div",M,[e(n,{class:"w-32 h-4 rounded-full"}),e(n,{class:"w-8 h-8 rounded-full"})]),e(s(C),null,{default:t(()=>[e(n,{class:"w-20 h-2 rounded-full"})]),_:1})]),_:1}),e(s(k),null,{default:t(()=>[e(n,{class:"mb-4 w-full h-2 rounded-full"})]),_:1}),e(s(v),{class:"flex-col items-stretch sm:items-center sm:justify-end sm:flex-row gap-x-2 gap-y-4"},{default:t(()=>[e(n,{class:"sm:w-20 h-11 rounded-lg"}),e(n,{class:"sm:w-20 h-11 rounded-lg"}),e(n,{class:"sm:w-20 h-11 rounded-lg"})]),_:1})]),_:1}))}}),K={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},R=l("g",{fill:"none",stroke:"currentColor","stroke-width":"1.5"},[l("path",{"stroke-linecap":"round",d:"M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5",opacity:".5"}),l("path",{d:"m17.3 2.806l-.648.65l-5.965 5.964c-.404.404-.606.606-.78.829c-.205.262-.38.547-.524.848c-.121.255-.211.526-.392 1.068L8.412 13.9l-.374 1.123a.742.742 0 0 0 .94.939l1.122-.374l1.735-.579c.542-.18.813-.27 1.068-.392c.301-.144.586-.32.848-.524c.223-.174.425-.376.83-.78l5.964-5.965l.649-.649A2.753 2.753 0 0 0 17.3 2.806Z"}),l("path",{d:"M16.652 3.455s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298M10.1 15.588L8.413 13.9",opacity:".5"})],-1),q=[R];function F(r,a){return o(),i("svg",K,[...q])}const U={name:"solar-pen-new-square-line-duotone",render:F},A={class:"w-full h-60"},E={class:"w-full h-full flex justify-center items-center"},I={class:"w-full flex flex-row justify-between"},P=l("span",null," Poner Fecha ",-1),T=l("span",null," Editar ",-1),Z={class:"grow flex flex-col items-stretch sm:items-center sm:justify-end sm:flex-row gap-y-4 gap-x-2"},H=l("span",null," Vendedores ",-1),O=l("span",null," Numeros Disponibles ",-1),z=d({__name:"RaffleCard",props:{raffle:{type:Object,required:!0,default:()=>{}}},setup(r){const a=r;return(m,j)=>{const c=b("RouterLink");return o(),_(s($),{class:"overflow-hidden"},{default:t(()=>[l("div",A,[e(s(V),{class:"w-full h-full object-cover",src:a.raffle.image_path||""},{loading:t(()=>[e(s(n),{class:"w-full h-full rounded-none"})]),error:t(()=>[l("div",E,[e(s(y),{class:"w-24 h-24"})])]),_:1},8,["src"])]),e(s(g),null,{default:t(()=>[l("div",I,[e(s(S),null,{default:t(()=>[L(p(a.raffle.name),1)]),_:1}),e(s(y),{class:"w-6 h-6"})]),e(s(C),null,{default:t(()=>[P]),_:1})]),_:1}),e(s(k),null,{default:t(()=>[l("p",null,p(a.raffle.description),1)]),_:1}),e(s(v),{class:"flex-col items-stretch sm:items-center sm:justify-stretch sm:flex-row gap-y-4 gap-x-2"},{default:t(()=>[e(s(u),{variant:"secondary",type:"button",class:"gap-2 justify-start"},{default:t(()=>[e(s(U),{class:"w-6 h-6"}),T]),_:1}),l("div",Z,[e(c,{to:{name:"raffle-sellers",params:{id:a.raffle.id}},custom:""},{default:t(({navigate:f})=>[e(s(u),{type:"button",class:"gap-2 justify-start",onClick:f,onKeypress:h(f,["enter"]),role:"link"},{default:t(()=>[e(s(B),{class:"w-6 h-6"}),H]),_:2},1032,["onClick","onKeypress"])]),_:1},8,["to"]),e(c,{to:{name:"raffle",params:{id:a.raffle.id}},custom:""},{default:t(({navigate:f})=>[e(s(u),{type:"button",class:"gap-2 justify-start",onClick:f,onKeypress:h(f,["enter"]),role:"link"},{default:t(()=>[e(s(D),{class:"w-6 h-6"}),O]),_:2},1032,["onClick","onKeypress"])]),_:1},8,["to"])])]),_:1})]),_:1})}}}),G={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},J=l("g",{fill:"none",stroke:"currentColor","stroke-width":"1.5"},[l("path",{d:"M17.667 2H6.333c-.31 0-.464 0-.594.012c-1.45.133-2.6 1.34-2.728 2.861C3 5.01 3 5.173 3 5.497V20.26c0 .872 1.059 1.243 1.558.544a.841.841 0 0 1 1.384 0l.433.606a1.367 1.367 0 0 0 2.25 0a1.367 1.367 0 0 1 2.25 0a1.367 1.367 0 0 0 2.25 0a1.367 1.367 0 0 1 2.25 0a1.367 1.367 0 0 0 2.25 0l.433-.605a.841.841 0 0 1 1.384 0c.5.698 1.558.327 1.558-.545V5.497c0-.324 0-.487-.011-.624c-.127-1.521-1.277-2.728-2.727-2.861C18.13 2 17.976 2 17.667 2Z",opacity:".5"}),l("path",{"stroke-linecap":"round",d:"M7.5 15.5h9M14 8l-4 4m0-4l4 4"})],-1),Q=[J];function W(r,a){return o(),i("svg",G,[...Q])}const X={name:"solar-bill-cross-line-duotone",render:W},Y={class:"flex flex-col gap-4 w-full max-w-2xl"},ee={key:0,class:"flex flex-col gap-4 w-full"},se={key:1,class:"flex flex-col gap-4 w-full justify-center items-center py-16"},te=l("p",{class:"text-center text-lg text-muted-foreground"},"No hay rifas creadas",-1),ue=d({__name:"RafflesList",props:{loading:{type:Boolean,default:!1},raffles:{type:Array,required:!0}},setup(r){const a=r;return(m,j)=>(o(),i("div",Y,[r.loading?(o(),i("div",ee,[(o(),i(w,null,x(2,c=>e(N,{key:c})),64))])):a.raffles.length===0?(o(),i("div",se,[e(s(X),{class:"w-32 h-32 text-muted-foreground"}),te])):(o(!0),i(w,{key:2},x(a.raffles,c=>(o(),_(z,{key:c.id,raffle:c},null,8,["raffle"]))),128))]))}});export{ue as _};
