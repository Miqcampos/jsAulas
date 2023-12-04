// Instalação
// visite o site https://jquery.com/download/
// clique na opção "Download the uncompressed, development jQuery 3.7.1"
// aberto o arquivo, aperte o botão direito e salvar página como...
// salve em um local de sua preferência

// SELETOR JQUERY

// var = $(# ou , elemento);
// text() se vazio, lista o texto, se com valor, sobrescreve o conteudo
var titulo = $("#tituloSite").text("Aula bacana!");

// SEM JQUERY
// var paragrafo = document.querySelector("#paragrafo");
// paragrafo.addEventListener("mouseover", souParagrafo);
// function souParagrafo(){

//     console.log("Sou um parágrafo!")

// }

// COM JQUERY
$("#paragrafo").on("mouseover", function(){

    // let btn = $("#btn");
    console.log("Sou um parágrafo!");

});

// COMPORTAMENTO JQUERY

var nome = "Miquéias;"
var erro = undefined;

$("#nomeUsuario").text(nome);

// ALGORÍTIMO EXEMPLO

$("#blocoDeTexto").on("input", function(){

    let blocoVal = $("#blocoDeTexto").val();
    let numCaracteres = $("#numCaracteres");

    let contagem = blocoVal.length
    numCaracteres.text(contagem);

});