function d(){import.meta.url,import("_").catch(()=>1);async function*o(){}}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const n="/assets/javascript-8dac5379.svg",l="/assets/vite-4a748afd.svg";function a(o){let t=0;const s=i=>{t=i,o.innerHTML=`count is ${t}`};o.addEventListener("click",()=>s(t+1)),s(0)}document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${l}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${n}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;a(document.querySelector("#counter"));for(let o=0;o<3;o++){console.log(o);let t="";for(let s=0;s<3;s++)t=s,console.log(t)}for(let o of[1,2,3,4,5])console.log(o);async function u(){let t=await new Promise((s,i)=>{setTimeout(()=>s("doneXXXXXXXXXXXXX!"),1e3)});alert(t)}u();export{d as __vite_legacy_guard};
