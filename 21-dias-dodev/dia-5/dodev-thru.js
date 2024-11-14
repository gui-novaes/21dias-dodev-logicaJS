//let abastecerGasolina;
//let abastecerAlcool;
//let calibrarPneus;
//let opcaoPosto = prompt('O que você precisa fazer no posto? 1) Abastecer com gasolina | 2) Abastecer com álcool | 3) Calibrar os pneus')

//if(opcaoPosto === "1"){
//    let quantoValorGasolina = Number(prompt('Qual o valor que deseja abastecer com gasolina? '))
//    let valorGasolina = quantoValorGasolina / 5
//    console.log('Você abasteceu '+ Math.trunc(valorGasolina) + " litros de Gasolina")
//}else if(opcaoPosto === "2"){
//    let quantoValorAlcool = Number(prompt('Qual o valor que deseja abastecer com álcool? '))
//    let valorAlcool = quantoValorAlcool / 3
//    console.log('Você abasteceu ' + Math.trunc(valorAlcool) + " litros de Álcool")
//}else if(opcaoPosto === "3"){
//    console.log('Pneus calibrados com sucesso!')
//}else{
//    console.log('Opção inválida!')
//}

let abastecerGasolina;
let abastecerAlcool;
let calibrarPneus;
let opcaoPosto = prompt('O que você precisa fazer? 1) Abastecer com gasolina | 2) Abastecer com álcool | 3) Calibrar os pneus')

switch (opcaoPosto){
    case "1":
        let quantoValorGasolina = Number(prompt('Qual o valor que deseja abastecer com gasolina? '))
        let valorGasolina = quantoValorGasolina / 5
        console.log('Você abasteceu '+ Math.trunc(valorGasolina) + " litros de Gasolina")
        break;
    case "2":
        let quantoValorAlcool = Number(prompt('Qual o valor que deseja abastecer com álcool? '))
        let valorAlcool = quantoValorAlcool / 3
        console.log('Você abasteceu '+ Math.trunc(valorAlcool) + " litros de Álcool")
        break;
    case "3":
        console.log('Pneus calibrados com sucesso!')
        break;
    default:
        console.log('Opção inválida!')
        break;
}