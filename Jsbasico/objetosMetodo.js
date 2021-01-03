function calcMedia() {
  return (this.notas[0] + this.notas[1]) / 2;
}

var aluno = {
  nome: "Dante",
  notas: [5, 8],

  media: calcMedia
};

var aluno1 = {
  nome: "Elias",
  notas: [6, 8],

  media: calcMedia
};

console.log(aluno.nome + " - MÉDIA: " + aluno.media());
console.log(aluno1.nome + " - MÉDIA: " + aluno1.media());

// console.log(aluno1.nome + " - MÉDIA =");
// console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]));
