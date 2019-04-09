import React, { Component } from 'react';

import Display from './Display';

class Dashboard extends Component {
	state = {
		balls: 0,
		strikes: 0,
		fouls: 0
	};

	render() {
		return (
			<div>
				<Display {...this.state} />
			</div>
		);
	}
}

export default Dashboard;
