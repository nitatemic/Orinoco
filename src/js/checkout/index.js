import { apiUrl } from "../global.js";
import {
  createUl,
  showCartItem,
  createLi,
  totalCalc,
  showNumberOfItems,
} from "./functions.js";

//Je récupere le tableau "cart" stocké dans le localStorage
let cart = JSON.parse(localStorage.getItem("cart"));

//Ajouter le nombre de produit dans la div numberOfItems
showNumberOfItems(cart, "numberOfItems");

createUl("cartListUl", "list-group mb-3", "cartList");

for (let i = 0; i < cart.length; i++) {
  let id = cart[i].id;
  fetch(apiUrl + "/" + id)
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })

    .then(function (teddys) {
      showCartItem(
        teddys.name,
        cart[i].color,
        teddys.price / 100 + "€",
        cart.indexOf(cart[i])
      );
    })

    .catch(function () {
      console.error(
        "Oops, an error occurred. Please contact alexandre@nitatemic.ovh"
      );
    });
}

createLi(
  "totalLi",
  "list-group-item d-flex justify-content-between",
  "cartListUl"
);

//Creer un span dans la li
let span3 = document.createElement("span");
span3.innerHTML = "Total (EUR)";
document.getElementById("totalLi").appendChild(span3);

//Creer un strong dans la li
let strong4 = document.createElement("strong");
//strong4.innerHTML = totalCalc(cart); //TODO : Faire fonctionner cette fonction !
document.getElementById("totalLi").appendChild(strong4);

let btnSubmit = document.getElementById("btnCommander");
btnSubmit.onclick = function(e) {
  e.preventDefault();
  let userData = new FormData(document.getElementById("userData"));
  console.log(userData);
}