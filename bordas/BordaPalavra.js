const texto1 = "dia diatonico diafragma media wikipedia bom_dia melodia radial";

console.log(texto1.match(/\bdia\w+/gi)); // Palavras que começam com dia
console.log(texto1.match(/\w+dia\b/gi)); // Palavras que terminam com dia
// bordas sem acentuação funcionam bem, mas quando entra acentuação começa a ficar uma merda
console.log(/\bdia\b/gi);

// \b é não \w, que é [^A-Za-z0-9 ]... temos problemas com acentos! Considerando letras com acentos como bordas
const texto2 =
  "dia diatônico diafragma, média wikipédia bom-dia melodia radial";

console.log(texto2.match(/\bdia\b/gi));
console.log(texto2.match(/(\S*)?dia(\S*)?/gi)); // Retorna com a vírgula
console.log(texto2.match(/([\wÁ-ú-]*)?dia([\wÁ-ú-]*)?/gi)); // Retorna firmando bordas mas sem vírgulas.
// Quando se trabalha com palavras com únicodes temos que seguir para outra abordagem, pois o /b acaba perdendo um pouco de sentido.
