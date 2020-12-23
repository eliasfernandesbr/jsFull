let nomes = ["Dante", "Bidu", "Bill"];
let notasA = [9.0, 7.1, 4.5];
let notasB =[5.2, 6.4, 4.9];


function media (n1, n2){
    return (n1+n2)/2
}

function passou(media){
    if( media > 7){
        return "Aprovado"
    }else{
        return "Reprovado"
    }

}


for (let index in nomes){
    let nota1 = notasA[index];
    let nota2 = notasB[index];
    mediaFinal = media(nota1, nota2);

    console.log(nomes[index] + " - " + nota1 + " - " + nota2 + " - " + "MÉDIA: " + mediaFinal + " - " + passou(media));
}

