let listaCervejas = require('./listaCervejas');
let perguntas = require('./perguntasAdcCerveja');


let adcCerveja =  function(){ 
    let cerveja = perguntas;
    listaCervejas.push(cerveja);
    return console.log(`${cerveja.nome} de tipo ${cerveja.tipo} 
com nota ${cerveja.nota} foi adicionada com sucesso!`);  
}

module.exports = adcCerveja
