"use strict";
const platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
//import {commonBrowser} from './rsn/rsn.component';
//import {ROUTER_PROVIDERS} from '@angular/router';
require('rxjs/Rx');
const rsn_router_1 = require('./rsn/rsn.router');
const rsn_component_1 = require('./rsn/rsn.component');
//import {Applogin} from './login/login.component';
const forms_1 = require('@angular/forms');
platform_browser_dynamic_1.bootstrap(rsn_component_1.commonBrowser, [rsn_router_1.APP_ROUTER_PROVIDERS,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),]);
//# sourceMappingURL=boot.js.map