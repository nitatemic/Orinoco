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


        for(let j = 0; j < teddys[i].colors.length; j++) {
            console.log("coucou");
            document.getElementById("colorschoise").innerHTML = "<option value=\" "+  teddys[i].colors[0] +"\" >" + teddys[i].colors[0] + "</option>" +
                "                            <option value=\" "+  teddys[i].colors[1] +"\" >" + teddys[i].colors[1] + "</option>" +
                "                            <option value=\" "+  teddys[i].colors[2] +"\" >" + teddys[i].colors[2] + "</option>" +
                "                            <option value=\" "+  teddys[i].colors[3] +"\" >" + teddys[i].colors[3] + "</option>";
        }
    })
    .catch(function() {
        console.error("Oops, an error occurred. Did you do \"Node server\"?");
    });