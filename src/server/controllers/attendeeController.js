var _ = require('lodash');
var controller = function(Attendee) {
    
    /* Create */
    var post = function(req, res) {
        var attendee = new Attendee(req.body);
        attendee.save(function(err) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(201);
                res.send(attendee);
            }
        });
    };
    
    /* Read */
    var get = function(req, res) {
        Attendee.find(function(err, attendees) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(attendees);                
            }
        });
    };
    
    /* Update */
    var put = function(req, res) {
        Attendee.findById(req.params.id, function(err, attendee) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            
            if (attendee) {
                _.merge(attendee, req.body);
                attendee.save(function(err) {
                    if (err)
                        res.status(500).send(err);
                    else
                        res.json(attendee);
                });
            } else {
                res.status(404).send('Attendee not found');
            }            
        });
    };
    
    /* Read by Id */
    var getById = function(req, res) {
        Attendee.findById(req.params.id, function(err, attendee) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            
            res.json(attendee);
        });
    };
    
    /* Delete */
    var deleteById = function(req, res) {
        Attendee.findByIdAndRemove(req.params.id, function(err, attendee) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            
            res.status(204).send('Attendee deleted');
        });
    };
    
    return {
        post: post,
        get: get,
        put: put,
        getById: getById,
        delete: deleteById
    };
};

module.exports = controller;