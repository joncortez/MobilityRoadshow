var express = require('express');

var routes = function(Event) {
    var router = express.Router();
    var controller = require('../controllers/eventController.js')(Event);
    
    router.route('/')
        .post(controller.post)
        .get(controller.get);
    
    router.route('/:id')
        .put(controller.put)
        .delete(controller.delete)
        .get(controller.getById);
    
    router.route('/findByCode/:code')
        .get(controller.getByCode);
        
    return router;
};

module.exports = routes;