// Tomar cuidado com os meta-caracteres

const texto = "1,2,3,4,5,6, a.b c!de";
const regexVirgula = /,/;

console.log(texto.split(regexVirgula)); // Para cada vez que a regex der true irá quebrar a string.
console.log(texto.match(regexVirgula)); // Aqui ele vai retornar somente no primeiro index, pois não foi passado a flag G
console.log(texto.match(/,/g)); // passando a flag g ele irá procurar em toda a string
console.log(texto.match(/A/)); //Não encontra pois não existe A maiuscolo ->  retorna null
console.log(texto.match(/A/gi)); //Encontra pois passei a flag i (ignore case)
console.log(texto.match(/2/g));
