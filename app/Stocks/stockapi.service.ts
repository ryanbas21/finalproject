import { Injectable } from '@angular/core';



@Injectable() 
export class StockApiService {
	stocks = {
		nflx: {
			name: 'Netflix',
			
			buyPrice: 200,
		},
		goog: {
			name: 'Google',
		
			buyPrice: 700
		}



	};
	purchased = ["nflx","goog"];
	
}