const texto = "lista de arquivos mp3; jazz.mp3,rock.mp3,podcast.mp3,blues.mp3";
console.log(texto.match(/\.mp3/g));

//para extrair os nomes dos arquivos e não só a extensão. Vou endenter essa expressão mais para o futuro
console.log(texto.match(/\w+\.mp3/g));
