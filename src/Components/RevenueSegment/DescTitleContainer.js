import React from 'react'
import Title from './DescTitle.js'
import DescriptionContainer from './RevenueDescriptionContainer.js'


var DescTitle = React.createClass({

	render () {

		return (
			<div className='DescTitleContainer1'>
        <Title />
        <DescriptionContainer reports={this.props.reports}/>
			</div>
		);
	}
});


export default DescTitle;
