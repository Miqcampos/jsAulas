class Quadro {

    constructor(nome, valor){

        nome;
        valor;

    }

}

var listarBtn = document.querySelector("#btnListar");
var adicionarBtns = document.querySelectorAll(".btn-success");


adicionarBtns.forEach((pintura) => {
    pintura.addEventListener('click', () => {
    let pinturaId = pintura.getAttribute("id")
    
    let nome = pintura.getAttribute(".modal-title");
    console.log(nome)
    
    })

})

listarBtn.addEventListener("click", listar);

function listar() {

    let itensCarrinho = document.querySelector("#itensCarrinho");

    // resposta.innerHTML = "";

    itensCarrinho.forEach((cadaQuadro) => {

        itensCarrinho.innerHTML += `<h5>`

    })

}