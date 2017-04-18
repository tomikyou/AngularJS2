import {Component,Input} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {InputText,DataTable,Button,Dialog,Column,Header,Footer,Password,RadioButton,Tree,TreeNode} from 'primeng/primeng';
//import {Car} from '../cars/car';
//import {CarService} from '../cars/carservice';
import {Router,ROUTER_DIRECTIVES} from '@angular/router';

import {AppComponent} from '../userlist/user-list.component';
//import {Message} from 'primeng/components/api/message';
import {Messages} from 'primeng/primeng';
import { RouteConfig, RouterOutlet } from '@angular/router-deprecated';
import {list2} from '../user/user.component';
import {Applogin} from '../login/login.component';
import {announceService} from './tree.common.service';
import {NodeService} from './tree.navigator.service';
import {PieChartstaff} from '../pie/piechartstaff';
import {Injectable} from '@angular/core';
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
// 			 path:' staff',
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

@Component({
	templateUrl: 'app/treenav/tree.navigator.component.html',
	selector: 'node',
    directives: [InputText,DataTable,Button,Dialog,Column,Header,Footer,Password,RadioButton,Tree,ROUTER_DIRECTIVES],
	providers: [HTTP_PROVIDERS,NodeService,announceService]
})

	export class TreeDemo{
	  	nodeName: string;

//	    msgs: Message[];

	    files: TreeNode[];

	    lazyFiles: TreeNode[];

	    selectedFile: TreeNode;

	    selectedFiles: TreeNode[];

			 id2:string;

			 childDisplay :boolean;
			//  subscription:Subscription;
		  //  cars: Car[];


	    constructor(private nodeService: NodeService,private router : Router,private announce : announceService) { }

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
						if(id==' staff'){
							this.router.navigate(['/node'] );
						}else if (id=='department'){
							this.router.navigate(['/node/department'] );
						}else if(id=='Team'){
							this.router.navigate(['/node/Team'] );
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
			logout(){
				this.router.navigate(['/login'] );

			}
			// getNodename()
			// {
			// 	 return event.node.label;
			// 	// event.node
			// }
			// private nameNodeListener (){
			//  	this.subscription = this.announce.nodeAnnounce$.subscribe(
			// 			nodeName =>{
			// 				if(nodeName=='Team'){
			// 					this.carService.getCarsMedium2().then(cars => this.cars = cars);
			// 				}else if(nodeName==' staff'){
			// 					this.carService.getCarsMedium().then(cars => this.cars = cars);
			// 				}
			// 			}
			// 	);
			// }
	}
