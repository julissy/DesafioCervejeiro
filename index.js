let readLine = require('readline-sync');
let listaCervejas = require('./listaCervejas');
let adcCerveja = require('./adcCerveja');

// Desafio Cervejeiro
let opcao = readLine.question(
    `1 - Lista das cervejas\n 
    2 - Adicionar uma cerveja\n
    3 - Ver uma cerveja\n
    4 - Sair\n

    Informe a opcao: `)

while (opcao != 4) {
    switch (parseInt(opcao)) {
        case 1:
            console.log(listaCervejas);
            break
        case 2:    
            adcCerveja
            break;  
    }
    opcao = readLine.question(
    `1 - Lista das cervejas\n 
    2 - Adicionar uma cerveja\n
    3 - Ver uma cerveja\n
    4 - Sair\n

    Informe a opcao: `)
}

