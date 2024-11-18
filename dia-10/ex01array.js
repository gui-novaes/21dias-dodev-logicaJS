// 1° PASSO - PEDIR PARA O USUARIO DIGITAR UM NUMERO DE 1 A 10
let numeroInserido = parseInt(prompt('Insira um número de 1 a 10'));

// 2° PASSO - CRIAR O ARRAY DE 1 A 10
let numeros = [1,4,6,9,2,5,7,5,8,5]

let indices = [];

// 3° PASSO - MOSTRAR QUAL O ÍNDICE QUE SE ENCONTRA O NUMERO INSERIDO NO ARRAY
let verificacao = numeros.indexOf(numeroInserido)
while(verificacao !== -1){
    indices.push(verificacao);
    verificacao = numeros.indexOf(numeroInserido, verificacao +1);
}
console.log(`O número ${numeroInserido} se encontra no(s) índice(s) ${indices}`)