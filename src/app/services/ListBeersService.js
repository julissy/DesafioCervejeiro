const { response } = require('express');
const BeerModel = require('../models/BeerModel');
const { v4 } = require('uuid')

let listBeers = new Array(new BeerModel(v4(), 'TIGER', 'LAGER', '4'));

const BeersService = {
    listBeerService: () => {
        return listBeers;
    },
    listBeerName: (beerName) => {
        const beers = BeersService.listBeerService()
        const beer = beers.filter(item => item.name == (beerName))
        return beer
    },
    listBeerType: (beerType) => {
        const beers = BeersService.listBeerService()
        const beer = beers.filter(item => item.type == (beerType))
        return beer
    },
    searchBeers: (beerNameOrType) => {
        const beers = BeersService.listBeerService()
        const beerFilter = beers.find(
            item => item.name == (beerNameOrType.name) || item.type == (beerNameOrType.type))
        return {
            sucess: true,
            message: beerFilter
        }
    }
}

module.exports = BeersService;