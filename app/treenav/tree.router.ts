import {Messages} from 'primeng/primeng';
import {list2} from '../user/user.component';
import {Applogin} from '../login/login.component';
import {announceService} from './tree.common.service';
import {NodeService} from './tree.navigator.service';
import {Injectable} from '@angular/core';
import {AppComponent} from '../userlist/user-list.component';
import { RouterConfig }  from '@angular/router';
import {TreeDemo} from './tree.navigator.component';
export const treeRouter:RouterConfig=[

  {
    path:'node',
    component:TreeDemo,
    children:[
          {
             path:'',
             component: AppComponent
          },
          {
             path:'department',
             component: list2
          }
          ,
          {
             path:' staff',
             component: AppComponent
          }
          ,
          {
             path:'Team',
             component: AppComponent
          }
        ]
  }
];
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];
