import { apiUrl } from "../global.js";
import {
  showTeddies,
} from "../functions.js";
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