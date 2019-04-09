import React, { Component, Fragment } from 'react';
import './App.css';

import Dashboard from './components/Dashboard';
import Display from './components/Display';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Display />
				<Dashboard />
			</Fragment>
		);
	}
}

export default App;
