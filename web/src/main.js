import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './components/app';
import Main from './components/app-main';
import Account from './components/app-account';
import Bills from './components/app-bills';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueResource);

const routes = [
    {path: '/', component: Main},
    {path: '/accounts', component: Account},
    {path: '/bills', component: Bills}
];

const router = new VueRouter({routes});

const store = new Vuex.Store({
    state: {
        currentUser: {
            name: 'Steve',
            id: 1
        },
        menuVisible: false,
        botVisible: true
    },
    mutations: {
        toggleMenu() {
            this.state.menuVisible = !this.state.menuVisible;
        },
        toggleBot() {
            this.state.botVisible = !this.state.botVisible;
        }
    }
});

new Vue({
    el: '#app',
    store,
    router,
    components: {
        app: App
    },
    render(h) {
        return <app/>;
    }
});
