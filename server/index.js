var express = require ('express');
var PORT = process.env.PORT || 8000;
var cors = require('cors');
var http = require('http');
var app = express();
app.use(cors());
app.get('/stock/:symbol', function (req,res){
	var output = "";
	http.get('http://finance.google.com/finance/info?client=ig&q=' + req.params.symbol, function (data){
		data.on('data', function (chunk){
			output += chunk;
		});
		data.on('end', function(){
			res.send(output);
		});
	});
	
});

app.listen(PORT, 'localhost', function(){
	console.log('app started on ' + PORT);
});
