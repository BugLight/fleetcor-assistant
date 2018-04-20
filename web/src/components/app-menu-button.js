export default {
    render(h) {
        return (
            <div>
                <input
                    type="checkbox"
                    class="openSidebarMenu"
                    id="openSidebarMenu"
                    onClick={() => {
                        this.$store.commit('toggleMenu');
                    }}
                />
                <label for="openSidebarMenu" class="sidebarIconToggle">
                    <div class="spinner diagonal part-1" />
                    <div class="spinner horizontal" />
                    <div class="spinner diagonal part-2" />
                </label>
            </div>
        );
    }
};
