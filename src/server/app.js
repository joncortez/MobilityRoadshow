var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mobilityevents');

var Event = require('./models/eventModel');
var Attendee = require('./models/attendeeModel');
var Beacon = require('./models/beaconModel');
var EventAttendee = require('./models/eventAttendeeModel');

var port = process.env.PORT || 3100;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var eventRouter = require('./routes/eventRoutes')(Event);
app.use('/api/events', eventRouter);

var attendeeRouter = require('./routes/attendeeRoutes')(Attendee);
app.use('/api/attendees', attendeeRouter);

var beaconRouter = require('./routes/beaconRoutes')(Beacon);
app.use('/api/beacons', beaconRouter);

var eventAttendeeRouter = require('./routes/eventAttendeeRoutes')(EventAttendee, Event, Attendee, Beacon);
app.use('/api/eventattendees', eventAttendeeRouter);

app.get('/', function(req, res) {
    res.send('Welcome to the API');
});

app.listen(port, function() {
    console.log('Running on port: ' + port);
});

module.exports = app;