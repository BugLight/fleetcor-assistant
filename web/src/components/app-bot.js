export default {
    render(h) {
        return (
            <div class="bot">
                <div class="bot_header">
                    <input
                        type="checkbox"
                        id="hideChat"
                        onClick={() => {
                            this.$store.commit('toggleBot');
                        }}
                    />
                    <label for="hideChat">
                        <transition name="rotate-arrow">
                            {this.$store.state.botVisible ? (
                                <img src="/static/images/down_arrow.svg" />
                            ) : (
                                <img src="/static/images/up_arrow.svg" />
                            )}
                        </transition>
                    </label>
                    <span>Личный помощник</span>
                </div>
                <transition name="slide-bot">
                    {this.$store.state.botVisible ? (
                        <div class="back_panel">
                            <div class="user_field">
                                <input
                                    type="text"
                                    placeholder="Введите комманду.."
                                />
                            </div>
                        </div>
                    ) : null}
                </transition>
            </div>
        );
    }
};
