import {totalOrder, createHType} from "../functions.js";
import {sanitize} from "dompurify/dist/purify.min.js";

const orderDetail = JSON.parse(sessionStorage.getItem("order"));

//Créer le h1 de la page de remerciement
createHType("h1", "Merci pour votre commande " + sanitize(orderDetail.contact.firstName) + " !" , "h1Container")

//Modifier le p de la page de remerciement
createHType("p", "Vous avez la commande n° " + sanitize(orderDetail.orderId) + " !" , "yourOrder")

//Créer un p dans yourOrder
createHType("p","Pour rappel votre commande a un montant total de " + sanitize(totalOrder(orderDetail.products)) +".", "yourOrder");