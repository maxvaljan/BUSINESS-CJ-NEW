"use strict";(self.webpackJsonpRuntime=self.webpackJsonpRuntime||[]).push([[535],{9535:(t,e,n)=>{n.r(e),n.d(e,{init:()=>u,initAccordionLayout:()=>d,setActiveItem:()=>c,toggleCurrentItem:()=>a,toggleCurrentItemAndCloseOthers:()=>i});var o=n(2505);const s="active-item",r="active-item-control",a=(t,e)=>{const n=t.querySelector(`[id="${e}"]`),s=t.querySelector(`[id="c-${e}"]`);(0,o.Ck)(s),l({contentItem:n,controlItem:s})},i=(t,e,{shouldToggleCurrentItem:n=!0}={})=>{[...t.querySelectorAll(`[${o.LG}]`)].forEach((i=>{const c=i.getAttribute(o.LG),l=t.querySelector(`[id="${c}"]`);c===e?n?a(t,e):((0,o.Xs)({contentItem:l,controlItem:i,activeContentClassName:s,activeControlClassName:r}),(0,o.Ck)(i)):(0,o.IV)({contentItem:l,controlItem:i,activeContentClassName:s,activeControlClassName:r})}))},c=(t,e)=>i(t,e,{shouldToggleCurrentItem:!1}),l=({contentItem:t,controlItem:e})=>{const n=e.getAttribute("aria-selected")??"false",o="false"===(t.getAttribute("aria-hidden")??"true")?"true":"false",a="false"===n?"true":"false";e.classList.toggle(r),t.classList.toggle(s),e.setAttribute("aria-selected",a),t.setAttribute("aria-hidden",o)},d=t=>{const e="true"===t.getAttribute("data-layout-only-one-open"),n=n=>{n.stopPropagation();const s=n.target.closest(`[${o.LG}]`).getAttribute(o.LG);s&&(e?i(t,s):a(t,s))};t.addEventListener("click",n),t.addEventListener("keydown",(t=>{"Enter"===t.key&&n(t)}))};async function u(t,e){e&&e?.length?e.forEach(d):t&&d(t)}},2505:(t,e,n)=>{n.d(e,{Ck:()=>a,IV:()=>s,LG:()=>o,Xs:()=>r});const o="data-content-reference",s=({contentItem:t,controlItem:e,activeContentClassName:n,activeControlClassName:o})=>{t.classList.remove(n),t.setAttribute("aria-hidden","true"),e.classList.remove(o),e.setAttribute("aria-selected","false")},r=({contentItem:t,controlItem:e,activeContentClassName:n,activeControlClassName:o})=>{t.classList.add(n),t.setAttribute("aria-hidden","false"),e.classList.add(o),e.setAttribute("aria-selected","true")},a=t=>{(function(t){const e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)})(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}}}]);