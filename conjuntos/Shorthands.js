const texto = `1,2,3,4,5,6,a.b c!d?e	-
f_g`;

// Link com exemplos de shorthands https://www.regular-expressions.info/refshorthand.html

// Caracter de negação ^

// É melhor chamar de classes do que conjuntos

// Shorthand \d serve para definir um conjunto de digitos [0-9]
console.log(texto.match(/\d/g));
// Shorthand \D serve para retornar tudo que não for número [^0-9]
console.log(texto.match(/\D/g));
// Shorthand \w para definir um conjunto de caracteres [a-zA-Z0-9_]
console.log(texto.match(/\w/g));
// Shorthand \W para definir um conjunto de NÃO caracteres [^a-zA-Z0-9_]
console.log(texto.match(/\W/g));
// Shorthand \s serve par definir um conjunto[ \t\n\r\f]
console.log(texto.match(/\s/g));
// Shorthand \S serve par definir um conjunto de NÃO [^ \t\n\r\f]
console.log(texto.match(/\S/g));
// Stho
