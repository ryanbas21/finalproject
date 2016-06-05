import { Component } from '@angular/core';
import {StockComponent} from './Stocks/stock.component';
import {StockApiService} from './Stocks/stockapi.service';
import {StockFormComponent} from './Stocks/stockform.component';
import {HTTP_PROVIDERS} from '@angular/http';


@Component({
  selector: 'angular-app',
  directives: [StockComponent,StockFormComponent],
  templateUrl:'./app/Stocks/html/index.html'
})
export class AppComponent { 
	constructor(private stockapiservice: StockApiService){}
	newForm(symbol){
    	symbol = symbol.value;
		this.stockapiservice.getStock(symbol);

  }

}

