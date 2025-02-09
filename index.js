import{A as w,S as m,N as y,K as h,M as j}from"./assets/vendor-CWIMKQfM.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();console.log("About-me script loaded!");const S=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));async function _(){try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews",{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return await e.json()}catch(e){throw console.error("Error fetching data:",e),e}}const E=Object.freeze(Object.defineProperty({__proto__:null,getData:_},Symbol.toStringTag,{value:"Module"}));console.log("benefits script loaded!");document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(r){r.preventDefault();const t=this.getAttribute("href").substring(1),s=document.getElementById(t);s&&window.scrollTo({top:s.offsetTop,behavior:"smooth"})})});const L=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));function O(e,r){const t=document.querySelector(e);if(!t)return;new IntersectionObserver(o=>{o.forEach(n=>{n.isIntersecting?t.classList.add(r):t.classList.remove(r)})},{threshold:.001}).observe(t)}O(".covers-list","covers-animation");const q=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));console.log("FAQ script loaded!");document.addEventListener("DOMContentLoaded",function(){new w(".faq-list",{duration:400});function e(t,s){const o=t.querySelector("use");if(o){const n=s?"icon-IconUp":"icon-IconDown";o.outerHTML=`<use href="./img/icons/icon-sprite.svg#${n}"></use>`}}document.querySelectorAll(".faq-link").forEach(t=>{const s=t.querySelector(".faq-btn");s.addEventListener("click",function(){const o=t.classList.toggle("active");e(s,o)})})});const P=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));console.log("Header script loaded!");const T=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));console.log("Hero script loaded!");const M=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),a=new m(".swiper-container",{modules:[y,h,j],speed:800,slidesPerView:1,spaceBetween:0,loop:!1,navigation:{nextEl:'.swiper-button-next[data-swiper-id="1"]',prevEl:'.swiper-button-prev[data-swiper-id="1"]'},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,on:{slideChange:function(){const e=document.querySelector('.swiper-button-prev[data-swiper-id="1"]'),r=document.querySelector('.swiper-button-next[data-swiper-id="1"]');e.disabled=a.isBeginning,r.disabled=a.isEnd,e.classList.toggle("swiper-button-disabled",a.isBeginning),r.classList.toggle("swiper-button-disabled",a.isEnd)}}}),I=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));console.log("reviews script loaded!");const k=document.querySelectorAll(".reviews-swiper-slide"),i=document.querySelector("[data-swiper-id='2'].swiper-button-prev"),l=document.querySelector("[data-swiper-id='2'].swiper-button-next"),c=new m(".reviews-swiper",{navigation:{nextEl:'[data-swiper-id="2"] .swiper-button-next',prevEl:'[data-swiper-id="2"] .swiper-button-prev'},wrapperClass:"reviews-swiper-wrapper",slideClass:"reviews-swiper-slide",spaceBetween:16,breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},on:{slideChange:function(){this.isBeginning?(i.disabled=!0,i.classList.add("swiper-button-disabled")):(i.disabled=!1,i.classList.remove("swiper-button-disabled")),this.isEnd?(l.disabled=!0,l.classList.add("swiper-button-disabled")):(l.classList.remove("swiper-button-disabled"),l.disabled=!1)}}});window.reviewsSwiper=c;l.addEventListener("click",()=>{c.slideNext()});i.addEventListener("click",()=>{c.slidePrev()});c.isBeginning&&i.classList.add("swiper-button-disabled");c.isEnd&&l.classList.add("swiper-button-disabled");async function A(){const e=await _();k.forEach((r,t)=>{e[t]&&(r.innerHTML=`
          <div class="review-card">
            <img src="${e[t].avatar_url}" alt="${e[t].author}" class="review-avatar">
            <h3 class="review-avatar-name">${e[t].author}</h3>
            <p class ="review-review">${e[t].review}</p>
          </div>
        `)})}A();const B=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),z="https://portfolio-js.b.goit.study/api/requests",p=document.querySelector(".footer-form"),d=document.querySelector(".footer-backdrop"),C=document.querySelector("[data-modal-close]"),D=document.querySelector(".footer-modal-text");document.querySelector("#your-email");const g=document.querySelector("#your-comments");function f(e){D.textContent=e,d.classList.add("is-open"),document.addEventListener("keydown",v)}function b(){d.classList.remove("is-open"),document.removeEventListener("keydown",v)}function v(e){e.key==="Escape"&&b()}function x(e,r){e.value.length>r&&(e.value=e.value.substring(0,r)+"...")}g.addEventListener("input",()=>{x(g,50)});p.addEventListener("submit",e=>{e.preventDefault();const r=new FormData(p),t={email:r.get("your-email"),comment:r.get("your-comments")};if(!t.email||!t.comment){console.error("Error: Empty form fields"),f("Please fill in all fields.");return}console.log("Надані дані:",t),fetch(z,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(s=>{if(console.log("Відповідь сервера:",s),!s.ok)throw new Error(`Помилка HTTP: ${s.status}`);return s.json()}).then(s=>{console.log("Succes!:",s),f("The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch."),document.querySelector(".footer-modal").classList.add("success-message"),p.reset()}).catch(s=>{console.error("Invalid email, try again:",s),f("Error sending. Check your details and try again."),document.querySelector(".footer-modal").classList.add("error-message")})});C.addEventListener("click",b);d.addEventListener("click",e=>{e.target===d&&b()});const N=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),$=Object.assign({"./js/about-me.js":S,"./js/api.js":E,"./js/benefits.js":L,"./js/covers.js":q,"./js/faq.js":P,"./js/header.js":T,"./js/hero.js":M,"./js/projects.js":I,"./js/reviews.js":B,"./js/work-together.js":N});console.log($);
//# sourceMappingURL=index.js.map
