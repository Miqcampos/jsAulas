var produto1 = "Tenis";
var produto2 = "Chocolate";
var produto3 = "VideoGame";
console.log(produto1)

var listaDeProdutos = ["Tenis","Chocolate","VideoGame"]
console.log(listaDeProdutos)
// indice
console.log(listaDeProdutos[2]);

// metodo alternativo
// var mercadoria = Array();
// mercadoria[0] = "Colar";
// mercadoria[1] = "Tenis";
// mercadoria[2] = "Bola";

// comandos array
// PUSH - Adicionar um elemento no final do array

listaDeProdutos.push("Bola");
console.log(listaDeProdutos);

// UNSHIFT - Adicionar um elemento no começo do array

listaDeProdutos.unshift("Bicicleta");
console.log(listaDeProdutos);

// POP - Remover um elemento no final do array

listaDeProdutos.pop();
console.log(listaDeProdutos);

// SHIFT - Remove um elemento no começo do array

listaDeProdutos.shift();
console.log(listaDeProdutos);

// SPLICE - (Indice desejado, quantos indices ira afetar, o que sera adicionado)

listaDeProdutos.splice(1, 0, "Celular");
console.log(listaDeProdutos);

// INCLUDES - Pesquisa se o elemento existe

console.log(listaDeProdutos.includes(""))

// LENGTH - Conta quantos elementos tem no array

console.log("Existem "+listaDeProdutos.length+" produtos!")