let numero = Number(prompt('Digite sua tabuada: '))
let segundaTabuada = numero+1
let terceiraTabuada = segundaTabuada+1

for(let contador = 1; contador <=10; contador++){
    console.log(numero + " x "+ contador +  " = " + (numero*contador))
}

console.log('====================')

for(let contador = 1; contador <=10; contador++){
    console.log(segundaTabuada + " x "+ contador +  " = " + (segundaTabuada*contador))
} 

console.log('====================')

for(let contador = 1; contador <=10; contador++){
    console.log(terceiraTabuada + " x "+ contador +  " = " + (terceiraTabuada*contador))
}
