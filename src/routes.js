const express = require('express');
const GroupController = require('./controllers/GroupController');
const TipoController = require('./controllers/TypeController');
const MemberController = require('./controllers/MemberController');

const routes = express.Router();

routes.get('/groups', GroupController.index);
routes.post('/groups', GroupController.store);

routes.get('/type', TipoController.index);
routes.post('/type', TipoController.store);

routes.get('/member', MemberController.index);
routes.post('/member', MemberController.store);

module.exports = routes;