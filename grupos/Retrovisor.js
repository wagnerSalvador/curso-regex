const texto1 = "<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>";

// Cada grupo criado captura o valor e "guarda" ele, para acessar o valor guardao basta passar o \(n) n seria o indice do grupo que queres pegar o valor capturado.
console.log(texto1.match(/<(\w+)>.*<\/\1>/g));

const texto2 = "Lentamente é mente muito lenta.";

console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi));

console.log(texto2.match(/(?:lenta)/gi)); // Para não guardar o valor obtido no grupo basta passar o ?: antes da expressão do grupo

//Para referenciar retrovisores no replace é só passar ${index} do grupo
// Nesse caso tudo que for lentamente sera substituído por mente
console.log(texto2.replace(/(lenta)(mente)/gi, "$2"));
// Pode concatenar coisas antes e dps do retrovisor
console.log(texto2.replace(/(lenta)(mente)/gi, "Wagnao: $2"));
