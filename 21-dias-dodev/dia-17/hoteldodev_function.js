// HOTEL DODEV (03/12 - 09h / 05/12 - 00h)
// - Um hotel deve possuir: id, nome, categoria, endereço e telefone;
// - Uma reserva deve possuir: id, id do hotel, nome do responsável, dia de entrada e dia de saída

// 1° PASSO - Crie 2 arrays, um para guardar hotéis e um para reservas
let hoteis = [];
let reservas = [];
let idHotel;
let nomeHotel;
let telefoneHotel;
let opcoes;
let contador = 0;

// opções input
function opcao() {
    opcoes = prompt('1. Cadastrar Hotel\n2. Cadastrar Reserva\n3. Reservas do Hotel\n4. Informações de Reserva\n5. Exibir Reservas\n6. Hoteis por Categoria\n7. Atualizar Telefone de Cadastro\n8. Encerrar o programa')
    return opcoes
}

// 2° PASSO - Crie funções para cadastrar um hotel e uma reserva
function cadastrarHotel(idHotel, nomeHotel, categoriaHotel, endereçoHotel, telefoneHotel) {

    // o id não pode ser igual a nenhum outro já existente
    let idValido = false;
    let novoID;

    while (!idValido){
        novoID = Number(prompt('ID do Hotel?'));
        const idJaExiste = hoteis.some(hotel => hotel.idHotel === novoID);

        if(idJaExiste){
            alert(`O ID de Hotel ${novoID} já está cadastrado. Por favor, insira outro.`)
        }else{
            idValido = true;
        }
    }

    nomeHotel = prompt('Nome do Hotel?')
    categoriaHotel = prompt('Categoria do Hotel?')
    endereçoHotel = prompt('Endereço do Hotel:')
    telefoneHotel = Number(prompt('Telefone do Hotel:'))
    hoteis.push({idHotel: novoID, nomeHotel, categoriaHotel, endereçoHotel, telefoneHotel}) 
    //esse {} no push , cria objetos para os parâmetros. Objetos são coleções de pares chave-valor
    // esse idHotel: novoID . Significa que estamos atribuindo o valor da propriedade 'idHotel' como o valor armazenado na variável 'novoID'
    contador++
};

// função para formatar datas brasileiras para o JS entender
function formatarDataBrasileira(dataBrasileira) {
    // Verifica se a data está no formato esperado
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const match = dataBrasileira.match(regex);

    if(!match){
        return null; // retorna nulo se o formato for inválido
    }

    const [_, dia, mes, ano] = match;
    
    return `${ano}-${mes}-${dia}`;
}

function cadastrarReserva(idReserva, idHotel, nomeResponsável, diaEntrada, diaSaida) {
    idReserva = Number(prompt('ID da Reserva? :'))

    //no cadastro de uma reserva, o id do hotel deve ser válido, ou seja, não deve permitir o cadastro de um hotel que não esteja no sistema
    let idHotelValido = false;
    let novoIDHotel;

    while(!idHotelValido){
        novoIDHotel = Number(prompt('ID do Hotel?'));

        const idHotelExiste = hoteis.some(res => res.idHotel === novoIDHotel);

        if(idHotelExiste == false){
            alert(`ID de Hotel ${novoIDHotel} inválido. Não localizamos nenhum hotel com esse ID. Insira outro.`)
        }else{
            idHotelValido = true;
        }
    }

    nomeResponsável = prompt('Nome do Responsável pela Reserva:')
    diaEntrada = prompt('Dia de entrada:')
    diaSaida = prompt('Dia de Saída:')
    const diaEntradaFormatada = formatarDataBrasileira(diaEntrada);
    const diaSaidaFormatada = formatarDataBrasileira(diaSaida);

    if(!diaEntradaFormatada || !diaSaidaFormatada) {
        alert('Por favor, insira datas válidas no formato DIA/MES/ANO.');
        return false
    }

    const dataEntrada = new Date(diaEntradaFormatada);
    const dataSaida = new Date(diaSaidaFormatada);

    //verifica se as datas são válidas
    if(isNaN(dataEntrada) || isNaN(dataSaida)){
        alert('Datas inválidas');
        return false;
    }

    // verifica se a data de entrada é maior ou igual à data de saída
    if(dataEntrada >= dataSaida){
        alert('A data de entrada não pode ser maior ou igual à data de saída.')
        return false;
    }

    reservas.push({idReserva, idHotel: novoIDHotel, nomeResponsável, diaEntrada, diaSaida})
};

// 3° PASSO - Crie uma função que recebe como parâmetro o id do hotel e exibe na tela todos as reservas neste hotel com as seguintes informações: nome do hotel - nome do responsável da reserva - dia de entrada - dia de saída
function exibirInfos1(idHotel) {
    let pos = hoteis.findIndex(item => item.idHotel === idHotel)
    console.log(`Nome do Hotel: ${hoteis[pos].nomeHotel}`)
    console.log(`Nome do Responsável da Reserva: ${reservas[pos].nomeResponsável}`)
    console.log(`Dia de entrada: ${reservas[pos].diaEntrada}`)
    console.log(`Dia de Saída: ${reservas[pos].diaSaida}`)
}

// 4° PASSO - Crie uma função que recebe como parâmetro o id de uma reserva e exibe no console: nome do hotel - endereço - dia de entrada - dia de saída
function exibirInfos2(idReserva) {
    let pos2 = reservas.findIndex(item => item.idReserva === idReserva)
    console.log(`Nome do Hotel: ${hoteis[pos2].nomeHotel}`)
    console.log(`Endereço: ${hoteis[pos2].endereçoHotel}`)
    console.log(`Dia de Entrada: ${reservas[pos2].diaEntrada}`)
    console.log(`Dia de Saída: ${reservas[pos2].diaSaida}`)
}

// 5° PASSO - Crie uma função que recebe como parâmetro o nome de uma pessoa e exibe na tela todas as suas reservas
function reservasUsuario(nomeResponsável) {
    let reservasDoUser = reservas.filter(reserva => reserva.nomeResponsável === nomeResponsável);
    if (reservasDoUser.length > 0) {
        console.log(`Reservas de ${nomeResponsável}:`);
        reservasDoUser.forEach(reserva => {
            console.log(`- ID da Reserva: ${reserva.idReserva}, ID do Hotel: ${reserva.idHotel}, Nome do Responsável: ${reserva.nomeResponsável}, Dia de Entrada: ${reserva.diaEntrada}, Dia de Saída: ${reserva.diaSaida}`)
        })
    }else{
        console.log(`Não foram encontradas reservas para ${nomeResponsável}.`)
    }
}

// 6° PASSO - Crie uma função que recebe como parâmetro uma categoria e retorna um array com todos os hotéis nessa categoria;
function categoriasHoteis(categoriaHotel) {
    let categoriasHoteis = [];
    let filtroCategorias = hoteis.filter(categoria => categoria.categoriaHotel === categoriaHotel);
    if (filtroCategorias.length > 0){
        categoriasHoteis.push(filtroCategorias)
        console.log(categoriasHoteis)
    }else{
        console.log(`Não foram encontradas nenhuma categoria ${categoriaHotel}`)
    }
}

// 7° PASSO - Crie uma função que recebe o id de um hotel e um telefone como parâmetro, a função deve atualizar o telefone de cadastro com o número recebido;
function atualizarTelefone(idHotel, telefoneHotel) {
    let filtroHotelTel = hoteis.filter(atualizarNumero => atualizarNumero.telefoneHotel === telefoneHotel);
    let filtroIDHotel = hoteis.filter(verificarIDHotel => verificarIDHotel.idHotel === idHotel);

    if(filtroIDHotel.length > 0){
        if(filtroHotelTel.length > 0){
            let posTelCadastrado = hoteis.findIndex(item => item.telefoneHotel === telefoneHotel)
            console.log(`Esse número já está cadastrado sob Hotel: ${JSON.stringify(hoteis[posTelCadastrado])}`)
        }else{
            const hotelParaAtualizar = hoteis.find(hotel => hotel.idHotel === idHotel);

            // verifica se o hotel foi encontrado
            if(hotelParaAtualizar){
                hotelParaAtualizar.telefoneHotel = telefoneHotel; // atualiza o telefone
                console.log(`Telefone atualizado pra ${telefoneHotel}`)
            }else{
                console.log(`Houve um erro na atualização do telefone`)
            }
        }
    }else{
        console.log('ID Hotel inválido')
    }
}

// 8° PASSO - Crie um fluxo de funcionamento para o algoritmo, o usuário deve poder escolher quando encerrar o programa.
let condicao = true

while (condicao) {
    let opcoesVar = opcao()
    switch (opcoesVar) {
        case "1":
            cadastrarHotel()
            break;
        case "2":
            cadastrarReserva()
            break;
        case "3":
            idHotel = Number(prompt('ID Hotel? :'))
            console.log(`\n${exibirInfos1(idHotel)}`)
            // coloca o prompt do id hotel burro
            break;
        case "4":
            idReserva = Number(prompt('ID da Reserva? :'))
            console.log(`\n${exibirInfos2(idReserva)}`)
            break;
        case "5":
            nomeResponsável = prompt('Nome do Responsável? :')
            console.log(`\n${reservasUsuario(nomeResponsável)}`)
            break;
        case "6":
            categoriaHotel = prompt('Categoria do Hotel? :')
            console.log(`\n${categoriasHoteis(categoriaHotel)}`)  // mostrar por dentro do array , se for possível
            break;
        case "7":
            idHotel = Number(prompt('ID do Hotel: '))
            telefoneHotel = Number(prompt('Insira o telefone atualizado'))
            console.log(`\n${atualizarTelefone(idHotel, telefoneHotel)}`)
            break;
        case "8":
            condicao = false
            alert('Programa encerrado!')
            break;
        default:
            alert('Opção inválida. Tente novamente')
            break;
    }
}
