let numero1 = Number(prompt('Insira o primeiro número: '))
let numero2 = Number(prompt('Insira o segundo número: '))
let operacao = prompt('Qual será a operação? (soma + | subtração - | multiplicação * | divisão / ')

let soma = numero1 + numero2
let subtracao = numero1 - numero2
let multiplicacao = numero1 * numero2
let divisao = numero1 / numero2

switch(true){
    case operacao === '+':
        console.log(numero1 + " + "+ numero2 + " = " + soma)
        break;
    case operacao === '-':
        console.log(numero1 + " - "+ numero2 + " = "+ subtracao)
        break;
    case operacao === '*':
        console.log(numero1 + " * "+ numero2 + " = "+ multiplicacao)
        break;
    case operacao === '/':
        console.log(numero1 + " / "+ numero2 + " = "+ divisao)
        break;
    default:
        console.log('Opção inválida')
        break;
}