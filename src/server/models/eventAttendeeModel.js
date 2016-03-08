/* Not sure if we still need this model */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventAttendeeSchema = new Schema({
    eventId:    {type: String, required: true},
    attendeeId: {type: String, required: true},
    beaconId:   {type: String}
});

module.exports = mongoose.model('EventAttendee', eventAttendeeSchema);