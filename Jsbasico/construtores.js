// function calcMedia() {
//   return (this.nota1 + this.nota2) / 2;
// }

// var turma = [
//     { nome: "Dante", nota1: 9, nota2: 7, media: calcMedia },
//     { nome: "Elias", nota1: 4, nota2: 3, media: calcMedia }

// ];

// var aluno = turma[1];
// console.log(aluno);
// console.log(aluno.media());

var turma = [
    criarAluno("Dante", 9, 6),
    criarAluno("Elias", 7, 4)
]

function criarAluno(nome, n1, n2) {
  return {
    nome: nome,
    nota1: n1,
    nota2: n2,
    media: function calcMedia() {
      return (this.nota1 + this.nota2) / 2;
    },
  };
}

// var aluno = turma[0]
// turma.forEach(function(elemento) {
//     console.log(elemento);
// })
for (var aluno of turma){
    console.log(aluno);
}