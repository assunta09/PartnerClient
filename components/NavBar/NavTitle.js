import React, { PropTypes } from 'react';
import s from './styles.css';


class NavTitle extends React.Component {

  render() {
    return (
    	<div className={s.NavTitleContainer}>
    		<h1>Example Title</h1>
    	</div>
    );
  }

}

export default NavTitle;
