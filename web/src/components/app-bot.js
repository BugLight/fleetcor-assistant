export default {
    render(h) {
        return (
            <div class="bot">
                <div class="back_panel">
                    <div class="bot_header">
                    <input type="checkbox" id="hideChat"/>
                        <img src="/static/images/down_arrow.svg" />>
                        <span>Личный помощник</span>
                    </div>
                    <div class="user_field">
                        <input
                            type="text"
                            name="command"
                            placeholder="Введите комманду.."
                        />
                    </div>
                </div>
            </div>
        );
    }
};
