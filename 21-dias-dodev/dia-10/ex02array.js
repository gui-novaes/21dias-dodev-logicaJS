// 1° PASSO - PEDIR 5 NUMEROS AO USUARIO
let arrayNumeros = [];

// 2° PASSO - COLOCAR OS 5 NUMEROS EM UM ARRAY
for(let contador = 0; contador <= 4; contador++){
    numerosdigitados = parseInt(prompt(`Insira o número da posição ${contador}`))
    arrayNumeros[contador] = numerosdigitados
}
console.log(`Array na ordem inserida: ${arrayNumeros}`)

// 3° PASSO - MODIFICAR E PRINTAR OS NUMEROS DO ARRAY DE FORMA QUE A SEQUÊNCIA FIQUE AO CONTRÁRIO AO DIGITADO.
let arrayAoContrario = arrayNumeros.reverse()
console.log(`Array na ordem contrária: ${arrayAoContrario}`)