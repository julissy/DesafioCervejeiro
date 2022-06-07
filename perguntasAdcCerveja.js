let readLine = require('readline-sync');

let perguntas = {
    nome: readLine.question('Qual o nome da cerveja? '),
    tipo: readLine.question('Qual o tipo de cerveja? '),
    nota: readLine.question('Qual a sua nota para essa cerveja?')
}

module.exports = perguntas
