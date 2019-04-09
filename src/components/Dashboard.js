import React, { Component } from 'react';

class Dashboard extends Component {
	state = {
		balls: 0,
		strikes: 0,
		fouls: 0
	};

	render() {
		return (
			<div>
				<h1>Dashboard</h1>
			</div>
		);
	}
}

export default Dashboard;
