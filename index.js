const readLine = require('readline-sync');
let listaCervejas = require('./listaCervejas');
let adcCerveja = require('./adcCerveja');

// Desafio Cervejeiro
function menu(){
    console.log('1 - Lista das cervejas')
    console.log('2 - Adicionar uma cerveja')
    console.log('3 - Ver uma cerveja')
    console.log('4 - Sair')
    return readLine.question('Informe a opcao: ')
}

let opcao = menu()

while (opcao != 4) {
    switch (parseInt(opcao)) {
        case 1:
            console.log(listaCervejas);
            break;
        case 2:    
            adcCerveja();
            break;  
    }
    opcao = menu()
}

