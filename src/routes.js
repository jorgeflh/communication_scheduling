const routes = require('express').Router();

const SchedulesController = require('./app/controllers/SchedulesController');

routes.post('/schedules', SchedulesController.create);

routes.get("/schedules/:scheduleId", SchedulesController.findOne);

routes.put("/schedules/:scheduleId", SchedulesController.update);

routes.delete("/schedules/:scheduleId", SchedulesController.remove);

module.exports = routes;