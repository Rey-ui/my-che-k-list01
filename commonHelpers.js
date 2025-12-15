import{i as c,S as u}from"./assets/vendor-46aac873.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="41917530-74216f8e6af2c90f64ec8c0b5",f="https://pixabay.com/api/",d=document.querySelector(".form-inline"),o=document.querySelector(".card-container");d.addEventListener("submit",y);function m(){o.innerHTML='<div class="loader"></div>'}function h(){const i=o.querySelector(".loader");i&&i.remove()}function y(i){i.preventDefault();const n=i.currentTarget,r=n.elements.picture.value.trim();if(r===""||r==null){c.error({title:"Error",message:"❌Sorry, there are no images matching your search query. Please, try again!"}),o.innerHTML="";return}m(),g(r).then(s=>{if(s.hits&&s.hits.length>0){const e=s.hits;let t="";for(const l of e)t+=v(l);o.innerHTML=t,new u(".card-container a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}else o.innerHTML="",c.error({title:"Error",message:"❌Sorry, there are no images matching your search query. Please, try again!"})}).finally(()=>{h(),n.reset()})}function g(i){const n=new URLSearchParams({key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}?${n}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function v({webformatURL:i,likes:n,views:r,comments:s,downloads:e,largeImageURL:t}){return`
        <a href="${t}" class= "picture-link">
            <img src = "${i}">
            <div class= "picture-content">
                <div class= "picture-text">
                    <span class= "picture-title">Likes</span>
                    <span class= "picture-sub-title">${n}</span>
                </div>
                <div class= "picture-text">
                    <span class= "picture-title">Views</span>
                    <span class= "picture-sub-title">${r}</span>
                </div>
                <div class= "picture-text">
                    <span class= "picture-title">Comments</span>
                    <span class= "picture-sub-title">${s}</span>
                </div>
                <div class= "picture-text">
                    <span class= "picture-title">Downloads</span>
                    <span class= "picture-sub-title">${e}</span>
                </div>
            </div>
        </a>`}
//# sourceMappingURL=commonHelpers.js.map
