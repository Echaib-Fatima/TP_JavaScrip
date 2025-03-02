const readline = require('readline-sync');
function calculerMoyennePonderee(notes, coefficients) {
    let sommeProduits = 0;
    let sommeCoefficients = 0;
    for (let i = 0; i < notes.length; i++) {
        sommeProduits += notes[i] * coefficients[i];
        sommeCoefficients += coefficients[i];
    }
    return sommeCoefficients === 0 ? 0 : sommeProduits / sommeCoefficients;
}
let notes = [];
let coefficients = [];
for (let i = 1; i <= 3; i++) {
    let note = parseFloat(readline.question(`Entrez la note ${i} : `));
    let coefficient = parseFloat(readline.question(`Entrez le coefficient de la note ${i} : `));
    notes.push(note);
    coefficients.push(coefficient);
}
let moyenne = calculerMoyennePonderee(notes, coefficients);
console.log(`La moyenne pondérée est : ${moyenne.toFixed(2)}`);