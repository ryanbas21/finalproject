import {Component, Input} from '@angular/core';
import {StockApiService} from './stockapi.service';

@Component({
	selector: 'stockticker',
	templateUrl: './app/Stocks/html/stocktickercomponent.html'
})

export class StockTickerComponent {
	@Input('symbol') symbol : string;
	stockData: Object = {
		"id": ""
		, "t": ""
		, "e": ""
		, "l": ""
		, "l_fix": ""
		, "l_cur": ""
		, "s": ""
		, "ltt": ""
		, "lt": ""
		, "lt_dts": ""
		, "c": ""
		, "c_fix": ""
		, "cp": ""
		, "cp_fix": ""
		, "ccol": ""
		, "pcls_fix": ""
	}

	
	
	
	constructor(private stockapi: StockApiService){}
	
	ngOnInit() {
		this.stockapi.getStockInfo(this.symbol)
			.map((res) => res.json())
			.subscribe((res) => {

				this.stockData = res[0];
			})

	}
}