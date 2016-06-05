var express = require ('express');
var PORT = process.env.PORT || 8000;
var http = require('http');
var app = express();
var MarketMuster = require("marketmuster");
var marketmuster = new MarketMuster();
 
var options = {
    datasource: "markitondemand"
}
marketmuster.config(options);
var MarketMuster = require("marketmuster");
var marketmuster = new MarketMuster();
app.get('/', res,req){
marketmuster.getQuotes("TSLA", function(quote){
    console.log(quote.TSLA);
	}
});
app.listen(PORT, 'localhost', function(){
	console.log('app started on ' + PORT);
});
