// Além do \s servir para o espaço, ele é shorthand para outros "brancos": \t\n\f

const text = `
ca	r
r	o s!
`;
console.log(text.match(/ca\tr\nr\to\ss!/));
