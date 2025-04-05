function exercicio02 () {

    let numero = prompt("Digite um numero:");

if (numero > 0) {

    console.log("Positivo");

} 
else {
    if (numero <0)  {

        console.log ("Negativo");
    
    }
else {

        console.log("É zero.")

    }   



}

}


function exercicio01 () {

    let numero = prompt ("Insira sua idade:")

if (numero >= 18) {

    console.log("É maior de idade")

}
else{

    if(numero <= 18){
        console.log("É menor de idade")
    }else{

        console.log("É maior de idade")

    }

}


}



function exercicio06 () {

    let numero= prompt("Divida o numero")

if(numero % 2 === 0){
    console.log(`O numero ${numero} é divisiel`)
}
else{
    console.log(`O numero ${numero} nao e divisivel`)
}



}


function exercicio03 () {
    let numero=prompt ("Digite sua nota")
    
    if (numero >= 60) {
        alert("Voce foi aprovado")
    }
    else{
        alert("Voce foi Reprovado")
    }


}

function exercicio05 () {
   
    let numero=prompt ("Digite sua idade");

    if (numero >= 18){
        alert ("Voce é adulto")
    }
    else{
        if (numero >= 13){
            alert("Voce é adolecente")
    }
    else{
        if (numero <= 12)
            alert("Voce é uma criança")
    }
    }
    }

function exercicio04(){
     let numero=prompt ("Seu numero é positivo ou negativo")
         if (numero < 0){
            alert("É negativo")
        }
        else{
            if (numero >=0)
                alert ("É positivo")
        }
    }
    
    function intermediario01() {
        debugger;
        let numero1 = prompt("Digite o primeiro número:");
        let operacao = prompt("Digite a operação (+, -, *, /):");
        let numero2 = prompt("Digite o segundo número:");
        let resultado;
    
        if (operacao === "+") {
            resultado = numero1 + numero2;
        } else if (operacao === "-") {
            resultado = numero1 - numero2;
        } else if (operacao === "*") {
            resultado = numero1 * numero2;
        } else if (operacao === "/") {
            if (numero2 !== 0) {
                resultado = numero1 / numero2;

            }
        } else {
            alert("Operação inválida. Use +, -, * ou /.");
        }
    
        alert("O resultado é: " + resultado);
    }
    
    intermediario01();
    