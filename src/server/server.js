var http = require('http');
var express = require('express');
var route = require('./routes');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');

app.use('/api', route);

app.use(cors());

app.use(bodyParser.json());

app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", 'authorization, content-type');
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
});

app.get('/', (req, res) => {
    res.send('It works');
});

const PORT = 3000;


// app.listen(port, (req, res) => {
//     console.log('Server is running on port' + port);
// });

// var server = app.listen(process.env.PORT || '8080', function() {
//     console.log('App listening on port %s', server.address());
// });


// Acheiving cors with Node HTTP Server
var server;
server = http.createServer(function(req,res){
	// Set CORS headers
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
	if ( req.method === 'OPTIONS' ) {
		res.writeHead(200);
		res.end();
		return;
	}
});

server.listen(8080, () => {
    console.log("server just ran on 8080");
});