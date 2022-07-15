const BeerModel = require('../models/BeerModel');
const { v4 } = require('uuid');
const BeersService = require('./ListBeersService');

const CreateBeerService = {
    createBeer: (
        name,
        type,
        note
    ) => {

        if (note < 1 || note > 5) {
            return {
                sucess: false,
                message: "Digite uma nota entre 1 e 5"
            }
        }

        const newBeer = new BeerModel(
            v4(),
            name.toUpperCase(),
            type.toUpperCase(),
            note
        );

        const beers = BeersService.listBeerService()
        const beerFilter = beers.find(
            item => item.name === (newBeer.name) && item.type === (newBeer.type))
        if (beerFilter === undefined) {
            beers.push(newBeer)
            return {
                sucess: true,
                message: newBeer
            }
        }
        return {
            sucess: false,
            message: "Essa cerveja já está cadastrada"
        }
    }
}

module.exports = CreateBeerService