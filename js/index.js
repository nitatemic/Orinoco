fetch ("http://localhost:3000/api/teddies/")
    .then(function(res){
        if (res.ok) {
            return res.json();
        }
    })
    .then(function(teddys) {
        console.log(teddys.length);
        console.log("coucou");  //TODO : delete
        for(let i = 0; i < teddys.length; i++) {
            console.log(i);
            document.getElementById("teddy__" + i + "__name").innerText = teddys[i].name;
            document.getElementById("teddy__" + i + "__price").innerText = teddys[i].price + " €";   //TODO : Need conversion
            document.getElementById("teddy__" + i +"__description").innerText = teddys[i].description;
            document.getElementById("teddy__" + i + "__img").innerHTML = "<img src='" + teddys[i].imageUrl + "' id =\"teddy__" + i + "__img\" class=\"img-fluid rounded\"  width=\"200\" height=\"250\" role=\"img\" aria-label=\"Ours en peluche fait main\" alt=\"Ours en peluche fait main\" >";
            let link = document.getElementById("teddy__"+ i +"__link");
            link.setAttribute("href", "./product/teddy" + i + ".html");
        }
        //TODO : Build the entire HTML part via JS
  })
  .catch(function() {
      console.error("The site could not retrieve the information from the server. Did you do \"Node server\"?");
  });