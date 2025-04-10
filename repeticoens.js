function exemplofor (){

//FOR
//1o =  Declar contador
//2o = condicao (enquanto)
//3o = incremento
for (let contador = 1; contador <=5; contador ++){

    alert(contador);

}   



}


function exemplowile() {
     
    let contador =1;

    while (contador <=5); {
        console.log (contador)
        contador++
        
    }

   

}

function exemploduowhile() {
    let contador = 1;

    do{

        alert(contador);
        contador++

    }    while (contador <= 5  )

}


function exr1() {
    for (let contador = 1; contador <=10; contador ++) {
        alert(contador)
        
    }
}


function exr2() {
   let Number = prompt ("digite seu numero desejado")
    for (let i = 1; i <= 10; i++) {
       console.log (`${Number} x ${i} = ${Number * i } `);
        
    }
    
    }

    function exr03() {
        let N = prompt("Digite um número N:");
let soma = 0;
let i = 1;

while (i <= N) {
  soma += i;
  i++;
}

console.log (`A soma dos primeiros ${N} números naturais é: ${soma}`);

    }
  
    function exr04() {
        
        for (let i = 2; i <= 50; i += 2) {
            console.log(i);
          }
          
    }
    
    function exr05(){
        let numero = prompt("Digite um número para iniciar a contagem regressiva:");

        while (numero >= 0) {
          console.log(numero);
          numero--;
        }
        
        console.log("Contagem regressiva finalizada!");
        
    }
    function exrteste(){
      
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let tentativa = null;

alert("Bem-vindo ao Jogo de Adivinhação!\nTente adivinhar o número entre 1 e 100.");

while (tentativa !== numeroSecreto) {
  tentativa = parseInt(prompt("Digite seu palpite:"));

  if (isNaN(tentativa)) {
    alert("Por favor, digite um número válido.");
  } else if (tentativa < numeroSecreto) {
    alert("Muito baixo! Tente um número maior.");
  } else if (tentativa > numeroSecreto) {
    alert("Muito alto! Tente um número menor.");
  } else {
    alert("Parabéns! Você acertou o número!");
  }
}

       
    }
  