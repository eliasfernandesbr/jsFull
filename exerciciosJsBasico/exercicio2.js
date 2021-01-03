// let esposas = [2,30,25];

// function ordenarArray(array) {
//   for (let index in array) {
//     if (array[0] < array[1] && array[0] < array[2] && array[1] < array[2]) {
//       console.log(array[0], array[1], array[2], "oi");
//     } else if (array[1] < array[2] && array[0] < array[2]) {
//       console.log(array[1], array[0], [2]);
//     } else if (array[2] < array[0] && array[2] < array[1]) {
//       console.log(array[2], array[1], array[0]);
//     }
//   }
// }

// ordenarArray([0, 18, 10]);



let esposas = [2,30,25];

function ordenarArray(array) {
    let primeiroLugar
    let segundoLugar
    let terceiroLugar
    if (array[0] < array[1] && array[0] < array[2]) {
              primeiroLugar = array[0]
        } else  if(array[0] > array[1] && array[0] > array[2]){
              terceiroLugar = array[0]
        } else{
            segundoLugar = array[0]
        }
}

ordenarArray([0, 18, 10])

