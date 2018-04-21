import input from './input';
export default {
    components: {
        input
    },
    data: function() {
        return {
            text: '',
            messages: []
        };
    },
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
                                <img
                                    style="cursor: pointer;"
                                    src="/static/images/down_arrow.svg"
                                />
                            ) : (
                                <img
                                    style="cursor: pointer;"
                                    src="/static/images/up_arrow.svg"
                                />
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
                                    onInput={() => {
                                        this.text = this.$event.target.value;
                                    }}
                                    value={this.text}
                                />
                                <img
                                    style="cursor: pointer;"
                                    src="/static/images/send.svg"
                                    onClick={this.send}
                                />
                            </div>
                        </div>
                    ) : null}
                </transition>
            </div>
        );
    }
};
