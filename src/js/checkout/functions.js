//Créer une list ul dans la div cart
function createUl(ulId, ulClass, ulParent) {
  let ul1 = document.createElement("ul");
  ul1.id = ulId;
  ul1.className = ulClass;
  document.getElementById(ulParent).appendChild(ul1);
}

//Fonction qui affiche un produit du panier
function showCartItem(nameItem, colorItem, priceItem, i) {
  createLi(
    nameItem + "Li" + i,
    "list-group-item d-flex justify-content-between lh-sm",
    "cartListUl"
  );
  createItem(nameItem, colorItem, priceItem, i);
}

function createLi(liId, liClass, liParent) {
  let li1 = document.createElement("li");
  li1.id = liId;
  li1.className = liClass;
  document.getElementById(liParent).appendChild(li1);
}

function createItem(nameItem, colorItem, priceItem, i) {
  let div1 = document.createElement("div");
  //Ajouter div1 dans le li
  document.getElementById(nameItem + "Li" + i).appendChild(div1);
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
  document.getElementById(nameItem + "Li" + i).appendChild(span2);
}

/* ---------- Fonction qui récupère le nombre d'article dans le panier (Return : int) ---------- */
function getCartLength(cart) {
  if (cart === null) {
    return 0;
  } else {
    return cart.length;
  }
}
/* ---------- Fin fonction qui récupère le nombre d'article dans le panier (Return : int) ---------- */



/* ---------- Fonction qui ajoute le nombre d'article dans le panier dans le compteur (Return : void) ---------- */
function showNumberOfItems(cart, idOfSpan) {
  document.getElementById(idOfSpan).innerHTML = getCartLength(cart);
}
/* ---------- Fin fonction qui ajoute le nombre d'article dans le panier dans le compteur (Return : void) ---------- */



/* ------------ Fonction qui vérifie l'adresse mail (Return boolean) ------------ */
function checkMail(mail) {
  let regex =
    /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/i;
  return regex.test(mail);
}
/* ------------ Fin fonction qui vérifie l'adresse mail ------------ */

/* ------------ Fonction qui vérifie le prénom et nom (Return : boolean) ------------ */
function checkName(Name) {
  let regex =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆŠŽ∂ð ,.'-]+$/u;
  return regex.test(Name);
}
/* ------------ Fin fonction qui vérifie le prénom et nom (Return : boolean) ------------ */


export { createUl, showCartItem, createLi, showNumberOfItems, checkMail, checkName };