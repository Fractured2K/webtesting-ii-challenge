import React, { Component } from 'react';

import Display from './Display';

class Dashboard extends Component {
	state = {
		balls: 0,
		strikes: 0,
		fouls: 0,
		hits: 0
	};

	render() {
		return (
			<div>
				<Display {...this.state} />
				<button>Ball</button>
				<button>Strike</button>
				<button>Foul</button>
				<button>Hit</button>
			</div>
		);
	}
}

export default Dashboard;
