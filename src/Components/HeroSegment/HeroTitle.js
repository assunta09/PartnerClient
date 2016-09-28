import React from 'react';
import './styles.css'
import SearchBar from '../SearchBar/SearchBar.js';



var HeroTitle = React.createClass ({
  render() {
    return (
    	<div className='TitleContainer'>
    		<h1>Check Non-Profit</h1>
        <SearchBar/>
    	</div>
    );
  }
});

export default HeroTitle;
