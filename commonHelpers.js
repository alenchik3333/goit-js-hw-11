import{S as y,i as n}from"./assets/vendor-0fc460d7.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function p(s){return fetch(`https://pixabay.com/api?key=45032349-419aa61286db3245b797ba166&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const c=document.querySelector(".gallery");let l;function m(s){return s.map(({webformatURL:i,largeImageURL:t,tags:a,likes:e,views:r,comments:o,downloads:f})=>`
  <li class="gallery-item">
  <div class="overley-image">
    <a class="gallery-link" href="${t}">
      <img
        class="gallery-image"
        src="${i}" 
        alt="${a}"
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
        <p class="text">${r}</p>
    </div>
    <div class="info-detail">
        <h2 class="title">Comments</h2>
        <p class="text">${o}</p>
    </div>
    <div class="info-detail">
        <h2 class="title">Downloads</h2>
        <p class="text">${f}</p>
    </div>
  </div>
  </li>
  `).join("")}function h(s){l&&l.refresh(),c.innerHTML="",c.insertAdjacentHTML("afterbegin",m(s)),l=new y(".overley-image a",{captionsData:"alt",captionDelay:250})}const d=document.querySelector(".loading"),u=document.querySelector(".search-form");u.addEventListener("submit",s=>{s.preventDefault(),d.style.display="block",p(u.elements.query.value.toLowerCase()).then(t=>{t.totalHits===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(console.log(t.total),h(t.hits))}).catch(t=>{console.log(t),n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).finally(()=>{d.style.display="none"})});
//# sourceMappingURL=commonHelpers.js.map
