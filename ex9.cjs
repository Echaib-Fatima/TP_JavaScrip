const readline = require('readline-sync');
let prefixe = readline.question("Entrez le préfixe de la facture (ex: FAC) : ");
let numeroBase = readline.question("Entrez le numéro de base (ex: 1023) : ");
let suffixe = readline.question("Entrez le suffixe (ex: A) : ");
let numeroFacture = `${prefixe}-${numeroBase}-${suffixe}`;
console.log(`Le numéro de facture généré est : ${numeroFacture}`);
