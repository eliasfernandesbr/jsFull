
var nomes = ["Elias", "Jhess", "Dante", "Bidu", "Poly"];
var notasA = [7.0, 6.5, 9.5, 4.8, 9.5];
var notasB= [8.0, 7.0, 8.5, 2.8, 1.5];

function passou(media){

    if( media > 7){
        return "Aprovado"
    }else{
        return "Reprovado"
    }

}

function calcMedia(n1, n2){
    return (n1+n2)/2


}

// var alunos = new Array["Elias", "Jhess", "Dante", "Bidu", "Poly"]

for(var index in nomes){
    var nota1 = notasA[index]
    var nota2 = notasB[index]
    var m = calcMedia(nota1, nota2);

    console.log(nomes[index] +  " - " + nota1 + " - " + nota2 +
     " - MÉDIA: " + m + " - " + passou(m));
}
