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
        botVisible: true,
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYmYiOjE1MjQyOTI0MDcsImlhdCI6MTUyNDI5MjQwNywiZnJlc2giOmZhbHNlLCJpZGVudGl0eSI6MSwidHlwZSI6ImFjY2VzcyIsImV4cCI6MTUyNDI5ODQwNywianRpIjoiNTRkZDE5NDctNzNkNC00MGIxLTkyNTAtMDg2ZGUwMWQzNmMyIn0.SK8KWQKVb6Q-M0JwScruGFdF1uZY7nmWooYrv08NM2E'
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
