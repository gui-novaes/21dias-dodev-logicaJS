class Aluno {   // nome de classe sempre começa com letra maiúscula
    nome         // propriedade da classe
    idade        // propriedade da classe
    areaAtuacao  // propriedade da classe
    constructor(nome, idade){   // constructor é uma função que também recebe parâmetros
        this.nome = nome
        this.idade = idade
    }

    apresentar(){
        console.log(`Olá, meu nome é ${this.nome}. Minha idade: ${this.idade}, e minha área de atuação é ${this.areaAtuacao}`)   // função dentro da classe
    }
}

let alunos = [];
let continuar = true;
console.log('============ Cadastro de alunos ===============')
let indexDeAluno = 0;

while(continuar){
    let nome = prompt('Insira o nome do aluno:')
    let idade = parseInt(prompt('Insira a idade do aluno:'))
    let aluno = new Aluno(nome, idade)  // criação de objeto
    
    let areaAtuacao = prompt('Insira a área de atuação do aluno');
    aluno.areaAtuacao = areaAtuacao;

    alunos[indexDeAluno] = aluno;
    let desejaContinuar = prompt('Insira 1 caso deseje cadastrar um novo aluno');
    if(desejaContinuar != '1'){
        continuar = false
    }else{
        indexDeAluno++
    }

}