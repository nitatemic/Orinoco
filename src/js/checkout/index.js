import { apiUrl } from "../global.js";
import {
  createUl,
  showCartItem,
  createLi,
  showNumberOfItems,
} from "./functions.js";

//Je récupere le tableau "cart" stocké dans le localStorage
let cart = JSON.parse(localStorage.getItem("cart"));

//Ajouter le nombre de produit dans la div numberOfItems
showNumberOfItems(cart, "numberOfItems");

createUl("cartListUl", "list-group mb-3", "cartList");

generateContentFromCart().then(total => {

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
strong4.innerHTML = total / 100 + "€";
document.getElementById("totalLi").appendChild(strong4);
});


let btnSubmit = document.getElementById("btnCommander");
btnSubmit.onclick = function (e) {
  e.preventDefault();
  let formData = new FormData(document.querySelector("form"));
  let userData = Object.create({});
  userData.lastName = formData.get("lastName");
  userData.firstName = formData.get("firstName");
  userData.email = formData.get("email");
  userData.address = formData.get("address");
  userData.city = formData.get("city");

  console.log(userData);
  let request = JSON.stringify(userData) + JSON.stringify(cart);
  
//Faire une requete POST à l'api qui envoie request
  fetch(apiUrl + "/order", {
    method: "POST",
    body: request,
    headers: {
      "Content-Type": "application/json",
    },
}).then(response => {
  if (response.status === 200) {
    console.log(response.status);
  }
});
};




async function generateContentFromCart(){
  let total = 0;
for (let i = 0; i < cart.length; i++) {
  let id = cart[i].id;
  try {
  let response = await fetch(apiUrl + "/" + id);
  if(!response.ok){ throw Error("Probleme de connexion api")}
  let  teddys = await response.json();
  total += teddys.price ;
  showCartItem(
        teddys.name,
        cart[i].color,
        teddys.price / 100 + "€",
        cart.indexOf(cart[i])
      );
  } catch (e) {
      console.error(
        "Oops, an error occurred. Please contact alexandre@nitatemic.ovh"
      );
    }
  }
  return total;
}

