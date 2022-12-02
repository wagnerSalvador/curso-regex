# curso-regex

# Metacaracteres - Quantificadores

| metacaracter | nome      | significado  |
| ------------ | --------- | ------------ |
| ?            | Opcional  | Zero ou um   |
| \*           | Asterisco | Zero ou mais |
| +            | Mais      | Um ou mais   |
| {n, m}       | Chaves    | De N até M   |

# Exemplo - Quantificadores

| Quantificador | Significado                     |
| ------------- | ------------------------------- |
| {2,3}         | De dois a três                  |
| {3,}          | Três ou mais                    |
| {0,4}         | Até quatro                      |
| {2}           | Exatamente dois                 |
| {0,1}         | Zero ou Um (semelhante ao ?)    |
| {0,}          | Zero ou mais (semelhante ao \*) |
| {1,}          | Um ou mais (semelhante ao +)    |

Observação: Quantificadores são gulusos por padrão tentaram pegar o maximo de ocorrencias no texto
