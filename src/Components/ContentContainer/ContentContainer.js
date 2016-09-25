import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import './styles.css';
import NavBar from '../NavBar/NavBar.js'


var ContentContainer = React.createClass ({
  render() {
    return (
    	<div className='ContentContainer'>
        <Sticky>
          <NavBar />
        </Sticky>
    	</div>
    );
  }
});

export default ContentContainer;
