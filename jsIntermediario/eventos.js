function h1click() {
  console.log("Executando função");
}

function changeH1() {
  let input = document.getElementById("texto");
  let h1 = document.querySelector("h1");
  h1.innerText = input.value;
}

function hideH1(){
    let h1 = document.getElementById("testeH1")
    h1.style.display = "none";
}
