// 1° PASSO - Crie uma função que solicite ao seu usuário o que ele deseja fazer: cadastrar, fazer login, excluir um cadastro ou encerrar o programa. Essa função deve retornar a opção escolhida pelo usuário.
let opcoes;
let nomes = [];
let senhas = [];
function opcao() {
    opcoes = prompt('1. Cadastrar\n2. Fazer login\n3. Excluir um cadastro\n4. Encerrar o programa')
    return opcoes
}

// 2° PASSO - Crie uma função de cadastro que solicite dois valores ao usuário, um nome e uma senha e guarde cada um no seu respectivo array.
function cadastro() {
    nomes.push(prompt('Insira um nome:'))
    senhas.push(prompt('Insira a senha:'))
    console.log(`Usuário cadastrado`)
}

// 3° PASSO - Crie uma função de login que recebe dois valores como parâmetros, um nome e uma senha, depois procure o nome recebido no array de nomes e em caso positivo compare a senha no array de senhas. Se as duas comparações forem válidas retorne true se uma delas não for válida retorne false.
function login(nomeLogin, senhaLogin) {
    if(nomes.includes(nomeLogin) == true){
        if(senhas.includes(senhaLogin) == true){
            alert('Login válido')
        }else{
            alert('nome ou senha inválidos')
        }
    }else{
        alert('nome ou senha inválidos')
    }
}

// 4° PASSO - Crie uma função de exclusão de cadastro que recebe um nome como parâmetro, então procure pelo nome no array de nomes e exclua ele e a senha correspondente do outro array.
function excluir(nomeExcluir) {
    if(nomes.includes(nomeExcluir) == true){
        nomes.splice(nomes.indexOf(nomeExcluir));
        senhas.splice(senhas.indexOf(nomeExcluir));
        alert('nome e senha excluídos')
    }else{
        alert('Nome ou senha não localizados')
    }
}

// 5° PASSO - Utilizando as funções criadas, faça o fluxo de funcionamento do código, considere que o usuário pode escolher quando encerrar o programa conforme as opções e que no login caso seja bem sucedido retorna uma mensagem "Login feito com sucesso!" e em caso negativo "Nome ou senha incorretos!"
let condicao = true;

while (condicao) {
    let opcoesVar = opcao();
    switch (opcoesVar) {
        case "1":
            cadastro()
            break;
        case "2":
            nomeLogin = prompt('Insira seu nome: ')
            senhaLogin = prompt('Insira uma senha: ')
            login(nomeLogin, senhaLogin)
            break;
        case "3":
            nomeExcluir = prompt('Insira seu nome: ')
            excluir(nomeExcluir)
            break;
        case "4":
            condicao = false
            alert('Programa encerrado!')
            break;
        default:
            alert('Opção inválida')
            break;
    }
}

