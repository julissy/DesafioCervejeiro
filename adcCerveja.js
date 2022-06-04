let listaCervejas = require('./listaCervejas');
let perguntas = require('./perguntasAdcCerveja');

let cerveja = perguntas;
let adcCerveja = (cerveja) => listaCervejas.push(cerveja);

console.log(`${cerveja.nome} de tipo ${cerveja.tipo} 
com nota ${cerveja.nota} foi adicionada com sucesso!`);


module.exports = adcCerveja
