// API = Aplicação pode ser utilizadas em diversos projetos (application programming interface)
// Fetch = Busca api

var cep = document.querySelector("#cep");

cep.addEventListener("focusout", consultar);

function consultar() {

    let cepValue = document.querySelector("#cep").value;

    const Api = fetch(`https://viacep.com.br/ws/${cepValue}/json/`).then((res) => {

        return res.json()

    }).then((data) => {

        let localidade = document.querySelector("#localidade") ;
        localidade.value = data.localidade

    })

    console.log()

}

