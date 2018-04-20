'use strict';

import app_menu_button from './app-menu-button';
import app_header from './app-header';
import app_menu from './app-menu';
import app_content from './app-content';
import app_bot from './app-bot';

export default {
    components: {
        'app-header': app_header,
        'app-menu': app_menu,
        'app-content': app_content,
        'app-bot': app_bot,
    },
    data: function() {
        return {
            menuVisible: false
        };
    },
    data: function() {
        return {
            menuVisible: false
        };
    },
    render(h) {
        return (
            <div id="app">
                <app-header />
                <app-menu />
                <app-bot />
                <app-header onMenuToggle={this.toggleMenu} />
                <transition name="menu-slide">
                    {this.menuVisible ? <app-menu /> : null}
                </transition>
                <app-content class="app__content" />
            </div>
        );
    },
    methods: {
        toggleMenu: function() {
            this.menuVisible = !this.menuVisible;
        }
    }
};
