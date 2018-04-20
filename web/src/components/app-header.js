import ProfileLink from './profile-link';
import AppMenuButton from './app-menu-button';

export default {
    components: {
        'profile-link': ProfileLink,
        'app-menu-button': AppMenuButton
    },
    render(h) {
        return <header class="header">
            <app-menu-button/>
            <div class="logo">
                <img src="/static/images/favicon.ico"/>
                <span>FLEETCOR</span>
            </div>
            <profile-link user={this.$store.state.currentUser}/>
        </header>;
    }
};
