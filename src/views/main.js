const html = require('choo/html')
const wrapper = require('../components/wrapper')
const no_archive = require('./no_archive')

module.exports = wrapper(view)

function view (state, emit) {
	if (state.orkl) {
		if (state.orkl.config.title) emit(state.events.DOMTITLECHANGE, state.orkl.config.title)

		return html`
			<div class="db c100">
				${state.orkl.content.map(entry)}
			</div>
		`
	} else {
		return html`
			${no_archive(state, emit)}
		`
	}

	function entry(state) {
		return html`
			<a href="${state.url}" class="db nbb my2">
				<a class="dib mb1">${state.title}</a>
				<div class="db">
					${excerpt(state.text)}
				</div>
			</a>
		`

		function excerpt(text) {
			return text.substring(0, 200) + '...'
		}
	}
}
