var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var attendeeSchema = new Schema({
    firstName: String,
    lastName: String,
    company: String,
    email: String,
    isNeudesicEmployee: Boolean,
    bio: String,
    headshotUrl: String
});

module.exports = mongoose.model('Attendee', attendeeSchema);