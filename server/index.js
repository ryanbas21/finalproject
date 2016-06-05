//setup for express
var express = require ('express');
var app = express();

var config = require('./config.secret'); //require config.secret for cookies
var PORT = process.env.PORT || 8000; //port
//http for requests
var http = require('http');

//setup for MarketMuster
var MarketMuster = require("marketmuster");
var marketmuster = new MarketMuster();
var options = {
    datasource: "yahoo"
}
marketmuster.config(options);

//setup for mongo
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

//setup for express session/body parser
var cookieParser = require('cookie-parser');
var bodyParser = require("body-parser");
var expressSession = require('express-session');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(expressSession({
	secret: config.secret,
	resave: true,
	saveUninitialized: true
}));

//Constructor for the whole Stock Object to save to db
var StockSchema = new mongoose.Schema({
		    symbol: {type:String},
		    name: {type: String},
		    buyPrice: {type:Number},
		    sellPrice: {type:Number}

		});
		//mongo Constructor for Stock to save to db
		var Stock = mongoose.model('Stock',StockSchema);

			StockSchema.pre('save', function (next) {
	    		var self = this;
	    		Stock.find({stock : self.symbol}, function (err, docs) {
			        if (!docs.length){
			            next();
			        }else{                
			 
			            next(new Error("stock not found!"));
			        }
	    		});
			});

//index --main app
app.get('/symbol/:id', function (res,req){
	//sym is parameter for symbol
	//sym is gotten from front-end
	marketmuster.getQuotes(req.params.id, function(quote){
		res.send(sym)
	    console.log(quote.sym);
	});
});

//node listens on server PORT or localhost
app.listen(PORT, 'localhost', function(){
	console.log('app started on ' + PORT);
});
