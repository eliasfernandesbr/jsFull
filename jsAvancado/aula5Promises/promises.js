//PROMISE É UMA MANEIRA MELHOR DE UTILIZAR CALLBACK

let usuarios = ["Adriano", "Marcia", "José"];

function inserirUsuario(nome) {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      usuarios.push(nome);

      let error = false;

      if (!error) {
        resolve();
      } else {
        reject({ msg: "INSIRA O VALOR CORRETO" });
      }
    }, 1000);
  });

  return promise;
}

function listarUsuarios() {
  console.log(usuarios);
}

// inserirUsuario("Elias")
//   .then(listarUsuarios)
//   .catch((error) => {
//     console.log(error.msg);
//   });

async function executar() {
    await inserirUsuario("Jhess");
    listarUsuarios();
    
}
executar();