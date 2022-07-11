const ListBeersService = require('./ListBeersService');

const UpdateBeerService = {
    update: (
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
        // if (name === ListBeersService.listBeerService(name) && type === ListBeersService.listBeerService(type)) {
        //     return {
        //         sucess: false,
        //         message: "Essa cerveja já está cadastrada"
        //     }
        // }

        const beers = ListBeersService.listBeerService()
        const beerIndex = beers.findIndex(item => item.id == (id))

        if (beerIndex === -1) {
            return { erro: "Cerveja não encontrada" }
        }

        beers[beerIndex] = {
            id,
            name,
            type,
            note
        }
        return {
            sucess: true,
            message: beers[beerIndex]
        }
    }
}

module.exports = UpdateBeerService