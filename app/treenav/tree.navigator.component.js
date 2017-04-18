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
//import {CarService} from '../cars/carservice';
const router_1 = require('@angular/router');
const tree_common_service_1 = require('./tree.common.service');
const tree_navigator_service_1 = require('./tree.navigator.service');
//import {listenService} from './tree.common.listener';
// import {Subscription} from 'rxjs/Subscription';
// import {Car} from '../models/entries.model';
// import {CarService} from '../userlist/user-list.service';
// @Routes([
// 		{
// 			 path:'/',
// 			 component:list2
// 	  }
// 		,
// 		{
// 			 path:'department',
// 			 component: list2
// 		}
// 		,
// 		{
// 			 path:'Ricoh staff',
// 			 component: AppComponent
// 		}
// 		,
// 		{
// 			 path:'Team',
// 			 component: AppComponent
// 		}
// 		// ,
// 		// {
// 		// 	 path:'/User',
// 		// 	 component: AppComponent
// 		// }
// 		,
// 		{
// 			 path:'/pie',
// 			 component: PieChartstaff
// 		}
// ])
let TreeDemo = class TreeDemo {
    //  subscription:Subscription;
    //  cars: Car[];
    constructor(nodeService, router, announce) {
        this.nodeService = nodeService;
        this.router = router;
        this.announce = announce;
    }
    ngOnInit() {
        this.nodeService.getFiles().then(files => this.files = files);
        //	this.nodeName="aa";
        //console.log(this.nodeName);
        //this.childDisplay = false;
    }
    nodeSelect(event) {
        //	this.listener.nameNodeListener();
        // console.log(event.node.label);
        var id = event.node.label;
        //if(event.node.label=="department"){
        //this.router.navigate(['node/',id] );
        if (id == 'Ricoh staff') {
            this.router.navigate(['/node']);
        }
        else if (id == 'department') {
            this.router.navigate(['/node/department']);
        }
        else if (id == 'Team') {
            this.router.navigate(['/node/Team']);
        }
        //set nodename for announceService
        this.announce.changeNode(id);
        //}
        //	console.log('node/:'+id);
        //  this.nodeName = event.node.label;
        //	console.log(this.nodeName);
        //	this.nameNodeListener();
    }
    // nodeUnselect(event) {
    //     this.msgs = [];
    //     this.msgs.push({severity: 'info', summary: 'Node Unselected', detail: event.node.label});
    // }
    logout() {
        this.router.navigate(['/login']);
    }
};
TreeDemo = __decorate([
    core_1.Component({
        templateUrl: 'app/treenav/tree.navigator.component.html',
        selector: 'node',
        directives: [primeng_1.InputText, primeng_1.DataTable, primeng_1.Button, primeng_1.Dialog, primeng_1.Column, primeng_1.Header, primeng_1.Footer, primeng_1.Password, primeng_1.RadioButton, primeng_1.Tree, router_1.ROUTER_DIRECTIVES],
        providers: [http_1.HTTP_PROVIDERS, tree_navigator_service_1.NodeService, tree_common_service_1.announceService]
    }), 
    __metadata('design:paramtypes', [tree_navigator_service_1.NodeService, router_1.Router, tree_common_service_1.announceService])
], TreeDemo);
exports.TreeDemo = TreeDemo;
//# sourceMappingURL=tree.navigator.component.js.map