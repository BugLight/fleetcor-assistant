'use strict'

export default {
	render (h) {
		return <div class="user">
            <img class="user__photo" src={/*path*/}/>
            <transition name="fade">
                {this.inactive ? <div class="member__filter"></div> : null}
            </transition>
            <transition name="fade">
                {this.focused ? <h1 class="member__nick">{this.info.nick}</h1> : null}
            </transition>
		</div>;
	}
}
