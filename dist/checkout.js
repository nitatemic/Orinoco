!function(){"use strict";const e="https://orinoco-nitatemic.herokuapp.com/api/teddies";function t(e,t,n){let l=document.createElement("li");l.id=e,l.className=t,document.getElementById(n).appendChild(l)}let n=JSON.parse(localStorage.getItem("cart"));!function(e,t){document.getElementById("numberOfItems").innerHTML=function(e){return null===e?0:e.length}(e)}(n),function(e,t,n){let l=document.createElement("ul");l.id="cartListUl",l.className="list-group mb-3",document.getElementById("cartList").appendChild(l)}();for(let l=0;l<n.length;l++){let c=n[l].id;fetch(e+"/"+c).then((function(e){if(e.ok)return e.json()})).then((function(e){var c,o,i,a;c=e.name,o=n[l].color,i=e.price/100+"€",a=n.indexOf(n[l]),t(c+"Li"+a,"list-group-item d-flex justify-content-between lh-sm","cartListUl"),function(e,t,n,l){let c=document.createElement("div");document.getElementById(e+"Li"+l).appendChild(c);let o=document.createElement("h6");o.innerHTML=e,o.className="my-0",c.appendChild(o);let i=document.createElement("span");i.innerHTML=t,i.className="text-muted",c.appendChild(i);let a=document.createElement("span");a.className="text-muted",a.innerHTML=n,document.getElementById(e+"Li"+l).appendChild(a)}(c,o,i,a)})).catch((function(){console.error("Oops, an error occurred. Please contact alexandre@nitatemic.ovh")}))}t("totalLi","list-group-item d-flex justify-content-between","cartListUl");let l=document.createElement("span");l.innerHTML="Total (EUR)",document.getElementById("totalLi").appendChild(l);let c=document.createElement("strong");c.innerHTML=function(t){let n=0;for(let l=0;l<t.length;l++)fetch(e+"/"+id).then((function(e){n+=e.price})),console.log(n)}(n),document.getElementById("totalLi").appendChild(c)}();