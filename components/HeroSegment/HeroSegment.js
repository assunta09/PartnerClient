import React, { PropTypes } from 'react';
import s from './styles.css';

import HeroTitle from './HeroTitle.js'
import SearchBar from '../SearchBar';

class HeroSegment extends React.Component {

  render() {
    return (
    	<div className={s.HeroBackground}> 
	    	<div className={s.HeroContainer}>
	    		<HeroTitle/>
	    		<SearchBar/>
	    	</div>
    	</div>
    );
  }

}

export default HeroSegment;
