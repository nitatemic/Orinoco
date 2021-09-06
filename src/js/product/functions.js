//Fonction qui récupère la couleur choisie par l'utilisateur dans le select ainsi que l'ID du teddy et la stocke dans un objet avec localStorage
//Cette fonction sera appelée par le button "Ajouter au panier"
function getColor(getColorId, getColorColor) {
  const temp = {
    id: getColorId,
    color: getColorColor,
  };

  //Si le localStorage ne contient pas de tableau appelée "cart", on l'initialise.
  if (localStorage.getItem("cart") === null) {
    localStorage.setItem("cart", JSON.stringify([temp]));
  }
  else {
    //On fait une copie temporaire du tableau qui est dans le localStorage
    let tempCart = JSON.parse(localStorage.getItem("cart"));
    //On ajoute l'objet avec les informations de l'utilisateur dans le tableau
    tempCart.push(temp);
    //On met à jour le localStorage avec le nouveau tableau
    localStorage.setItem("cart", JSON.stringify(tempCart));
    }
}

export { getColor };