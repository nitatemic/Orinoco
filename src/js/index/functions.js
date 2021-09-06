//Fonction qui affiche les teddies sur la page d'acceil
function showTeddies(teddys) {
  //Faire une boucle qui parcours tout les teddys
    let j = -2; //Sert pour les cas de i impaires
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

export { showTeddies };