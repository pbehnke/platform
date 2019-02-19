import { Module } from 'src/core/shopware';
import { NEXT1223 } from 'src/flag/feature_next1223';
import './page/sw-plugin-manager';
import './view/sw-plugin-list';
import './view/sw-plugin-license-list';
import './view/sw-plugin-updates';
import './component/sw-plugin-file-upload';
import './component/sw-plugin-store-login';
import './component/sw-plugin-store-login-status';
import './component/sw-plugin-updates-grid';
import './component/sw-plugin-last-updates-grid';

Module.register('sw-plugin', {
    flag: NEXT1223,
    type: 'core',
    name: 'sw-plugin.general.mainMenuItemGeneral',
    description: 'sw-plugin.general.descriptionTextModule',
    version: '1.0.0',
    targetVersion: '1.0.0',
    color: '#54d6ed',
    icon: 'default-object-plug',
    entity: 'plugin',

    routes: {
        index: {
            components: {
                default: 'sw-plugin-manager'
            },
            redirect: {
                name: 'sw.plugin.index.list'
            },
            path: 'index',
            children: {
                list: {
                    component: 'sw-plugin-list',
                    path: 'list'
                },
                licenses: {
                    component: 'sw-plugin-license-list',
                    path: 'licenses'
                },
                updates: {
                    component: 'sw-plugin-updates',
                    path: 'updates'
                }
            }
        }
    },

    navigation: [{
        id: 'sw-plugin',
        label: 'sw-plugin.general.mainMenuItemGeneral',
        color: '#54d6ed',
        path: 'sw.plugin.index',
        icon: 'default-object-plug',
        position: 9999
    }]
});
