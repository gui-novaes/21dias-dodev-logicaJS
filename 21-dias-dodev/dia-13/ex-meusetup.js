class Computador {
    Tipo
    Processador
    Vídeo
    Armazenamento
    MemoriaRam
    SSD
    constructor(tipo, processador, video, armazenamento, memoriaram, ssd){
        this.Tipo = tipo
        this.Processador = processador
        this.Vídeo = video
        this.Armazenamento = armazenamento
        this.MemoriaRam = memoriaram
        this.SSD = ssd
    }

    apresentar(){
        console.log(`Tipo: ${this.Tipo}`)
        console.log(`Processador: ${this.Processador}`)
        console.log(`Vídeo: ${this.Vídeo}`)
        console.log(`Armazenamento: ${this.Armazenamento}`)
        console.log(`Memória RAM: ${this.MemoriaRam}`)
        console.log(`SSD: ${this.SSD}`)
    }
}

let tipo = prompt('Tipo: [desktop/notebook]')
let processador = prompt('Processador: [ex: Ryzen5]')
let video = prompt('Vídeo: [Integrado ou Dedicado]')
let armazenamento = Number(prompt('Armazenamento: [número em GB de memória] '))
let memoriaram = Number(prompt('Memória Ram: [número em GB de memória] '))
let ssd = prompt('Possui SSD? [sim/não]')

let pc = new Computador(tipo, processador, video, armazenamento, memoriaram, ssd)  // criação do objeto 'pc' chamando a classe 'Computador'
