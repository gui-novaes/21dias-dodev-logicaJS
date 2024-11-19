// 1° PASSO - CRIAR UM ARRAY PARA RECEBER OS NOMES DOS ALUNOS E OUTRO PARA RECEBER AS NOTAS
nomesAlunos = [];
notas = [];
condicao = true

// 2° PASSO - PARA CADA ALUNO INSERIDO PERGUNTE O NOME E A NOTA DA PROVA
// 3° PASSO - SEU USUÁRIO DEVE TER A OPÇÃO DE PARAR DE INSERIR INFORMAÇÕES QUANDO DESEJAR;
do {
    let inserirNome = prompt('Insira o nome do aluno [999 para sair]')
    if(inserirNome === '999'){
        condicao = false
        break
    }else{
        nomesAlunos.push(inserirNome)
    }
    let inserirNota = Number(prompt(`Insira a nota do ${inserirNome} [999 para sair]`))
    if(inserirNota === 999){
        condicao = false
    }else{
        notas.push(inserirNota)
    }
} while (condicao);

console.log(nomesAlunos)
console.log(notas)

// 4° PASSO - NO FINAL EXIBA A NOTA DE CADA ALUNO, A SOMA DAS NOTAS E A MÉDIA GERAL DA TURMA.
for(i = 0; i <= nomesAlunos.length; i++){
    if(nomesAlunos[i] === undefined){
        break
    }else{
    console.log(`${nomesAlunos[i]} tirou nota ${notas[i]}`)
    }
}

let somaDasNotas = notas.reduce((accumulator, value) => accumulator + value, 0)
console.log(`A soma de todas as notas foi de ${somaDasNotas}`)
console.log(`A média geral foi de ${Math.trunc(somaDasNotas/nomesAlunos.length).toFixed(1)}`)