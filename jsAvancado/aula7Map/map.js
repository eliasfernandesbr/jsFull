function novoAluno(nome, idade) {
  return { nome, idade };
}

let alunos = [
  novoAluno("Dante", 1),
  novoAluno("Jhess", 24),
  novoAluno("Elias", 29),
  novoAluno("Bidu", 5),
];

function nomeIdade(aluno) {
  return aluno.nome + " tem " + alunos.idade + " anos";
}

console.log(nomeIdade(alunos));
