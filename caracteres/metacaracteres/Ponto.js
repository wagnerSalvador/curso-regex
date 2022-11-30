// . é um coringa(qualquer caracter), válido para uma posição, SUBSTITUI

const texto = "1,2,3,4,5,6,9,0";

console.log(texto.match(/1.2/g));
console.log(texto.match(/1..2/g));
console.log(texto.match(/1..,/g));

const notas = "8.3,7.1,8.8,10.0";
console.log(notas.match(/8../g));
console.log(notas.match(/.\../g)); //me retorne alguma coisa com ponto e alguma coisa
//ponto não resolve para o \n quebra de linha
