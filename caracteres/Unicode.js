// No início era um unico byte(8 bits) - 256 Caracteres
//Símbulos, Pontuação, A-Z, a-z, 0-9

//Dois bytes (16 bits) - 65500+ caracters
// +Símbolos, +Pontuaçõa, A-Z, a-z, 0-9

//Unicode
// Quantidade de Bytes Variável - Expansível
// Suporta mais de 1 Milhão de caracteres
// Atualmente te mais de 100k caracteres atribuidos
// https://unicode-table.com/pt/

const texto = "a¥c¢d";
// Para encontrar unicode utiliza o meta \u
console.log(texto.match(/\u00A5|\u00A2/g));
