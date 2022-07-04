const ListBeersService = require('./ListBeersService');

const UpdateBeerService = {
    update: (
        id,
        name,
        type,
        note
    ) => {
        const beers = ListBeersService.listBeerService()
        const beerIndex = beers.findIndex(item => item.id == (id))
       
        if(beerIndex === -1) {
        return { erro: "Cerveja não encontrada"}
       } 

       beers[beerIndex] = {
        name, 
        type,
        note
       }
       return beers[beerIndex]
    }
}

module.exports = UpdateBeerService