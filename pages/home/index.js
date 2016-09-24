import React, { PropTypes } from 'react';
import s from './styles.css';

import HeroSegment from '../../components/HeroSegment';
import ContentContainer from '../../components/ContentContainer';


class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div>
   			<HeroSegment />
        <ContentContainer />
      </div>
    );
  }

}

export default HomePage;
