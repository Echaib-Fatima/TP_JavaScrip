const readline = require ('readline-sync');
let mot = readline.question ("Entrer un mot :");
mot = mot.split('').reverse().join('');
console.log("mot inversé :",mot);