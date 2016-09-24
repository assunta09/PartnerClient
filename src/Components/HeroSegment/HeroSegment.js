import React from 'react';
import HeroTitle from './HeroTitle.js'
import SearchBar from '../SearchBar/SearchBar.js';
import DescriptionContainer from '../DescriptionContainer/DescriptionContainer.js'
import './styles.css';

var HeroSegment = React.createClass({

  render() {
    return (
    	<div className="HeroBackground"> 
	    	<div className="HeroContainer">
	    		<HeroTitle/>
          <SearchBar/>
          <DescriptionContainer width={'50%'} height={100}/>
	    	</div>
    	</div>
    );
  }
});

export default HeroSegment;
