import { Component } from '@angular/core';
import {StockComponent} from './Stocks/stock.component';
import {StockApiService} from './Stocks/stockapi.service';
import {StockFormComponent} from './Stocks/stockform.component';
@Component({
  selector: 'angular-app',
  directives: [StockComponent,StockFormComponent],
  template: ` 
  <div>
  	<input type="text" name="sym" /><button (click)="newForm($event)">Add Stock</button>
 	 	<br>

  	<stock *ngFor="let symbol of stockapiservice.purchased"
  		[symbol]="symbol"></stock>
  </div>`
})
export class AppComponent { 
	constructor(private stockapiservice: StockApiService){}


}

