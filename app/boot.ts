import {bootstrap} from '@angular/platform-browser-dynamic';
//import {commonBrowser} from './rsn/rsn.component';
//import {ROUTER_PROVIDERS} from '@angular/router';
import 'rxjs/Rx';
import {APP_ROUTER_PROVIDERS} from './rsn/rsn.router';
import {commonBrowser} from './rsn/rsn.component';
//import {Applogin} from './login/login.component';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

bootstrap(commonBrowser,
  [APP_ROUTER_PROVIDERS,
    disableDeprecatedForms(),
    provideForms(),]);
