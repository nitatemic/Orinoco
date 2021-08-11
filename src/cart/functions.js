//Creer une list ul dans la div cart
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

function totalCalc(cart, teddys) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += teddys[cart[i].i].price;
  }
  return total / 100 + "€";
}

//Fonction qui affiche les teddies sur la page d'acceil
function showTeddies(teddys) {
  //Faire une boucle qui parcours tout les teddys
        let j = -2; //Sert pour les cas de i impaires ligne 41
        for (let i = 0; i < teddys.length; i++) {
            let teddy = teddys[i];
            teddy.price = teddy.price / 100;
            //Creer une div si i est pair
            if (i % 2 === 0) {
                let div = document.createElement("div");
                div.className = "row mb-2";
                div.id = "containerFor2" + i;
                document.getElementById("listOfTeddies").appendChild(div);
                j += 2;
            }
            //Creer une div dans la dernière div créée
            let div = document.createElement("div");
            div.className = "col-md-6";
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
                                <img src="${teddy.imageUrl}" alt="${teddy.name}" class="img-fluid rounded"  width="200" height="250" role="img" aria-label="Ours en peluche fait main">
                            </div>
                        </div>
                    </div>
                </a>
            `;
            //Ajouter la div dans la dernière div containerFor2
            document.getElementById("containerFor2" + j).appendChild(div);
        }
}

export { createUl, showCartItem, createLi, createItem, totalCalc, showTeddies };