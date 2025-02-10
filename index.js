import{A as g,S as b,N as h}from"./assets/vendor-DlbH524T.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const v="/project-TeamExtremeDeadline01/assets/icon-sprite-Db7mK2Ci.svg";document.addEventListener("DOMContentLoaded",function(){new g(".about-list",{duration:400});function e(t,n){const o=t.querySelector("use");if(o){const r=n?"icon-IconUp":"icon-IconDown";o.setAttribute("xlink:href",`${v}#${r}`)}}document.querySelectorAll(".about-list-item").forEach(t=>{const n=t.querySelector(".about-toggle-btn"),o=t.querySelector(".about-list-content");n.addEventListener("click",function(){const r=t.classList.toggle("is-active");e(n,r),r?o.style.maxHeight=o.scrollHeight+"px":o.style.maxHeight="0"})})});new b(".swiper-skills-container",{modules:[h],loop:!0,oneWayMovement:!0,edgeSwipeDetection:!0,slideToClickedSlide:!0,wrapperClass:"skills-list",slideClass:"skills-list-item",centeredSlides:!1,loopedSlides:6,navigation:{nextEl:".skills-slider-btn"},cssMode:!0,spaceBetween:0,breakpoints:{320:{slidesPerView:"auto"},768:{slidesPerView:"auto",centeredSlides:!0},1440:{slidesPerGroup:1,slidesPerView:6,centeredSlides:!1}}});const S=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));async function _(){try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews",{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return await e.json()}catch(e){throw console.error("Error fetching data:",e),e}}async function w(e){const s=await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!s.ok)throw new Error(`Ошибка HTTP: ${s.status}`);return s.json()}const j=Object.freeze(Object.defineProperty({__proto__:null,getData:_,postData:w},Symbol.toStringTag,{value:"Module"}));console.log("benefits script loaded!");document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(s){s.preventDefault();const t=this.getAttribute("href").substring(1),n=document.getElementById(t);n&&window.scrollTo({top:n.offsetTop,behavior:"smooth"})})});const E=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));function L(e,s){const t=document.querySelector(e);if(!t)return;new IntersectionObserver(o=>{o.forEach(r=>{r.isIntersecting?t.classList.add(s):t.classList.remove(s)})},{threshold:.001}).observe(t)}L(".covers-list","covers-animation");const O=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));console.log("FAQ script loaded!");document.addEventListener("DOMContentLoaded",function(){new g(".faq-list",{duration:400});function e(t,n){const o=n?"icon-IconUp":"icon-IconDown";t.innerHTML=`
            <svg width="24" height="24" class="faq-icon">
                <use href="${v}#${o}"></use>
            </svg>
        `}document.querySelectorAll(".faq-link").forEach(t=>{const n=t.querySelector(".faq-btn"),o=t.querySelector(".faq-panel");n.addEventListener("click",function(){const r=t.classList.toggle("is-active");e(n,r),r?o.style.maxHeight=o.scrollHeight+"px":o.style.maxHeight="0"})})});const q=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));console.log("Header script loaded!");const P=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));console.log("Hero script loaded!");const T=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),M=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));console.log("reviews script loaded!");const k=document.querySelectorAll(".reviews-swiper-slide"),i=document.querySelector("[data-swiper-id='2'].swiper-button-prev"),l=document.querySelector("[data-swiper-id='2'].swiper-button-next"),c=new b(".reviews-swiper",{navigation:{nextEl:'[data-swiper-id="2"] .swiper-button-next',prevEl:'[data-swiper-id="2"] .swiper-button-prev'},wrapperClass:"reviews-swiper-wrapper",slideClass:"reviews-swiper-slide",spaceBetween:16,breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},on:{slideChange:function(){this.isBeginning?(i.disabled=!0,i.classList.add("swiper-button-disabled")):(i.disabled=!1,i.classList.remove("swiper-button-disabled")),this.isEnd?(l.disabled=!0,l.classList.add("swiper-button-disabled")):(l.classList.remove("swiper-button-disabled"),l.disabled=!1)}}});window.reviewsSwiper=c;l.addEventListener("click",()=>{c.slideNext()});i.addEventListener("click",()=>{c.slidePrev()});c.isBeginning&&i.classList.add("swiper-button-disabled");c.isEnd&&l.classList.add("swiper-button-disabled");async function I(){const e=await _();k.forEach((s,t)=>{e[t]&&(s.innerHTML=`
          <div class="review-card">
            <img src="${e[t].avatar_url}" alt="${e[t].author}" class="review-avatar">
            <h3 class="review-avatar-name">${e[t].author}</h3>
            <p class ="review-review">${e[t].review}</p>
          </div>
        `)})}I();const D=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),u=document.querySelector(".footer-form"),a=document.querySelector(".footer-backdrop"),C=document.querySelector("[data-modal-close]"),A=document.querySelector(".footer-modal-text");document.querySelector("#your-email");const m=document.querySelector("#your-comments");function f(e){A.textContent=e,a.classList.add("is-open"),document.addEventListener("keydown",y)}function p(){a.classList.remove("is-open"),document.removeEventListener("keydown",y)}function y(e){e.key==="Escape"&&p()}function x(e,s){e.value.length>s&&(e.value=e.value.substring(0,s)+"...")}m.addEventListener("input",()=>{x(m,50)});u.addEventListener("submit",e=>{e.preventDefault();const s=new FormData(u),t={email:s.get("your-email"),comment:s.get("your-comments")};if(!t.email||!t.comment){console.error("Error: Empty form fields"),f("Please fill in all fields.");return}console.log("Надані дані:",t);try{const n=w(t);console.log("Succes!:",n),f("The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch."),document.querySelector(".footer-modal").classList.add("success-message"),u.reset()}catch(n){console.error("Invalid email, try again:",n),f("Error sending. Check your details and try again."),document.querySelector(".footer-modal").classList.add("error-message")}});C.addEventListener("click",p);a.addEventListener("click",e=>{e.target===a&&p()});const H=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),z=Object.assign({"./js/about-me.js":S,"./js/api.js":j,"./js/benefits.js":E,"./js/covers.js":O,"./js/faq.js":q,"./js/header.js":P,"./js/hero.js":T,"./js/projects.js":M,"./js/reviews.js":D,"./js/work-together.js":H});console.log(z);
//# sourceMappingURL=index.js.map
