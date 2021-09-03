/* ------------ Fonction qui fait le total de la commande ---------- */
function totalOrder(cart)   {
    let total = 0;
    for (var i = 0; i < cart.length; i++) {
        total =+ cart[i].price;
    }
    return total/ 100 + "€";
}
/* ---------- Fonction qui fait le total de la commande ---------- */

/* ---------- Fonction qui protege (Vite fait) des XSS ---------- */
function escapeHTML(toOutput) {
  return toOutput
    .replace(/\&/g, "&amp;")
    .replace(/\</g, "&lt;")
    .replace(/\>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/\'/g, "&#x27")
    .replace(/\//g, "&#x2F");
}
/* ---------- Fin fonction qui protege (Vite fait) des XSS ---------- */
export { totalOrder, escapeHTML };