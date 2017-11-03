const express = require('express');
const fs = require('fs');
const https = require('https');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.sendFile('index.html', { root:  'public' });
});

router.get('/getTrail', function(req, res, next){
	console.log("in getTrail router");

	var result = [];
	https.get('http://api.walmartlabs.com/v1/stores?apiKey=9j6xxgnu89aaswsuz868uzk2&city=' + req.query.q +'&format=json',
	 function(response){
		response.on('data', function(d){
		result += d;
		});
	respons.on('end', function(){
		res.status(200).json(JSON.parse(result));
	})
	})
		
});

module.exports = router;
