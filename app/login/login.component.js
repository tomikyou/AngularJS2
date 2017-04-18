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
//import {Car} from '../cars/car';
const router_1 = require('@angular/router');
const tree_navigator_service_1 = require('../treenav/tree.navigator.service');
const router_2 = require('@angular/router');
let Applogin = class Applogin {
    constructor(router) {
        this.router = router;
    }
    node() {
        this.router.navigate(['/node']);
    }
};
Applogin = __decorate([
    core_1.Component({
        templateUrl: 'app/login/login.component.html',
        selector: 'my-app',
        directives: [primeng_1.InputText, primeng_1.DataTable, primeng_1.Button, primeng_1.Dialog, primeng_1.Column, primeng_1.Header, primeng_1.Footer, primeng_1.Password, primeng_1.RadioButton, router_1.ROUTER_DIRECTIVES],
        providers: [http_1.HTTP_PROVIDERS, tree_navigator_service_1.NodeService]
    }), 
    __metadata('design:paramtypes', [router_2.Router])
], Applogin);
exports.Applogin = Applogin;
//# sourceMappingURL=login.component.js.map