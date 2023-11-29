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

var fordMustang = new Carro("Ford", "Mustang", 1970, "Preto", "195");