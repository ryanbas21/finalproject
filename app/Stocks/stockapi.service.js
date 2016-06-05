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
var http_1 = require('@angular/http');
require('./rxjs-operators');
var StockApiService = (function () {
    function StockApiService(http) {
        this.http = http;
        this.stocks = [];
        this.purchased = [];
    }
    //retrieves stock from array
    StockApiService.prototype.getStock = function (symbol) {
        this.purchased.push(symbol);
        this.http.get('http://localhost:8000/stock/' + symbol)
            .map(function (res) { return console.log(res); })
            .subscribe(function (stockInfo) { return console.log(stockInfo); });
        for (var i = 0; i < this.stocks.length; i++) {
            if (symbol.toLowerCase() === this.stocks[i].symbol.toLowerCase()) {
                return this.stocks[i];
            }
        }
    };
    StockApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], StockApiService);
    return StockApiService;
}());
exports.StockApiService = StockApiService;
//# sourceMappingURL=stockapi.service.js.map