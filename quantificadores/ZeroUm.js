const texto1 = "De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOO!";
const texto2 = "There is a big fog in NYC";

// ? -> zero ou um  (optional) a letra a esquerda pode ou não existir
const regex = /fogo?/gi;

console.log(texto1.match(regex));
console.log(texto2.match(regex));
