import{d as b,A as L,o,j as x,w as r,l as h,J as M,K as E,e,af as W,z as O,E as Y,B as A,p as j,ag as Z,ah as ee,ai as te,aj as Q,b as n,ak as se,al as ae,am as le,a as i,c as _,n as P,s as oe,r as v,a1 as G,t as w,ad as V,F as S,i as R,an as ne,ae as re,D as B,_ as J,ao as ie}from"./index-BpvGhyvb.js";import{_ as ce}from"./Skeleton.vue_vue_type_script_setup_true_lang-Bz-mh4Ay.js";import{a as de}from"./raffles-TeWMcrh1.js";import{g as ue}from"./tickets-DfpsU07c.js";import{_ as fe}from"./Input.vue_vue_type_script_setup_true_lang-C0s0ReV1.js";import{S as pe}from"./ticket-line-duotone-DAykPjqY.js";import{S as me}from"./magnifer-outline-CJqttPRn.js";import{c as _e}from"./createLucideIcon-BNiaXTsk.js";const ve=_e("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),ge=b({__name:"Tabs",props:{defaultValue:{},orientation:{},dir:{},activationMode:{},modelValue:{},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(c,{emit:l}){const u=L(c,l);return(a,p)=>(o(),x(e(W),M(E(e(u))),{default:r(()=>[h(a.$slots,"default")]),_:3},16))}}),F=b({__name:"TabsTrigger",props:{value:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(c){const l=c,d=O(()=>{const{class:u,...a}=l;return a}),t=Y(d);return(u,a)=>(o(),x(e(Z),A(e(t),{class:e(j)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",l.class)}),{default:r(()=>[h(u.$slots,"default")]),_:3},16,["class"]))}}),be=b({__name:"TabsList",props:{loop:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(c){const l=c,d=O(()=>{const{class:t,...u}=l;return u});return(t,u)=>(o(),x(e(ee),A(d.value,{class:e(j)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",l.class)}),{default:r(()=>[h(t.$slots,"default")]),_:3},16,["class"]))}}),xe=b({__name:"Dialog",props:{open:{type:Boolean},defaultOpen:{type:Boolean},modal:{type:Boolean}},emits:["update:open"],setup(c,{emit:l}){const u=L(c,l);return(a,p)=>(o(),x(e(te),M(E(e(u))),{default:r(()=>[h(a.$slots,"default")]),_:3},16))}}),he=b({__name:"DialogClose",props:{asChild:{type:Boolean},as:{}},setup(c){const l=c;return(d,t)=>(o(),x(e(Q),M(E(l)),{default:r(()=>[h(d.$slots,"default")]),_:3},16))}}),ye=i("span",{class:"sr-only"},"Close",-1),we=b({__name:"DialogContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(c,{emit:l}){const d=c,t=l,u=O(()=>{const{class:p,...g}=d;return g}),a=L(u,t);return(p,g)=>(o(),x(e(le),null,{default:r(()=>[n(e(se),{class:"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),n(e(ae),A(e(a),{class:e(j)("fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",d.class)}),{default:r(()=>[h(p.$slots,"default"),n(e(Q),{class:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"},{default:r(()=>[n(e(ve),{class:"w-4 h-4"}),ye]),_:1})]),_:3},16,["class"])]),_:3}))}}),ke=b({__name:"DialogFooter",props:{class:{}},setup(c){const l=c;return(d,t)=>(o(),_("div",{class:P(e(j)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2",l.class))},[h(d.$slots,"default")],2))}}),$e={class:"w-full @container/ticketInfo"},Be={class:"relative flex w-full flex-col gap-2 overflow-hidden @md/ticketInfo:flex-row @md/ticketInfo:gap-8"},Ce={class:"min-w-auto flex flex-col items-center justify-center"},Ie={class:"flex h-28 w-28 flex-col items-center justify-center rounded-full border bg-background-elevated"},Te={class:"text-3xl"},De={class:"flex min-w-0 flex-col gap-2"},Ne=i("h2",{class:"my-2 text-2xl"},"Información del boleto",-1),Ve={key:0,class:"capitalize"},Oe={key:1,class:"text-sm"},je={key:2,class:"text-sm"},ze={key:3,class:"text-sm"},Fe={key:4,class:"flex w-full flex-col gap-2"},Pe=i("hr",{class:""},null,-1),Se=i("label",{class:""},"Otros boletos del vendedor:",-1),Re={class:"flex flex-row gap-2 overflow-x-auto rounded-md border p-2"},Le=b({__name:"TicketInfo",props:{ticketId:{}},setup(c){const l=oe.from("tickets").select("*, sellers(*, tickets(*))"),d=c,t=v(),u=async()=>{const{data:a,error:p}=await l.eq("id",d.ticketId).single();return p&&console.error(p),console.log(a),a};return G(async()=>{await u().then(a=>t.value=a).catch(a=>console.error(a)).finally(()=>{})}),(a,p)=>{var g,k,y,$,C,I,T,D,N,s,m,f,z,U,K,X,q;return o(),_("div",$e,[i("div",Be,[i("div",Ce,[i("div",Ie,[i("span",Te,w((g=t.value)==null?void 0:g.number),1)])]),i("div",De,[Ne,(k=t.value)!=null&&k.sellers?(o(),_("p",Ve," Vendedor: "+w(($=(y=t.value)==null?void 0:y.sellers)==null?void 0:$.name),1)):(o(),_("p",Oe,"El Boleto no tiene un vendedor asignado")),(I=(C=t.value)==null?void 0:C.sellers)!=null&&I.email?(o(),_("p",je," Email: "+w((D=(T=t.value)==null?void 0:T.sellers)==null?void 0:D.email),1)):V("",!0),(s=(N=t.value)==null?void 0:N.sellers)!=null&&s.phone?(o(),_("p",ze," Telefono: "+w((f=(m=t.value)==null?void 0:m.sellers)==null?void 0:f.phone),1)):V("",!0),(z=t.value)!=null&&z.sellers&&((K=(U=t.value)==null?void 0:U.sellers)!=null&&K.tickets)?(o(),_("div",Fe,[Pe,Se,i("div",Re,[(o(!0),_(S,null,R((q=(X=t.value)==null?void 0:X.sellers)==null?void 0:q.tickets,H=>(o(),_("div",{key:H.id,class:"flex h-12 min-h-12 w-12 min-w-12 flex-col items-center justify-center rounded-full border bg-background-elevated"},[i("span",null,w(H.number),1)]))),128))])])):V("",!0)])])])}}}),Me={class:"flex w-full flex-col items-center"},Ee={class:"flex w-full max-w-3xl flex-col gap-4"},Ae={class:"relative grow"},Ue={class:"flex w-full flex-col items-stretch gap-0"},Ke={className:"bg-secondary/50 border border-b-0 rounded-t-lg py-2 px-4 flex flex-row items-center justify-between"},Xe=i("h2",{className:"text-3xl py-2 "},"Numeración disponible",-1),qe={key:0,className:"p-2 border rounded-b-lg grid grid-cols-5 @xl:grid-cols-10 gap-x-2 gap-y-2 place-items-center"},He={className:"p-2 border rounded-b-lg grid grid-cols-5 @xl:grid-cols-10 gap-x-2 gap-y-2 place-items-center"},st=b({__name:"RaffleView",setup(c){const l=ne(),d=v(),t=v([]),u=v(null),a=v("all"),p=v(""),g=v(!1),k=v(!1),y=v(!1),$=v(null),C=v(null),I=O(()=>t.value.filter(s=>D(s)&&T(s))),T=s=>p.value.trim()===""||s.number.toLowerCase().includes(p.value.toLowerCase()),D=s=>{switch(a.value){case"available":return s.seller_id===null;case"unavailable":return s.seller_id!==null;default:return!0}},N=s=>{u.value=s,ie(()=>{y.value=!0})};return re($,([{isIntersecting:s}])=>{k.value=!s},{rootMargin:"-65px",threshold:1}),G(async()=>{g.value=!0,await de(Number(l.currentRoute.value.params.id)).then(s=>{d.value=s}).catch(s=>{console.log(s)}),await ue(Number(l.currentRoute.value.params.id)).then(s=>{t.value=s}).catch(s=>{console.log(s)}).finally(()=>{g.value=!1})}),(s,m)=>(o(),_("div",Me,[i("div",{ref_key:"sentinal",ref:$,class:"h-0 w-full"},null,512),i("div",Ee,[i("div",{class:P(["sticky top-16 z-10 flex flex-col gap-4 rounded-lg border bg-background-elevated/90 px-4 py-3 backdrop-blur transition-all duration-300 sm:flex-row",{"-mx-4 rounded-none border-x-0 border-t-0 !bg-background/90 @3xl/main:rounded-b-lg @3xl/main:border-x @3xl/main:!bg-background-elevated/90":k.value}])},[i("div",Ae,[n(e(me),{class:"absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2"}),n(e(fe),{type:"text",inputmode:"numeric",autocomplete:"off",maxlength:"19",placeholder:"Buscar número",class:"w-full py-2 pl-11 pr-4 text-sm",modelValue:p.value,"onUpdate:modelValue":m[0]||(m[0]=f=>p.value=f)},null,8,["modelValue"])]),n(e(ge),{"default-value":"all",class:"w-full sm:w-auto"},{default:r(()=>[n(e(be),{class:"w-full"},{default:r(()=>[n(e(F),{value:"all",onClick:m[1]||(m[1]=()=>a.value="all")},{default:r(()=>[B(" Todo ")]),_:1}),n(e(F),{value:"available",onClick:m[2]||(m[2]=()=>a.value="available")},{default:r(()=>[B(" Disponibles ")]),_:1}),n(e(F),{value:"unavailable",onClick:m[3]||(m[3]=()=>a.value="unavailable")},{default:r(()=>[B(" No disponibles ")]),_:1})]),_:1})]),_:1})],2),i("div",Ue,[i("div",Ke,[Xe,n(e(pe),{class:"h-8 w-8"})]),g.value?(o(),_("div",qe,[(o(),_(S,null,R(100,f=>n(e(ce),{key:f,class:"h-14 w-14 rounded-full border"})),64))])):V("",!0),i("div",He,[(o(!0),_(S,null,R(I.value,f=>(o(),x(e(J),{key:f.id,variant:"ghost",class:P(["h-14 w-14 rounded-full border text-lg",{"border border-destructive bg-background-elevated":f.seller_id!==null}]),onClick:z=>N(f)},{default:r(()=>[B(w(f.number),1)]),_:2},1032,["class","onClick"]))),128))])])]),n(e(xe),{ref_key:"overviewDialog",ref:C,open:y.value,"onUpdate:open":m[4]||(m[4]=f=>y.value=f)},{default:r(()=>[n(e(we),{class:"max-h-[calc(100dvh-2rem)] w-[calc(100vw-2rem)] max-w-2xl grid-rows-[auto_minmax(0,1fr)_auto] gap-0 rounded-lg p-0 transition-[opacity,_transform]"},{default:r(()=>{var f;return[n(Le,{class:"p-6",ticketId:(f=u.value)==null?void 0:f.id},null,8,["ticketId"]),n(e(ke),{class:"p-6 pt-0"},{default:r(()=>[n(e(he),{"as-child":""},{default:r(()=>[n(e(J),{type:"button",variant:"secondary"},{default:r(()=>[B(" Cerrar ")]),_:1})]),_:1})]),_:1})]}),_:1})]),_:1},8,["open"])]))}});export{st as default};
