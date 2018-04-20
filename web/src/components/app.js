'use strict';

import app_menu_button from './app-menu-button';
import app_header from './app-header';
import app_menu from './app-menu';
import app_content from './app-content';
import app_footer from './app-footer';

export default {
    components: {
        'app-menu-button': app_menu_button,
        'app-header': app_header,
        'app-menu': app_menu,        
        'app-content': app_content,
        'app-footer': app_footer
    },
    render(h) {
        return (
            <div id="app">
                <app-menu-button />
                <app-header />
                <app-menu />
                <app-content />
                <app-footer />
            </div>
        );
    },
    methods: {
        setMenuVisible: function(show) {
            this.menu.visible = show;
        }
    }
};
