import profile_link from './profile-link';
import app_menu_button from './app-menu-button';

export default {
    components: {
        'profile-link': profile_link,
        'app-menu-button': app_menu_button
    },
    render(h) {
        return <header class="header">
                <app-menu-button onMenuToggle={() => {
                        this.$emit('menuToggle');
                    }} />
                <div class="logo">
                    <img src="/static/images/favicon.ico" />
                    <span>FLEETCOR</span>
                </div>
                <profile-link user={this.$store.state.currentUser} />
            </header>;
    }
};
