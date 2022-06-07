let listaCervejas = require('./listaCervejas');
const readLine = require('readline-sync');
let adcCerveja =  function(){ 
    let cerveja = {
        nome: readLine.question('Qual o nome da cerveja? '),
        tipo: readLine.question('Qual o tipo de cerveja? '),
        nota: readLine.question('Qual a sua nota para essa cerveja?')
    }
    listaCervejas.push(cerveja);
    console.log(`${cerveja.nome} de tipo ${cerveja.tipo} 
com nota ${cerveja.nota} foi adicionada com sucesso!`);  
}
console.log('qualquer coisa')
module.exports = adcCerveja
