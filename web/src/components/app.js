'use strict';

import AppHeader from './app-header';
import AppMenu from './app-menu';

export default {
    components: {
        'app-header': AppHeader,
        'app-menu': AppMenu
    },
    render(h) {
        return (
            <div id="app">
                <app-header/>
                <transition name="menu-slide">
                    {this.$store.state.menuVisible ? <app-menu/> : null}
                </transition>
                <router-view/>
            </div>
        );
    }
};
