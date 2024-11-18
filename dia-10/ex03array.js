// 1° PASSO - PERGUNTAR QUANTOS NUMEROS DESEJA INSERIR NO ARRAY
let quantidadeNumeros = Number(prompt('Quantos números deseja inserir? '))
let arrayNumeros = [];
let arrayAoContrario = [];

// 2° PASSO - PREENCHER ELEMENTO POR ELEMENTO CONFORME O VALOR QUE ELE PEDIU
for(let contador = 0; contador <= quantidadeNumeros-1; contador++){
    numeroInserido = Number(prompt(`Insira o ${contador+1}° número`))
    arrayNumeros[contador] = numeroInserido
}

// 3° PASSO - MOSTRAR O ARRAY NA FORMA INSERIDA E NA FORMA CONTRÁRIA.
console.log(`Array da forma inserida: ${arrayNumeros}`)

arrayAoContrario = arrayNumeros.reverse();
console.log(`Array ao contrário: ${arrayAoContrario}`)