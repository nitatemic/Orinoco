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

    //Find to which teddys belongs the id passed in parameter and store its number in i
    for (let j = 0; j < teddys.length; j++) {
      if (teddys[j]._id === id) {
        i = j;
        break;
      }
      //Show an error message if the id is not found
      else {
        alert("Teddy not found");
        break;
      }
    }

    //Create a div in the container div
    let row1 = document.createElement("div");
    row1.className = "row";
    document.getElementById("container").appendChild(row1);

    //Create a div in the row div
    let col1 = document.createElement("div");
    col1.className = "col";
    row1.appendChild(col1);

    //Create a div in the col div
    let teddyImgContainer = document.createElement("div");
    teddyImgContainer.className = "col-auto d-none d-lg-block";
    col1.appendChild(teddyImgContainer);

    //Add the image to the teddyImgContainer div
    let teddyImg = document.createElement("img");
    teddyImg.src = teddys[i].imageUrl;
    teddyImg.className = "img-fluid rounded";
    teddyImg.width = "400";
    teddyImg.height = "500";
    teddyImgContainer.appendChild(teddyImg);

    //Create a div in the container div
    let col2 = document.createElement("div");
    col2.className = "col mt-5";
    row1.appendChild(col2);

    //Create a h1 in the col2 div
    let h1 = document.createElement("h1");
    h1.textContent = teddys[i].name;
    col2.appendChild(h1);

    //Create a h2 in the col2 div
    let h2 = document.createElement("h2");
    h2.className = "h5";
    h2.textContent = teddys[i].description;
    col2.appendChild(h2);

    //Create a h3 in the col2 div
    let h3 = document.createElement("h3");
    h3.textContent = teddys[i].price / 100 + "€";
    col2.appendChild(h3);

    //Create a h4 in the col2 div
    let h4 = document.createElement("h4");
    h4.className = "h6";
    h4.textContent = "Choissisez la couleur de votre teddy :";
    col2.appendChild(h4);

    //Create a form in the col2 div
    let form = document.createElement("form");
    form.className = "form-inline";
    col2.appendChild(form);

    //Create a selection in the form
    let select = document.createElement("select");
    select.className = "dropdown";
    select.id = "colorschoise";

    //Add all colors in the selection
    for (let j = 0; j < teddys[i].colors.length; j++) {
      let option = document.createElement("option");
      option.textContent = teddys[i].colors[j];
      select.appendChild(option);
    }
    form.appendChild(select);

    //Add a submit in the form
    let submit = document.createElement("button");
    submit.type = "submit";
    submit.className = "btn btn-warning";
    submit.textContent = "Ajouter au panier";
    form.appendChild(submit);
  })
  .catch(function () {
    console.error('Oops, an error occurred. Please contact alexandre@nitatemic.ovh');
  });