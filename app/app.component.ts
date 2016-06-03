import { Component } from '@angular/core';
import {StockComponent} from './Stocks/stock.component';
import {StockApiService} from './Stocks/stockapi.service';
import {StockFormComponent} from './Stocks/stockform.component';
import {HTTP_PROVIDERS} from '@angular/http';


@Component({
  selector: 'angular-app',
  directives: [StockComponent,StockFormComponent],
  template: ` 
  <div>
  	<input type="text" name="sym" />
  	<button class="btn btn-primary" type="submit" (click)="newForm($event)">Add Stock</button>
 	 <br>
  		<stock *ngFor="let symbol of stockapiservice.purchased"
  		[symbol]="symbol"></stock>
  </div>`
})
export class AppComponent { 
	constructor(private stockapiservice: StockApiService){}
	newForm($event){
    let symbol = $event.target.value;
  }

}

