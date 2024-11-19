// 1° PASSO - CRIAR 3 ARRAYS, UM PARA GUARDAR OS MODELOS, UM PARA GUARDAR OS ANO E UM PARA GUARDAR OS VALORES DO CARRO
let modelosCarros = [];
let anosCarros = [];
let valoresCarros = [];
let condicao = true

// 2° PASSO - UTILIZANDO O WHILE, PEÇA PARA O USUÁRIO CADASTRAR NOVOS CARROS(MODELO, ANO E VALOR) POPULE OS 3 ARRAYS NAS MESMAS POSIÇÕES
do {
    let inserirModelos = prompt('Insira o modelo do carro:')
    modelosCarros.push(inserirModelos)
    let inserirAno = parseFloat(prompt('Insira o ano do carro:')); // remove todos os pontos da string
    anosCarros.push(inserirAno)
    let inserirValor = Number(prompt('Insira o valor do carro:').replace(/\./g, ""))
    valoresCarros.push(inserirValor)

// 3° PASSO - SEU USUÁRIO DEVE DEFINIR QUANDO PARAR DE INSERIR INFORMAÇÕES.
    let continuar = prompt('Você deseja inserir mais carros? [sim/não]')
    if(continuar.toLowerCase() === 'não'){
        condicao = false
        break
    }
} while (condicao);


// 5° PASSO - ORDENE DEUS VETORES PELO PREÇO DOS CARROS. SEM USAR OS NATIVOS DO JAVASCRIPT COMO O ORDERBY
let modelosOrdenados = [];
let anosOrdenados = [];
let valoresOrdenados = [];

while(valoresCarros.length > 0){
    // encontrar o maior valor e seu índice
    let maiorValor = Math.max(...valoresCarros);
    let indiceMaior = valoresCarros.indexOf(maiorValor);

    // adicionar os dados correspondentes aos arrays ordenados
    modelosOrdenados.push(modelosCarros[indiceMaior])
    anosOrdenados.push(anosCarros[indiceMaior]);
    valoresOrdenados.push(valoresCarros[indiceMaior]);

    // remover os dados processados dos arrays originais
    modelosCarros.splice(indiceMaior, 1); // remove elementos de um índice específico
    anosCarros.splice(indiceMaior, 1);
    valoresCarros.splice(indiceMaior, 1);
}

// exibindo os dados ordenados
for(let i = 0; i <= modelosOrdenados.length; i++){
    if(modelosOrdenados[i] === undefined){
        break
    }
    console.log(`${i+1}° carro: ${modelosOrdenados[i]} | ${anosOrdenados[i]} | ${valoresOrdenados[i]}`)
}
