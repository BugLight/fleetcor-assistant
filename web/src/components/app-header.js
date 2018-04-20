import profile_link from './profile-link'
import app_menu_button from './app-menu-button'

export default {
    components: {
      'profile-link': profile_link,
      'app-menu-button': app_menu_button
    },
    render (h) {
      return <header class="header">
        <app-menu-button/>
        <span class="logo">FLEETCOR</span>
        <profile-link user={this.$store.state.currentUser} />
      </header>
    );
  }
};
