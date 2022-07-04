const BeerModel = require('../models/BeerModel');
const { v4 } = require('uuid');
const ListBeersService = require('./ListBeersService');

const CreateBeerService = {
    createBeer: (
        name,
        type,
        note
    ) => {
        const newBeer = new BeerModel(
            v4(),
            name,
            type,
            note
        );
        const beers = ListBeersService.listBeerService()
        beers.push(newBeer)
        return newBeer;
    }
}

module.exports = CreateBeerService