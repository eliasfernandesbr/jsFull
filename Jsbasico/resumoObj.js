function obj(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    
}
// function obj(nome, sobrenome) {
//   return {
//     nome: nome,
//     sobrenome: sobrenome,
//   };
// }

// var a = {
//   nome: "Dante",
//   sobrenome: "Fernandes",
// };
var a = new obj("Dante", "Mattos")

console.log(a);
