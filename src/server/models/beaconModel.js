var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var beaconSchema = new Schema({    
    minor:  {type: Number, required: true},
    name:   {type: String, required: true}
});

module.exports = mongoose.model('Beacon', beaconSchema);