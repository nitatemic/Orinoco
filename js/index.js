fetch ("https://orinoco-nitatemic.herokuapp.com/api/teddies")
    .then(function(res){
        if (res.ok) {
            return res.json();
        }
    })
    .then(function(teddys) {
        //Faire une boucle qui ajoute un code HTML pour chaque teddy dans le tableau
        for
  })
  .catch(function() {
      console.error("Oops, an error occurred. Did you do \"Node server\"?");
  });