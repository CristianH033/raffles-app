import{d as C,f as k,r as E,b7 as M,q as P,o as n,c as o,a as r,b as a,w as s,e,s as t,_ as b,D as m,v as _,j,S as F,Q as R,Z as V,W as A}from"./index-Cp5NQWbQ.js";import{_ as B,a as G,b as T,c as L}from"./CardContent.vue_vue_type_script_setup_true_lang-C2BYPd8e.js";import{_ as U,a as z}from"./CardFooter.vue_vue_type_script_setup_true_lang-CmiRlr4E.js";import{_ as f}from"./Input.vue_vue_type_script_setup_true_lang-CYSh0-Pa.js";import{C as D,a as I,_ as O}from"./google-CuUKIFxH.js";import{t as Q,o as W,s as p,u as Y,F as g,_ as h,a as v,b as w,c as x}from"./FormMessage.vue_vue_type_script_setup_true_lang-CpYijCeX.js";const Z=["aria-disabled"],H=["disabled"],J={class:"grid grid-cols-2 gap-6"},K=r("div",{class:"relative"},[r("div",{class:"absolute inset-0 flex items-center"},[r("span",{class:"w-full border-t"})]),r("div",{class:"relative flex justify-center text-xs uppercase"},[r("span",{class:"bg-background px-2 text-muted-foreground"}," O continuar con ")])],-1),X={class:"grid gap-4 sm:grid-cols-2 sm:gap-6"},ee=r("span",null,"Crear cuenta",-1),ae={class:"text-left self-end text-sm text-muted-foreground"},se=C({__name:"RegisterForm",setup(N){const y=k(),u=E(!1),S=Q(W({firstName:p({required_error:"Nombre es requerido"}).min(3,{message:"Minimo 3 caracteres"}),lastName:p({required_error:"Apellido es requerido"}).min(3,{message:"Minimo 3 caracteres"}),email:p({required_error:"Email es requerido"}).min(5,{message:"Minimo 5 caracteres"}).email({message:"Email invalido"}),password:p({required_error:"Password es requerido"}).min(6,{message:"Minimo 6 caracteres"}),repeatPassword:p({required_error:"Confirmar contraseña es requerido"}).min(6,{message:"Minimo 6 caracteres"})}).refine(i=>i.password===i.repeatPassword,{message:"Las contraseñas no coinciden",path:["repeatPassword"]})),q=Y({validationSchema:S}),$=q.handleSubmit(async i=>{u.value=!0,y.register(i.firstName,i.lastName,i.email,i.password).then(()=>{}).catch(d=>{console.log(d),d instanceof M?q.setFieldError("email","Credenciales incorrectas"):console.log("Unknown Error",d)}).finally(()=>{u.value=!1})});return(i,d)=>{const c=P("auto-animate");return n(),o("form",{onSubmit:d[0]||(d[0]=A((...l)=>e($)&&e($)(...l),["prevent"])),class:"w-full","aria-disabled":u.value},[r("fieldset",{disabled:u.value},[a(e(L),{class:"w-full"},{default:s(()=>[a(e(B),{class:"space-y-1"},{default:s(()=>[a(e(G),{class:"text-2xl"},{default:s(()=>[t(" Crear cuenta ")]),_:1}),a(e(U),null,{default:s(()=>[t(" Crea una cuenta para comenzar. ")]),_:1})]),_:1}),a(e(T),{class:"grid gap-4"},{default:s(()=>[r("div",J,[a(e(b),{type:"button",variant:"outline"},{default:s(()=>[a(e(D),{class:"mr-2 h-4 w-4"}),t(" Github ")]),_:1}),a(e(b),{type:"button",variant:"outline"},{default:s(()=>[a(e(I),{class:"mr-2 h-4 w-4"}),t(" Google ")]),_:1})]),K,r("div",X,[a(e(g),{name:"firstName"},{default:s(({componentField:l})=>[a(e(h),null,{default:s(()=>[a(e(v),null,{default:s(()=>[t("Nombres")]),_:1}),a(e(w),null,{default:s(()=>[a(e(f),m({type:"text",placeholder:"john"},l,{required:""}),null,16)]),_:2},1024),_((n(),o("div",null,[a(e(x))])),[[c]])]),_:2},1024)]),_:1}),a(e(g),{name:"lastName"},{default:s(({componentField:l})=>[a(e(h),null,{default:s(()=>[a(e(v),null,{default:s(()=>[t("Apellidos")]),_:1}),a(e(w),null,{default:s(()=>[a(e(f),m({type:"text",placeholder:"doe"},l,{required:""}),null,16)]),_:2},1024),_((n(),o("div",null,[a(e(x))])),[[c]])]),_:2},1024)]),_:1})]),a(e(g),{name:"email"},{default:s(({componentField:l})=>[a(e(h),null,{default:s(()=>[a(e(v),null,{default:s(()=>[t("Email")]),_:1}),a(e(w),null,{default:s(()=>[a(e(f),m({type:"email",placeholder:"mail@example.com"},l,{required:""}),null,16)]),_:2},1024),_((n(),o("div",null,[a(e(x))])),[[c]])]),_:2},1024)]),_:1}),a(e(g),{name:"password"},{default:s(({componentField:l})=>[a(e(h),null,{default:s(()=>[a(e(v),null,{default:s(()=>[t("Contraseña")]),_:1}),a(e(w),null,{default:s(()=>[a(e(f),m({type:"password"},l,{required:""}),null,16)]),_:2},1024),_((n(),o("div",null,[a(e(x))])),[[c]])]),_:2},1024)]),_:1}),a(e(g),{name:"repeatPassword"},{default:s(({componentField:l})=>[a(e(h),null,{default:s(()=>[a(e(v),null,{default:s(()=>[t("Repetir contraseña")]),_:1}),a(e(w),null,{default:s(()=>[a(e(f),m({type:"password"},l,{required:""}),null,16)]),_:2},1024),_((n(),o("div",null,[a(e(x))])),[[c]])]),_:2},1024)]),_:1})]),_:1}),a(e(z),{class:"flex-col gap-4"},{default:s(()=>[a(e(b),{type:"submit",class:"w-full"},{default:s(()=>[u.value?(n(),j(e(F),{key:0,class:"mr-2 h-4 w-4"})):R("",!0),ee]),_:1}),a(e(O)),r("p",ae,[t(" Ya tienes una cuenta? "),a(e(V),{class:"underline underline-offset-4",to:{name:"login"}},{default:s(()=>[t("Iniciar sesión")]),_:1})])]),_:1})]),_:1})],8,H)],40,Z)}}}),le={class:"w-full max-w-md md:max-w-lg lg:max-w-xl flex flex-col items-center justify-center gap-4"},de=C({__name:"RegisterView",setup(N){return(y,u)=>(n(),o("div",le,[a(se)]))}});export{de as default};
