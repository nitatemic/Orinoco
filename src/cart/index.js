import {apiUrl} from "../global.js";
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

fetch(apiUrl)
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })

  .then(function (teddys) {



      createUl("cartListUl", "list-group mb-3", "cartList");
      //Faire une boucle qui parcours le tableau "cart"
      for (let i = 0; i < cart.length; i++) {
        showCartItem(
          teddys[cart[i].i].name,
          cart[i].color,
          teddys[cart[i].i].price / 100 + "€",
          cart.indexOf(cart[i])
        );
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
      strong4.innerHTML = totalCalc(cart, teddys);
      document.getElementById("totalLi").appendChild(strong4);
    }
  })

  .catch(function () {
    console.error(
      "Oops, an error occurred. Please contact alexandre@nitatemic.ovh"
    );
  });

