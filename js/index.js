fetch ("http://localhost:3000/api/teddies/")
    .then(function(res){
        if (res.ok) {
            return res.json();
        }
    })
    .then(function(teddys) {
        document.getElementById("teddy__0__name").innerText = teddys[0].name
        document.getElementById("teddy__0__price").innerText = teddys[0].price + " €"   //TODO : Need conversion
        document.getElementById("teddy__0__description").innerText = teddys[0].description
        document.getElementById("teddy__0__description").innerHTML = "<img src='" + teddys[0].imageUrl + "' id =\"teddy__0__img\" class=\"img-fluid rounded\"  width=\"200\" height=\"250\" role=\"img\" aria-label=\"Ours en peluche fait main\" alt=\"Ours en peluche fait main\" focusable=\"false\"><title>Ours en peluche fait main</title></img> "

  })
  .catch(function(err) {
      console.log("Le site n'a pas pu récuperer les informations depuis le serveur. Avez-vous fait Node server ?");
  });