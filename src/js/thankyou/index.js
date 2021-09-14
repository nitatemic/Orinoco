import {totalOrder} from "../functions.js";
import {sanitize} from "dompurify/dist/purify.min.js";

const orderDetail = JSON.parse(sessionStorage.getItem("order"));

//Créer le h1 de la page de remerciement
let h1 = document.querySelector("h1");
h1.textContent = "Merci pour votre commande " + sanitize(orderDetail.contact.firstName) + " !";

//Modifier le p de la page de remerciement
let orderNumber = document.getElementById("orderNumber");
orderNumber.textContent =
  "Vous avez la commande n° " + sanitize(orderDetail.orderId) + " !";

//Créer un p dans yourOrder
let orderTotal = document.createElement("p");
orderTotal.textContent =
  "Pour rappel votre commande a un montant total de " + sanitize(totalOrder(orderDetail.products)) + ".";
 document.getElementById("yourOrder").appendChild(orderTotal);