import React from 'react';
import './styles.css'


var HeroTitle = React.createClass ({
  render() {
    return (
    	<div className='TitleContainer'>
    		<h1>The Partner</h1>
    		<button className="btn">Search</button>
    	</div>
    );
  }
});

export default HeroTitle;
