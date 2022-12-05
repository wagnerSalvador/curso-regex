// Um grupo é um conjunto de expresões dentro de um parenteses. São expressões agrupadas

const texto = "O josé simão é muito engraçado... hehehehehe";
console.log(texto.match(/(he)+/g));

const texto2 = "http://www.site.info www.escola.nija.br google.com.ag";

console.log(texto2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g));
