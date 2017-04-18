import {Component, ViewEncapsulation} from '@angular/core'
import {TreeDemo} from '../treenav/tree.navigator.component';
import {Applogin} from '../login/login.component';
import {Router,ROUTER_DIRECTIVES} from '@angular/router';

// @Routes([
// 	{
// 		 path:'/',
// 		 component: Applogin
// 	},
// 		{
// 			 path:'/node',
// 			 component:TreeDemo
// 	  }
// 		,
// 		{
// 			 path:'/login',
// 			 component: Applogin
// 		 }
// ])

@Component({
	templateUrl: 'app/rsn/rsn.component.html',
	selector: 'my-app',
	directives: [ROUTER_DIRECTIVES]
})

export class commonBrowser {
	constructor(public router: Router) {}
}
