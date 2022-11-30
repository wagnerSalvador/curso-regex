const texto = "a   b";
console.log(texto.match(/a\s\s\sb/));

// no futuro Isso se chama quantificadores
console.log(texto.match(/a\s+b/));
console.log(texto.match(/a\s{3}b/));
