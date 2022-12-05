const texto = "João é calmo, mas no transito fica nervoso.";

console.log(texto.match(/[\wÀ-ú]+/gi));
// Positive lookahead
// Procure algum texto que atenda a expressao que tenha , na frente. Atenda a expressão mais que atenda outra expressão a frente
// Não retora o caracter que está a frente
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi));
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi));

// Negative lookahead
// Ao contrario Positive, ele retona todas as palavras que não atendas a regra passada no conjunto
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi));
