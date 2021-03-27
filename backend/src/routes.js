const { Router } = require('express');

//Controllers
const ItemController = require('./app/Controllers/ItemController');

const routes = new Router();

routes.get('/', ItemController.index);
routes.post('/add-item', ItemController.store);
routes.post('/update-item/:id', ItemController.update);
routes.delete('/remove-item/:id', ItemController.delete);

module.exports = routes;