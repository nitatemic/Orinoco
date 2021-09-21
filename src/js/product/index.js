import { apiUrl } from "../global.js";
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const apiUrlId = apiUrl + "/" + id;
import { getColor, createImage, createDiv, createHType } from "../functions.js";
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
    createDiv("row", "container", "divRow");

    //Create a div in the row div
    createDiv("col-md-4", "divRow", "divCol");

    //Create a div in the col div
    createDiv("col-auto d-none d-lg-block", "divCol", "teddyImgContainer");

    createImage(teddys.imageUrl, "img-fluid rounded", 400, 500, "teddyImgContainer");

    //Create a div in the container div
    createDiv("col mt-5", "divRow", "divCol2");

    //Create a h1 in the col2 div
    createHType("h1", teddys.name, "divCol2");

    //Create a h2 in the col2 div
    createHType("h2", teddys.description, "divCol2", "h5");

    //Create a h3 in the col2 div
     let priceString = "Price: " + teddys.price + "€";
    createHType("h3", priceString, "divCol2");

    //Create a h4 in the col2 div
    createHType("h4", "Choisissez la couleur de votre teddy :", "divCol2","h6");

    //Create a form in the col2 div
    createHType("form", "", "divCol2", "form-inline", "form");

    //Create a select in the form
    createHType("select", "", "form", "dropdown m-2", "colorschoise");

    //Add all colors in selection
    for (let j = 0; j < teddys.colors.length; j++) {
      createHType("option", teddys.colors[j], "colorschoise", "me-2");
    }
    document.getElementById("form").appendChild(document.getElementById("colorschoise"));

    //Add a submit in the form
    let submit = document.createElement("button");
    submit.type = "submit";
    submit.className = "btn btn-warning";
    //Ajouter un attribut onclick au bouton
    submit.onclick = function (e) {
      e.preventDefault();
      let color = document.getElementById("colorschoise").value; //TODO : Faire un test pour vérifier les données qui vont être envoyées
      getColor(id, color);
    };
    submit.textContent = "Ajouter au panier";
    document.getElementById("form").appendChild(submit);
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