let nome
let salario

function perguntarColaborador() {
    nome = prompt('Digite o nome do colaborador:')
    salario = parseFloat(prompt('Digite o salário do colaborador:'))
    calcularAumentoSalario(nome,salario)
}

function calcularAumentoSalario(nome, salario) {
    let aumento = 0;

    if (salario <= 1500) {
        aumento = 0.2; // 20%
    } else if(salario <= 2000){
        aumento = 0.15; // 15%
    } else if(salario <=3000){
        aumento = 0.1 // 10%
    } else {
        aumento = 0.05; // 5%
    }

    let novoSalario = salario + (salario * aumento);

    // Exibindo os resultados
    console.log(`Nome do colaborador: ${nome}`)
    console.log(`Salário: R$ ${salario}`)
    console.log(`Aumento: ${aumento * 100} %`)
    console.log(`Salário Reajustado: R$ ${novoSalario}`)
}

function perguntarNovamente() {
    let resposta = prompt('Deseja calcular novamente? [s/n]')

    if (resposta == 's') {
        perguntarColaborador();
    } else{
        console.log('Programa encerrado.')
    }
}