import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import {StockApiService} from './Stocks/stockapi.service';
import {HTTP_PROVIDERS} from '@angular/http';
bootstrap(AppComponent, [StockApiService,HTTP_PROVIDERS]);
