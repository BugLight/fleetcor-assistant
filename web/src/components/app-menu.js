export default {
    render(h) {
        return (
            <div id="sidebarMenu">
                <ul class="sidebarMenuInner">
                    <li>
                        <router-link to="/">MAIN</router-link>
                    </li>
                    <li>
                        <router-link to="/accounts">ACCOUNT</router-link>
                    </li>
                    <li>
                        <router-link to="/bills">BILLS</router-link>
                    </li>
                </ul>
            </div>
        );
    }
};
