import {Component, Input} from '@angular/core';
import {StockApiService} from './stockapi.service';

@Component({
	selector: 'stockticker',
	template: `<div>
					{{stockData.name}}
					{{stockPrice}}
					</div>
				`
})

export class StockTickerComponent {
	@Input('symbol') symbol : string;
	stockData: Object;
	stockPrice: Object;
	
	constructor(private stockapi: StockApiService){
	
	}
	ngOnInit () {
		this.stockData = this.stockapi.stocks[this.symbol];
		//prints out stock buy price 
		this.stockPrice = this.stockapi.stocks.nflx.buyPrice;

		console.log(this.symbol, this.stockapi.stocks.nflx.buyPrice);
		
	}
	
}