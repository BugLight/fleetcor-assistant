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
            this.messages.push(this.text);
            this.$http.get('/api/assistant/query', {
                params: {
                    q: this.text
                },
                headers: {
                    'Authorization': 'Bearer ' + this.$store.state.token
                }
            }).then(response => {
                console.log(response);
                return response.json();
            }).then(data => {
                let message = '';
                if ('bill' in data) {
                    message = '#' + data.bill.id + ' Баланс: ' + data.bill.balance;
                } else if ('bills' in data) {
                    message = data.bills.forEach(bill => {
                        this.messages.push('#' + bill.bill.id + ' Баланс: ' + bill.bill.balance);
                    });
                } else if ('message' in data) {
                    message = data.message;
                }
                console.log(message);
                this.messages.push('Вы: ' + message);
            }).catch(console.warn);
            this.text = '';
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
                            <div class="mwrapper">
                            <ul class="messages">
                                {this.messages.map(m => {
                                    return <li>{m}</li>;
                                })}
                            </ul>
                            </div>
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
