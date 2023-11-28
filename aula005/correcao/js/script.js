class Carro {

    constructor(valorMarca, valorModelo, valorAno, valorCor, valorVelMaxima){

        this.marca = valorMarca;
        this.modelo = valorModelo;
        this.ano = valorAno;
        this.cor = valorCor;
        this.velMaxima = valorVelMaxima;
        this.velAtual = 0;

    }

    acelerar(velAcelerar){

        if(velAcelerar <= 0){
            return "Opa! Tente novamente. Acelere acima de 0km/h!";
        }else if(velAcelerar + this.velAtual > this.velMaxima){
            return `Opa! Tente novamente. A velocidade máxima foi atingida!`;
        }else{
            this.velAtual += velAcelerar;
            return `A velocidade atual é de : ${this.velAtual} km/h`;
        }

    }

}

// Html

var btnCarro = document.getElementById("btnCarro");
var resultado = document.getElementById("resultado");

btnCarro.addEventListener('click', criarCarro);

function criarCarro(){

    let marcaInput = document.querySelector("#marca").value;
    let modeloInput = document.querySelector("#modelo").value;
    let anoInput = document.querySelector("#ano").value;
    let corInput = document.querySelector("#cor").value;
    let velMaximaInput = document.querySelector("#velMaxima").value;

    var carro = new Carro(marcaInput, modeloInput, anoInput, corInput, velMaximaInput);

    resultado.innerHTML = `<div class="carroResultado">
    <h3>${carro.modelo}</h3>
    <p>${carro.marca}</p>
    <span style="color : ${carro.cor};">Cor Escolhida</span>
    </div>`;

}