// 1° PASSO - PEDIR UM NÚMERO INTEIRO PARA O USUÁRIO
let numero = Number(prompt('Insira um número inteiro positivo'))
let arrayFibonacci = [];

// 2° PASSO - CALCULAR O NÚMERO INICIAL DA SEQUÊNCIA DE FIBONACCI
arrayFibonacci[0] = numero -1  // primeiro número
arrayFibonacci[1] = numero     // segundo número

// 3° PASSO - FAZER ARRAY COM NÚMEROS DA SEQUÊNCIA DE FIBONACCI, LIMITADO A 10 ELEMENTOS
for(let contador = 2; contador <= 9; contador++){
    arrayFibonacci[contador] = arrayFibonacci[contador - 1] + arrayFibonacci[contador - 2]; // contador -1 é o último num.
}

console.log(arrayFibonacci)
//EX: usuario inseriu 8. Fibonacci = (7, 8, 15, 23, 38, 61, 99, 160, 259, 419)