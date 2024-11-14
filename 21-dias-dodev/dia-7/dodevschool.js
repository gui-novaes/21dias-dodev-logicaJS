let nota;
let sexo;
let condicao = true
let totalDeAlunos = 0;
let todasAsNotas = [];
let quantidadeHomens = [];
let quantidadeMulheresNotaAcimade7 = [];
let maiorNotaDosHomens = [];

while(condicao){
    nota = Number(prompt('Insira a nota: '))
    if(nota >= 0 && nota <=10){
        console.log('nota adicionada')
        todasAsNotas.push(Number(nota));
        if(sexo === 'M' || sexo === 'm'){
            maiorNotaDosHomens.push(Number(nota))
        }
    }else{
        console.log('Erro! Digite uma nota de 0 a 10')
        condicao = false
    }
    sexo = prompt('Insira o sexo [M/F]: ')
    if(sexo === 'M' || sexo === 'm'){
        quantidadeHomens.push(sexo);
    }

    if(sexo === 'F' || sexo === 'f' && nota > 7){
        quantidadeMulheresNotaAcimade7.push(sexo);
    }

    totalDeAlunos+=1
    let cadastrarNovaNota = prompt('Deseja cadastrar outra nota? [sim/não]')
    if(cadastrarNovaNota === 'não'){
        condicao = false
    }
}

// soma de todos os valores do array (todasAsNotas)
let somaTodasAsNotas = todasAsNotas.reduce((accumulator, value) => accumulator + value, 0);

// soma da quantidade de homens
let somaQuantidadeDeHomens = quantidadeHomens.length; 

// soma da quantidade de mulheres com nota acima de 7
let somaQuantidadeMulheresNotaAcimade7 = quantidadeMulheresNotaAcimade7.length;

console.log("A média geral foi de " + Math.trunc((somaTodasAsNotas/totalDeAlunos)))
console.log('A quantidade de homens é de ' + somaQuantidadeDeHomens)
console.log(somaQuantidadeMulheresNotaAcimade7 + " mulheres tiveram nota acima de 7")
console.log('A maior nota entre os homens foi '+ Math.max.apply(null, maiorNotaDosHomens))

