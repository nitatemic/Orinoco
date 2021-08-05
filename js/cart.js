fetch(apiUrl)
    .then(function (res) {
        if (res.ok) {
        return res.json();
        }
    })

    .then(function (teddys) {

        var products = [];
            for (var i = 0; i < localStorage.length; i++) {
                product = localStorage.key(i);
                products.push(JSON.parse(localStorage.getItem(product)));
            }
            console.log(products); //Je recupere un tableau d'objets

        //Find to which teddys belongs the id passed in parameter and store its number in i
        for (let i = 0; i < products.length - 1; i++) {
            for(let j =0; i < teddys.length - 1; j++) {
                if (products[i].id === teddys[j]._id) {
                    console.log("coucou1");
                }
            }
        }

        if (products.length >= 0 === false) {
            //Creer div dans la div cart
            var emptyCartAlert = document.getElementById("div");
            emptyCartAlert.className = "alert alert-danger";
            emptyCartAlert.role = "alert";
            document
            .getElementById("CartList")
            .appendChild(emptyCartAlert);

            //Creer un h4 dans la div emptyCartAlert
            var emptyCartAlertHeading = document.createElement("h4");
            emptyCartAlertHeading.innerHTML = "Votre panier est vide";
            emptyCartAlert.appendChild(emptyCartAlertHeading);

            //Creer un p dans la div emptyCartAlert
            var emptyCartAlertText = document.createElement("p");
            emptyCartAlertText.innerHTML =
            'Vous pouvez ajouter des produits dans votre panier en cliquant sur le bouton "Ajouter au panier"';
            emptyCartAlert.appendChild(emptyCartAlertText);
        } else {
            //Creer une list ul dans la div cart
            var cartList = document.getElementById("CartList");
            for (var i = 0; i < products.length; i++) {
            var product = products[i];
            var productName = document.createElement("li");
            productName.innerHTML = product.name;
            cartList.appendChild(productName);
            }
        }
    }
)

    .catch(function () {
        console.error("Oops, an error occurred. Please contact alexandre@nitatemic.ovh");

    });