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
const user_list_service_1 = require('./user-list.service');
const tree_common_service_1 = require('../treenav/tree.common.service');
//import {listenService} from '../treenav/tree.common.listener';
const common_1 = require('@angular/common');
const router_1 = require('@angular/router');
let AppComponent = class AppComponent {
    constructor(carService, announceService, location, router) {
        this.carService = carService;
        this.announceService = announceService;
        this.location = location;
        this.router = router;
        this.car = new PrimeCar();
    }
    ngOnInit() {
        //####################################### router2.0
        console.log('path:' + this.path);
        this.carService.getCarsMedium("Ricoh staff").then(cars => this.cars = cars);
        this.path = this.location.path();
        if (this.path == "/node/Team") {
            this.carService.getCarsMedium("Team").then(cars => this.cars = cars);
            console.log('path:' + this.path);
            this.label = "Team";
        }
        else if (this.path == "/node/Ricoh%20staff") {
            this.carService.getCarsMedium("Ricoh staff").then(cars => this.cars = cars);
            console.log('path:' + this.path);
            this.label = "Staff";
        }
        else if (this.path == "/node/department") {
            this.router.navigate(['department']);
        }
        this.nameNodeListener();
        //########################################
        //this.carService.getCarsMedium("Ricoh staff").then(cars => this.cars = cars);
        //this.flgLoca=this.location.path();
        // console.log('flgLoca:'+this.flgLoca);
        // console.log('listen:'+this.flgListen);
        // console.log('path:'+this.location.path());
        //console.log('ll:'+this.ll);
    }
    showDialogToAdd() {
        this.newCar = true;
        this.car = new PrimeCar();
        this.displayDialog = true;
    }
    save() {
        if (this.newCar)
            this.cars.push(this.car);
        else
            this.cars[this.findSelectedCarIndex()] = this.car;
        this.car = null;
        this.displayDialog = false;
    }
    delete() {
        this.cars.splice(this.findSelectedCarIndex(), 1);
        this.car = null;
        this.displayDialog = false;
    }
    onRowSelect(event) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    }
    cloneCar(c) {
        let car = new PrimeCar();
        for (let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }
    findSelectedCarIndex() {
        return this.cars.indexOf(this.selectedCar);
    }
    nameNodeListener() {
        this.subscription = this.announceService.nodeAnnounce$.subscribe(nodeName => {
            this.carService.getCarsMedium(nodeName).then(cars => this.cars = cars);
            //	 this.Listen=nodeName;
            //	 console.log('listener:'+this.Listen);
            this.label = nodeName;
        });
    }
};
AppComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/userlist/user-list.component.html',
        selector: 'component',
        directives: [primeng_1.InputText, primeng_1.DataTable, primeng_1.Button, primeng_1.Dialog, primeng_1.Column, primeng_1.Header, primeng_1.Footer],
        providers: [http_1.HTTP_PROVIDERS, user_list_service_1.CarService]
    }), 
    __metadata('design:paramtypes', [user_list_service_1.CarService, tree_common_service_1.announceService, common_1.Location, router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
class PrimeCar {
    constructor(vin, year, brand, color) {
        this.vin = vin;
        this.year = year;
        this.brand = brand;
        this.color = color;
    }
}
//# sourceMappingURL=user-list.component.js.map