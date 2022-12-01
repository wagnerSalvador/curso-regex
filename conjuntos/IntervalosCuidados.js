const texto = "ABC [abc] a-c 1234";
console.log(texto.match(/[a-c]/g)); // definindo range
console.log(texto.match(/a-c/g)); // Não definindo range

console.log(texto.match(/[A-Z]/g)); // intervalos usam a ordem ta tabela Unicode, por isso retona []. Quando é definido um intervalo é levado em consideração o range de caracteres da tabela unicode.

//Tem que respeitar a ordem da tabela UNICODE
console.log(texto.match(/[a-z]/g));
