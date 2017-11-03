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
	var url = 'http://api.walmartlabs.com/v1/stores?apiKey=9j6xxgnu89aaswsuz868uzk2&city=' + req.query.q +'&format=json';
	console.log(url);
	https.get(url, function(response){
		console.log("1");
		response.on('data', function(d){
		console.log("2");
		result += d;
	});
	console.log("3");
	respons.on('end', function(){
		console.log("4");
		res.status(200).json(JSON.parse(result));
	})
	})
		console.log("end");
})

module.exports = router;
