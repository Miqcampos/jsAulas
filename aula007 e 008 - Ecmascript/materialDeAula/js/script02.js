// PROMISSES 

var primeiroPromisse = new Promise((resolve, reject) => {

    // Promisses se assemelha a promessas, podemos cumprilas ou não!
    var nome = "aa";

    if(nome == "Victor"){
        // Promessa cumprida
        resolve("Opa, seja bem-vindo Victor!");
    }else{
        // Promessa quebrada
        reject("Usuário não autorizado!") 
    }

});

// Then - espera o resolve
// Catch - espera o reject
primeiroPromisse.catch((data) => {

    console.log(data);

});


// AWAIT 

function sujeitoDemorado(){

    return new Promise((resolve) => {

        // Define um tempo para que ocorra o código
        setTimeout(() => {
            console.log("Tudo bem??");
            resolve();
        }, 5000)
    });

}

// Roda funções de forma assíncrona
async function msg (){

    console.log("Boa tarde!");
    // Espera um processo antes de continuar lendo o código!
    await sujeitoDemorado();
    console.log("Espero um excelente dia!");

}

msg();

// OBJECT ENTRIES

var computador = {

    sistemaOperacional : "Windows",
    placaMae : "Rog Strix",
    placaDeVideo : "RTX 4090 TI",
    processador : "INTEL I9",
    monitor : "MONITOR AMOLED ASUS",
    fonte : "FONTE 1050w",
    memoriaRam : "DDR5 4x16g Ram",

}

console.log(computador.placaDeVideo);

var arrayComputador = Object.keys(computador);

// IndexOf - retorna se um termo existe o seu indice, caso não exista, -1
console.log(arrayComputador.indexOf("monitor"));
// Includes - retorna se um termo existe, apenas true e false
console.log(arrayComputador.includes("monitor"));


var pergunta = prompt("Pesquisa de componentes para pc");
var processo = arrayComputador.indexOf(pergunta);

if(processo == -1){
    alert("Componente não existe!");
    var adicionar = confirm("Deseja adiciona-lo?");
    if(adicionar == false){
        alert("Tenha um bom dia!!");
    }else{
        arrayComputador.push(pergunta);
    }
}else{
    alert("Componente existe!");
}

console.log(Object.entries(computador));


const frutas = ["Banana","Maça","Abacaxi","Tomate","Morango"];
const resultadoMap = frutas.map((cadaElemento) => "<li> Fruta :"+cadaElemento+"</li>");

document.getElementById("resposta").innerHTML = `O map, faz uma função para cada elemento de um array ou ovjeto <ul>${resultadoMap}</ul>`