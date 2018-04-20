import Vue from 'vue';
import Vuex from 'vuex';

import app from './components/app';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        currentUser: {
            name: ' '
        }
    }
});

new Vue({
    el: '#app',
    store,
    components: {
        app: app
    },
    render(h) {
        return <app />;
    }
});
