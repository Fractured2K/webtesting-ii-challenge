import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Dashboard from './components/Dashboard';
import Display from './components/Display';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Route
					path="/dashboard"
					component={Dashboard}
				/>
			</Fragment>
		);
	}
}

export default App;
