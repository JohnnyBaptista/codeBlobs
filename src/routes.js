const express = require('express');
const GroupController = require('./controllers/GroupController');
const TypeController = require('./controllers/TypeController');
const MemberController = require('./controllers/MemberController');
const MeetController = require('./controllers/MeetController');
const PeriodController = require('./controllers/PeriodController');
const AttendanceController = require('./controllers/AttendanceController');

const routes = express.Router();

routes.get('/groups', GroupController.index);
routes.post('/groups', GroupController.store);

routes.get('/type', TypeController.index);
routes.post('/type', TypeController.store);
routes.patch('/type', TypeController.update);

routes.get('/member', MemberController.index);
routes.post('/member', MemberController.store);
routes.patch('/member', MemberController.update);

routes.get('/meet', MeetController.index);
routes.post('/meet', MeetController.store);

routes.get('/period', PeriodController.index);
routes.post('/period', PeriodController.store);

routes.get('/attendance', AttendanceController.index);
routes.post('/attendance', AttendanceController.store);

module.exports = routes;