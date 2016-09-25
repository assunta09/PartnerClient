import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './App';
import HeroSegment from './Components/HeroSegment/HeroSegment.js'
import ImpactSegment from './Components/ImpactSegment/ImpactSegment.js';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import reducers from './Reducers/index.js';

import './index.css';

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={App}/>
			<Route path='organisation' component={HeroSegment}/>
			<Route path='organisation/:id' component={ImpactSegment}/>
		</Router>
	</Provider>,
	document.getElementById('root')
)
