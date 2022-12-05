const texto = "supermercado hipermercado minimercado mercado";

// O que esta acontencendo nessa regex? tenho um grupo de palavras que pode ser (super ou hiper ou mini)Opicional + mercado
console.log(texto.match(/(super|hiper|mini)?mercado/g));
//Pensamento, quais regras tenho que criar para retornar todas as palavras? Preciso de algo que começe com (hi ou su)per ou mini oara montar todas as palavras.
console.log(texto.match(/((hi|su)per|mini)?mercado/g));
