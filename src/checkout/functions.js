import { apiUrl } from "../global.js";
//Creer une list ul dans la div cart
function createUl(ulId, ulClass, ulParent) {
  let ul1 = document.createElement("ul");
  ul1.id = ulId;
  ul1.className = ulClass;
  document.getElementById(ulParent).appendChild(ul1);
}

//Fonction qui affiche un produit du panier
function showCartItem(nameItem, colorItem, priceItem, indexInCart) {
  createLi(
    nameItem + "Li" + indexInCart,
    "list-group-item d-flex justify-content-between lh-sm",
    "cartListUl"
  );
  createItem(nameItem, colorItem, priceItem, indexInCart);
}

function createLi(liId, liClass, liParent) {
  let li1 = document.createElement("li");
  li1.id = liId;
  li1.className = liClass;
  document.getElementById(liParent).appendChild(li1);
}

function createItem(nameItem, colorItem, priceItem, indexInCart) {
  let div1 = document.createElement("div");
  //Ajouter div1 dans le li
  document.getElementById(nameItem + "Li" + indexInCart).appendChild(div1);
  //Ajouter un h6 dans la div1
  let h61 = document.createElement("h6");
  h61.innerHTML = nameItem;
  h61.className = "my-0";
  div1.appendChild(h61);
  //Ajouter un span dans la div1
  let span1 = document.createElement("span");
  span1.innerHTML = colorItem;
  span1.className = "text-muted";
  div1.appendChild(span1);

  //Ajouter un span dans la "li" parente de "div1"
  let span2 = document.createElement("span");
  span2.className = "text-muted";
  span2.innerHTML = priceItem;
  document.getElementById(nameItem + "Li" + indexInCart).appendChild(span2);
}

//Fonction totalCalc qui calcule de total du panier
//Le prix des articles doit être récuperer dans la fonction getPrice
function totalCalc(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    fetch(apiUrl + "/" + id).then(function (res) {
      total += res.price;
    });
    console.log(total);
  }
}

//fonction qui recupère le nombre d'article dans le panier
function getCartLength(cart) {
  if (cart === null) {
    return 0;
  } else {
    return cart.length;
  }
}

//Fonction qui ajoute le nombre d'article dans le panier dans le compteur
function showNumberOfItems(cart, idOfSpan) {
  document.getElementById(idOfSpan).innerHTML = getCartLength(cart);
}

export { createUl, showCartItem, createLi, totalCalc, showNumberOfItems };
