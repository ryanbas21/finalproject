import {Component, Input} from '@angular/core';
import {StockApiService} from './stockapi.service';

@Component({
	selector: 'stockticker',
	template: '<div>{{stockData.name}}</div>'
})

export class StockTickerComponent {
	@Input('symbol') symbol : string;
	stockData: Object;
	
	constructor(private stockapi: StockApiService){
	
	}
	ngOnInit () {
		console.log(this.stockapi.stocks, this.symbol);
		this.stockData = this.stockapi.stocks[this.symbol];
	}
}