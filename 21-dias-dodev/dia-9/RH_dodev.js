// 1° PASSO - PEDIR DADOS DO CLIENTE E EXIBIR OS DADOS NA TELA
// 1° E 2° PASSO - PEDIR PARA ELE CONFIRMAR AS INFORMAÇÕES, SE TIVER ALGO ERRADO PEÇA PARA COLOCAR TUDO DE NOVO
condicao = true
let salarioAtual;

while (condicao) {
    let nome = prompt('Insira seu nome:')
    let idade = parseInt(prompt('Insira sua idade:'))
    salarioAtual = Number(prompt('Insira seu salário atual: '))

    let confirmarDados = prompt(`Os dados inseridos foram: Nome: ${nome} / Idade: ${idade} / Salário Atual R$ ${salarioAtual}. Os dados estão todos corretos? [sim/não]`)
    if(confirmarDados === 'Sim' || confirmarDados === 'sim' || confirmarDados === 'SIM'){
        condicao = false
    }else if(confirmarDados === 'Não' || confirmarDados === 'não' || confirmarDados === 'NÃO'){
        alert('Ok. Insira os dados novamente.')
        condicao = true
    }
}

// 3° PASSO - PREVISÃO DE SALÁRIO PARA OS PRÓXIMOS 10 ANOS
// obs: cliente recebe aumento anual de salário
// obs. no primeiro ano, receberá um aumento de 1,5% sobre o salário atual
// obs. A partir do segundo ano, os aumentos salariais sempre será o dobro do percentual do ano anterior
// EX: 1° ano > +1,5%
// EX: 2° ano > 3%
// EX: 3° ano > 6%
// EX: 4° ano > 12%
// EX: 5° ano > 24%
// EX: 6° ano > 48%
// EX: 7° ANO > 96%
// EX: 8° ANO > 192%
// EX: 9° ANO > 384%
// EX: 10° ANO > 768%

// pegando o ano atual
const date = new Date();
const anoAtual = date.getFullYear();

aumentoPercentual = 1.5
for(let contador = anoAtual+1; contador <=anoAtual+10; contador++){
    let aumento = salarioAtual * (aumentoPercentual / 100);
    salarioAtual += aumento;
    console.log(`Ano ${contador}: Salário = R$ ${salarioAtual.toFixed(2)} (Aumento: ${aumentoPercentual}%)`)
    aumentoPercentual *= 2;
}