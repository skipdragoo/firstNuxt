import{q as v,d as y,_ as C,a as w}from"./FyEZYPzX.js";import{d as x,q as A,z as k,A as o,y as B,l as q,B as E,C as N,x as P,D as R,K as b,c as D,e as F,E as e,i as I,f as u}from"./DrAgZRTO.js";import{u as K}from"./llovYS0N.js";const L={key:0},U=x({__name:"[...slug]",async setup(M){let a,n;const t=A(),{locale:r,localeProperties:i,t:p}=k(),_=o(()=>Array.isArray(t.params.slug)?t.params.slug:[t.params.slug]),c=o(()=>B(q(r.value,..._.value))),m=o(()=>`content_${r.value}`),{data:s}=([a,n]=E(async()=>K(c.value,async()=>await v(m.value).path(c.value).first(),"$BPopkF1nvN")),a=await a,n(),a);if(!s.value)throw N({statusCode:404,statusMessage:"Page not found"});const{profile:d}=P(),{copy:g}=R();return y({meta_o:{usingInput:!0,handler:()=>{g(d.email),b.success(p("global.email_copied"))}}}),(S,V)=>{var l;const f=C,h=w;return e(s)?(I(),D("div",L,[u(f,{page:e(s),"is-writing":e(t).path.includes("/articles/")},null,8,["page","is-writing"]),u(h,{dir:((l=e(i))==null?void 0:l.dir)??"ltr",value:e(s)},null,8,["dir","value"])])):F("",!0)}}});export{U as default};
