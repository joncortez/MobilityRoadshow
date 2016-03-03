var _ = require('lodash');
var controller = function(Beacon) {
    
    /* Create */
    var post = function(req, res) {
        var beacon = new Beacon(req.body);
        beacon.save(function(err) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(201);
                res.send(beacon);
            }
        });
    };
    
    /* Read */
    var get = function(req, res) {
        Beacon.find(function(err, beacons) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(beacons);                
            }
        });
    };
    
    /* Update */
    var put = function(req, res) {
        Beacon.findById(req.params.id, function(err, beacon) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            
            if (beacon) {
                _.merge(beacon, req.body);
                beacon.save(function(err) {
                    if (err)
                        res.status(500).send(err);
                    else
                        res.json(beacon);
                });
            } else {
                res.status(404).send('Beacon not found');
            }            
        });
    };
    
    /* Read by Id */
    var getById = function(req, res) {
        Beacon.findById(req.params.id, function(err, beacon) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            
            res.json(beacon);
        });
    };
    
    /* Delete */
    var deleteById = function(req, res) {
        Beacon.findByIdAndRemove(req.params.id, function(err, beacon) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            
            res.status(204).send('Beacon deleted');
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