//ponto não resolve para o \n quebra de linha
const texto = "Bom\ndia";
console.log(texto.match(/.../gi));

// dotall - algumas lingagens tem uma flag(/s) /exp/s, mas o JS não!
