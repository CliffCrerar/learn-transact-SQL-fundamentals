import React, {Component} from 'react';
 class SQLEditor extends Component {
	constructor(props){
		super(props)
		this.state = {width: '100%', height: '100%'}
	}

	render() {
		return (
			<div style={{height: '1000px'}}>
				<iframe is="x-frame-bypass" style={this.state} src="https://sqliteonline.com/#fiddle-5e030401b775emzkk4kxglzg"></iframe>
			</div>
		)
	}
}

export default SQLEditor