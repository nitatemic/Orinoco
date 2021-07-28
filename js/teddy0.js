fetch(apiUrl)
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (teddys) {
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
    teddyImg.src = apiUrl + "/../../images/teddy_1.jpg";
    teddyImg.className = "img-fluid rounded";
    teddyImg.width = "400";
    teddyImg.height = "500";
    teddyImgContainer.appendChild(teddyImg);
  })
  .catch(function () {
    console.error('Oops, an error occurred. Please contact alexandre@nitatemic.ovh');
  });