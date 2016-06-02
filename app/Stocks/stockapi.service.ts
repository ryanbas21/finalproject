import { Injectable } from '@angular/core';



@Injectable() 
export class StockApiService {
	public stocks = [
		 {
			name: 'Netflix',
			symbol: 'NFLX',
			buyPrice: 200,
		},
		 {
			name: 'Google',
			symbol: 'GOOG',
			buyPrice: 700
		},

		 {
			name: 'Yahoo',
			symbol: 'YAHO',
			buyPrice: 800
		}
	];
	purchased = ["nflx","goog","yaho"];

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