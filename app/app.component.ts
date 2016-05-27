import { Component } from '@angular/core';
import {StockComponent} from './Stocks/stock.component';
import {StockApiService} from './Stocks/stockapi.service';
@Component({
  selector: 'angular-app',
  directives: [StockComponent],
  template: `<div>
  	<stock *ngFor="let symbol of stockapiservice.purchased"
  	[symbol]="symbol"></stock>
  </div>`
})
export class AppComponent { 
	constructor(private stockapiservice: StockApiService){}
}

