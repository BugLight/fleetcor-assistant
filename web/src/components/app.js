'use strict';

import AppHeader from './app-header';
import AppMenu from './app-menu';
import AppBot from './app-bot';

export default {
    components: {
        'app-header': AppHeader,
        'app-menu': AppMenu,
        'app-bot': AppBot
    },
    render(h) {
        return (
            <div id="app">
                <app-header/>
                <transition name="menu-slide">
                    {this.$store.state.menuVisible ? <app-menu/> : null}
                </transition>
                <router-view/>
                <app-bot/>
            </div>
        );
    }
};
