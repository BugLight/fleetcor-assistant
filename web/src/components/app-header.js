import profile_link from "./profile-link";

export default {
  components: {
    "profile-link": profile_link
  },
  render(h) {
    return (
      <header class="header">
        <span class="logo">FLEETCOR</span>
        <profile-link user={this.$store.state.currentUser} />
      </header>
    );
  }
};
