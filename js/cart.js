fetch(apiUrl)
  .then(function (res) {
      if (res.ok) {
      return res.json();
      }
  })

  .then(function (teddys) {
    //Je récupere le tableau "cart" stocké dans le localStorage
    let cart = JSON.parse(localStorage.getItem('cart'));

    //Si le localStorage ne contient pas de tableau "cart" stocké
    if (cart === null) {
      //Ajouter le nombre de produit dans la div numberOfItems
      document.getElementById("numberOfItems").innerHTML = 0;
    }
    else {
      //Ajouter le nombre de produit dans la div numberOfItems
      document.getElementById("numberOfItems").innerHTML = cart.length;

      createUl("cartListUl",
      "list-group mb-3",
      "cartList");
      //Faire une boucle qui parcours le tableau "cart"
      for (let i = 0; i < cart.length; i++) {
        showCartItem(teddys[i].name, cart[i].color, teddys[i].price / 100 + "€");
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
      console.error("Oops, an error occurred. Please contact alexandre@nitatemic.ovh");
  });

//Creer une list ul dans la div cart
function createUl(ulId, ulClass, ulParent) {
  let ul1 = document.createElement("ul");
  ul1.id = (ulId);
  ul1.className = (ulClass);
  document.getElementById(ulParent).appendChild(ul1);
}

//Fonction qui affiche un produit du panier
function showCartItem(nameItem, colorItem, priceItem) {
  createLi(nameItem + "Li", "list-group-item d-flex justify-content-between lh-sm", "cartListUl");
  createItem(nameItem, colorItem, priceItem);
}

function createLi(liId, liClass, liParent) {
  let li1 = document.createElement("li");
  li1.id = liId;
  li1.className = liClass;
  document.getElementById(liParent).appendChild(li1);
}

function createItem(nameItem, colorItem, priceItem) {
  let div1 = document.createElement("div");
  //Ajouter div1 dans le li
  document.getElementById(nameItem + "Li").appendChild(div1);
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
  document.getElementById(nameItem + "Li").appendChild(span2);
}

function totalCalc(cart, teddys) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += teddys[cart[i].i].price; 
  }
  return total / 100 + "€";
}