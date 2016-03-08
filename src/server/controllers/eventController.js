var _ = require('lodash');
var controller = function(Event) {
    
    /* Create */
    var post = function(req, res) {
        var event = new Event(req.body);
        if (req.body.code) {
            event.code = _.toLower(req.body.code);
        }
        event.save(function(err) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(201);
                res.send(event);
            }
        });
    };
    
    /* Read */
    var get = function(req, res) {
        Event.find(function(err, events) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(events);                
            }
        });
    };
    
    /* Update */
    var put = function(req, res) {
        Event.findById(req.params.id, function(err, event) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            
            if (event) {
                _.merge(event, req.body);
                if (req.body.code) {
                    event.code = _.toLower(req.body.code);
                }
                event.save(function(err) {
                    if (err)
                        res.status(500).send(err);
                    else
                        res.json(event);
                });
            } else {
                res.status(404).send('Event not found');
            }            
        });
    };
    
    /* Read by Id */
    var getById = function(req, res) {
        Event.findById(req.params.id, function(err, event) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            if (event) {
                res.json(event);
            } else {
                res.status(404).send('Event not found');
            }
        });
    };
    
    /* Read by Code */
    var getByCode = function(req, res) {
        Event.findOne({code: _.toLower(req.params.code)}, function(err, event) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            if (event) {
                res.json(event);
            } else {
                res.status(404).send('Event not found');
            }
        });
    };
    
    /* Delete */
    var deleteById = function(req, res) {
        Event.findByIdAndRemove(req.params.id, function(err, event) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            
            res.status(204).send('Event deleted');
        });
    };
    
    return {
        post: post,
        get: get,
        put: put,
        getById: getById,
        getByCode: getByCode,
        delete: deleteById
    };
};

module.exports = controller;