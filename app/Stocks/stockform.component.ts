import {Component,Input} from '@angular/core';
import {StockApiService} from './stockapi.service';
import {Injectable} from '@angular/core';
import {StockTickerComponent} from './stockticker.component';
@Component({
	selector: 'stockform',
	template: `<div>
					Current Money: \$\{{money}}

				</div>
				`
})
@Injectable()
export class StockFormComponent {
	@Input('symbol') symbol: string;
	stockData: Object;

	constructor(private stockapiservice: StockApiService){}
	
	
	newForm (event) {
		event.preventDefault(); 
		console.log(this.symbol);
		this.stockapiservice.purchased.push(this.symbol);
		for (var i = 0; i < this.stockapiservice.purchased.length; i++){
			console.log(this.stockapiservice.purchased[i]);

		}
	}
}