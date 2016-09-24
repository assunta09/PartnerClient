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
          <button className="btn">Search</button>
          <DescriptionContainer width={'80%'} height={100} content={
            `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
             make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
             typesetting, remaining essentially`
          }/>
	    	</div>
    	</div>
    );
  }
});

export default HeroSegment;