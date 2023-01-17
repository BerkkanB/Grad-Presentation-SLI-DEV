import{f as _,h as d,j as p,ag as h,c as m,ah as u,l as n,ai as t,aj as o,y as s,F as f,ak as g,al as v,am as x,n as r,an as y,ao as b,m as N,ap as k,aq as P,_ as w}from"./nav-e3f7efbb.js";import{N as S}from"./NoteViewer-de691ff8.js";import{u as T}from"./index-666bc3fc.js";import"./_commonjsHelpers-725317a4.js";const V={class:"m-4"},j={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},R={class:"opacity-50"},A={class:"text-lg"},B={class:"font-bold flex gap-2"},C={class:"opacity-50"},D=t("div",{class:"flex-auto"},null,-1),E={key:0,class:"border-gray-400/50 mb-8"},H=_({__name:"PresenterPrint",setup(z){d(p),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),T({title:`Notes - ${m.title}`});const l=u(()=>x.slice(0,-1).map(a=>{var i;return(i=a.meta)==null?void 0:i.slide}).filter(a=>a!==void 0&&a.notesHTML!==""));return(a,i)=>(r(),n("div",{id:"page-root",style:v(s(P))},[t("div",V,[t("div",j,[t("h1",L,o(s(m).title),1),t("div",R,o(new Date().toLocaleString()),1)]),(r(!0),n(f,null,g(s(l),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",A,[t("div",B,[t("div",C,o(e==null?void 0:e.no)+"/"+o(s(y)),1),b(" "+o(e==null?void 0:e.title)+" ",1),D])]),N(S,{"note-html":e.notesHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(l).length-1?(r(),n("hr",E)):k("v-if",!0)]))),128))])],4))}}),I=w(H,[["__file","/Users/berkkan/Repos/GRAD-PRESENTATION/slidev/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{I as default};
