//CALLBACK TORNA POSSIVEL PASSAR UMA FUNÇÃO PARA O ARGUMENTO DE UMA FUNÇÃO

function ola() {
  console.log("Olá");
}

function saudacao(s, nome) { //O parâmetro fica aguardando receber um argumento, então a função estará completa
    s();// é uma espécie de variável interna que vai receber a função, ela fica aguardando ser chamada
    console.log(nome);// ao passar o argumento a função é chamada/executada
}

saudacao(ola, "Elias")
