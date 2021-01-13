let url = "https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL";



function converter(params) {
    let input = document.getElementById("valor");
    valor = input.value;
    console.log(valor);

    fetch(url)
.then((res)=>{
    return res.json()
})
.then((data)=>{
    let rate = data.rates.BRL;
    console.log(data);
    document.getElementById("resultado").innerHTML = rate * valor;

})



}