var express = require('express');

var routes = function(Beacon) {
    var router = express.Router();
    var controller = require('../controllers/beaconController.js')(Beacon);
    
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