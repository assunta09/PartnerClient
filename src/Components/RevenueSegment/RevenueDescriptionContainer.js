import React from 'react'
import Description from '../DescriptionContainer/Description.js'

var RevenueDescriptionContainer = React.createClass({

	render () {
		var divStyle = {
			width: this.props.width,
			height: this.props.height,
      color: '#5B5B5B'
		}

		return (
			<div className={'EDescription1'} style={divStyle}>
				<Description content={this.props.content}/>
			</div>
		);
	}
});


export default RevenueDescriptionContainer;
