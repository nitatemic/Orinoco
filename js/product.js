fetch(apiUrl)
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (teddys) {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get("id");
      let i;

      //Trouver à quel teddys appartient l'id passé en paramètre et stocké son numero dans i
      for (let j = 0; j < teddys.length; j++) {
        if (teddys[j]._id === id) {
          i = j;
          break;
        }
        //Afficher un message d'erreur si l'id n'est pas trouvé
        else {
          alert("Teddy not found");
          break;
        }
      }

    //Créer une div dans la div container
    let row1 = document.createElement("div");
    row1.className = "row";
    document.getElementById("container").appendChild(row1);

    //Créer une div dans la div row
    let col1 = document.createElement("div");
    col1.className = "col";
    row1.appendChild(col1);

    //Créer une div dans la div col
    let teddyImgContainer = document.createElement("div");
    teddyImgContainer.className = "col-auto d-none d-lg-block";
    col1.appendChild(teddyImgContainer);

    //Ajouter l'image dans la div teddyImgContainer
    let teddyImg = document.createElement("img");
    teddyImg.src = teddys[i].imageUrl;
    teddyImg.className = "img-fluid rounded";
    teddyImg.width = "400";
    teddyImg.height = "500";
    teddyImgContainer.appendChild(teddyImg);

    //Créer un div dans la div container
    let col2 = document.createElement("div");
    col2.className = "col mt-5";
    row1.appendChild(col2);

    //Créer un h1 dans la div col2
    let h1 = document.createElement("h1");
    h1.textContent = teddys[i].name;
    col2.appendChild(h1);

    //Créer un h2 dans la div col2
    let h2 = document.createElement("h2");
    h2.className = "h5";
    h2.textContent = teddys[i].description;
    col2.appendChild(h2);

    //Créer un h3 dans la div col2
    let h3 = document.createElement("h3");
    h3.textContent = teddys[i].price / 100 + "€";
    col2.appendChild(h3);

    //Créer un h4 dans la div container
    let h4 = document.createElement("h4");
    h4.className = "h6";
    h4.textContent = "Choissisez la couleur de votre teddy :";
    col2.appendChild(h4);

    //Créer un form dans la div col2
    let form = document.createElement("form");
    form.className = "form-inline";
    col2.appendChild(form);

    //Créer un selection dans le form
    let select = document.createElement("select");
    select.className = "dropdown";
    select.id = "colorschoise";

    //Ajouter toutes les couleurs dans le selection
    for (let j = 0; j < teddys[i].colors.length; j++)    {
      let option = document.createElement("option");
      option.textContent = teddys[i].colors[j];
      select.appendChild(option);
    }
    form.appendChild(select);

    //Ajouter un submit dans le form
    let submit = document.createElement("button");
    submit.type = "submit";
    submit.className = "btn btn-warning";
    submit.textContent = "Ajouter au panier";
    form.appendChild(submit);

  })
  .catch(function () {
    console.error('Oops, an error occurred. Please contact alexandre@nitatemic.ovh');
  });