var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    name:               {type: String, required: true},
    code:               {type: String, required: true, lowercase: true, trim: true},
    welcomeMessage:     {type: String, required: true},
    date:               {type: Date, required: true},
    location:           {type: String, required: true},
    backgroundImageUrl: {type: String, required: true},
    beaconUuid:         {type: String, required: true},
    beaconMajor:        {type: Number, required: true}
});

module.exports = mongoose.model('Event', eventSchema);