import React, { PropTypes } from 'react';
import s from './styles.css';

import HeroTitle from './HeroTitle.js'
import SearchBar from '../SearchBar';
import DescriptionContainer from '../DescriptionContainer'
import Button from '../Button';

class HeroSegment extends React.Component {

  render() {
    return (
    	<div className={s.HeroBackground}> 
	    	<div className={s.HeroContainer}>
	    		<HeroTitle/>
	    		<SearchBar/>
          <Button>Search</Button>
          <DescriptionContainer width={'50%'} height={100} color={'red'}/>
	    	</div>
    	</div>
    );
  }

}

export default HeroSegment;
