import React, { PropTypes } from 'react';
import s from './styles.css';

import HeroSegment from '../../components/HeroSegment';



class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  render() {
    return (
    	<div>
 				<HeroSegment />
 			</div>	
    );
  }

}

export default HomePage;
