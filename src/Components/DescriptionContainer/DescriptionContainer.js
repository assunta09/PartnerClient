import React from 'react'
import Description from './Description.js'

var DescriptionContainer = React.createClass({

	render () {
		var divStyle = {
			width: this.props.width,
			height: this.props.height,
			color: 'white',
			margin: '0 auto'
		}

		return (
			<div style={divStyle}>
				<Description content={this.props.content}/>
			</div>
		);
	}
});


export default DescriptionContainer;
