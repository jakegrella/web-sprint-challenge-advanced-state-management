// TODO
// add form to allow adding new smurf
//new smurf initial state?

// libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// redux (helpers)
import { smurfsReducer } from './store/reducers';

// components
import App from './components/App';

// stylesheets
import './index.css';

const store = createStore(smurfsReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
