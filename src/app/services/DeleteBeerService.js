const ListBeersService = require('./ListBeersService');

const DeleteBeerService = {
    delete: (id) => {
        const beers = ListBeersService.listBeerService()
        const beerIndex = beers.findIndex(item => item.id === (id))
        
        if(beerIndex === -1) {
            return { erro: "cerveja não encontrada"}
        }
        beers.splice(beerIndex, 1)

        return { mensagem: "cerveja removida com sucesso!"}
    }   
}

module.exports = DeleteBeerService