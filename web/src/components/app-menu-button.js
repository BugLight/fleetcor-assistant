import app_menu from './app-menu';

export default {
    components: {
        'app-menu': app_menu
    },
    render(h) {
        return (
            <div>
                <input
                    type="checkbox"
                    class="openSidebarMenu"
                    id="openSidebarMenu"
                />
                <label for="openSidebarMenu" class="sidebarIconToggle">
                    <div class="spinner diagonal part-1" />
                    <div class="spinner horizontal" />
                    <div class="spinner diagonal part-2" />
                </label>
                <app-menu />
            </div>
        );
    }
};
