const { request, response } = require('express');
const CreateBeerService = require('../services/CreateBeerService');
const DeleteBeerService = require('../services/DeleteBeerService');
const BeersService = require('../services/ListBeersService');
const { listBeerService } = require('../services/ListBeersService');


const UpdateBeerService = require('../services/UpdateBeerService');


const controller = {
    list: (request, response) => {
        const listBeer = listBeerService()
        response.json(listBeer)
    },
    create: (request, response) => {
        const {
            name,
            type,
            note
        } = request.body

        const beer = CreateBeerService.createBeer(
            name,
            type,
            note
        );
        
        return response.json(beer)
    },
    update: (request, response) => {
        const { id } = request.params
        const {
            name,
            type,
            note
        } = request.body;

        const updateBeer = UpdateBeerService.update(
            id,
            name,
            type,
            note
        ) 
        response.json(updateBeer)
    },
    delete: (request, response) => {
       const { id } = request.params
       
       const deleteBeer = DeleteBeerService.delete(id)

       response.send(deleteBeer)
    },
    listName: (request, response) => {
        const { name } = request.query;

        const nameBeer = BeersService.listBeerName(name)

        return response.json(nameBeer)
    },
    listType: (request, response) => {
        const { type } = request.query;

        const typeBeer = BeersService.listBeerType(type)

        return response.json(typeBeer)
    }
}

module.exports = controller