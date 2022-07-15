const { request, response } = require('express');
const CreateBeerService = require('../services/CreateBeerService');
const DeleteBeerService = require('../services/DeleteBeerService');
const BeersService = require('../services/ListBeersService');
const UpdateBeerService = require('../services/UpdateBeerService');


const controller = {
    list: (request, response) => {
        const listBeer = BeersService.listBeerService()
        response.json(listBeer)
    },
    create: (request, response) => {
        const {
            name,
            type,
            note
        } = request.body

        if (name == undefined || name == "") {
            return response.status(400).json({
                message: "Nome é obrigatório"
            })
        }

        if (type == undefined || type == "") {
            return response.status(400).json({
                message: "Tipo é obrigatório"
            })
        }

        if (note == undefined || note == "") {
            return response.status(400).json({
                message: "Nota é obrigatório"
            })
        }
        const beer = CreateBeerService.createBeer(
            name,
            type,
            note
        );

        if (!beer.sucess) {
            return response.status(400).json(beer.message)
        }

        return response.status(200).json(beer.message)
    },
    update: (request, response) => {
        const { id } = request.params
        const {
            name,
            type,
            note
        } = request.body;

        if (name == undefined || name == "") {
            return response.status(400).json({
                message: "Nome é obrigatório"
            })
        }

        if (type == undefined || type == "") {
            return response.status(400).json({
                message: "Tipo é obrigatório"
            })
        }

        if (note == undefined || note == "") {
            return response.status(400).json({
                message: "Nota é obrigatório"
            })
        }

        const updateBeer = UpdateBeerService.update(
            id,
            name.toUpperCase(),
            type.toUpperCase(),
            note
        )
        if (!updateBeer.sucess) {
            return response.status(400).json(updateBeer.message)
        }
        return response.status(200).json(updateBeer.message)
    },
    delete: (request, response) => {
        const { id } = request.params
        const deleteBeer = DeleteBeerService.delete(id)

        response.send(deleteBeer)
    },
    searchBeers: (request, response) => {
        const valueReturn = BeersService.searchBeers(request.query)
        return response.json(valueReturn)
    }
}
module.exports = controller