import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './App';
import HeroSegment from './Components/HeroSegment/HeroSegment.js'
import ContentContainer from './Components/ContentContainer/ContentContainer.js';
import ImpactSegment from './Components/ImpactSegment/ImpactSegment.js';

import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="organisations" component={HeroSegment}/>
    <Route path="/organisations/:orgId" component={ImpactSegment}/>
  </Router>
), document.getElementById('root'))
