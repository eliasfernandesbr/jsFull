// localStorage.setItem("nome", "Dante");

// let n = localStorage.getItem("nome");
// console.log(n);


// onload = function(){
//     let nome = localStorage.getItem("nome");
//     let h1 = document.getElementById("nome");
//     h1.innerHTML = nome;
// }


// function atualizar(element){
//     let valor = element.value;
//     console.log(valor);

//     let h1 = document.getElementById("nome");
//     h1.innerHTML = valor;

//     localStorage.setItem("nome", valor)
// }
let a = {
    nome: "Dante",
    n1: 7.3
}

localStorage.setItem("aluno", JSON.stringify(a));

// let n = localStorage.getItem("numero");
// console.log(n);