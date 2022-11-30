const texto = "Casa bonita é casa amarela da esquina com a Rua ACASALAR.";
const regex = /casa/gi; //flags g(global procurar em todo texto, vários resultados) e i(ignore case)

console.log(texto.match(regex));
console.log(texto.match(/a c/)); // Vai procurar se no texto existe a[espaço]b.
