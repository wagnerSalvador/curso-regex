const telefones = `Lista telefônica:
  -(11) 98756-1212
  -98765-4321 ...`;

console.log(telefones.match(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g));
