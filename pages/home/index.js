import React, { PropTypes } from 'react';
import s from './styles.css';

import HeroSegment from '../../components/HeroSegment';
import NavBar from '../../components/NavBar';



class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div>
        <NavBar />
      </div>
    	<div>
 				<HeroSegment />
 			</div>
    );
  }

}

export default HomePage;
