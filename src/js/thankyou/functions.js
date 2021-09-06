/* ------------ Fonction qui fait le total de la commande ---------- */
function totalOrder(cart)   {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price;
    }
    return total/ 100 + "€";
}
/* ---------- Fonction qui fait le total de la commande ---------- */

export { totalOrder };