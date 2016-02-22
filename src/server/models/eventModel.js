var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    name: String,
    code: String,
    welcomeMessage: String,
    date: Date,
    location: String,
    backgroundImageUrl: String,
    beaconUuid: String,
    beaconMajor: String
});

module.exports = mongoose.model('Event', eventSchema);