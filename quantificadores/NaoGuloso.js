const texto = "<div>Conteudo 01</div><div>Conteudo 02</div>";

// Quantificadores SÃO gulosos (greedy)...

console.log(texto.match(/<div>.+<\/div>/g));
console.log(texto.match(/<div>.*<\/div>/g));
console.log(texto.match(/<div>.{0,100}<\/div>/g));
// Lazy não gulosa, extrai o mínimo que conseguir de acordo com a regex
console.log(texto.match(/<div>.+?<\/div>/g));
console.log(texto.match(/<div>.*?<\/div>/g));
console.log(texto.match(/<div>.{0,100}?<\/div>/g));
