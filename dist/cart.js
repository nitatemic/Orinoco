!function(){"use strict";function e(e,n,l,c){t(e+"Li"+c,"list-group-item d-flex justify-content-between lh-sm","cartListUl"),function(e,t,n,l){let c=document.createElement("div");document.getElementById(e+"Li"+l).appendChild(c);let i=document.createElement("h6");i.innerHTML=e,i.className="my-0",c.appendChild(i);let o=document.createElement("span");o.innerHTML=t,o.className="text-muted",c.appendChild(o);let m=document.createElement("span");m.className="text-muted",m.innerHTML=n,document.getElementById(e+"Li"+l).appendChild(m)}(e,n,l,c)}function t(e,t,n){let l=document.createElement("li");l.id=e,l.className=t,document.getElementById(n).appendChild(l)}fetch("https://orinoco-nitatemic.herokuapp.com/api/teddies").then((function(e){if(e.ok)return e.json()})).then((function(n){let l=JSON.parse(localStorage.getItem("cart"));if(null===l)document.getElementById("numberOfItems").innerHTML=0;else{document.getElementById("numberOfItems").innerHTML=l.length,function(e,t,n){let l=document.createElement("ul");l.id="cartListUl",l.className="list-group mb-3",document.getElementById("cartList").appendChild(l)}();for(let t=0;t<l.length;t++)e(n[l[t].i].name,l[t].color,n[l[t].i].price/100+"€",l.indexOf(l[t]));t("totalLi","list-group-item d-flex justify-content-between","cartListUl");let c=document.createElement("span");c.innerHTML="Total (EUR)",document.getElementById("totalLi").appendChild(c);let i=document.createElement("strong");i.innerHTML=function(e,t){let n=0;for(let l=0;l<e.length;l++)n+=t[e[l].i].price;return n/100+"€"}(l,n),document.getElementById("totalLi").appendChild(i)}})).catch((function(){console.error("Oops, an error occurred. Please contact alexandre@nitatemic.ovh")}))}();