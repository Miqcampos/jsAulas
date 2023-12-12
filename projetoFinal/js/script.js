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
    function addProdutos () {
        const quadros = document.getElementById(pinturaId)
        for (var i = 0; i < quadros.length; i++) {
            quadros[i].addEventListener("click", addProductToCart)
          }
    }
    })
})


function addProductToCart(event){
    const button = event.target
    console.log(button)
}


listarBtn.addEventListener("click", listar);

function listar() {

    let itensCarrinho = document.querySelector("#itensCarrinho");

    // resposta.innerHTML = "";

    itensCarrinho.forEach((cadaQuadro) => {

        itensCarrinho.innerHTML += `<h5>`

    })

}