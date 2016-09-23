import React, { PropTypes } from 'react'

var DescriptionContainer = React.createClass({
	
	render () {
		var divStyle = {
			width: this.props.width,
			height: this.props.height,
			maring: 0,
			margin: 'auto',
			backgroundColor: this.props.color
		}

		return (
			<div style={divStyle}>
			yo
			</div>
		);
	}
});


export default DescriptionContainer;

