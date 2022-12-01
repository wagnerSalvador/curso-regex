const texto = "1,2,3,4,5,6,a.b c!d?e[f";

// Na definição de uma classe (ou conjunto) de caracters usa-se []
// No conjunto ele separa por ou, seria algo como encontre algo que esteja no conjunto.
const regexPares = /[02468]/g;
console.log(texto.match(regexPares));

const texto2 = "João não vai passar na moto.";
// Uma forma de encontrar palavaras acenteudas e não acentuadas, seria utilizando conjunto
// Pq o que esta dentro do conjunto é tratado como || (OU) -> a ou ã.
const regexComESemAcento = /n[aã]./g;

console.log(texto2.match(regexComESemAcento));
