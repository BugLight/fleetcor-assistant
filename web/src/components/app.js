'use strict';

import app_menu_button from './app-menu-button';
import app_header from './app-header';
import app_menu from './app-menu';
import app_content from './app-content';

export default {
    components: {
        'app-menu-button': app_menu_button,
        'app-header': app_header,
        'app-menu': app_menu,
        'app-content': app_content
    },
    render(h) {
        return (
            <div id="app">
                <app-menu-button />
                <app-header />
                <app-menu />
                <app-content class="app__content" />
            </div>
        );
    },
    methods: {
        setMenuVisible: function(show) {
            this.menu.visible = show;
        }
    }
};
