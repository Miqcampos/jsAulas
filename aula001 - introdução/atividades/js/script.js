function calculeConta(clientes, valorTotal){

    let valorDivido = valorTotal / clientes;

    alert(`O valor para cada cliente é de R$ ${valorDivido.toFixed(2)}`);

}

alert("Atividade 1 - Calcula conta");

 var clientes = Number(prompt("Quantos clientes estão na conta?"));
 var valorTotal = Number(prompt("Qual é o valor total da conta?"));
 
calculeConta(clientes,valorTotal)