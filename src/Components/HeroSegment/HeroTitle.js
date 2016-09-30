import React from 'react';
import './styles.css'
import SearchBar from '../SearchBar/SearchBar.js';



var HeroTitle = React.createClass ({
  render() {
    return (
    	<div className='TitleContainer'>
    		<h1>Search Non-Profit Organization</h1>
        <SearchBar/>
    	</div>
    );
  }
});

export default HeroTitle;
