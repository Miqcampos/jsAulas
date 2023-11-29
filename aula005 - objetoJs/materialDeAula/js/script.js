// var cliente1Nome = "Leonardo";
// var cliente1Cpf = 99999999;
// var cliente1Endereço = "Taguatinga bloco E rua 30";
// var cliente1Tel = "61 99999-9999";
// var cliente1Conta = "001";
// var cliente1Saldo = 0;

class Client {

    nome;
    cpf;
    endereco;
    telefone;
    conta;
    saldo;

    // Ação = função
    verificaSaldo(){

        return "O saldo da conta é de R$ "+this.saldo;

    }

    sacar(valor){

        if(this.saldo >= valor){
            // this.atributo = seleciona um atributodo modelo
            this.saldo = this.saldo - valor;
            return "Você sacou : R$ "+valor+" "+this.verificaSaldo();
        }else{
            return "Operação não autorozada! Você está quebrado :("
        }
        

    }
    depositar(valor){

        if(valor <= 0){
            return "Operação não autorizada!! Mínimo de deposito, R$ 0,01"
        }else{
            this.saldo = this.saldo + valor;
            return "Depósito efetuado, R$ "+valor+" "+this.verificaSaldo();
        }

    }

}

var client1 = new Client();
// var client2 = new Client();
client1.nome = "Leonardo";
client1.cpf = 99999999;
client1.endereco = "Taguatinga bloco E rua 30";
client1.telefone = "61 99999-9999";
client1.conta = "001";
client1.saldo = 0;
console.log(client1)