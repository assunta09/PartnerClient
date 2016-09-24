import React from 'react'
import './styles.css'

var Description = React.createClass ({
	render () {
		return (
			<div className="Description">
				<p>{this.props.content}</p>
			</div>
		);
	}
});

export default Description;