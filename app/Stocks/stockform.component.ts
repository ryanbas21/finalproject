import {Component,Input} from '@angular/core';
import {StockApiService} from './stockapi.service';

@Component({
	selector: 'stockform',
	template: `<div>
				

				</div>
				`
})

export class StockFormComponent {
	@Input('symbol') symbol: string;
	stockData: Object;

	constructor(private stockapiservice: StockApiService){}

	newForm (event) {
		event.preventDefault(); 
		for (var i = 0; i < this.stockapiservice.purchased.length; i++){
			console.log(this.stockapiservice.purchased[i]);
		}
	}
}