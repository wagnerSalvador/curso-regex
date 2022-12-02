const texto = "áéíóú àèìòù âêîôû ç ãõ ü";

// Classe para englobrar todos os unicodes do português.
console.log(texto.match(/[À-ü]/g));
