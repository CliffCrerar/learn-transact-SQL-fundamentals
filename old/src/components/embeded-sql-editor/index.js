import React, { Component } from 'react';
class SQLEditor extends Component {
	constructor(props) {
		super(props)
		this.state = { width: '100%', height: '100%' }
	}

	render() {
		return (
			<div style={ { height: '800px' } }>
				<iframe style={ this.state }
					src-doc="https://www.jdoodle.com/embed/v0/1M5O"
					src="https://www.jdoodle.com/embed/v0/1M5O"
					contentEditable="true"
					frameborder="0"></iframe>
			</div>
		)
	}
}

export default SQLEditor