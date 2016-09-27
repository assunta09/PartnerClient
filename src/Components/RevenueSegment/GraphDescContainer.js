import React from 'react'
import DescTitle from './DescTitleContainer.js'
import Graph from './RevenueGraphContainer.js'
import ScrollReveal from 'scrollreveal'



var GraphDescContainer = React.createClass({
		
	componentDidMount: function () {
    const config = {
      origin: 'right',
      duration: 500,
      delay: 100,
      distance: '100px',
      scale: 1,
      easing: 'ease',
      reset: true,
    }

    const config2 = {
      origin: 'left',
      duration: 500,
      delay: 100,
      distance: '100px',
      scale: 1,
      easing: 'ease',
      reset: true,
    }
    var sr = ScrollReveal();
    sr.reveal(this.refs.box1, config)
    sr.reveal(this.refs.box2, config2)
  },

	render () {

		return (
			<div className='GraphDescContainer1'>
        <div ref='box1'>
        	<DescTitle/>
        </div>
        <div ref='box2'>
        	<Graph/>
        </div>
			</div>
		);
	}
});


export default GraphDescContainer;
