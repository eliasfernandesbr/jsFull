function aluno(nome, n1, n2) {
  this.nome = nome;
  this.nota1 = n1;
  this.nota2 = n2;

  this.media = function () {
    return (this.nota1 + this.nota2) / 2;
  };
}

var newAl  = new aluno("Dante", 8, 7);

console.log( newAl.nome + " - " + "MÉDIA: " + newAl.media());
