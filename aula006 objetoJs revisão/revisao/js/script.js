class Filme {

    constructor(nome, descricao, data, diretor, categoria){

        this.nome = nome;
        this.descricao = descricao;
        this.data = data;
        this.diretor = diretor;
        this.categoria = categoria; 

    }

}

var cadastroBtn = document.querySelector("#btnCadastrar");
var listarBtn = document.querySelector("#btnListar");

cadastroBtn.addEventListener("click", cadastrar);
listarBtn.addEventListener("click", listar);
var filmes = [];

function cadastrar() {

    let nome = document.querySelector("#nome").value;
    let descricao = document.querySelector("#descricao").value;
    let data = document.querySelector("#data").value;
    let diretor = document.querySelector("#diretor").value;
    let categoria = document.querySelector("#categoria").value;

    filmes.push(new Filme(nome, descricao, data, diretor, categoria));

}

function listar() {

    let resposta = document.querySelector("#resposta");

    resposta.innerHTML = "";

    filmes.forEach((cadaFilme) => {
        resposta.innerHTML += `<div class="filme" id="templateFilme">
            <h4>${cadaFilme.nome}</h4>
            <p>Descrição do filme: ${cadaFilme.descricao}</p>
            <p>Data de lançamento: ${cadaFilme.data}</p>
            <p>Diretor: ${cadaFilme.diretor}</p>
            <p style="color: red;">${cadaFilme.categoria}</p>
        </div>`;
    })
    
}