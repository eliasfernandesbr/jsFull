//FUNÇÃO COMO UMA VARIÁVEL

// let dobro = function (n) {
//     return 2*n;
// }

//PASSAR FUNÇÃO COMO ARGUMENTO DE UMA FUNÇÃO DE CHAMA CALLBACk

// function ola() {
//     console.log("Olá");
// }

// function saudacao(saudacao, nome) {
//     saudacao();
//     console.log(nome);
// }

// saudacao(ola, "Elias");

// let usuarios = ["Dante", "Jhessiny", "Elias"];

// function inserirUsuario(nome) {
//   usuarios.push(nome);
// }

// function listarUsuarios() {
//   console.log(usuarios);
// }

// inserirUsuario("Bidu");
// listarUsuarios();

const myFunc  = callback => {
    const value = 77;

    callback(value)

    myFunc(())
}