import { apiUrl } from "../global.js";
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const apiUrlId = apiUrl + "/" + id;
import { getColor, createImage } from "./functions.js";
fetch(apiUrlId)
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })

  .then(function (teddys) {

    //Put the name of the teddie in the title of the page
    document.title = teddys.name + " | Orinoco";

    //Create a div in the container div
    let row1 = document.createElement("div");
    row1.className = "row";
    document.getElementById("container").appendChild(row1);

    //Create a div in the row div
    let col1 = document.createElement("div");
    col1.className = "col mt-5";
    row1.appendChild(col1);

    //Create a div in the col div
    let teddyImgContainer = document.createElement("div");
    teddyImgContainer.className = "col-auto d-none d-lg-block";
    col1.appendChild(teddyImgContainer);

    createImage(teddys.imageUrl, "img-fluid rounded", 400, 500, teddyImgContainer )

    //Create a div in the container div
    let col2 = document.createElement("div");
    col2.className = "col mt-5";
    row1.appendChild(col2);

    //Create a h1 in the col2 div
    let h1 = document.createElement("h1");
    h1.textContent = teddys.name;
    col2.appendChild(h1);

    //Create a h2 in the col2 div
    let h2 = document.createElement("h2");
    h2.className = "h5";
    h2.textContent = teddys.description;
    col2.appendChild(h2);

    //Create a h3 in the col2 div
    let h3 = document.createElement("h3");
    h3.textContent = teddys.price / 100 + "€";
    col2.appendChild(h3);

    //Create a h4 in the col2 div
    let h4 = document.createElement("h4");
    h4.className = "h6";
    h4.textContent = "Choisissez la couleur de votre teddy :";
    col2.appendChild(h4);

    //Create a form in the col2 div
    let form = document.createElement("form");
    form.className = "form-inline";
    col2.appendChild(form);

    //Create a select in the form
    let select = document.createElement("select");
    select.className = "dropdown";
    select.id = "colorschoise";

    //Add all colors in the sel
    for (let j = 0; j < teddys.colors.length; j++) {
      let option = document.createElement("option");
      option.textContent = teddys.colors[j];
      select.className = "me-2";
      select.appendChild(option);
    }
    form.appendChild(select);

    //Add a submit in the form
    let submit = document.createElement("button");
    submit.type = "submit";
    submit.className = "btn btn-warning";
    //Ajouter un attribut onclick au bouton
    submit.onclick = function (e) {
      e.preventDefault();
      let color = document.getElementById("colorschoise").value;
      //TODO : Faire un test pour vérifier les données qui vont être envoyées
      getColor(id, color);
    };
    submit.textContent = "Ajouter au panier";
    form.appendChild(submit);
  })

  .catch(function () {
    console.error(
      "Oops, an error occurred. Please contact alexandre@nitatemic.ovh"
    );
    //Ajouter du html dans le container
    let errorMsg = document.createElement("div");
    errorMsg.className = "alert alert-danger";
    errorMsg.role = "alert";
    errorMsg.textContent =
      "Oops, an error occurred. Please contact alexandre@nitatemic.ovh";
    document.getElementById("container").appendChild(errorMsg);
  });
