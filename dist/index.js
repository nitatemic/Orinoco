!function(){"use strict";var e,n,t,r,o,i,a,c,s,u,d,l,f,p,m={151:function(e,n,t){var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,".carousel-caption{background-color:rgba(255,255,255,.78)}.cursor-pointer{cursor:pointer}.btn-warning{-webkit-appearance:initial}a{text-decoration:none;color:#000}",""]),n.Z=o},645:function(e){e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},379:function(e){var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],d=i[u]||0,l="".concat(u," ").concat(d);i[u]=d+1;var f=t(l),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==f?(n[f].references++,n[f].updater(p)):n.push({identifier:l,updater:o(p,r),references:1}),a.push(l)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),u=0;u<i.length;u++){var d=t(i[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=s}}},569:function(e){var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:function(e){e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},565:function(e,n,t){e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:function(e){e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:function(e){e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},h={};function v(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,exports:{}};return m[e](t,t.exports,v),t.exports}v.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return v.d(n,{a:n}),n},v.d=function(e,n){for(var t in n)v.o(n,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},v.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},e=v(379),n=v.n(e),t=v(795),r=v.n(t),o=v(569),i=v.n(o),a=v(565),c=v.n(a),s=v(216),u=v.n(s),d=v(589),l=v.n(d),f=v(151),(p={}).styleTagTransform=l(),p.setAttributes=c(),p.insert=i().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=u(),n()(f.Z,p),f.Z&&f.Z.locals&&f.Z.locals,fetch("https://backorinoco.nitatemic.ovh/api/teddies").then((function(e){if(e.ok)return e.json()})).then((function(e){!function(e){let n=-2;for(let t=0;t<e.length;t++){let r=e[t];if(r.price=r.price/100,t%2==0){let e=document.createElement("div");e.className="row mb-2",e.id="containerFor2"+t,document.getElementById("listOfTeddies").appendChild(e),n+=2}let o=document.createElement("div");o.className="col-md-6";let i=r.imageUrl;i=i.replace(/^http:\/\//i,"https://"),o.innerHTML+=`\n            <a class="teddylink" href="./product.html?id=${r._id}" >\n                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 cursor-pointer">\n                    <div class="col p-4 d-flex flex-column position-static">\n                        <h3 class="mb-0" >${r.name}</h3>\n                        <div class="mb-1 text-muted">${r.price} €\n                        </div>\n                        <p class="card-text mb-auto">${r.description}</p>\n                        <div class ="col-auto d-none d-lg-block" id="teddy__0__img">\n                            <img src="${i}" alt="${r.name}" class="img-fluid rounded"  width="200" height="250" role="img" aria-label="Ours en peluche fait main">\n                        </div>\n                    </div>\n                </div>\n            </a>\n        `,document.getElementById("containerFor2"+n).appendChild(o)}}(e)})).catch((function(){console.error("Oops, an error occurred. Please contact alexandre@nitatemic.ovh")}))}();