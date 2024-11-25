// 1° PASSO - Crie uma função que pergunte o nome e o salário de um colaborador
let novoSalario;
let salario;
let nome;
let aumento;

function informacoes(nome, salario) {
    nome = prompt('Insira seu nome:')
    salario = Number(prompt('Qual seu salário? '))
    novoSalario = aumentoSalarial(salario)
    // 3° PASSO - Depois de calcular o aumento você deve exibir: o nome do colaborador, o salário, a % de aumento e o salário reajustado.
    return console.log(`Nome: ${nome} \nSalário: R$ ${salario} \nAumento de ${aumento + "%"} \nSalário Reajustado: R$ ${novoSalario}`)
}

 // 2° PASSO - Depois crie uma função que deve ser chamada dentro da função que solicita as informações, essa função irá calcular o aumento de salário
function aumentoSalarial(salario) {
    if(salario <= 1500){
        aumento = 20
        novoSalario = salario + (salario * aumento / 100)
    }else if(salario > 1500 && salario <= 2000){
        aumento = 15
        novoSalario = salario + (salario * aumento / 100)
    }else if(salario > 2000 && salario <= 3000){
        aumento = 10
        novoSalario = salario + (salario * aumento / 100)
    }else{
        aumento = 5
        novoSalario = salario + (salario * aumento / 100)
    }

    return novoSalario
}

// 4° PASSO - Crie uma função que deve ser chamada no final da função que calcula o reajuste salarial, essa função deve perguntar se o usuário deseja calcular novamente com novas informações.
function continuar() {
    condicao = true
    while (condicao) {
        informacoes()
        continuar = prompt('Deseja inserir novas informações? [sim/não]')
        if (continuar === 'não') {
            condicao = false
            console.log('Encerrando programa...')
        }
    }
}

// 5° PASSO - Para testar basta chamar a primeira função criada, e as outras serão chamadas na sequência conforme a execução do código.
continuar()
