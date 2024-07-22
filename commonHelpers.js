import{S as p,i as c}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function y(s){return fetch(`https://pixabay.com/api?key=45032349-419aa61286db3245b797ba166&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}const u=document.querySelector(".gallery");let n;function m(s){return s.map(({webformatURL:o,largeImageURL:i,tags:r,likes:e,views:t,comments:a,downloads:f})=>`
  <li class="gallery-item">
  <div class="overley-image">
    <a class="gallery-link" href="${i}">
      <img
        class="gallery-image"
        src="${o}" 
        alt="${r}"
      />
    </a>
    </div>
    <div class="info">
    <div class="info-detail">
        <h2 class="title">Likes</h2>
        <p class="text">${e}</p>
    </div>
    <div class="info-detail">
        <h2 class="title">Views</h2>
        <p class="text">${t}</p>
    </div>
    <div class="info-detail">
        <h2 class="title">Comments</h2>
        <p class="text">${a}</p>
    </div>
    <div class="info-detail">
        <h2 class="title">Downloads</h2>
        <p class="text">${f}</p>
    </div>
  </div>
  </li>
  `).join("")}function g(s){n&&n.refresh(),u.innerHTML="",u.insertAdjacentHTML("afterbegin",m(s)),n=new p(".overley-image a",{captionsData:"alt",captionDelay:250})}const d=document.querySelector(".loading"),l=document.querySelector(".search-form");l.addEventListener("submit",s=>{s.preventDefault(),l.elements.query.value.trim().toLowerCase()!=""&&(d.style.display="block",y(l.elements.query.value.toLowerCase()).then(r=>{r.totalHits===0?c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(console.log(r.total),g(r.hits),l.elements.query.value="")}).catch(r=>{console.log(r),c.error({message:`Server error: ${r.message}`,position:"topRight"})}).finally(()=>{d.style.display="none"}))});
//# sourceMappingURL=commonHelpers.js.map
