const readline = require('readline-sync');
let prixHT = parseFloat (readline.question("Entrer le prix hors taxe (HT):"));
let tauxTVA = parseFloat (readline.question("Entrer le taux de TVA en (%):"));
const prixTTC = prixHT + (prixHT * tauxTVA /100 );
console.log("Le prix totale de TTC est:",prixTTC);