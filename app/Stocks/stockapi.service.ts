import { Injectable } from '@angular/core';
import {StockComponent} from './stock.component';
import {AppComponent} from '../app.component';
import {Http, Response} from '@angular/http';
import './rxjs-operators';
	@Injectable() 
	export class StockApiService {
		public stocks = [
			
		];

		purchased = [];
		
		constructor(private http: Http) {
			
		}

		//retrieves stock from array
		getStock (symbol : string) {
			console.log('AHHH' + symbol);
			this.purchased.push(symbol);
			this.http.get('http://localhost:8000/stock/' + symbol)
				.map(res => console.log(res))
				.subscribe(stockInfo => console.log(stockInfo))
			for (var i = 0; i < this.stocks.length; i++) {
				if (symbol.toLowerCase() === this.stocks[i].symbol.toLowerCase()) {
					return this.stocks[i];
				}

			}
		}
	}