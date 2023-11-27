var input = document.querySelector("#inputText");

input.addEventListener("focus", mudaCor);
input.addEventListener("blur", mudaCorVerifica);

function mudaCor(){

    let resposta = document.querySelector("#resposta");
    input.style.background = "yellow";
    resposta.innerHTML = "Insira uma password maior que 3 digitos!";

}

function mudaCorVerifica(){
    
    let inputValor = input.value.length;
    if(inputValor < 3){
        let resposta = document.querySelector("#resposta");
        input.style.background = "red";
        input.style.color = "white";
        resposta.innerHTML = "Insira uma senha válida!";
        titulo.innerHTML = "Opa!! ＼(>o<)ノ"
    }else{
        let resposta = document.querySelector("#resposta");
        input.style.background = "green";
        input.style.color = "white";
        resposta.innerHTML = "Senha válida!";
        titulo.innerHTML = "Que bacana!! （・◇・）"
    }

}