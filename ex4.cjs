const readline = require('readline-sync');
// Demander l'âge à l'utilisateur
let age = parseInt(readline.question("Veuillez entrer votre age : "));
// Vérifier si l'utilisateur est adulte
let estAdulte = age >= 18 ? true :false ;
console.log("Est adulte ?", estAdulte);