import { Injectable } from '@angular/core';



@Injectable() 
export class StockApiService {
	stocks = {
		nflx: {
			name: 'Netflix',
			
			buyPrice: 200,
		},
		goog: {
			name: 'Google',
		
			buyPrice: 700
		},
		
		yahoo: {
			name: 'Yahoo',
			buyPrice: 800
		}
	};
	purchased = ["nflx","goog","yahoo"];

	getStockInfo(symbol) {
		let stockLink: string = 'finance.google.com/finance/info?client=ig&q=' + symbol;
	}
	
}