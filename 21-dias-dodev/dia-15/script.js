// 1° PASSO - Crie 2 arrays: arrayA e arrayB. Preencha os 2 arrays com 10 números cada, pode declarar já com valores;
// let arrayA = [13,20,10,22,24,20,27,17,19,14]
// let arrayB = [24,22,23,11,15,17,29,14,16,21]
let arrayA = [13,20,10,22,24,20,28,17,19,14]
let arrayB = [24,22,23,11,15,17,29,14,16,21]
let arrayNumerosEmComum = [];

// 2° PASSO - Implemente uma função que receba 2 arrays como parâmetro. Essa função deve retornar um array que contenha apenas os números em comum nos 2 arrays recebidos como parâmetro.
function numerosEmComum(array1, array2) {
    for(let valoresArray1 of array1){   // percorre os valores diretamente, sem precisar de um índice
        for(let valoresArray2 of array2)
            // 3° PASSO - Se um número se repetir apenas no mesmo array, ele NÃO deve ser adicionado como um número comum.
            if(valoresArray1 == valoresArray2){
                arrayNumerosEmComum.push(valoresArray1)
            }
    }
    // 4° PASSO - No array de saída NÃO deve ter números repetidos
    // EX: 
    // Entrada: arrayA = [13,20,10,22,24,20,27,17,19,14] 
    // arrayB = [24,22,23,11,15,17,29,14,16,21]
    // Saída: numerosEmComum = [22,24,17,14]
    return arrayNumerosEmComum
}
console.log(numerosEmComum(arrayA, arrayB))