const ListBeersService = require('./ListBeersService');

const DeleteBeerService = {
    delete: (name) => {
        const beers = ListBeersService.listBeerService()
        const beerIndex = beers.findIndex(item => item.name === (name))
        
        if(beerIndex === -1) {
            return { erro: "cerveja não encontrada"}
        }
        beers.splice(beerIndex, 1)

        return { mensagem: "cerveja removida com sucesso!"}
    }   
}

module.exports = DeleteBeerService