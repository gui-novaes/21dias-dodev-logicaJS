// == igual | != diferente | > maior que | < menor que | === compara o valor e tipo | !== diferencia o valor e tipo

// motorista

//let nome = prompt('Insira seu nome: ')
//let idade = parseInt(prompt('Insira sua idade: '))
//let possuiCNH = prompt('Possui carta de motorista? (sim/não)')
//let temCarro = prompt('Você tem algum carro? (sim/não)')

//if(idade < 18 || possuiCNH === 'não'){
//    console.log(nome + ', você não pode dirigir')
//}else if(idade >= 18 && possuiCNH === 'sim' && temCarro === 'não'){
//    console.log(nome + ', você pode dirigir mas não tem um carro.')
//}else if(idade >=18 && possuiCNH === 'sim' && temCarro === 'sim'){
//    console.log(nome + ', você será o motorista!')
// }

let nome = prompt('Insira seu nome:')
let idade = parseInt(prompt('Insira sua idade: '))
let opcaoCNH = prompt('Possui carta de motorista? (sim/não)')
let maiorDeIdade = 18
let possuiCNH = false
let temCarro = false

if(opcaoCNH == 'sim'){
    possuiCNH = true
}
let opcaoCarro = prompt('Você tem algum carro? (sim/não)')

if(opcaoCarro == 'sim'){
    temCarro = true
}

if(idade < maiorDeIdade || !possuiCNH){
    console.log(nome + ', você não pode dirigir')
}else if(idade >= maiorDeIdade && possuiCNH && !temCarro){
    console.log(nome + ", você pode dirigir mas não tem um carro")
}else{
    console.log(nome + ", você será o motorista!")
}