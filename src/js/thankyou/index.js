import {totalOrder, escapeHTML} from "./functions.js";
import {sanitize} from "dompurify/dist/purify.min.js";

const orderDetail = JSON.parse(sessionStorage.getItem("order"));

//Modifier le h1 de la page de remerciment
document.querySelector("h1").innerHTML =
  "Merci pour votre commande " +
  sanitize(orderDetail.contact.firstName) +
  " !";


//Modifier le p de la page de remerciment
const orderNumber = document.getElementById("orderNumber");
orderNumber.innerHTML =
  "Vous avez la commande n° " +
  "<strong>" +
  sanitize(orderDetail.orderId) +
  "</strong> !";

//Creer un p dans yourOrder
const orderTotal = document.createElement("p");
orderTotal.innerHTML =
  "Pour rappel votre commande a un montant total de " +
  "<strong>" +
  sanitize(totalOrder(orderDetail.products)) +
  "</strong>.";
 document.getElementById("yourOrder").appendChild(orderTotal);