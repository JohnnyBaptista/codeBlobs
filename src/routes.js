const express = require('express');
const GroupController = require('./controllers/GroupController');
const TipoController = require('./controllers/TipoController');

const routes = express.Router();

routes.get('/group', GroupController.index);
routes.post('/group', GroupController.store);

routes.get('/type', TipoController.index);
routes.post('/type', TipoController.store);

module.exports = routes;