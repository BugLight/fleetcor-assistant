import input from './input';
export default {
    components: {
        inputc: input
    },
    data: function() {
        return {
            text: '',
            messages: []
        };
    },
    methods: {
        send() {
            this.$http.get('/api/assistant/query', {
                params: {
                    q: this.text
                }
            }).then(response => {
                return response.json();
            }).then(data => {
                console.log(data);
                messages.push(data.message);
            }).catch(console.warn);
        }
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
                                <inputc
                                    type="text"
                                    placeholder="Введите комманду.."
                                    onInput={value => {
                                        this.text = value;
                                    }}
                                    value={this.text}
                                />
                                <a style="cursor: pointer" onClick={this.send}>
                                    <img src="/static/images/send.svg"/>
                                </a>
                            </div>
                        </div>
                    ) : null}
                </transition>
            </div>
        );
    }
};
