const readline = require ('readline-sync');
let x = parseInt (readline.question("Entrer la valeur de x:"));
let y = parseInt (readline.question("Entrer la valeur de y:"));
[x,y]=[y,x];
console.log("La valeur de x est:",x);
console.log("La valeur de y est:",y);