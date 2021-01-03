let esposas = [2, 30, 250];

// function ordenarArray(array) {
//   let primeiroLugar;
//   let segundoLugar;
//   let terceiroLugar;
//   if (array[0] < array[1] && array[0] < array[2]) {
//     primeiroLugar = array[0];
//   } else if (array[0] > array[1] && array[0] > array[2]) {
//     terceiroLugar = array[0];
//   } else {
//     segundoLugar = array[0];
//   }
//   if (array[1] < array[0] && array[1] < array[2]) {
//     primeiroLugar = array[1];
//   } else if (array[1] > array[0] && array[1] > array[2]) {
//     terceiroLugar = array[1];
//   } else {
//     segundoLugar = array[1];
//   }
//   if (array[2] < array[0] && array[2] < array[1]) {
//     primeiroLugar = array[2];
//   } else if (array[2] > array[0] && array[2] > array[1]) {
//     terceiroLugar = array[2];
//   } else {
//     segundoLugar = array[2];
//   }
//   console.log(primeiroLugar, segundoLugar, terceiroLugar);
// }

// ordenarArray([20, 18, 10]);
// ordenarArray(esposas);

function ordenarArray2(array) {
  let primeiroLugar;
  let segundoLugar;
  let terceiroLugar;
  for (let index in array) {
    if (Math.min(...array) === array[index]) {
      primeiroLugar = array[index];
    } else if (Math.max(...array) === array[index]) {
      terceiroLugar = array[index];
    } else {
      segundoLugar = array[index];
    }
  }
  console.log(primeiroLugar, segundoLugar, terceiroLugar);
}

ordenarArray2([20, 18, 10]);
ordenarArray2(esposas);

console.log(esposas.sort((a, b) => a - b));
