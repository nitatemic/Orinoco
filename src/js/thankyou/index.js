import { apiUrl } from "../global.js";
import {totalOrder} from "./functions.js";
const urlParams = new URLSearchParams(window.location.search);
const order = JSON.parse(urlParams.get("order"));

//Modifier le h1 de la page de remerciment
document.querySelector("h1").innerHTML = "Merci pour votre commande " + order.contact.firstName + " !";


//Modifier le p de la page de remerciment
const orderNumber = document.getElementById("orderNumber");
orderNumber.innerHTML = "Vous avez la commande n° " + "<strong>" + order.orderId + "</strong> !";

//Creer un p dans yourOrder
const orderTotal = document.createElement("p");
orderTotal.innerHTML = "Pour rappel votre commande a un montant total de " + "<strong>" + totalOrder(order.products) + "</strong>.";
 document.getElementById("yourOrder").appendChild(orderTotal);