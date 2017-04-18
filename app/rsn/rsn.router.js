"use strict";
const router_1 = require('@angular/router');
const login_router_1 = require('../login/login.router');
const tree_router_1 = require('../treenav/tree.router');
exports.routes = [
    ...login_router_1.loginRouter,
    ...tree_router_1.treeRouter
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=rsn.router.js.map