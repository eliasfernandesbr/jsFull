function h1click() {
  console.log("Executando função");
}

function changeH1() {
  let input = document.getElementById("texto");
  let h1 = document.querySelector("h1");
  h1.innerText = input.value;
}

function hideH1() {
  let h1 = document.getElementById("testeH1");
  let img = document.getElementById("xbox");
  if (h1.style.display === "none") { //nesse caso, irá comparar se está mostrando, caso não...
    h1.style.display = "block";
    img.style.display = "block";
  } else {
    h1.style.display = "none";
    img.style.display = "none";
  }
}



// function hideImg() {
//     // let h1 = document.getElementById("testeH1");
//     let img = document.getElementById("xbox");
//     // h1.style.display = "";
//     img.style.visibility = "hidden";
//   }

function onOver(elemento) {
  elemento.style.backgroundColor = "#046983";
}

function onOut(elemento) {
  elemento.style.backgroundColor = "#8a2be2";
}
