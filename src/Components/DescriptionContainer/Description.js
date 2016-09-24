import React from 'react'

var Description = React.createClass ({
	render () {
		return (
			<div>
				<p>{this.props.content}</p>
			</div>
		);
	}
});

export default Description;