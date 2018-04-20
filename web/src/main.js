import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import app from './components/app';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        currentUser: {
            name: 'Steve'
        }
    }
});

const routes = [];

new Vue({
    el: '#app',
    store,
    components: {
        app
    },
    render(h) {
        return <app />;
    }
});
