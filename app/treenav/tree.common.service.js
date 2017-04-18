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
const Subject_1 = require('rxjs/Subject');
const core_1 = require('@angular/core');
const http_1 = require('@angular/http');
let announceService = class announceService {
    constructor(http) {
        this.http = http;
        this.nodeNameAnnounce = new Subject_1.Subject();
        this.nodeAnnounce$ = this.nodeNameAnnounce.asObservable();
    }
    changeNode(nodeName) {
        this.nodeNameAnnounce.next(nodeName);
    }
};
announceService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], announceService);
exports.announceService = announceService;
//# sourceMappingURL=tree.common.service.js.map