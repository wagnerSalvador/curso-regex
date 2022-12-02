const texto = `Os e-mails dos convidados são:
	- fulanod@cod3r.com.br
  - rafa.sampaio@registro.br
  - joaa@empresa.info.br
  - maria_silva@registro.br
	- xico@gmail.com ...`;

// console.log(texto.match(/[\w\d]+@\d+\.\d+{2}?/g));

// console.log(texto.match(/[A-Za-z]{1,}@[A-Za-z\d]{1,}\.{0,1}[A-Za-z]{0,3}/g));

//v1
// console.log(texto.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,4}/g));

//v2
// console.log(texto.match(/\w+@\w+\.\w{2,4}/g));

//v3
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}/g));
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g));
