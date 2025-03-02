const readline = require('readline-sync');
let heures = parseInt(readline.question("Entrez le nombre d'heures : "));
let minutes = parseInt(readline.question("Entrez le nombre de minutes : "));
let secondes = parseInt(readline.question("Entrez le nombre de secondes : "));
let totalSecondes = (heures * 3600) + (minutes * 60) + secondes;
console.log(`La durée totale en secondes est : ${totalSecondes} secondes.`);