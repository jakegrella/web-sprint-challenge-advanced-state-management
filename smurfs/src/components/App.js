import React, { Component } from 'react';

// components
import SmurfsList from './SmurfsList';
import Form from './Form';

// stylesheets
import './App.css';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<h1>SMURFS! W/Redux</h1>
				<Form />
				<SmurfsList />
			</div>
		);
	}
}

export default App;
