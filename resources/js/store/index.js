import Vue from "vue";
import Vuex from "vuex";
import AuthModule from "./modules/auth";
import SALES_MODULE from "./modules/sales";
import ITEMS_MODULE from "./modules/items";
import UNITS from "./modules/units/index";
// import SITES_MODULE from "./modules/sites/index";
// import CART_MODULE from "./modules/cart/index";
// import USERS_MODULE from "./modules/users/index";
import FILTER_MODULE from "./modules/filters";
import FORM_MODULE from "./modules/forms";
import CUSTOMERS_MODULE from "./modules/customers";
import PURCHASES_MODULE from "./modules/purchases";
import BRANDS from "./modules/brands";
import CATEGORIES from "./modules/categories";
import COLORS from "./modules/color";
import SUPPLIERS from "./modules/suppliers";
import FREEBIES from "./modules/freebies";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        AuthModule,
        SALES_MODULE,
        ITEMS_MODULE,
        UNITS,
        // SITES_MODULE,
        // CART_MODULE,
        // USERS_MODULE,
        FILTER_MODULE,
        FORM_MODULE,
        CUSTOMERS_MODULE,
        PURCHASES_MODULE,
        BRANDS,
        CATEGORIES,
        COLORS,
        SUPPLIERS,
        FREEBIES
    },
    state: {
        breadcrumbs: []
    },
    mutations: {
        clearBreadcrumbs: state => {
            state.breadcrumbs = [];
        },
        setBreadcrumbs: (state, payload) => {
            state.breadcrumbs = payload;
        }
    }
});
