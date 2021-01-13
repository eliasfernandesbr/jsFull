let nome = "";


try {
    if(nome == ""){
        throw "O NOME NÃO PODE SER VAZIO";
    }
} catch (error) {
    console.log("Houve um erro: ---", error);
}finally{
    console.log("Nome");
}

