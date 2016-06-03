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
var core_2 = require('@angular/core');
var StockFormComponent = (function () {
    function StockFormComponent(stockapiservice) {
        this.stockapiservice = stockapiservice;
    }
    StockFormComponent.prototype.newForm = function (event) {
        event.preventDefault();
        for (var i = 0; i < this.stockapiservice.purchased.length; i++) {
            console.log(this.stockapiservice.purchased[i]);
        }
    };
    __decorate([
        core_1.Input('symbol'), 
        __metadata('design:type', String)
    ], StockFormComponent.prototype, "symbol", void 0);
    StockFormComponent = __decorate([
        core_1.Component({
            selector: 'stockform',
            template: "<div>\n\t\t\t\t\n\n\t\t\t\t</div>\n\t\t\t\t"
        }),
        core_2.Injectable(), 
        __metadata('design:paramtypes', [stockapi_service_1.StockApiService])
    ], StockFormComponent);
    return StockFormComponent;
}());
exports.StockFormComponent = StockFormComponent;
//# sourceMappingURL=stockform.component.js.map