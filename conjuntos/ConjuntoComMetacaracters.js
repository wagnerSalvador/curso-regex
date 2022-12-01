const texto = ".$+*?-";

// Dentro de um conjunto os metacaracteres viram diretamente literal sem a necessidade de acionar o escape \ para tornar numéricos
console.log(texto.match(/[+.?*$]/g));
// - é delimitador de intervalo (range)
console.log(texto.match(/[$-?]/g));

// Não é um intervalo
console.log(texto.match(/[$\-?]/g));

// Pode precisa de escape dentro do conjunto: - [] ^
