fetch("http://localhost:3000/api/teddies")
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (teddys) {
    //Faire une boucle qui creer une option pour chaque couleur
    for (let j = 0; j < teddys[i].colors.length; j++) {
      document.getElementById("colorschoise").innerHTML +=
        '<option value=" ' +
        teddys[i].colors[j] +
        '" >' +
        teddys[i].colors[j] +
        "</option>";
    }
  })
  .catch(function () {
    console.error('Oops, an error occurred. Did you do "Node server"?');
  });