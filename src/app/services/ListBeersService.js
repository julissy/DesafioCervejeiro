const { response } = require('express');
const BeerModel = require('../models/BeerModel');
const { v4 } = require('uuid')

const BeersService = {
    listBeerService: () => {
        const beer1 = new BeerModel(
            v4(),
            'tiger',
            'lager',
            '4'
        )
        return [beer1]
    }
}

module.exports = BeersService;