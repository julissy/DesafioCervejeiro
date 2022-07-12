const BeersService = require('./ListBeersService');

const UpdateBeerService = {
    update: (
        id,
        name,
        type,
        note
    ) => {
        const beers = BeersService.listBeerService()
        const beerIndex = beers.findIndex(item => item.id === (id))
        const beerFilter = beers.find(
            item => item.name === (beerIndex.name) && item.type === (beerIndex.type))

        if (beerIndex === -1) {
            return { erro: "Cerveja não encontrada" }
        }

        if (note < 1 || note > 5) {
            return {
                sucess: false,
                message: "Digite uma nota entre 1 e 5"
            }
        }
        
        beers[beerIndex] = {
            id,
            name,
            type,
            note
        }
        if (beerFilter === undefined) {
            return {
                sucess: true,
                message: beers[beerIndex]
            }
        }
        return {
            sucess: false,
            message: "Essa cerveja já está cadastrada"
        }


    }

}

module.exports = UpdateBeerService