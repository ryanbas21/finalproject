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
var stockticker_component_1 = require('./stockticker.component');
var stockform_component_1 = require('./stockform.component');
var StockComponent = (function () {
    function StockComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], StockComponent.prototype, "symbol", void 0);
    StockComponent = __decorate([
        core_1.Component({
            selector: 'stock',
            directives: [stockticker_component_1.StockTickerComponent, stockform_component_1.StockFormComponent],
            styleUrls: ['app/Stocks/styles/stock-styles.css'],
            template: "\n\t\t<stockticker [symbol]=\"symbol\"></stockticker>\t\t\t\t\n\t\t"
        }), 
        __metadata('design:paramtypes', [])
    ], StockComponent);
    return StockComponent;
}());
exports.StockComponent = StockComponent;
//# sourceMappingURL=stock.component.js.map