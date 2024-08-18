import{_ as be}from"./SellersList.vue_vue_type_script_setup_true_lang-DL6gtOkk.js";import{S as L,_ as De,a as Te,b as xe,c as Se,d as ke}from"./AlertDialogDescription.vue_vue_type_script_setup_true_lang-Dw9Tkq-r.js";import{_ as Ne}from"./AlertDialogTrigger.vue_vue_type_script_setup_true_lang-BYSeLqOa.js";import{d as ce,r as k,z as Ze,a1 as fe,h as de,a2 as Ye,o as D,c as S,a as M,b as m,w as g,e as d,D as H,B as Ce,_ as I,ad as te,F as Pe,i as Fe,v as A,t as N,j,a6 as Ie,a7 as He,m as Ee,an as Ae,s as Le}from"./index-D_lficq2.js";import{_ as Re,a as Ue,b as je,c as Ve}from"./CardContent.vue_vue_type_script_setup_true_lang-nVZEnwlY.js";import{g as me,a as We}from"./sellers-BfYhI1Zf.js";import{S as qe}from"./cup-star-line-duotone-CJPy5g0y.js";import{t as ze,z as V,a as Be,_ as W,b as ne,c as re,d as ae,F as se}from"./FormMessage.vue_vue_type_script_setup_true_lang-BwLr68lD.js";import{d as Ke}from"./createLucideIcon-DhyDiip-.js";import{_ as Oe,a as Je,b as Ge,c as Qe,d as Xe,e as et,g as tt,f as nt}from"./MoneyInput.vue_vue_type_script_setup_true_lang-sa4Ja0qr.js";import"./Input.vue_vue_type_script_setup_true_lang-B0nCAqlZ.js";import"./magnifer-outline-C-PTv6hz.js";import"./strings-BzWVocVB.js";const rt=["disabled"],at={class:"flex flex-row gap-2"},st={key:0,class:"p-4",value:""},ot={style:{position:"relative"}},it={key:0,role:"alert",id:"radix-136-form-item-message",class:"text-sm font-medium text-destructive",type:"error"},lt=M("span",null,"Cancelar",-1),ut=M("span",null,"Asignar",-1),ct=ce({__name:"AddSellerToRaffleForm",props:{raffleId:{default:1}},emits:["submit","cancel","success","error"],setup(e,{emit:t}){const r=e,a=t,n=k(!1),s=k([]),u=Ze(()=>n.value),c=k(null),f=ze(V.object({seller_id:V.string({required_error:"El vendedor es requerido"}).refine(i=>{var h;return(h=s.value)==null?void 0:h.some($=>$.id.toString()===i)},{message:"El vendedor no existe"}),ticket_price:V.string({required_error:"El valor es requerido"}).transform(i=>parseFloat(i)).refine(i=>!isNaN(i)&&i>=1,{message:"El valor debe ser un número mayor o igual a 1"})})),{handleSubmit:_}=Be({validationSchema:f,initialValues:{}}),o=()=>{a("cancel")},l=_(async i=>{a("submit"),n.value=!0,c.value=null,await Ke(r.raffleId,Number(i.seller_id),Number(i.ticket_price)).then(h=>{a("success"),console.log(h)}).catch(h=>{a("error"),console.error(h),c.value=h.message}).finally(()=>{n.value=!1})},({errors:i})=>{console.log(i)}),v=async()=>{n.value=!0,me().then(i=>{s.value=i}).catch(i=>{console.error(i)}).finally(()=>{n.value=!1})};return fe(async()=>{await v()}),(i,h)=>{const $=de("RouterLink"),w=Ye("auto-animate");return D(),S("form",{onSubmit:h[0]||(h[0]=He((...p)=>d(l)&&d(l)(...p),["prevent"]))},[M("fieldset",{disabled:u.value},[m(d(se),{name:"seller_id"},{default:g(({componentField:p})=>[m(d(W),null,{default:g(()=>[m(d(ne),null,{default:g(()=>[H("Vendedor")]),_:1}),m(d(Oe),Ce(p,{required:""}),{default:g(()=>[m(d(re),null,{default:g(()=>[M("div",at,[m(d(Je),null,{default:g(()=>[m(d(Ge),{placeholder:"Elige un vendedor"})]),_:1}),m($,{to:{name:"sellers"}},{default:g(({navigate:b})=>[m(d(I),{variant:"outline",type:"button",onClick:b},{default:g(()=>[m(d(L),{class:"h-6 w-6"})]),_:2},1032,["onClick"])]),_:1})])]),_:1}),m(d(Qe),null,{default:g(()=>[m(d(Xe),null,{default:g(()=>[m(d(et),null,{default:g(()=>[H("Vendedores")]),_:1}),s.value.length===0?(D(),S("div",st,"No hay vendedores")):te("",!0),(D(!0),S(Pe,null,Fe(s.value,b=>(D(),j(d(nt),{key:b.id,value:b.id.toString(),class:"capitalize"},{default:g(()=>[H(N(b.name)+" - "+N(b.phone),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:2},1040),A((D(),S("div",null,[m(d(ae))])),[[w]])]),_:2},1024)]),_:1}),m(d(se),{name:"ticket_price"},{default:g(({value:p,handleChange:b})=>[m(d(W),null,{default:g(()=>[m(d(ne),null,{default:g(()=>[H("Establezca el valor del bono para el vendedor")]),_:1}),m(d(re),null,{default:g(()=>[m(tt,{"model-value":p,"onUpdate:modelValue":U=>b(U,!0),required:""},null,8,["model-value","onUpdate:modelValue"])]),_:2},1024),A((D(),S("div",null,[m(d(ae))])),[[w]])]),_:2},1024)]),_:1}),A((D(),S("div",ot,[c.value!==null?(D(),S("p",it,N(c.value),1)):te("",!0)])),[[w]]),m(d(W),{class:"flex w-full flex-col-reverse items-center justify-end gap-2 space-y-0 py-2 md:flex-row"},{default:g(()=>[m(d(I),{type:"button",class:"w-full gap-2",variant:"outline",onClick:o},{default:g(()=>[lt]),_:1}),m(d(I),{type:"submit",class:"w-full gap-2"},{default:g(()=>[A((D(),S("div",null,[n.value?(D(),j(d(Ie),{key:0,class:"h-6 w-6"})):(D(),j(d(L),{key:1,class:"h-6 w-6"}))])),[[w]]),ut]),_:1})]),_:1})],8,rt)],32)}}}),ft={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},dt=M("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"m9 5l6 7l-6 7"},null,-1),mt=[dt];function ht(e,t){return D(),S("svg",ft,[...mt])}const gt=Ee({name:"solar-alt-arrow-right-line-duotone",render:ht});var he=/^([0-9]{4})-([0-1][0-9])(?:-([0-3][0-9]))?(?:[T ]?([0-2][0-9])(?::([0-5][0-9]))?(?::([0-5][0-9]))?)?(?:\.[0-9]+)?(Z|(?:\+|\-)[0-9]{2}:?[0-9]{2})?$/;function _t(e){const t=e.match(he);if(t){const r=Number(t[2]);if(r<1||r>12)return!1;if(typeof t[3]!==void 0){const a=Number(t[3]);if(a<1||a>31)return!1}if(typeof t[4]!==void 0){const a=Number(t[4]);if(a<0||a>23)return!1}return!0}return!1}function vt(e){const t=e.match(he);return t&&typeof t[4]>"u"?e+="T00:00:00":e}function C(e){if(e||(e=new Date),e instanceof Date){const t=new Date(e);return t.setMilliseconds(0),t}if(e=e.trim(),_t(e))return new Date(vt(e));throw new Error(`Non ISO 8601 compliant date (${e}).`)}function pt(e){const t=C(e);return t.setDate(1),t.setMonth(t.getMonth()+1),t.setDate(0),t}function wt(e){return pt(e).getDate()}var B="1999-03-04T02:05:01.000Z",q=new Map,K=[["YYYY",{year:"numeric"}],["YY",{year:"2-digit"}],["MMMM",{month:"long"}],["MMM",{month:"short"}],["MM",{month:"2-digit"}],["M",{month:"numeric"}],["DD",{day:"2-digit"}],["D",{day:"numeric"}],["dddd",{weekday:"long"}],["ddd",{weekday:"short"}],["d",{weekday:"narrow"}],["mm",{minute:"2-digit"}],["m",{minute:"numeric"}],["ss",{second:"2-digit"}],["s",{second:"numeric"}],["ZZ",{timeZoneName:"long"}],["Z",{timeZoneName:"short"}]],O=[["HH",{hour:"2-digit"}],["H",{hour:"numeric"}]],J=[["hh",{hour:"2-digit"}],["h",{hour:"numeric"}],["a",{dayPeriod:"narrow"}],["A",{dayPeriod:"narrow"}]],R={DD:2,HH:2,MM:2,YY:2,YYYY:4,hh:2,mm:2,ss:2};function ge(e){if(/^[+-]\d{2}:\d{2}/.test(e))return 6;if(/^[+-]\d{4}/.test(e))return 5;throw new Error("Invalid offset format")}var yt=["MMMM","MMM","dddd","ddd"],y=new Map([...K,...O,...J].map(e=>[e[0],e])),oe=new Map,_e=["full","long","medium","short"],Y=e=>String(e).padStart(2,"0"),z=e=>String(e).padStart(2,"0");function Z(e){return e.type==="literal"&&(e.value=e.value.normalize("NFKC")),e}function $t(e,t,r,a=!1,n=null){const s=Mt(e,t,r,a),u=C(e);function c({partName:f,partValue:_,token:o}){if(f==="literal")return _;const l=s[f];if(f==="hour"&&o==="H")return l.replace(/^0/,"")||"0";if(["mm","ss","MM"].includes(o)&&l.length===1)return`0${l}`;if(f==="dayPeriod"){const v=F(u.getUTCHours()<12?"am":"pm",r);return o==="A"?v.toUpperCase():v.toLowerCase()}return f==="timeZoneName"?n??ve(-1*u.getTimezoneOffset(),o):l}return t.map(f=>({...f,value:c(f)}))}function Mt(e,t,r,a=!1){const n=C(e),s=t.filter(o=>o.hour12),u=t.filter(o=>!o.hour12),c=[],f=[];function _(o,l=!1){const v=`${r}-u-hc-${l?"h12":"h23"}`;if(c.push(...new Intl.DateTimeFormat(v,o.reduce((i,h)=>h.partName==="literal"?i:(a&&yt.includes(h.token)&&f.push(h),Object.assign(i,h.option)),{timeZone:"UTC"})).formatToParts(n).map(Z)),a&&f.length)for(const i of f){let h=[];switch(i.token){case"MMMM":h=new Intl.DateTimeFormat(v,{dateStyle:"long",timeZone:"UTC"}).formatToParts(n).map(Z);break;case"MMM":h=new Intl.DateTimeFormat(v,{dateStyle:"medium",timeZone:"UTC"}).formatToParts(n).map(Z);break}const $=h.find(p=>p.type===i.partName),w=c.findIndex(p=>p.type===i.partName);$&&w>-1&&(c[w]=$)}}return s.length&&_(s,!0),u.length&&_(u),c.reduce((o,l)=>(o[l.type]=l.value,o),{})}function ve(e,t="Z"){const r=String(Math.floor(Math.abs(e/60))).padStart(2,"0"),a=String(Math.abs(e%60)).padStart(2,"0"),n=e<0?"-":"+";return t==="ZZ"?`${n}${r}${a}`:`${n}${r}:${a}`}function bt(e,t){pe(e,t);const[r,a,n,s]=e.match(/([+-])([0-3][0-9]):?([0-6][0-9])/),u=Number(n)*60+Number(s);return a==="+"?u:-u}function pe(e,t="Z"){if(!(a=>{switch(a){case"Z":return/^([+-])[0-3][0-9]:[0-6][0-9]$/.test(e);case"ZZ":return/^([+-])[0-3][0-9][0-6][0-9]$/.test(e)}})(t))throw new Error(`Invalid offset: ${e}`);return e}function Dt(e){return K.concat(O).concat(J).sort((t,r)=>t[0].length>r[0].length?1:-1).reduce((t,r)=>t.replace(r[0],`\\${r[0]}`),e)}function Tt(e){return["numeric","2-digit"].includes(e.partValue)}function xt(e){let t;for(const r of e){if(r.partName==="literal"&&!isNaN(parseFloat(r.partValue)))throw new Error(`Numbers in format (${r.partValue}).`);if(t&&t.partName!=="literal"&&r.partName!=="literal"&&!(t.token in R)&&!(r.token in R)&&!(Tt(t)&&r.token.toLowerCase()==="a"))throw new Error(`Illegal adjacent tokens (${t.token}, ${r.token})`);t=r}return e}function St(e){return typeof e=="string"?e.includes("ZZ")?"ZZ":"Z":"time"in e&&e.time==="full"?"Z":"ZZ"}function F(e,t){const r=oe.get(t);if(r&&r[e])return r[e];const a=new Date(B);a.setUTCHours(e==="am"?5:20);const s=new Intl.DateTimeFormat(t,{timeStyle:"full",timeZone:"UTC",hour12:!0}).formatToParts(a).map(Z).find(u=>u.type==="dayPeriod");if(s){const u=r||{};return oe.set(t,Object.assign(u,{[e]:s.value})),s.value}return e}function kt(e,t="+00:00"){const r=C(e),a=(()=>{switch(ge(t)){case 5:return"ZZ";case 6:return"Z"}})(),n=bt(t,a);return new Date(r.getTime()+n*1e3*60)}function we(){return Intl.DateTimeFormat().resolvedOptions().timeZone}function ie(e,t){const r=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZone:t,hourCycle:"h23"}).formatToParts(e).map(Z),a={};return r.forEach(n=>{a[n.type]=n.value}),new Date(`${a.year}-${a.month}-${a.day}T${a.hour}:${a.minute}:${a.second}Z`)}function le(e,t="UTC",r="device",a="Z"){var n;r=r==="device"?(n=we())!=null?n:"utc":r;const s=C(e),u=ie(s,t),c=ie(s,r),f=Math.round((c.getTime()-u.getTime())/1e3/60);return ve(f,a)}function G(e,t){if(_e.includes(e)||typeof e=="object")return Nt(e,t);let r=e,a=0;const n=o=>{if(o[2]||(o[2]=new RegExp(`(.)?(${o[0]})`,"g")),o[2].test(r)){let l=0;return r=r.replace(o[2],(v,i,h)=>i==="\\"?h:`${typeof i=="string"?i:""}{!${l++?a:a++}!}`),!!l}return!1};function s(o){const l=o.map(i=>i.partName),v=new Set(l);if(l.length>v.size)throw new Error("Cannot reuse format tokens.");return o}function u(o,[l,v,i]){const h=Object.keys(v)[0],$=v[h];return{option:v,partName:h,partValue:$,token:l,pattern:i,hour12:o}}const c=K.filter(n).concat(O.filter(n)).map(u.bind(null,!1)),f=s(c.concat(J.filter(n).map(u.bind(null,!0)))),_=/^\{!(\d+)!\}$/;return r.split(/(\{!\d+!\})/).map(o=>{const l=o.match(_);return l?f[Number(l[1])]:{option:{literal:o},partName:"literal",partValue:o,token:o,pattern:new RegExp(""),hour12:!1}}).filter(o=>!(o.partName==="literal"&&o.partValue===""))}function Nt(e,t){const r={timeZone:"UTC"};typeof e=="string"?r.dateStyle=e:("date"in e&&(r.dateStyle=e.date),"time"in e&&(r.timeStyle=e.time));const a=new Intl.DateTimeFormat(t,r),n=a.formatToParts(new Date(B)).map(Z),u=a.formatToParts(new Date("1999-04-05T23:05:01.000Z")).map(Z).find(f=>f.type==="hour"),c=u&&u.value==="23"?24:12;return n.map(f=>{const _=f.type,o=Zt(f.type,f.value,t,f.type==="hour"?c:void 0,r);if(o===void 0)return;const l=o[1][_];if(l)return o[2]||(o[2]=new RegExp(`${o[0]}`,"g")),{option:{[_]:l},partName:_,partValue:l,token:o[0],pattern:o[2],hour12:c===12}}).filter(f=>!!f)}function Zt(e,t,r,a,n){const s=t.length,u=!isNaN(Number(t));let c;switch(e){case"year":return s===2?y.get("YY"):y.get("YYYY");case"month":if(u)return s===1?y.get("M"):y.get("MM");switch(c=ue(r,e,t),c){case"long":return y.get("MMMM");default:return y.get("MMM")}case"day":return s===1?y.get("D"):y.get("DD");case"weekday":switch(c=ue(r,e,t),c){case"narrow":return y.get("d");case"short":return y.get("ddd");default:return y.get("dddd")}case"hour":return a===12?s===1?y.get("h"):y.get("hh"):s===1?y.get("H"):y.get("HH");case"minute":return s===1?y.get("m"):y.get("mm");case"second":return s===1?y.get("s"):y.get("ss");case"dayPeriod":return/^[A-Z]+$/u.test(t)?y.get("A"):y.get("a");case"literal":return[t,{literal:t},new RegExp("")];case"timeZoneName":return n.timeStyle==="full"?y.get("Z"):y.get("ZZ");default:return}}function ue(e,t,r){if(!q.has(e)){const n=new Date(B),s=[3,8,9,7,6,4,3],u=["weekday","month","dayPeriod"],c=["long","short","narrow"],f={};for(let _=0;_<12;_++){n.setMonth(0+_),_ in s&&n.setDate(s[_]),n.setUTCHours(8+_);for(const o of c){const l=new Intl.DateTimeFormat(e,u.reduce((v,i)=>Object.assign(v,{[i]:o}),{hour12:!0,timeZone:"UTC"})).formatToParts(n).map(Z);if(o==="long"||o==="short"){const i=new Intl.DateTimeFormat(e,{dateStyle:o==="short"?"medium":"long",timeZone:"UTC"}).formatToParts(n).map(Z).find($=>$.type==="month"),h=l.findIndex($=>$.type==="month");h>-1&&i&&(l[h]=i)}l.forEach(v=>{if(v.type==="literal")return;const i=v.type;f[i]=Object.assign(f[i]||{},{[v.value]:o})})}}q.set(e,f)}const a=q.get(e);return a?a[t][r]:void 0}function Yt(e,t="+00:00"){const r=t.slice(0,1)==="+";return kt(e,t.replace(r?"+":"-",r?"-":"+"))}function Ct(){return Intl.DateTimeFormat().resolvedOptions().locale}function P(e,t="long",r="device",a=!1,n){let s,u;return typeof e=="object"&&!(e instanceof Date)&&({date:e,format:t,locale:r,genitive:a,partFilter:n,tz:s}=e),t==="ISO8601"?C(e).toISOString():(s&&(u=le(e,"utc",s,St(t))),s??(s=we()),(s==null?void 0:s.toLowerCase())!=="utc"&&(e=Yt(e,le(e,s,"utc"))),(!r||r==="device")&&(r=Ct()),$t(e,G(t,r).filter(n??(()=>!0)),r,a,u).map(c=>c.value).join(""))}function Pt(e,t="en",r=!1,a=()=>!0){return G(e,t).filter(a).reduce((n,s)=>n+=r&&s.partName==="literal"?Dt(s.token):s.token,"").normalize("NFKC")}function Ft(e){const t=new Date().getFullYear(),r=t%100,a=Math.floor(t/100),n=Number(e);return(a+(n>r+20?-1:0))*100+n}function ye(e,t="en",r=!1){const a=(n,s)=>Array(n).fill("").map((u,c)=>`${s(c)}`);if(e==="M")return a(12,n=>n+1);if(e==="MM")return a(12,n=>{const s=n+1;return s<10?`0${s}`:s});if(e.startsWith("M"))return ye("MM").map(n=>P(`2000-${n}-05`,e,t,r));if(e.startsWith("d"))return a(7,n=>`0${n+2}`).map(n=>P(`2022-10-${n}`,e,t));if(e==="a")return[F("am",t).toLowerCase(),F("pm",t).toLowerCase()];if(e==="A")return[F("am",t).toUpperCase(),F("pm",t).toUpperCase()];if(e.startsWith("Y")){const n=new Date().getFullYear();return a(120,s=>s+1).reduce((s,u)=>(u!=="120"&&s.push(P(`${n+Number(u)}-06-06`,e,t)),s.unshift(P(`${n-Number(u)}-06-06`,e,t)),s),[P(`${n}-06-06`,e,t)])}return e.startsWith("D")?a(31,n=>`${e==="DD"&&n<9?"0":""}${n+1}`):e.startsWith("H")?a(24,n=>`${e==="HH"&&n<10?"0":""}${n}`):e.startsWith("h")?a(12,n=>`${e==="hh"&&n<9?"0":""}${n+1}`):e.startsWith("m")||e.startsWith("s")?a(60,n=>`${e.length>1&&n<10?"0":""}${n}`):[]}function It(e,t="ISO8601",r="device"){let a=()=>!0,n,s="backward";if(typeof e=="object"?{date:n,format:t="ISO8601",locale:r="device",dateOverflow:s="backward",partFilter:a=()=>!0}=e:n=e,!n)throw new Error("parse() requires a date string.");const u=()=>{throw new Error(`Date (${n}) does not match format (${Pt(t,r)})`)};if(t==="ISO8601")return C(n);const c=_e.includes(t)||typeof t=="object",f=xt(G(t,r).filter(a));if(!f.length)throw new Error("parse() requires a pattern.");let _;try{_=Ht(n,f)}catch{return u()}const o=new Date,l=new Map([["YYYY",o.getFullYear()],["MM",o.getMonth()+1],["DD",o.getDate()],["HH",0],["mm",0],["ss",0]]);let v=null,i="";_.forEach(T=>{if(T.partName==="literal")return;if(T.token===T.value)return u();const E=Number(T.value);if(l.has(T.token))l.set(T.token,E);else if(T.token==="YY")l.set("YYYY",Ft(T.value));else{const x=T.token;if(x.startsWith("d"))return;if(x==="D")l.set("DD",E);else if(x==="H"||x.startsWith("h"))l.set("HH",E);else if(x==="M")l.set("MM",E);else if(x==="a"||x==="A")v=T.value.toLowerCase()===F("am",r).toLowerCase();else if(x==="Z"||x==="ZZ")i=pe(T.value,x);else{const ee=ye(x,r,c).indexOf(T.value);if(ee!==-1)switch(x){case"MMM":case"MMMM":l.set("MM",ee+1);break}}}});let h=l.get("HH")||0;v===!1?(h+=h===12?0:12,l.set("HH",h===24?0:h)):v===!0&&h===12&&l.set("HH",0),l.set("MM",(l.get("MM")||1)-1);let[$,w,p,b,U,$e]=Array.from(l.values());const Q=wt(new Date(`${z($)}-${Y(w+1)}-10`));if(Q<p&&s==="throw")throw new Error(`Invalid date ${z($)}-${Y(w+1)}-${Y(p)}`);p=s==="backward"?Math.min(p,Q):p;const Me=`${z($)}-${Y(w+1)}-${Y(p)}T${Y(b)}:${Y(U)}:${Y($e)}${i}`,X=new Date(Me);return isFinite(+X)?X:u()}function Ht(e,t){let r=0;const a=c=>[c[r++],c[r]];let n=0;const s=[];let u;do{const[c,f]=a(t);u=f;let _=1;if(c.partName==="literal")_=c.partValue.length;else if(c.partName==="timeZoneName")_=ge(e.substring(n));else if(c.token in R)_=R[c.token];else if(f)if(f.partName==="literal"){if(_=e.indexOf(f.partValue,n)-n,_<0)throw new Error}else if(f.partName==="dayPeriod"){for(let o=1;o<=4;o++)if(isNaN(Number(e.charAt(n+o)))){_=o;break}}else{const o=e.substring(n).search(/\d/);o!==-1&&(_=n+o)}else _=e.length;s.push({...c,value:e.substring(n,n+_)}),n+=_}while(u);return s}const Et=(e,t="YYYY/MM/DD")=>{if(e)return P(It(e,"YYYY-MM-DDTHH:mm:ss"),t)},At={class:"flex w-full flex-col items-center gap-4"},Lt={class:"text-2xl font-bold"},Rt={class:"text-xl font-bold"},Ut={class:"text-xs text-muted-foreground"},jt={class:"text-xs text-muted-foreground"},Vt=M("span",{class:"hidden md:inline"},"Agregar",-1),Wt={class:"relative overflow-y-auto p-4"},qt=M("p",null,"No hay vendedores en esta rifa",-1),zt=M("span",null,"Agregar venddor a esta rifa",-1),ln=ce({__name:"SellersRaffleView",setup(e){const t=Ae(),r=k(),a=k([]),n=k([]),s=k(""),u=k(!1),c=k(!1),f=t.currentRoute.value.params.id,_=async()=>{await Le.from("raffle_stats").select("*").eq("raffle_id",f).single().then(i=>{r.value=i.data})},o=async()=>{u.value=!0,me().then(i=>{a.value=i}).catch(i=>{console.error(i)}).finally(()=>{u.value=!1})},l=async()=>{u.value=!0,We(Number(f)).then(i=>{n.value=i}).catch(i=>{console.error(i)}).finally(()=>{u.value=!1})},v=async()=>{c.value=!1,await l()};return fe(async()=>{var i;await _(),await o(),await l(),s.value=Et((i=r.value)==null?void 0:i.draw_drawn_at)}),(i,h)=>{const $=de("RouterLink");return D(),S("div",At,[m(d(Ve),{class:"w-full"},{default:g(()=>[m(d(Re),{class:"flex flex-row items-center justify-between space-y-0 pb-2"},{default:g(()=>[m(d(Ue),{class:"text-lg font-medium"},{default:g(()=>{var w,p;return[M("p",Lt,N((w=r.value)==null?void 0:w.raffle_name),1),M("p",null,"Juega con: "+N((p=r.value)==null?void 0:p.draw_name)+" - ("+N(s.value)+")",1)]}),_:1}),m(d(qe),{class:"h-6 w-6"})]),_:1}),m(d(je),null,{default:g(()=>{var w,p,b;return[M("div",Rt,N((w=r.value)==null?void 0:w.total_tickets)+" boletas",1),M("p",Ut,N((p=r.value)==null?void 0:p.available_tickets)+" Disponibles",1),M("p",jt,N((b=r.value)==null?void 0:b.taken_tickets)+" asignadas",1)]}),_:1})]),_:1}),m(be,{sellers:n.value,isLoading:u.value,"sort-by":(w,p)=>(p.total_tickets||0)-(w.total_tickets||0)},{actionButton:g(()=>[m(d(De),{open:c.value,"onUpdate:open":h[1]||(h[1]=w=>c.value=w)},{default:g(()=>[m(d(Ne),{"as-child":""},{default:g(()=>[m(d(I),{class:"gap-2"},{default:g(()=>[m(d(L),{class:"h-5 w-5"}),Vt]),_:1})]),_:1}),m(d(Te),{class:"max-h-[calc(100dvh-2rem)] w-[calc(100vw-2rem)] max-w-2xl grid-rows-[auto_minmax(0,1fr)_auto] gap-0 rounded-lg p-0 transition-[opacity,_transform]"},{default:g(()=>[m(d(xe),{class:"border-b p-4"},{default:g(()=>[m(d(Se),null,{default:g(()=>[H("Agregar vendedor")]),_:1}),m(d(ke),{class:"mt-4"})]),_:1}),M("div",Wt,[m(ct,{"raffle-id":Number(d(f)),onCancel:h[0]||(h[0]=()=>c.value=!1),onSuccess:v},null,8,["raffle-id"])])]),_:1})]),_:1},8,["open"])]),emptyText:g(()=>[qt]),actionForEmpty:g(()=>[m(d(I),{class:"gap-2",onClick:h[2]||(h[2]=w=>c.value=!0)},{default:g(()=>[m(d(L),{class:"h-5 w-5"}),zt]),_:1})]),itemAction:g(({seller:w})=>[m($,{custom:"",to:{name:"raffle-seller",params:{id:d(f),seller_id:w.id}}},{default:g(({navigate:p})=>[m(d(I),{class:"gap-2",type:"button",variant:"outline",onClick:p},{default:g(()=>[m(d(gt),{class:"h-6 w-6"})]),_:2},1032,["onClick"])]),_:2},1032,["to"])]),_:1},8,["sellers","isLoading","sort-by"])])}}});export{ln as default};
