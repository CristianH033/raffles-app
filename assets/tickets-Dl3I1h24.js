import{s}from"./index-qB8lAYve.js";const o=async r=>{const{data:t,error:e}=await s.from("tickets").select("*").eq("raffle_id",r).order("id",{ascending:!0});if(e)throw new Error(e.message);return t};export{o as g};
