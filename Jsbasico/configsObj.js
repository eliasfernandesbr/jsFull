// const compras = ["pao", "acucar", "arroz", "feijao"];
// let contador = 0;

// compras.forEach((elemento, indice) => {
//   contador++;
//   console.log(indice + ": " + elemento + " - " + contador);
// });

// let ultimoElementoIndex = compras.length - 1;
// console.log(compras[ultimoElementoIndex]);

// console.log(compras[0], compras[compras.length - 1]);

let numero = 5;

function calcularDobro(valor) {
  return valor * 2;
}

let dobro = calcularDobro(numero);

function calcularTriplo(valor) {
  return calcularDobro(valor) * 3;
}

let triploDobro = calcularTriplo(numero);

console.log(triploDobro);
