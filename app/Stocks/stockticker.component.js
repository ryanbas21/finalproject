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
var stockapi_service_1 = require('./stockapi.service');
var StockTickerComponent = (function () {
    function StockTickerComponent(stockapi) {
        this.stockapi = stockapi;
    }
    StockTickerComponent.prototype.ngOnInit = function () {
        var newData = this.stockapi.getStock(this.symbol);
        if (newData) {
            this.stockData = newData;
        }
        else {
            this.stockData = {
                name: 'Stock Not Found',
                price: 0
            };
        }
    };
    __decorate([
        core_1.Input('symbol'), 
        __metadata('design:type', String)
    ], StockTickerComponent.prototype, "symbol", void 0);
    StockTickerComponent = __decorate([
        core_1.Component({
            selector: 'stockticker',
            template: "<div>\n\t\t\t\t\tSymbol: {{symbol}}<br>\n\t\t\t\t\tName: {{stockData.name}}<br>\n\t\t\t\t\tBuy Price: {{stockData.buyPrice}}\n\t\t\t\t\t<br><br>\n\t\t\t\t</div>\n\t\t\t\t"
        }), 
        __metadata('design:paramtypes', [stockapi_service_1.StockApiService])
    ], StockTickerComponent);
    return StockTickerComponent;
}());
exports.StockTickerComponent = StockTickerComponent;
//# sourceMappingURL=stockticker.component.js.map