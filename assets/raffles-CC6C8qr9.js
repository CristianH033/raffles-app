import{a4 as s}from"./index-CxGGKlaI.js";const f=async()=>{const{data:e,error:r}=await s.from("raffles").select("*");if(r)throw new Error(r.message);return e},o=async e=>{const{data:r,error:a}=await s.from("raffles").select("*").eq("id",e).single();if(a)throw new Error(a.message);return r};export{o as a,f as g};
