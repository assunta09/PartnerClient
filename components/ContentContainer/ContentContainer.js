import React, { PropTypes } from 'react';
import s from './styles.css';

import NavBar from '../../components/NavBar';
// import NavTabBar from './NavTabBar.js'

class ContentContainer extends React.Component {

  render() {
    return (
    	<div className={s.ContentContainer}>
    		<NavBar />
    	</div>
    );
  }

}

export default ContentContainer;