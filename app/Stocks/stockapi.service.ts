import { Injectable } from '@angular/core';
import {StockComponent} from './stock.component';
import {AppComponent} from '../app.component';
import {Http, Response, ResponseOptions, } from '@angular/http';
import './rxjs-operators';
import {Observable} from "rxjs/Rx";
	@Injectable() 
	export class StockApiService {
		
		purchased = [];
		constructor(private http: Http) {}
		
		
		// getStock (symbol: string){
		// 	console.log(this.stocks, symbol);
		// 	for (var i = 0; i < this.stocks.length; i++) {
		// 		if (symbol.toLowerCase() === this.stocks[i].symbol.toLowerCase()) {
		// 			return this.stocks[i];
		// 		}

		// 	}
		// }
		getStockInfo (symbol: string) {
			// 
			return this.http.get('http://localhost:8000/stock/' + symbol);
				
			
	}

}