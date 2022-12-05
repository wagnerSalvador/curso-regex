const texto = "Pedrinho (filho do Pedro Silva) é doutor do ABC!";

// O que é mais forte? o grupo ou conjunto ->  dentro de conjunto ele morre
console.log(texto.match(/[(abc)]/gi)); // Grupos criados dentro de conjuntos não são grupos

console.log(texto.match(/([abc])/gi)); // O conjunto dentro de um grupo funciona

// Não tem necessidade utilizar grupo se não vai utilizar um quantificador ou trabalhar com a informação armazenada pelo grupo.

// Não cria um grupo para deixar literal mais lógica
