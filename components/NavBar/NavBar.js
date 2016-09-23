import React, { PropTypes } from 'react';
import s from './styles.css';

import NavTitle from './NavTitle.js'
import NavTabBar from './NavTabBar.js'

class NavBar extends React.Component {

  render() {
    return (
    	<div className={s.NavBar}>
    		<NavTitle />
    		<NavTabBar />
    	</div>
    );
  }

}

export default NavBar;