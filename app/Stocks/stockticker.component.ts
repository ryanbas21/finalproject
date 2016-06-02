import {Component, Input} from '@angular/core';
import {StockApiService} from './stockapi.service';

@Component({
	selector: 'stockticker',
	template: `<div>
					Symbol: {{symbol}}<br>
					Name: {{stockData.name}}<br>
					Buy Price: {{stockData.buyPrice}}
					<br><br>
				</div>
				`
})

export class StockTickerComponent {
	@Input('symbol') symbol : string;
	stockData: Object;
	
	
	constructor(private stockapi: StockApiService){}
	
	ngOnInit(){
		let newData = this.stockapi.getStock(this.symbol);
		if (newData){
			this.stockData = newData;
		} 
		else {
			this.stockData = {
				name: 'Stock Not Found',
				price: 0
			}
		}

		}
	
	
}