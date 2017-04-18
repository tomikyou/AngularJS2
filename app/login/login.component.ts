import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {InputText,DataTable,Button,Dialog,Column,Header,Footer,Password,RadioButton} from 'primeng/primeng';
//import {Car} from '../cars/car';
import {ROUTER_DIRECTIVES} from '@angular/router';
//import {CarService} from '../cars/carservice';
//import {Routes,Router} from '@angular/router';
//import {AppComponent} from './app.component';
import {TreeDemo} from '../treenav/tree.navigator.component';
import {NodeService} from '../treenav/tree.navigator.service';
//import {commonBrowser} from '../rsn/rsn.component';
import { RouteConfig, RouterOutlet,Redirect} from '@angular/router-deprecated';
import { Router }      from '@angular/router';

@Component({
	templateUrl: 'app/login/login.component.html',
	selector: 'my-app',
    directives: [InputText,DataTable,Button,Dialog,Column,Header,Footer,Password,RadioButton,ROUTER_DIRECTIVES],
	providers: [HTTP_PROVIDERS,NodeService]
})

export class Applogin{
		constructor(private router : Router){}
	  node() {
	     	this.router.navigate(['/node']);
  }
}
