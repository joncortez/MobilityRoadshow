var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventAttendeeSchema = new Schema({
    eventId: String,
    attendeeId: String,
    beaconId: String
});

module.exports = mongoose.model('EventAttendee', eventAttendeeSchema);