const texto =
  "Romário era um execelente jogador\n, mas hoje é um político questionador";
console.log(texto.match(/^r.*r$/gis)); // Problema do dotall.
// JS não resolve o dotall
// Criar um conjunto [\s\S] que atenda o \n
console.log(texto.match(/^[\s\S]*r$/gi));

// No ES2018 saiu a flag s -> que resolve o problema do DotAll
