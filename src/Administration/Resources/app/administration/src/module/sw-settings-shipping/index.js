import './page/sw-settings-shipping-list';
import './page/sw-settings-shipping-detail';
import './component/sw-price-rule-modal';
import './component/sw-settings-shipping-price-matrices';
import './component/sw-settings-shipping-price-matrix';


const { Module } = Shopware;

Module.register('sw-settings-shipping', {
    type: 'core',
    name: 'settings-shipping',
    title: 'sw-settings-shipping.general.mainMenuItemGeneral',
    description: 'sw-settings-shipping.general.descriptionTextModule',
    color: '#9AA8B5',
    icon: 'default-action-settings',
    favicon: 'icon-module-settings.png',
    entity: 'shipping_method',

    routes: {
        index: {
            component: 'sw-settings-shipping-list',
            path: 'index',
            meta: {
                parentPath: 'sw.settings.index'
            }
        },
        detail: {
            component: 'sw-settings-shipping-detail',
            path: 'detail/:id?',
            meta: {
                parentPath: 'sw.settings.shipping.index'
            },
            props: {
                default: (route) => ({ shippingMethodId: route.params.id })
            }
        },
        create: {
            component: 'sw-settings-shipping-detail',
            path: 'create',
            meta: {
                parentPath: 'sw.settings.shipping.index'
            }
        }
    },

    settingsItem: {
        group: 'shop',
        to: 'sw.settings.shipping.index',
        icon: 'default-package-open'
    }
});
