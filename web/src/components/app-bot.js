export default {
	render(h) {
		return (
			<div class='bot'>
				<div class='back_panel'>
					<div class='bot_header'>
						<h1>Личный помощник</h1>
					</div>
					<form class='user_field'>
						<input type='text' name='command'
							placeholder='Введите комманду..'/>
					</form>
				</div>
			</div>
		)
	}
}