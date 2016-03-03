var express = require('express');

var routes = function(Attendee) {
    var router = express.Router();
    var controller = require('../controllers/attendeeController.js')(Attendee);
    
    router.route('/')
        .post(controller.post)
        .get(controller.get);
    
    router.route('/:id')
        .put(controller.put)
        .delete(controller.delete)
        .get(controller.getById);
        
    return router;
};

module.exports = routes;