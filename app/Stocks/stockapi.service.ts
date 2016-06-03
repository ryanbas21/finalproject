import { Injectable } from '@angular/core';
import {StockComponent} from './stock.component';
import {AppComponent} from '../app.component';
import {Http, Response} from '@angular/http';
import './rxjs-operators';
	@Injectable() 
	export class StockApiService {
		symbol: string
		public stocks = [
			 
		];

		purchased = ["",""];
		constructor(private http: Http) {
			console.log(this.symbol);
			http.get('http://localhost:8000/stock/' + this.symbol)
				.map(res => res.json())
				//parameter   //key          
				// .subscribe(stockInfo =>  this.stocks.push(stockInfo))
				.subscribe(stockInfo => console.log(stockInfo))
		}

		getStockInfo(symbol : string) {
			this.purchased.push(symbol);
			let stockLink: string = 'http://localhost:8000/stock/' + symbol;
			//writing logic for get stock search bar
		}
		//retrieves stock from array
		getStock (symbol : string) {
			for (var i = 0; i < this.stocks.length; i++) {
				if (symbol.toLowerCase() === this.stocks[i].symbol.toLowerCase()) {
					return this.stocks[i];
				}

			}
		}
	}