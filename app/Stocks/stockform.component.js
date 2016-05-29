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
var StockFormComponent = (function () {
    function StockFormComponent() {
    }
    __decorate([
        core_1.Input('symbol'), 
        __metadata('design:type', String)
    ], StockFormComponent.prototype, "symbol", void 0);
    StockFormComponent = __decorate([
        core_1.Component({
            selector: 'stockform',
            template: "<div>\n\t\t\t\t<button (click)=\"newForm($event)\">Add Stock</button>\n\t\t\t\t</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], StockFormComponent);
    return StockFormComponent;
}());
exports.StockFormComponent = StockFormComponent;
//# sourceMappingURL=stockform.component.js.map