import { Injectable, Http } from '@angular/core';
import {StockComponent} from './stock.component';
import {AppComponent} from '../app.component';
	@Injectable() 
	export class StockApiService {
		public stocks = [
			 
		];

		purchased = ["goog","yaho"];
		constructor(http: Http) {
			http.get('http://localhost:8000/stock/' + symbol)
			// .map(res => res.json())
					   //parameter   //key          
			.subscribe(stockInfo =>  this.stocks.push(stockInfo))
		}

		getStockInfo(symbol) {
			this.purchased.push(symbol);
			let stockLink: string = 'http://localhost:8000/stock/' + symbol;
			//writing logic for get stock search bar
		}
		//retrieves stock from array
		getStock (symbol) {
			for (var i = 0; i < this.stocks.length; i ++) {
				if (symbol.toLowerCase() === this.stocks[i].symbol.toLowerCase()) {
					return this.stocks[i];
				}

			}
		}
	}