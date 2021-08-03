fetch(apiUrl)
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (teddys) {
      let i = 0;
    //Créer une div dans la div container
    var row1 = document.createElement("div");
    row1.className = "row";
    document.getElementById("container").appendChild(row1);

    //Créer une div dans la div row
    var col1 = document.createElement("div");
    col1.className = "col";
    row1.appendChild(col1);

    //Créer une div dans la div col
    var teddyImgContainer = document.createElement("div");
    teddyImgContainer.className = "col-auto d-none d-lg-block";
    col1.appendChild(teddyImgContainer);

    //Ajouter l'image dans la div teddyImgContainer
    var teddyImg = document.createElement("img");
    teddyImg.src = apiUrl + "/../../images/teddy_1.jpg";  //todo : utilise l'url de l'image
    teddyImg.className = "img-fluid rounded";
    teddyImg.width = "400";
    teddyImg.height = "500";
    teddyImgContainer.appendChild(teddyImg);

    //Créer un div dans la div container
    var col2 = document.createElement("div");
    col2.className = "col mt-5";
    row1.appendChild(col2);

    //Créer un h1 dans la div col2
    var h1 = document.createElement("h1");
    h1.textContent = teddys[i].name;
    col2.appendChild(h1);

    //Créer un h2 dans la div col2
    var h2 = document.createElement("h2");
    h2.className = "h5";
    h2.textContent = teddys[i].description;
    col2.appendChild(h2);

    //Créer un h3 dans la div col2
    var h3 = document.createElement("h3");
    h3.textContent = teddys[i].price / 100 + "€";
    col2.appendChild(h3);

    //Créer un h4 dans la div container
    var h4 = document.createElement("h4");
    h4.className = "h6";
    h4.textContent = "Choissisez la couleur de votre teddy :";
    col2.appendChild(h4);

    //Créer un form dans la div col2
    var form = document.createElement("form");
    form.className = "form-inline";
    col2.appendChild(form);

    //Créer un selection dans le form
    var select = document.createElement("select");
    select.className = "dropdown";
    select.id = "colorschoise";
    //Ajouter toutes les couleurs dans le selection
    for (let j = 0; j < teddys[i].colors.length; j++)    {
      var option = document.createElement("option");
      option.textContent = teddys[i].colors[j];
      select.appendChild(option);
    }
    form.appendChild(select);

  })
  .catch(function () {
    console.error('Oops, an error occurred. Please contact alexandre@nitatemic.ovh');
  });