(()=>{"use strict";const t=document.querySelector(".js-tbody");document.querySelector(".js-user-table"),document.addEventListener("DOMContentLoaded",(function(){("users",fetch("https://jsonplaceholder.typicode.com/users").then((t=>{if(!t.ok)throw new Error(t.statusText||t.status);return t.json()}))).then((e=>{var s;s=e.map((({id:t,name:e,username:s,email:n,website:r},o)=>`<tr class='js-tr' data-userid="${t}">\n            <th scope="row">${o+1}</th>\n            <td>${e}</td>\n            <td>${s}</td>\n            <td>${n}</td>\n            <td>${r}</td>\n          </tr>`)).join(""),t.insertAdjacentHTML("beforeend",s)})).catch((t=>console.log(t.message)))})),t.addEventListener("click",(function(t){const e=t.target.closest(".js-tr").dataset.userid;location.href="user.html?userID="+e}))})();