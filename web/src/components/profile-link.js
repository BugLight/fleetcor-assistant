'use strict'

export default {
		props: ['user'],
		render (h) {
		return <span class="user">
      	<img class="user__photo" src="/static/images/account-user.png"/>
      	<a>{this.user.name}</a>
		</span>;
	}
}
