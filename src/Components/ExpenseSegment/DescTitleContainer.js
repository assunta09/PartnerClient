import React from 'react'
import Title from './DescTitle.js'
import DescriptionContainer from './ExpenseDescriptionContainer.js'


var DescTitle = React.createClass({

	render () {

		return (
			<div className='DescTitleContainer'>
        <Title />
        <DescriptionContainer reports={this.props.reports} width={'100%'}/>
			</div>
		);
	}
});


export default DescTitle;
