"use strict";
const user_component_1 = require('../user/user.component');
const user_list_component_1 = require('../userlist/user-list.component');
const tree_navigator_component_1 = require('./tree.navigator.component');
exports.treeRouter = [
    {
        path: 'node',
        component: tree_navigator_component_1.TreeDemo,
        children: [
            {
                path: '',
                component: user_list_component_1.AppComponent
            },
            {
                path: 'department',
                component: user_component_1.list2
            },
            {
                path: 'Ricoh staff',
                component: user_list_component_1.AppComponent
            },
            {
                path: 'Team',
                component: user_list_component_1.AppComponent
            }
        ]
    }
];
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];
//# sourceMappingURL=tree.router.js.map