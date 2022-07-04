const Router = require('express')

const controller = require('./app/controllers/BeerController')

const routes = new Router();

routes.post('/beers/:create', controller.create);
routes.get('/beers', controller.list);
routes.put('beers/:id', controller.update);
routes.delete('beers/:id', controller.delete)
module.exports = routes