var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var attendeeSchema = new Schema({
    firstName:          {type: String},
    lastName:           {type: String},
    company:            {type: String},
    email:              {type: String, required: true, lowercase: true, trim: true},
    isNeudesicEmployee: {type: Boolean, default: false},
    bio:                {type: String},
    headshotUrl:        {type: String},
    eventId:            {type: String},
    _beacon:            {type: Schema.Types.ObjectId, ref: 'Beacon'}
});

module.exports = mongoose.model('Attendee', attendeeSchema);