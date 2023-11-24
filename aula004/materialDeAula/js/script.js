// Coletar valores
// var empregado = document.getElementById("empregado").value;

var btnCalcular = document.querySelector("#btnCalcular");

// configurar o click do botao

btnCalcular.addEventListener("click", calcular);

// calcular o salário familia

function calcular(){
    let empregado = document.querySelector("#empregado").value;
    let filhos = document.querySelector("#filhos").value;
    let salario = document.querySelector("#salario").value;
    let resposta = document.querySelector("#resposta");

    if(filhos == 0 || salario == 0 || empregado == "" || filhos < 0 || salario < 0){
        resposta.innerHTML = "Insira suas informações corretamente!";
    } else if(salario <= 806.80){
        let resultado = filhos * 41.37;
        resposta.innerHTML = `O salário família do(a) empregado(a) ${empregado}, é de R$ ${resultado.toFixed(2)}.`;
    } else if (salario >= 806.81 && salario <= 1212.64){
        let resultado = filhos * 29.16;
        resposta.innerHTML = `O salário família do(a) empregado(a) ${empregado}, é de R$ ${resultado.toFixed(2)}.`;
    } else {
        resposta.innerHTML = `O empregado(a) ${empregado}, não tem direito ao salário família.`;
    }
}

// devolver uma resposta