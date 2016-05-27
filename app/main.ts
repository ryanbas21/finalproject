import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import {StockApiService} from './Stocks/stockapi.service';
bootstrap(AppComponent, [StockApiService]);
