import {Component,Input,OnChanges} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {InputText,DataTable,Button,Dialog,Column,Header,Footer} from 'primeng/primeng';
import {Car} from '../models/entries.model';
import {CarService} from './user-list.service';
import {TreeDemo} from '../treenav/tree.navigator.component';
import {Subscription} from 'rxjs/Subscription';
import {announceService} from '../treenav/tree.common.service';
//import {listenService} from '../treenav/tree.common.listener';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
	templateUrl: 'app/userlist/user-list.component.html',
	selector: 'component',
    directives: [InputText,DataTable,Button,Dialog,Column,Header,Footer],
	providers: [HTTP_PROVIDERS,CarService]
})

export class AppComponent {

	displayDialog: boolean;

    car: Car = new PrimeCar();

    selectedCar: Car;

    newCar: boolean;

    cars: Car[];

		subscription:Subscription;

		//name :any;

	//	Listen:any;
		path:any;
    label:any;
    constructor(private carService : CarService,private announceService: announceService,private location:Location,private router : Router) {}

    ngOnInit() {
			//####################################### router2.0
			 console.log('path:'+this.path);

			this.carService.getCarsMedium(" staff").then(cars => this.cars = cars);
      this.path=this.location.path();
      if(this.path=="/node/Team"){
				this.carService.getCarsMedium("Team").then(cars => this.cars = cars);

			 console.log('path:'+this.path);
			 this.label="Team";
			}else if(this.path=="/node/%20staff"){
				this.carService.getCarsMedium(" staff").then(cars => this.cars = cars);

				 console.log('path:'+this.path);
				 this.label="Staff";
			}else if(this.path=="/node/department"){
				this.router.navigate(['department'] );

			}
			 this.nameNodeListener();
      //########################################
			//this.carService.getCarsMedium(" staff").then(cars => this.cars = cars);

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
        if(this.newCar)
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

    cloneCar(c: Car): Car {
        let car = new PrimeCar();
        for(let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }

    findSelectedCarIndex(): number {
        return this.cars.indexOf(this.selectedCar);
    }

		private nameNodeListener (){
		 	this.subscription = this.announceService.nodeAnnounce$.subscribe(
					nodeName =>{
				     this.carService.getCarsMedium(nodeName).then(cars => this.cars = cars);
					//	 this.Listen=nodeName;
					//	 console.log('listener:'+this.Listen);

						 this.label=nodeName;

			});
		}
}

class PrimeCar implements Car {

    constructor(public vin?, public year?, public brand?, public color?) {}
}
