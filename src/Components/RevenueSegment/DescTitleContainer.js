import React from 'react'
import Title from './DescTitle.js'
import DescriptionContainer from './RevenueDescriptionContainer.js'


var DescTitle = React.createClass({

	render () {

		return (
			<div className='DescTitleContainer1'>
        <Title />
        <DescriptionContainer width={'100%'} content={
          `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
           standard dummy text ever since the`
        }/>
			</div>
		);
	}
});


export default DescTitle;
