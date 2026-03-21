import{c as n,r as o,j as e}from"./index-1liz9H3_.js";/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],f=n("x",i);function m({isOpen:s,onClose:t,title:a,children:c,maxWidth:d="max-w-md"}){return o.useEffect(()=>(s?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[s]),o.useEffect(()=>{const r=l=>{l.key==="Escape"&&t()};return s&&window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[s,t]),s?e.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[e.jsx("div",{className:"absolute inset-0 bg-surface-900/40 backdrop-blur-sm animate-fade-in",onClick:t}),e.jsxs("div",{className:`
          relative bg-white rounded-2xl shadow-float ${d} w-full
          animate-scale-in
        `,role:"dialog","aria-modal":"true","aria-label":a,children:[a&&e.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-surface-100",children:[e.jsx("h3",{className:"text-lg font-semibold text-surface-900",children:a}),e.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg flex items-center justify-center text-surface-400 hover:text-surface-600 hover:bg-surface-100 transition-colors","aria-label":"Close dialog",children:e.jsx(f,{className:"w-5 h-5"})})]}),e.jsx("div",{className:"px-6 py-5",children:c})]})]}):null}export{m as M};
