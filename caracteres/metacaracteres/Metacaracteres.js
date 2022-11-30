// . ? * + - ^ | [] {} \ :
const texto = "1,2,3,4,5,6,a.b c!d?e";

// Utiliza-se o scape para que não seja aplicado o valor do metacaracter e sim utilizar como valor literal.
const regexPonto = /\./;
console.log(texto.split(regexPonto));

const regexSimbulos = /,|\.|\?|!| /g;
console.log(texto.split(regexSimbulos));
