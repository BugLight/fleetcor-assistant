import Vue from 'vue';

import app from './components/app';

new Vue({
    el: '#app',
    components: {
        app: app
    },
    render(h) {
        return <app />;
    }
});
