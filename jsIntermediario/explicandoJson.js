let a = {
    nome: "Dante",
    nota: 8.5
}

let b = JSON.stringify(a);

let a2 = '{"nome": "jhess", "nota": 7.8}';
let b2 = JSON.parse(a2)
console.log("PASSANDO OBJETO PARA STRING: ");
console.log(a); //objeto
console.log(b); //string
console.log("|-----------------------------|");
console.log("PASSANDO STRING PARA OBJETO: ");
console.log(a2);
console.log(b);


//strigfy - pega um objeto jason e transforma numa string
//parse - pega uma string e transforma em um objeto JSON