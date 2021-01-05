function f(){
    console.log("Teste2");
    console.log(this);
}

function f1(){
    console.log("testeF1");
    console.log(this);
}

window.onload = function(){
    let h1 = document.getElementsByTagName("h1")[0];
    h1.addEventListener("click", f1)
}