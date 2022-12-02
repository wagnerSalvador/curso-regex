const text = "O joão recebeu 120 milhões apostando 6 9 21 23 45 46.";

// para definir uma quantificador usa {}
console.log(text.match(/\d{1,2}/g)); //digitos que tenha de 1 ou até 2 um do lado do outro
console.log(text.match(/[0-9]{2}/g));
console.log(text.match(/\d{1,}/g));

console.log(text.match(/[\wÀ-ü]{7,}/g));
