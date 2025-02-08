import{A as d,S as c,N as a,K as u,M as _}from"./assets/vendor-CWIMKQfM.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();console.log("About-me script loaded!");const p=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));console.log("benefits script loaded!");const g=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));console.log("covers script loaded!");const b=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));console.log("FAQ script loaded!");document.addEventListener("DOMContentLoaded",function(){new d(".faq-list",{duration:400});function n(s,r){const e=s.querySelector("use");if(e){const o=r?"icon-IconUp":"icon-IconDown";e.outerHTML=`<use href="../img/icons/icon-sprite.svg#${o}"></use>`}}document.querySelectorAll(".faq-link").forEach(s=>{const r=s.querySelector(".faq-btn");r.addEventListener("click",function(){const e=s.classList.toggle("active");n(r,e)})})});const f=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));console.log("Header script loaded!");const w=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));console.log("Hero script loaded!");const v=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),i=new c(".swiper-container",{modules:[a,u,_],speed:800,slidesPerView:1,spaceBetween:0,loop:!1,navigation:{nextEl:'.swiper-button-next[data-swiper-id="1"]',prevEl:'.swiper-button-prev[data-swiper-id="1"]'},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,on:{slideChange:function(){const n=document.querySelector('.swiper-button-prev[data-swiper-id="1"]'),t=document.querySelector('.swiper-button-next[data-swiper-id="1"]');n.disabled=i.isBeginning,t.disabled=i.isEnd,n.classList.toggle("swiper-button-disabled",i.isBeginning),t.classList.toggle("swiper-button-disabled",i.isEnd)}}}),j=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));console.log("reviews script loaded!");new c(".reviews-swiper",{slidesPerView:3,spaceBetween:20,navigation:{nextEl:'[data-swiper-id="2"].reviews-swiper-button-next',prevEl:'[data-swiper-id="2"].reviews-swiper-button-prev'},wrapperClass:"reviews-swiper-wrapper",slideClass:"reviews-swiper-slide"});const y=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));console.log("work-together script loaded!");const m=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),O=Object.assign({"./js/about-me.js":p,"./js/benefits.js":g,"./js/covers.js":b,"./js/faq.js":f,"./js/header.js":w,"./js/hero.js":v,"./js/projects.js":j,"./js/reviews.js":y,"./js/work-together.js":m});console.log(O);
//# sourceMappingURL=index.js.map
