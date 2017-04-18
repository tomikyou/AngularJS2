import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {InputText,DataTable,Button,Dialog,Column,Header,Footer,Password,RadioButton,Message,SelectItem,Panel,Growl,Dropdown,InputTextarea} from 'primeng/primeng';
import {ControlGroup} from '@angular/common';
import {Router,ROUTER_DIRECTIVES} from '@angular/router';
import { REACTIVE_FORM_DIRECTIVES, FormControl, FormGroup, AbstractControl,FORM_DIRECTIVES,FormBuilder,Validators} from '@angular/forms';
@Component({
	templateUrl: 'app/user/user.component.html',
	selector: 'my-app',
    directives: [InputText,DataTable,Button,Dialog,Column,Header,Footer,Panel,Password,Growl,Dropdown,InputTextarea],
	providers: [HTTP_PROVIDERS, FormGroup,REACTIVE_FORM_DIRECTIVES,FORM_DIRECTIVES]
})
export class list2 {

	msgs: Message[] = [];

	    userform: FormGroup;

	    submitted: boolean;

	    genders: SelectItem[];

	    description: string;

	    constructor(fb: FormBuilder) {
				this.userform = new FormGroup({
            'firstname': new FormControl('', Validators.required),
            'lastname': new FormControl('', Validators.required),
            'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
            'description': new FormControl(''),
            'gender': new FormControl('', Validators.required)
        });

	        this.genders = [];
	        this.genders.push({label:'Select Gender', value:''});
	        this.genders.push({label:'Male', value:'Male'});
	        this.genders.push({label:'Female', value:'Female'});
	    }

	    onSubmit(value: string) {
	        this.submitted = true;
	        this.msgs = [];
	        this.msgs.push({severity:'info', summary:'Success', detail:'Form Submitted'});
	    }

	    get diagnostic() { return JSON.stringify(this.userform.value); }


}
