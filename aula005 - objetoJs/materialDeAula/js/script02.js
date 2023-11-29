class Produto {
    
    constructor(valorId, valorNome, valorMarca, valorPreco, valorQtEstoque, valorQtVendida){
        
        this.id = valorId;
        this.nome = valorNome;
        this.marca = valorMarca;
        this.preco = valorPreco;
        this.qtEstoque = valorQtEstoque;
        this.qtVendida = valorQtVendida;

    }

    venda(quantidade){

        this.qtEstoque = this.qtEstoque - quantidade;
        this.qtVendida = this.qtVendida + quantidade;
        return "Foram vendidos "+quantidade+" do produto "+this.nome;

    }

}

var produto1 = new Produto (1, "Chocolate", "Nestle", 10, 200,0);
var produto2 = new Produto (2, "Refri", "Coca-Cola", 8, 120,0);
