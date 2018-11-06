const html = require('choo/html')

module.exports = view

function view(state, emit) {
	return html`
		<div class="1 db">
			<p>This is website is accessible only through <a href="https://datproject.org" target="_blank">Dat</a>, a peer-to-peer data sharing protocol.</p>
			<p>To access it:</p>
			<p>1. Download <a href="https://beakerbrowser.com" target="_blank">Beaker Browser</a></p>
			<p>2. Navigate to <a href="${window.location.origin.replace('https://', 'dat://')}">${window.location.origin.replace('https://', 'dat://')}</a></p>
		</div>
	`
}
