// 1° PASSO - Crie uma classe Carro com as seguintes propriedades
class Carro {
    Nome 
    Potencia 
    VelocidadeMaxima
    Aceleracao

    constructor(nome, potencia, velocidademaxima, aceleracao){
        this.Nome = nome
        this.Potencia = potencia
        this.VelocidadeMaxima = velocidademaxima
        this.Aceleracao = aceleracao
    }

    // 2° PASSO - Adicione na classe Carro um método que recebe como parâmetro uma distância em metros e calcula o tempo em segundos para percorrer essa distância. Use a seguintes fórmula para o cálculo
    // resultado = distância/(VelocidadeMaxima/Aceleracao)
    calculoVelocidade(distancia){
        let resultado = distancia/(this.VelocidadeMaxima/this.Aceleracao)
        return resultado
    }
}

// 3° PASSO - Crie uma classe Corrida com as seguintes propriedades:
class Corrida{
    Nome
    Tipo 
    Distancia 
    Participantes
    Vencedor

    constructor(nome, tipo, distancia){
        this.Nome = nome
        this.Tipo = tipo
        this.Distancia = distancia
        this.Participantes = []
        this.Vencedor = ""
    }

    // 4° PASSO - Adicione na classe Corrida um método que verifica qual foi o carro que completou a corrida em menor tempo, para isso utilize o método criado na classe Carro. Salve o nome do carro que fez o menor tempo na propriedade
    // 5° PASSO - Adicione na classe Corrida um método que exibe na tela quem é o vencedor da corrida.
    vencedorCorrida(){
        let menorTempo = this.Participantes[0].calculoVelocidade(this.Distancia)
        let vencedor = this.Participantes[0]
        
        for(let index = 1; index < this.Participantes.length; index++){
            let tempo = this.Participantes[index].calculoVelocidade(this.Distancia)
            if (tempo < menorTempo){
                menorTempo = tempo
                vencedor = this.Participantes[index]
            }
        }

        return this.Vencedor = vencedor
    }
    
    ExibirVencedor(){
        alert(`O vencedor é: ${this.Vencedor.Nome}`)
    }
}

// 6° PASSO - Crie um objeto da classe Corrida e preencha a propriedade Participantes com alguns objetos da classe Carro.
let corrida = new Corrida("Monza", "Fórmula 1", 60000)

corrida.Participantes[0] = new Carro("Kicks", 120, 160, 5)
corrida.Participantes[1] = new Carro("Marea", 210, 200, 9)
corrida.Participantes[2] = new Carro("Peugeot 206", 300, 220, 10)

// 7° PASSO - Chame o método para verificar quem fez o menor tempo e por fim o método que exibe o vencedor.
corrida.vencedorCorrida()
corrida.ExibirVencedor()