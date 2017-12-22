var http = require('http');
var express = require('express');
var route = require('./routes');
var bodyParser = require('body-parser');
var app = express();

app.get('/', (req, res) => {
    res.send('It works');
});

app.use('/api', route);

app.use(bodyParser.json());

const PORT = 8080;


// app.listen(port, (req, res) => {
//     console.log('Server is running on port' + port);
// });

var server = app.listen(process.env.PORT || '8080', function() {
    console.log('App listening on port %s', server.address());
});