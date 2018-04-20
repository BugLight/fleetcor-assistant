import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import App from './components/app';
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
        },
        menuVisible: false
    },
    mutations: {
        toggleMenu() {
            this.state.menuVisible = !this.state.menuVisible;
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
