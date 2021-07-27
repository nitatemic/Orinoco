fetch ("http://localhost:3000/api/teddies/")
    .then(function(res){
        if (res.ok) {
            return res.json();
        }
    })
    .then(function(teddys) {
        let i = 0;  //Juste change this for every page
        document.getElementById("teddy__" + i + "__name").innerText = teddys[i].name;
        let temp = teddys[i].price / 100;
        document.getElementById("teddy__" + i + "__price").innerText =  temp + " €";
        document.getElementById("teddy__" + i +"__description").innerText = teddys[i].description;
        document.getElementById("teddy__" + i + "__img").innerHTML = "<img src='" + teddys[i].imageUrl + "' id =\"teddy__" + i + "__img\" class=\"img-fluid rounded\"  width=\"400\" height=\"500\" role=\"img\" aria-label=\"Ours en peluche fait main\" alt=\"Ours en peluche fait main\" >";

        //Faire une boucle qui creer une option pour chaque couleur
        for (let j = 0; j < teddys[i].colors.length; j++) {
            document.getElementById("colorschoise").innerHTML += "<option value=\" "+  teddys[i].colors[j] +"\" >" + teddys[i].colors[j] + "</option>";
        }

    })
    .catch(function() {
        console.error("Oops, an error occurred. Did you do \"Node server\"?");
    });