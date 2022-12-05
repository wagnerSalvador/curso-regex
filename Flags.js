// g - global faz com que percorra toda o texto, validando todas regex e não parando acaso a primeira seja true.
// i - ignore case
// as Flags ficam fora da regex. A regex fica entre barras (/regex/flag)

// No ES2018 saiu a flag s -> que resolve o problema do DotAll
// m - multiline ->  é bem intuítivo vai considerar todas linhas

const texto = "Carlos assinou o abaixo-assinado.";
//No javascript o que fica dentro das / aqui é a expressão regurar /
console.log(texto.match(/C|ab/)); // Esta expressão vai retornar somete a primeira ocorrência pois não é passado a Flag G (global)
console.log(texto.match(/C|ab/i));
console.log(texto.match(/ab|C/gi));
