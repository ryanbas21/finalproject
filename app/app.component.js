"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var stock_component_1 = require('./Stocks/stock.component');
var stockapi_service_1 = require('./Stocks/stockapi.service');
var stockform_component_1 = require('./Stocks/stockform.component');
var AppComponent = (function () {
    function AppComponent(stockapiservice) {
        this.stockapiservice = stockapiservice;
    }
    AppComponent.prototype.newForm = function (symbol, $event) {
        $event.preventDefault();
        symbol = symbol.value;
        console.log(symbol);
        this.stockapiservice.getStock(symbol);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'angular-app',
            directives: [stock_component_1.StockComponent, stockform_component_1.StockFormComponent],
            templateUrl: './app/Stocks/html/index.html'
        }), 
        __metadata('design:paramtypes', [stockapi_service_1.StockApiService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map