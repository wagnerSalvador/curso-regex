const texto =
  "Romário era um execelente jogador\n, mas hoje é um político questionador";

console.log(texto.match(/r/gi)); // seleciona todos os R

console.log(texto.match(/^r/gi)); // Selecionar R no começo de uma linha ^ fora de grupo é início de linha

console.log(texto.match(/r$/gi)); // $ fim da linha

console.log(texto.match(/^r.*r$/gi)); // Problema do dotall.

// JS não resolve o dotall
