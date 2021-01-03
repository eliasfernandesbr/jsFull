// var idade = 19;

// if (idade < 18 || idade > 70){
//     console.log("pode");
//     console.log("Qual é o seu pedido");
// }

// else{
//     console.log("Não pode");
//     console.log("Volte futuramente");
// }

var nota1 = 0.0;
var nota2 = 0.0;

var media = (nota1 + nota2) / 2;
var conceito = "";

if (media >= 8) {
  conceito = "Ótimo!";
} else if (media > 6.5) {
  conceito = "Bom";
} else {
  conceito = "Regular";
}

console.log(media);
console.log(conceito);

switch (conceito) {
  case "Ótimo!":
    console.log("PARABÉNS, VOCÊ É UM ÓTIMO ALUNO");
    break;

  case "Bom":
    console.log("VOCÊ ESTÁ INDO MUITO BEM");
    break;

  case "Regular":
    console.log("VOCÊ PODE ESTUDAR MAIS");
    break;

  default:
    console.log("HOUVE ALGUM ERRO");
    break;
}
