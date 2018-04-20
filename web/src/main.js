import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import app from './components/app';
import Main from './components/app-main';
import Account from './components/app-account';
import Bills from './components/app-bills';

Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
    {path: '/', component: Main},
    {path: '/accounts', component: Account},
    {path: '/bills', component: Bills}
];

const router = new VueRouter({routes});

const store = new Vuex.Store({
    state: {
        currentUser: {
            name: 'Steve'
        }
    }
});

new Vue({
    el: '#app',
    store,
    router,
    components: {
        app
    },
    render(h) {
        return <app />;
    }
});
