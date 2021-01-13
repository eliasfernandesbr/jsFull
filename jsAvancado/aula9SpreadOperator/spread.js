var pessoa = {
    name: "Dante",
    idade: 17,
}

var contato = {
    telefone: 41992480643,
    email: "dante.mattosfernandes@gmail.com"
}

var copia = {...pessoa, cidade: "Curitiba", ...contato}
copia.idade = 88;

console.log(pessoa);
console.log(copia);