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
   			<HeroSegment />
        <NavBar />
      </div>
    );
  }

}

export default HomePage;
