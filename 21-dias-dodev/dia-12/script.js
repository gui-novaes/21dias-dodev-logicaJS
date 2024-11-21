// DIA 12 - ARRAY + LOOP + SWITCH CASE
// 1° PASSO - CRIAR 2 ARRAYS , UM PARA NOME E UM PARA SENHAS
let nomes = [];
let senhas = [];
let inserirNome;
let inserirSenha;
let validarNomeNoLogin;
let validarSenhaNoLogin;
let condicao = true

// 2° PASSO - SOLICITAR AO USUÁRIO: CADASTRAR, FAZER LOGIN, EXCLUIR UM CADASTRO OU ENCERRAR O PROGRAMA.
while(condicao){
    let opcao = prompt('O que deseja fazer? [1] cadastrar | [2] fazer login | [3] excluir um cadastro | [4] encerrar e sair')

    // 3° PASSO - FAÇA O FLUXO DE FUNCIONAMENTO DO CÓDIGO, CONSIDERE QUE O USUÁRIO PODE ESCOLHER QUANDO ENCERRAR O PROGRAMA CONFORME AS OPÇÕES
    switch (opcao) {
        // 4° PASSO - SE A OPÇÃO ESCOLHIDA FOR CADASTRO, PEDIR 2 VALORES AO USUÁRIO, UM NOME E UMA SENHA E GUARDE CADA UM NO SEU RESPECTIVO ARRAY
        case "1":
            inserirNome = prompt('Insira seu nome:')
            inserirSenha = prompt('Insira sua senha:')
            nomes.push(inserirNome)
            senhas.push(inserirSenha)
            console.log(nomes)
            console.log(senhas)
            break;
        // 5° PASSO - SE A OPÇÃO ESCOLHIDA FOR LOGIN, SOLICITE AO USUÁRIO NOME E SENHA, DEPOIS PROCURE O NOME RECEBIDO NO ARRAY DE NOMES E EM CASO POSITIVO, COMPARE A SENHA NO ARRAY DE SENHAS. SE AS DUAS COMPARAÇÕES FOREM VÁLIDAS EXIBA UMA MENSAGEM DE SUCESSO.
        case "2":
            inserirNome = prompt('Insira seu nome:')
            inserirSenha = prompt('Insira sua senha:')
            console.log(nomes.includes(inserirNome))
            if(nomes.includes(inserirNome) === true && senhas.includes(inserirSenha)){
                alert(`${inserirNome} seu login foi concluído com sucesso!`)
            }else{
                alert('Não encontramos seus dados de login')
            }
            break;
        // 6° PASSO - SE A OPÇÃO ESCOLHIDA FOR EXCLUIR UM CADASTRO SOLICITE UM NOME AO USUÁRIO, ENTÃO PROCURE PELO NOME NO ARRAY DE NOMES E EXCLUA ELE E A SENHA CORRESPONDENTE DO OUTRO ARRAY, POR FIM ORGANIZE O ARRAY PARA ELIMINAR OS ESPAÇOS VAZIOS.
        case "3":
            inserirNome = prompt('Insira seu nome: ')
            validarNomeNoLogin = nomes.includes(inserirNome)
            if(validarNomeNoLogin === true){
                let index = nomes.indexOf(inserirNome) // pega o indice do nome que deseja excluir
                nomes.splice(index, 1) // excluir só o indice desejado
                senhas.splice(index, 1)
                alert(`${inserirNome}, nomes e senhas foram excluídos com sucesso!`)
                console.log(nomes)
                console.log(senhas)
            }else{
                alert('Não encontramos seus dados de login para excluir')
            }
            break;
        case "4":
            alert('Encerrando o programa...')
            condicao = false
            break;
        default:
            alert('Opção inválida. Tente novamente')
            break;
    }
}
console.log(nomes)
console.log(senhas)
