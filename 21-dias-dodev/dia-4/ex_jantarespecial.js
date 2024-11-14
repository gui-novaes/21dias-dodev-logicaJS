const estaComFome = prompt('Você está com fome? (sim/não)')
const temDinheiro = prompt('Você tem dinheiro? (sim/não)')
const restauranteAberto = prompt('O restaurante está aberto? (sim/não)')

if(estaComFome === 'não' || temDinheiro === 'não'){
    console.log('Hoje a janta será em casa')
}else if(estaComFome === 'sim' && temDinheiro === 'sim' && restauranteAberto === 'não'){
    console.log('Peça um delivery!')
}else if(estaComFome === 'sim' && temDinheiro === 'sim' && restauranteAberto === 'sim'){
    console.log('Hoje o jantar será no seu restaurante preferido!')
}