"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var stockapi_service_1 = require('./Stocks/stockapi.service');
var http_1 = require('@angular/http');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [stockapi_service_1.StockApiService, http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map