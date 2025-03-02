const readline = require('readline-sync');
let mot = readline.question("Entrez un mot : ").toLowerCase();
function estPalindrome(mot) {
    let motInverse = mot.split('').reverse().join('');
    return mot === motInverse;
}
if (estPalindrome(mot)) {
    console.log(`${mot} est un palindrome.`);
} else {
    console.log(`${mot} n'est pas un palindrome.`);
}