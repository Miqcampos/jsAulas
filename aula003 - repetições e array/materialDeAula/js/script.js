// REPETIÇÃO

////////////////////////////////////////////////////////////////////

// ENQUANTO (verifica e fazer)

// enquanto (condicao) faca
// processo
// contador <- contador + 1
// fimEnquanto

var numero = 1;
while (numero <= 10){
    console.log(" Banaca demais!");
    numero = numero + 1;
}
////////////////////////////////////////////////////////////////////

// FACA ATE

// faca
//     algo
//     controlador = controlador + 1;
// ate (condicao)

var contador = 1;
do {
    console.log(contador);
    contador++;
} while (contador <= 10);
////////////////////////////////////////////////////////////////////

// PARA

// para (var, condicao, controlador)
//     algo
// fimPara

for(var cont = 1; cont <= 20; cont++){
    console.log("esse código rodou "+cont+" vezes!");
}
////////////////////////////////////////////////////////////////////

// FACA PARA CADA
var listaDeElementos = ["elemento1","elemento2","elemento3"];
// funcao anonima
listaDeElementos.forEach( (cadaElemento) => {
    console.log("elementos "+cadaElemento);
} );