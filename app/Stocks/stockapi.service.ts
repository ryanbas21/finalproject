import { Injectable } from '@angular/core';
import {StockComponent} from './stock.component';
import {AppComponent} from '../app.component';
import {Http, Response} from '@angular/http';
import './rxjs-operators';
	@Injectable() 
	export class StockApiService {
		symbol: string
		public stocks = [
			{
				symbol: this.symbol,
				Company: this.company, //company data from node
				buyPrice: this.price ,//price from node,
				sellprice: this.price, //price from node on day sold runs onclick of sold button


			}

			 
		];

		purchased = ["",""];
		
		constructor(private http: Http) {
			http.get('http://localhost:8000/stock/' + this.symbol)
				.map(res => console.log(res))
				.subscribe(stockInfo => console.log(stockInfo))
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