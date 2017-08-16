"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var USER = (function () {
    function USER() {
    }
    return USER;
}());
exports.USER = USER;
var TemplateFormComponent = (function () {
    function TemplateFormComponent() {
        this.submitted = false;
    }
    TemplateFormComponent.prototype.ngOnInit = function () {
        this.user = {
            uname: '',
            uposition: ''
        };
    };
    TemplateFormComponent.prototype.onSubmit = function () {
        console.log(this.user);
        this.submitted = true;
    };
    Object.defineProperty(TemplateFormComponent.prototype, "diagnostic", {
        get: function () {
            return JSON.stringify(this.user);
        },
        enumerable: true,
        configurable: true
    });
    return TemplateFormComponent;
}());
TemplateFormComponent = __decorate([
    core_1.Component({
        templateUrl: "./templateForm-component.html",
        styleUrls: ["./templateForm.css"]
    })
], TemplateFormComponent);
exports.TemplateFormComponent = TemplateFormComponent;
//# sourceMappingURL=templateForm.component.js.map