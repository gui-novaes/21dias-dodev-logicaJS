let nome = prompt('Nome: ')
let idade = parseInt(prompt('Idade: '))
let altura = Number(prompt('Altura: '))
let peso = Number(prompt('Peso: '))

let anoDeNascimento = 2024 - idade

let imc = peso / (altura * altura)

console.log("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + anoDeNascimento + ", tem " + altura + 
    " de altura, pesa " + peso + " kg seu IMC é " + imc + " Kg/m2 "
)