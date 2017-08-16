"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ChildComponent = (function () {
    function ChildComponent() {
        this.childEvent = new core_1.EventEmitter();
        this.childEvent1 = new core_1.EventEmitter();
    }
    ChildComponent.prototype.onChange = function (value) {
        this.childEvent.emit(value);
    };
    ChildComponent.prototype.onChange1 = function (value) {
        this.childEvent1.emit(value);
    };
    return ChildComponent;
}());
ChildComponent = __decorate([
    core_1.Component({
        selector: '<child-temp>',
        template: "\n    \n            <h2>Child component !</h2>\n            <label>Enter child text</label>\n            <input type=\"text\" #childtext (keyup)=\"onChange(childtext.value)\">\n            <input type=\"text\" #childtext1 (keyup)=\"onChange1(childtext1.value)\">\n            <label>Parent text is: </label>{{parentData}}\n    \n    ",
        inputs: ['parentData'],
        outputs: ['childEvent', 'childEvent1']
    })
], ChildComponent);
exports.ChildComponent = ChildComponent;
//# sourceMappingURL=child-component.js.map