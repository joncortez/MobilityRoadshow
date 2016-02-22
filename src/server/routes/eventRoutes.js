var express = require('express');

var routes = function(Event) {
    var eventRouter = express.Router();
    var eventController = require('../controllers/eventController.js')(Event);
    
    eventRouter.route('/')
        .post(eventController.post)
        .get(eventController.get);
    
    eventRouter.route('/:id')
        .put(eventController.put)
        .delete(eventController.delete)
        .get(eventController.getById);
        
    // eventRouter.use('/:eventId', function(req, res, next) {
    //     Event.findById(req.params.eventId, function(err, event) {
    //         if (err)
    //             res.status(500).send(err);
    //         else if (event) {
    //             req.event = event;
    //             next();
    //         } else {
    //             res.status(404).send('No event found');
    //         }
    //     });
    // });
    
    return eventRouter;
};

module.exports = routes;