import {Component, Input} from '@angular/core';
import {StockTickerComponent} from './stockticker.component';
import {StockFormComponent} from './stockform.component';
import {Injectable} from '@angular/core';

@Component({
	selector: 'stock',
	directives: [StockTickerComponent,StockFormComponent],
	
	template: `
		<stockticker [symbol]="symbol"></stockticker>				
		`
})
@Injectable()
export class  StockComponent {
	@Input() symbol: string;
	
	

}