const apiUrl = "https://orinoco-nitatemic.herokuapp.com/api/teddies";
import {
  showTeddies,
} from "./functions.js";
import "../sass/main.scss";
fetch(apiUrl)
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (teddys) {
    showTeddies(teddys);
  })
  .catch(function () {
    console.error(
      "Oops, an error occurred. Please contact alexandre@nitatemic.ovh"
    );
  });