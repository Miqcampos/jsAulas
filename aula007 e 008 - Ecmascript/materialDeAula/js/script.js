// REPLACE / REPLACE ALL

var texto = "Olá mundo! O mundo é bacana e o mundo é suave!";
console.log(texto);
console.log(texto.replace("mundo", "banana"));
console.log(texto.replaceAll("mundo", "banana"));

// CLASS LIST

var exemplo = document.querySelector("#exemplo");
exemplo.classList.remove("claro");
exemplo.classList.add("escuro");

function mudaTema(){

    // Contains - verifica se o elemento contem uma classe
    if(exemplo.classList.contains("escuro")){
        // Replace - substitui uma classe por outra
        exemplo.classList.replace("escuro", "claro");
    }else{
        exemplo.classList.replace("claro", "escuro");
    }
    
}

function mudaClasse(){

    // Toggle troca a classe de um elemento quando engatilhado
    exemplo.classList.toggle("escuro");

}

// CONCATENAÇÃO

var primeiroNome = "Victor";
var sobreNome = "Rohod";
var cartao = "4841";

// Concatenação no começo

var nomeCompleto = sobreNome.padStart(11,primeiroNome);
console.log(nomeCompleto)
var nomeCompleto2 = sobreNome.padEnd(11,primeiroNome);
console.log(nomeCompleto2)
var cartaoEscondido = cartao.padStart(16, "*");
console.log(cartaoEscondido)