var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mobilityevents');

var Event = require('./models/eventModel');

var port = process.env.PORT || 3100;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

eventRouter = require('./routes/eventRoutes')(Event);

// eventRouter.route('/events')
//     .get(function(req, res) {
//         Event.find(function(err, events) {
//             if (err)
//                 res.status(500).send(err);
//             else
//                 res.json(events);
//         });
//     });

app.use('/api/events', eventRouter);

app.get('/', function(req, res) {
    res.send('Welcome to the API');
});

app.listen(port, function() {
    console.log('Running on port: ' + port);
});

module.exports = app;