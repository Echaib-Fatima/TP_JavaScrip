const readline = require('readline-sync');
let prenom = readline.question("Entrez votre prenom : ");
let anneeNaissance = readline.question("Entrez votre annee de naissance : ");
let motDePasse = (`${prenom}${anneeNaissance}!`);
console.log(`Votre mot de passe généré est : ${motDePasse}`);
