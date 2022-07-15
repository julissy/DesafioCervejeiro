const { response } = require('express');
const BeerModel = require('../models/BeerModel');
const { v4 } = require('uuid')

let listBeers = new Array(new BeerModel(v4(), 'TIGER', 'LAGER', '4'));

const BeersService = {
    listBeerService: () => {
        return listBeers;
    },
    searchBeers: (beerNameOrType) => {
        const beers = BeersService.listBeerService()
        let listResult = []
        if (beerNameOrType.name != undefined && beerNameOrType.type != undefined) {
            listResult = beers.filter(item => item.name == beerNameOrType.name.toUpperCase()
                && item.type == beerNameOrType.type.toUpperCase())
            return returnList(listResult)
        } else if (beerNameOrType.type != undefined) {
            listResult = beers.filter(item => item.type == (beerNameOrType.type.toUpperCase()))
            return returnList(listResult)
        } else if (beerNameOrType.name != undefined) {
            listResult = beers.filter(item => item.name == (beerNameOrType.name.toUpperCase()))
            return returnList(listResult)
        } else {
            return falseReturn()
        }
    }
}
function falseReturn() {
    return {
        sucess: false,
        message: "beer not found"
    }
}

function returnList(myList) {
    if (myList.length > 0) {
        return {
            sucess: true,
            message: myList
        }
    }
    return falseReturn()
}
module.exports = BeersService