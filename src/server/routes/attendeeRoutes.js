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
        
    router.route('/findByEmail/:email')
        .get(controller.getByEmail);
    
    router.route('/findByEvent/:eventId')
        .get(controller.getByEvent);
        
    return router;
};

module.exports = routes;