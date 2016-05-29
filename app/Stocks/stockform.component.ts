import {Component,Input} from '@angular/core';
import {StockApiService} from './stockapi.service';

@Component ({
	selector: 'stockform',
	template: `<div>
				<button (click)="newForm($event)">Add Stock</button>
				</div>`
})

export class StockFormComponent {
	@Input('symbol') symbol: string;
	stockData: Object;
