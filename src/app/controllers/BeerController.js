const { request, response } = require('express');
const CreateBeerService = require('../services/CreateBeerService');
const DeleteBeerService = require('../services/DeleteBeerService');
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
        const newListBeer = listBeerService()
        newListBeer.push(beer)
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
    }

}

module.exports = controller