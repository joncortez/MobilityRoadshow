var _ = require('lodash');
var controller = function(EventAttendee, Event, Attendee, Beacon) {
    
    /* Create */
    var post = function(req, res) {
        var eventAttendee = new EventAttendee(req.body);
        eventAttendee.save(function(err) {
            if (err) {
                res.status(500).send(err);
            } else {
                Event.findById(eventAttendee.eventId, function(err, event) {
                    if (err) {
                        res.status(500).send(err);
                        return;
                    }
                    Attendee.findById(eventAttendee.attendeeId, function(err, attendee) {
                        if (err) {
                            res.status(500).send(err);
                            return;
                        }
                        attendee.eventId = event._id;
                        
                        if (eventAttendee.beaconId) {
                            Beacon.findById(eventAttendee.beaconId, function(err, beacon) {
                                attendee._beacon = beacon._id;
                                attendee.save(function(err) {
                                    if (err) {
                                        res.status(500).send(err);
                                    } else {
                                        res.status(201);
                                        res.send(eventAttendee);
                                    }
                                });
                            });
                        } else {
                            attendee.save(function(err) {
                                if (err) {
                                    res.status(500).send(err);
                                } else {
                                    res.status(201);
                                    res.send(eventAttendee);
                                }
                            });
                        }
                    });
                });
            }
        });
    };
    
    /* Read */
    var get = function(req, res) {
        EventAttendee.find(function(err, eventAttendees) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(eventAttendees);
            }
        });
    };
    
    /* Update */
    var put = function(req, res) {
        EventAttendee.findById(req.params.id, function(err, eventAttendee) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            
            if (eventAttendee) {
                _.merge(eventAttendee, req.body);
                eventAttendee.save(function(err) {
                    if (err)
                        res.status(500).send(err);
                    else
                        res.json(eventAttendee);
                });
            } else {
                res.status(404).send('EventAttendee not found');
            }            
        });
    };
    
    /* Read by Id */
    var getById = function(req, res) {
        EventAttendee.findById(req.params.id, function(err, eventAttendee) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            
            res.json(eventAttendee);
        });
    };
    
    /* Delete */
    var deleteById = function(req, res) {
        EventAttendee.findByIdAndRemove(req.params.id, function(err, eventAttendee) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            
            res.status(204).send('EventAttendee deleted');
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