// 1° PASSO - Crie uma classe Livro com as seguintes propriedades

class Livro {
    Titulo
    Autor
    Editora
    AnoPublicacao
    Disponibilidade

    // 2° PASSO - Crie um método construtor para a classe Livro que recebe como parâmetro as informações que serão atribuídas as propriedades, com exceção de "Disponibilidade" que deve ter por padrão o valor "true" quando o objeto for criado
    constructor(titulo, autor, editora, anoPublicacao) {
        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora
        this.AnoPublicacao = anoPublicacao
        this.Disponibilidade = true;
    }
}

// 3° PASSO - Crie alguns objetos da classe Livro e adicione-os em um array;
let arrayLivros = [];
let disponibilidade = this.Disponibilidade;

arrayLivros.push(new Livro('Café com Deus pai', 'Junior Rostirola', 'Gente', 2024))
arrayLivros.push(new Livro('O poder da autorresponsabilidade', 'Paulo Vieira', 'Alta Books', 2024))
arrayLivros.push(new Livro('As 48 leis do poder', 'Robert Greene', 'Record', 2012))
arrayLivros.push(new Livro('A psicologia financeira', 'Morgan Housel', 'Planeta', 2015))
arrayLivros.push(new Livro('Primeiro Milhão', 'Raiam Santos', 'Kobe', 2023))

//function CadastrarLivro() {
    //titulo = prompt('Qual o nome do livro?')
    // = prompt('Quem é o autor?')
    //editora = prompt('Qual é a editora/empresa que publicou o livro?')
    //anoPublicacao = prompt('Qual o ano de publicação?')
    //let objetoLivro = new Livro(titulo, autor, editora, anoPublicacao, disponibilidade)
    //arrayLivros.push(objetoLivro)
//}

// 4° PASSO - Crie uma classe Biblioteca com as seguintes propriedades
class Biblioteca {
    Nome 
    Endereco
    Telefone
    AcervoLivros = [];

    // 5° PASSO - Crie um método construtor para a classe Biblioteca que deve receber como parâmetro as informações que serão atribuídas as propriedades, a propriedade Acervo de Livros deve receber um array;
    constructor(nome, endereco, telefone) {
        this.Nome = nome;
        this.Endereco = endereco;
        this.Telefone = telefone;
    }

    // 6° PASSO - Adicione na classe Biblioteca um método para buscar um livro específico, deve passar como parâmetro o nome do livro e exibir no console todas as informações de um livro;
    static BuscarLivros(NomeLivro){
        // exibir no console todas as informações de um livro , através do objeto
        let posNomeLivro = arrayLivros.findIndex(i => i.Titulo === NomeLivro);
        console.log(arrayLivros[posNomeLivro])
    }

    // 7° PASSO - Adicione na classe Biblioteca um método de empréstimo de um livro, deve ser passado como parâmetro o nome do livro, então verificar a disponibilidade e se estiver disponível retornar true e trocar o valor da propriedade do livro para false, se não estiver disponível retornar false
    static EmprestimoLivro(NomeLivro){
        let posNomeLivro2 = arrayLivros.findIndex(item => item.Titulo === NomeLivro);
        if(arrayLivros[posNomeLivro2].Disponibilidade == true){
            console.log(`Ok! O livro '${NomeLivro}' está disponível para lhe emprestar!`)
            return arrayLivros[posNomeLivro2].Disponibilidade = false
        }else {
            console.log(`O livro '${NomeLivro}' não está disponível para ser emprestado.`)
            return false
        }
    }

    // 8° PASSO - Adicione na classe Biblioteca um método de devolução de um livro, deve ser passado como parâmetro o nome do livro, então trocar o valor da propriedade de disponibilidade desse livro para true;
    static DevolucaoLivro(NomeLivro){
        let posNomeLivro3 = arrayLivros.findIndex(i => i.Titulo === NomeLivro);
        console.log(`Ok. O livro '${NomeLivro}' foi devolvido, Obrigado!`)
        return arrayLivros[posNomeLivro3].Disponibilidade = true
    }

}

// 9° PASSO - Crie um objeto da classe Biblioteca e chame seus métodos
let objetoBiblioteca = new Biblioteca('Biblioteca Dodev', '971798982', 'Rua Crato')
Biblioteca.BuscarLivros('As 48 leis do poder')
Biblioteca.EmprestimoLivro('A psicologia financeira')
Biblioteca.DevolucaoLivro('A psicologia financeira')