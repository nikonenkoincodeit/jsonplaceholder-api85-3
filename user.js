(()=>{"use strict";function t(t){return fetch(`https://jsonplaceholder.typicode.com/${t}`).then((t=>{if(!t.ok)throw new Error(t.statusText||t.status);return t.json()}))}document.querySelector(".js-tbody");const e=document.querySelector(".js-user-table"),n=document.querySelector(".js-album");function s(t,e){t.insertAdjacentHTML("beforeend",e)}const o=location.search,d=new URLSearchParams(o).get("userID");console.log(d),document.addEventListener("DOMContentLoaded",(function(){t(`users?id=${d}`).then((([t])=>{const n=function({id:t,name:e,username:n,website:s,phone:o,company:d,email:r,address:a}){return`\n<tr data-userid="${t}">\n            <th scope="row">1</th>\n            <td>${e}</td>\n            <td>${n}</td>\n            <td>${r}</td>\n            <td>${a.street}h</td>\n            <td>${o}</td>\n            <td>${s}</td>\n            <td>${d.name}</td>\n          </tr>\n`}(t);s(e,n)})).catch((t=>console.log(t.message)))})),document.addEventListener("DOMContentLoaded",(function(){t(`albums?userId=${d}`).then((t=>{const e=function(t=[]){return t.map((({title:t,id:e})=>`<li class="list-group-item d-flex justify-content-between align-items-start js-list-user-album" data-id='${e}'>\n          <div class="ms-2 me-auto">\n            <div class="fw-bold">${t}</div>\n          </div>\n          <span class="badge bg-primary rounded-pill">rat</span>\n        </li>`)).join("")}(t);s(n,e)})).catch((t=>console.log(t.message)))}))})();