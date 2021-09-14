/* ------------ Fonction qui fait le total de la commande (Return : String) ---------- */
function totalOrder(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }
  return total / 100 + "€";
}
/* ---------- Fonction qui fait le total de la commande (Return : String) ---------- */

//Fonction qui récupère la couleur choisie par l'utilisateur dans le select ainsi que l'ID du teddy et la stocke dans un objet avec localStorage
//Cette fonction sera appelée par le button "Ajouter au panier"
function getColor(getColorId, getColorColor) {
  const temp = {
    id: getColorId,
    color: getColorColor,
  };

  //Si le localStorage ne contient pas de tableau appelée "cart", on l'initialise.
  if (localStorage.getItem("cart") === null) {
    localStorage.setItem("cart", JSON.stringify([temp]));
  }
  else {
    //On fait une copie temporaire du tableau qui est dans le localStorage
    let tempCart = JSON.parse(localStorage.getItem("cart"));
    //On ajoute l'objet avec les informations de l'utilisateur dans le tableau
    tempCart.push(temp);
    //On met à jour le localStorage avec le nouveau tableau
    localStorage.setItem("cart", JSON.stringify(tempCart));
    }
}

/* ---------- Fonction qui créer une image (return : void) ---------- */
function createImage(imageURL, className, width, height, container)  {
  let teddyImg = document.createElement("img");
  teddyImg.src = imageURL.replace(/^http:\/\//i, "https://"); //Remplace  http par https
  teddyImg.className = className;
  teddyImg.width = width;
  teddyImg.height = height;
  document.getElementById(container).appendChild(teddyImg);
}
/* ---------- Fin fonction qui créer une image (return : void) ---------- */

function createDiv(className, container, id) {
  let div = document.createElement("div");
  div.className = className;
  div.id = id;
  container.appendChild(div);
}

function createHType(type, text, container, className) {
  let hType = document.createElement(type);
  hType.textContent = text;
  hType.className = className;
  container.appendChild(hType);
}

//Fonction qui affiche les teddies sur la page d'accueil
function showTeddies(teddys) {
  //Faire une boucle qui parcours tout les teddys
    let j = -2; //Sert pour les cas de i impaires
    for (let i = 0; i < teddys.length; i++) {
        let teddy = teddys[i];
        teddy.price = teddy.price / 100;
        //Créer une div si i est pair
        if (i % 2 === 0) {
            let div = document.createElement("div");
            div.className = "row mb-2";
            div.id = "containerFor2" + i;
            document.getElementById("listOfTeddies").appendChild(div);
            j += 2;
        }
        //Créer une div dans la dernière div créée
        let div = document.createElement("div");
        div.className = "col-md-6";
        let imgUrlSecure = teddy.imageUrl;
        imgUrlSecure = imgUrlSecure.replace(/^http:\/\//i, "https://");
        div.innerHTML +=
            `
            <a class="teddylink" href="./product.html?id=${teddy._id}" >
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 cursor-pointer">
                    <div class="col p-4 d-flex flex-column position-static">
                        <h3 class="mb-0" >${teddy.name}</h3>
                        <div class="mb-1 text-muted">${teddy.price} €
                        </div>
                        <p class="card-text mb-auto">${teddy.description}</p>
                        <div class ="col-auto d-none d-lg-block" id="teddy__0__img">
                            <img src="${imgUrlSecure}" alt="${teddy.name}" class="img-fluid rounded"  width="200" height="250" role="img" aria-label="Ours en peluche fait main">
                        </div>
                    </div>
                </div>
            </a>
        `;
        //Ajouter la div dans la dernière div containerFor2
        document.getElementById("containerFor2" + j).appendChild(div);
    }
}

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
function checkName(name) {
  let regex =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆŠŽ∂ð ,.'-]+$/u;
  return regex.test(name);
}
/* ------------ Fin fonction qui vérifie le prénom et nom (Return : boolean) ------------ */

export {
  totalOrder,
  getColor,
  createImage,
  createDiv,
  createHType,
  showTeddies,
  getCartLength,
  createUl,
  showNumberOfItems,
  showCartItem,
  checkMail,
  checkName,
};