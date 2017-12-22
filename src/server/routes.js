var express = require('express');
var router = express.Router();
var https = require('https');

var url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=AIzaSyDyhzJk9x2HV0kkWvRvP_zcmuxah7R1wE4';

router.get('/users', (req, res) => {
    res.send({Sucess: 'Test Run Successful!'});
});

router.get('/getPlaces/:type/:keyword', (request, response) => {
    var type = request.params.type;
    var keyword = request.params.keyword;
    response.setHeader('Content-Type', 'application/json');
    var myUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=43.64111,-79.378664&radius=500&type=' + type + '&keyword='+keyword+'&key=AIzaSyDyhzJk9x2HV0kkWvRvP_zcmuxah7R1wE4';
    let data = '';
    https.get(myUrl, (res) => {

        res.on('data', function(chunk) {
            data += chunk;
        });

        res.on('end', ()=>{
            response.send(data);
        });
    });
    
});

module.exports = router;