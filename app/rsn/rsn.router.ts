import { provideRouter, RouterConfig }  from '@angular/router';
import{loginRouter} from '../login/login.router';
import{treeRouter} from '../treenav/tree.router';

export const routes:RouterConfig=[
  ...loginRouter,
  ...treeRouter
];
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
