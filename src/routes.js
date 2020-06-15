const { Router } = require('express');

const OrderController = require('./controllers/OrderController');

const routes = new Router();

routes.post('/orders', OrderController.store);
routes.get('/orders', OrderController.index);

module.exports = routes;
