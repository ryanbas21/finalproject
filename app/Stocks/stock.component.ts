import {Component, Input} from '@angular/core';
import {StockTickerComponent} from './stockticker.component';
import {StockFormComponent} from './stockform.component';


@Component({
	selector: 'stock',
	directives: [StockTickerComponent,StockFormComponent],
	styleUrls: ['app/Stocks/styles/stock-styles.css'],
	template: `<div>
				<div class="row">
					<div class="col-md-15 col-sm-3">
						<profile></profile>
					</div>
		    		<div class="col-md-15 col-sm-3">
		    			{{symbol}}
		    		</div>
		    		<div class="col-md-15 col-sm-3">
						<stockticker 
							[symbol]="symbol"></stockticker>
					</div>
					<div class="col-md-15 col-sm-3">
						<stockform></stockform>
					</div>

		    	</div>
		</div> 
				`
})

export class  StockComponent {
	@Input() symbol: string;
	


}