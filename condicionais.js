function exercicio02 () {

    let numero = prompt("Digite um numero:");

if (numero > 0) {

    alert("Positivo");

} 
else {
    if (numero <0)  {

        alert ("Negativo");
    
    }
else {

        alert("É zero.")

    }   



}
gerarLog ("Exercico de condicionais 01 executado." + new Date().toLocaleDateString()); 
}



function exercicio01 () {

    let numero = prompt ("Insira sua idade:")

if (numero >= 18) {

    alert("É maior de idade")

}
else{

    if(numero <= 18){
        alert("É menor de idade")
    }else{

        alert("É maior de idade")

    }

}


}



function exercicio06 () {

    let numero= prompt("Divida o numero")

if(numero % 2 === 0){
    alert(`O numero ${numero} é divisiel`)
}
else{
    alert(`O numero ${numero} nao e divisivel`)
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

function exercicio04cond(){
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
        let numero1 = Number(prompt("Digite o primeiro número:"));
        let operacao = prompt("Digite a operação (+, -, *, /):");
        let numero2 = Number(prompt("Digite o segundo número:"));
        let resultado;
        
        if (isNaN(numero1) || isNaN(numero2)) {
            alert("Por favor, digite números válidos.");
        } else {
            if (operacao === "+") {
                resultado = numero1 + numero2;
            } else if (operacao === "-") {
                resultado = numero1 - numero2;
            } else if (operacao === "*") {2
                resultado = numero1 * numero2;
            } else if (operacao === "/") {
                if (numero2 !== 0) {
                    resultado = numero1 / numero2;
                } else {
                    alert("Divisão por zero não é permitida.");
                }
            } else {
                alert("Operação inválida. Use +, -, * ou /.");
            }
        }
        
        if (resultado !== undefined) {
            alert("O resultado é: " + resultado);
        }
        
    }
    
function exerc08(){

    let valor= prompt ("Digite o valor da compra")       
    if(valor >=100 ){
        valor = valor * 0,10;
        alert("desconto alicado")
    } else{
        alert("desconto nao aplicado    ")
    }
}


function gerarLog(textoDoLog){
    let logscontainer = document.querySelector(".log-container");


    let paragraph = document.createElement("p");

    paragraph.innerHTML = textoDoLog;

    logscontainer.appendChild(paragraph);



}