// 1° PASSO - Crie uma classe Carro com as seguintes propriedades:
// Nome - qual a equipe do carro Ferrari, Mercedes. McLaren, etc;
// Potencia - número de cavalos de potência do carro;
// VelocidadeMAxima - qual a maior velocidade que o carro pode alcançar;
// Aceleracao - o tempo em segundos que o arro leva para ir de 0 a 100 km/h
class Carro {
    Nome 
    Potencia
    VelocidadeMaxima
    Aceleracao

    constructor(nome, potencia, velocidadeMaxima, aceleracao) {
        this.Nome = nome
        this.Potencia = potencia
        this.VelocidadeMaxima = velocidadeMaxima
        this.Aceleracao = aceleracao
    }

    // 2° PASSO - Adicione na classe Carro um método que recebe como parâmetro uma distância em metros e calcula o tempo em segundos para percorrer essa distância. Use a seguinte fórmula para o cálculo:
    // resultado = distância / (VelocidadeMaxima / Aceleracao)
    // a função deve retornar esse resultado
    CalcularTempoMedio(distancia){
        let resultado = distancia / (this.VelocidadeMaxima / this.Aceleracao)
        return resultado
    }
}

// 3° PASSO - Crie uma classe Corrida com as seguintes propriedades:
// Nome - nome do local da corrida;
// Tipo - uma corrida pode ser Fórmula 1, Stock Car, Rally, etc;
// Distancia - o total em metros de corrida;
// Participantes - um array de objetos da classe Carro
// Vencedor - qual a equipe que ganhou a corrida
class Corrida {
    Nome 
    Tipo 
    Distancia 
    Vencedor
    Participantes

    constructor(nome, tipo, distancia) {
        this.Nome = nome
        this.Tipo = tipo
        this.Distancia = distancia
        this.Vencedor = ""
        this.Participantes = []
    }

    // 4° PASSO - Adicione na classe Corrida um método que verifica qual foi o carro que completou a corrida em menor tempo, para isso utilize o método criado na classe Carro. Salve o nome do carro que fez o menor tempo na propriedade "Vencedor".
    DefinirVencedor(){
        let menorTempo = this.Participantes[0].CalcularTempoMedio(this.Distancia)
        let vencedor = this.Participantes[0]

        for(let index = 1; index < this.Participantes.length; index++){
            let tempo = this.Participantes[index].CalcularTempoMedio(this.Distancia)
            if (tempo < menorTempo){
                menorTempo = tempo
                vencedor = this.Participantes[index]
            }
        }

        return this.Vencedor = vencedor
    }
    
    // 5° PASSO - Adicione na classe Corrida um método que exibe na tela quem é o vencedor da corrida.
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
corrida.DefinirVencedor()
corrida.ExibirVencedor()