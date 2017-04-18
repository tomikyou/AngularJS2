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
const core_1 = require('@angular/core');
const http_1 = require('@angular/http');
const primeng_1 = require('primeng/primeng');
const forms_1 = require('@angular/forms');
let list2 = class list2 {
    constructor(fb) {
        this.msgs = [];
        this.userform = new forms_1.FormGroup({
            'firstname': new forms_1.FormControl('', forms_1.Validators.required),
            'lastname': new forms_1.FormControl('', forms_1.Validators.required),
            'password': new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6)]),
            'description': new forms_1.FormControl(''),
            'gender': new forms_1.FormControl('', forms_1.Validators.required)
        });
        this.genders = [];
        this.genders.push({ label: 'Select Gender', value: '' });
        this.genders.push({ label: 'Male', value: 'Male' });
        this.genders.push({ label: 'Female', value: 'Female' });
    }
    onSubmit(value) {
        this.submitted = true;
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Submitted' });
    }
    get diagnostic() { return JSON.stringify(this.userform.value); }
};
list2 = __decorate([
    core_1.Component({
        templateUrl: 'app/user/user.component.html',
        selector: 'my-app',
        directives: [primeng_1.InputText, primeng_1.DataTable, primeng_1.Button, primeng_1.Dialog, primeng_1.Column, primeng_1.Header, primeng_1.Footer, primeng_1.Panel, primeng_1.Password, primeng_1.Growl, primeng_1.Dropdown, primeng_1.InputTextarea],
        providers: [http_1.HTTP_PROVIDERS, forms_1.FormGroup, forms_1.REACTIVE_FORM_DIRECTIVES, forms_1.FORM_DIRECTIVES]
    }), 
    __metadata('design:paramtypes', [forms_1.FormBuilder])
], list2);
exports.list2 = list2;
//# sourceMappingURL=user.component.js.map