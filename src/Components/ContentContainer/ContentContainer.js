import React from 'react';
import './styles.css';
import NavBar from '../NavBar/NavBar.js'


var ContentContainer = React.createClass ({
  render() {
    return (
    	<div className='ContentContainer'>
    		<NavBar />
    	</div>
    );
  }
});

export default ContentContainer;