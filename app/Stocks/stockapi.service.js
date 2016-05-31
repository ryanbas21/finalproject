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
var StockApiService = (function () {
    function StockApiService() {
        this.stocks = {
            nflx: {
                name: 'Netflix',
                buyPrice: 200,
            },
            goog: {
                name: 'Google',
                buyPrice: 700
            },
            yahoo: {
                name: 'Yahoo',
                buyPrice: 800
            }
        };
        this.purchased = ["nflx", "goog", "yahoo"];
    }
    StockApiService.prototype.getStockInfo = function (symbol) {
        var stockLink = 'finance.google.com/finance/info?client=ig&q=' + symbol;
    };
    StockApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], StockApiService);
    return StockApiService;
}());
exports.StockApiService = StockApiService;
//# sourceMappingURL=stockapi.service.js.map