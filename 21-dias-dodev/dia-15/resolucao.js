// Declarando arrays que vamos utilizar
let arrayA = [13,20,10,22,24,20,27,17,19,14]
let arrayB = [24,22,23,11,15,17,29,14,16,21]

// Declarando a função com os parâmetros pedidos
function AcharNumerosEmComum(array1, array2) {
    let arrayNumerosEmComum = []; //Declarando array de números em comum
    let contadorArrayNumsEmComum = 0 //contador desse array

    // O primeiro FOR percorre o array1
    for(let i = 0; i < array1.length; i++){
        // o segundo FOR percorre o array2, para cada número de array1 ele compara com todos os números de array2
        for(let j = 0; j < array2.length; j++){
            // Se a comparação for bem sucedida ele adiciona esse número no array de números em comum e atribui o valor máximo ao contador j assim encerrando a verificação para esse número e evitando números duplicados.
            if (array1[i] == array2[j]) {
                arrayNumerosEmComum[contadorArrayNumsEmComum] = array1[i]
                contadorArrayNumsEmComum++
                j = array2.length
            }
        }
    }
    return arrayNumerosEmComum
}
console.log(AcharNumerosEmComum(arrayA, arrayB))