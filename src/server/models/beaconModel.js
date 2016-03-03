var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var beaconSchema = new Schema({    
    minor: String,
    name: String
});

module.exports = mongoose.model('Beacon', beaconSchema);