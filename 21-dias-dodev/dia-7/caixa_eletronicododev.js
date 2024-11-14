let saldo = 0
let valor = 0
let continuar;
let todosValoresInseridos = [];
let maiorValorInserido;
saldo = saldo + Number(6000)

do {
    let nome = prompt('Insira seu nome:')
    let cpf = prompt('Insira seu CPF: ')
    let opcao = prompt('Você quer sacar ou depositar? [saque/depósito]')
    valor = Number(prompt('Valor: '))
    todosValoresInseridos.push(Number(valor))
    console.log(saldo)
    if(valor < 0){
        console.log('Valor inválido. A transação não foi realizada.')
    }else if(opcao === 'saque' || opcao === 'Saque' || opcao === 'Sacar' || opcao === 'sacar' && valor > saldo){
        console.log('Saldo insuficiente. A transação não foi realizada.')
    }else if(opcao === 'saque' || opcao === 'Saque' || opcao === 'Sacar' || opcao === 'sacar'){
        saldo = saldo - valor
        console.log(`Olá ${nome} ${cpf}, seu saldo atual é de ${saldo}`)
    }else if(opcao === 'depósito' || opcao === 'deposito' || opcao === 'depositar'){
        saldo = saldo + valor
        console.log(`Olá ${nome} ${cpf}, seu saldo atual é de ${saldo}`)
    }else{
        console.log('Opção inválida')
    }
    continuar = prompt('Deseja continuar? [1] para continuar // [2] para sair]')
} while (continuar == "1");

maiorValorInserido = Math.max.apply(null, todosValoresInseridos)

console.log(`Saldo Total: ${Number(saldo)}`)
console.log(`O maior valor inserido foi ${maiorValorInserido}`)
console.log(`A média dos valores inseridos é ${Math.trunc(todosValoresInseridos.reduce((accumulator, value) => accumulator + value, 0)/todosValoresInseridos.length)}`)