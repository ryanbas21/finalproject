import {Component, Input} from '@angular/core';
import {StockTickerComponent} from './stockticker.component';
import {StockFormComponent} from './stockform.component';


@Component({
	selector: 'stock',
	directives: [StockTickerComponent,StockFormComponent],
	styleUrls: ['app/Stocks/styles/stock-styles.css'],
	template: `
		<stockticker [symbol]="symbol"></stockticker>				
		`
})

export class  StockComponent {
	@Input() symbol: string;
	
	

}