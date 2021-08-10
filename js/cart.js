fetch(apiUrl)
    .then(function (res) {
        if (res.ok) {
        return res.json();
        }
    })

    .then(function (teddys) {
      //Je récupere le tableau "cart" stocké dans le localStorage
      var cart = JSON.parse(localStorage.getItem('cart'));

      //Ajouter le nombre de produit dans la div numberOfItems
      document.getElementById("numberOfItems").innerHTML = cart.length;

      createUl(cartListUl, cartListUl);


      //Creer une list ul dans la div cart
      function createUl(ulId, ulParent) {
        let ul1 = document.createElement("ul");
      ul1.id = (ulId);
      document.getElementById(ulParent).appendChild(ul1);
      }

      //Find to which teddys belongs the id passed in parameter and store its number in i
      for (let i = 0; i < products.length; i++) {
        for (let j = 0; i < teddys.length - 1; j++) {
          let teddy = teddys[j];
          if (products[i].id === teddy._id) {
              //Creer un element li dans la liste ul
              let li = document.createElement("li");
              //Ajouter le nom du produit dans le element li
              li.innerHTML = products[i].name;
              //Ajouter le prix du produit dans le element li
              li.innerHTML += " - " + products[i].price;
              //Ajouter la couleur du produit dans le element li
              li.innerHTML += " - " + products[i].color;
              document.getElementById("cartListUl").appendChild(li);
          }
        }
      }

      if (!(products.length >= 0)) {
        //Creer div dans la div cart
        let emptyCartAlert = document.getElementById("div");
        emptyCartAlert.className = "alert alert-danger";
        emptyCartAlert.role = "alert";
        document.getElementById("CartList").appendChild(emptyCartAlert);

        //Creer un h4 dans la div emptyCartAlert
        let emptyCartAlertHeading = document.createElement("h4");
        emptyCartAlertHeading.innerHTML = "Votre panier est vide";
        emptyCartAlert.appendChild(emptyCartAlertHeading);

        //Creer un p dans la div emptyCartAlert
        let emptyCartAlertText = document.createElement("p");
        emptyCartAlertText.innerHTML =
          'Vous pouvez ajouter des produits dans votre panier en cliquant sur le bouton "Ajouter au panier"';
        emptyCartAlert.appendChild(emptyCartAlertText);
      }
    }
)

    .catch(function () {
        console.error("Oops, an error occurred. Please contact alexandre@nitatemic.ovh");
    });

        //Creer une list ul dans la div cart
      function createUl(ulId, ulParent) {
        let ul1 = document.createElement("ul");
      ul1.id = (ulId);
      document.getElementById(ulParent).appendChild(ul1);
      }