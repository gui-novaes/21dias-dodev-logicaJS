let condicao = true

while(condicao){
    // 1° PASSO - PEDIR NOME, IDADE, PESO, ALTRA E PROFISSÃO
    let nome = prompt('Insira seu nome: ')
    let idade = parseInt(prompt('Insira sua idade'))
    let peso = Number(prompt('Insira seu peso:'))
    let altura = Number(prompt('Insira sua altura: '))
    let profissao = prompt('Qual sua profissão: ')

    // 2° PASSO - EXIBIR TEXTO COM AS INFORMAÇÕES DOS USUÁRIOS
    console.log(`------------- Dados de ${nome} --------------`)
    console.log(`Olá ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura}M de altura e pesa ${peso}kg.`)

    // 3° PASSO - VERIFICAR SE USUÁRIO É MAIOR DE IDADE OU NÃO
    if(idade >= 18){
        console.log('Está liberado para tomar umas geladas!')
    }else{
        console.log('Sem gelada pra você')
    }

    // 4° PASSO - MOSTRAR A IDADE DO USUÁRIO EM MESES SEMANAS E DIAS
    let meses = idade * 12
    let semanas = idade * 52
    let dias = idade * 365

    // 5° PASSO - CALCULAR IMC E MOSTRAR SUA FAIXA 
    console.log(`Idade em meses: ${meses}`)
    console.log(`Idade em semanas: ${semanas}`)
    console.log(`Idade em dias: ${dias}`)

    let IMC = peso / (altura * altura)

    if(IMC < 18.5){
        console.log(`IMC: ${IMC.toFixed(1)} encontra-se na faixa de Magreza`)
    }else if(IMC >= 18.5 && IMC < 24.9){
        console.log(`IMC: ${IMC.toFixed(1)} encontra-se na faixa de Normal`)
    }else if(IMC >= 24.9 && IMC < 30){
        console.log(`IMC: ${IMC.toFixed(1)} encontra-se na faixa de Sobrepeso`)
    }else{
        console.log(`IMC: ${IMC.toFixed(1)} encontra-se na faixa de Obesidade`)
    }

    // 6° PASSO - CALCULAR IDADE QUE O USUÁRIO NASCEU
    const date = new Date();
    const anoAtual = date.getFullYear();
    let anoNascimento = anoAtual - idade
    console.log(`${nome}, você nasceu no ano de ${anoNascimento}`)


    // 7° PASSO - EXIBIR ANOS DE IDADE ATÉ O ATUAL
    for(let contador = anoNascimento; contador <= anoAtual; contador++){
        console.log(`${contador} - ${contador - anoNascimento} anos de idade`)
    }

    let novosDados = prompt('Deseja inserir novos dados? [sim/não]')
    if(novosDados === 'sim' || novosDados === 'Sim' || novosDados === 'SIM'){
        condicao = true
    }else if(novosDados === 'não' || novosDados === 'Não' || novosDados === 'NÃO'){
        condicao = false
    }
}

console.log('Programa finalizado!')