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
				<button onClick={this.handleBall}>Ball</button>
				<button onClick={this.handleStrike}>
					Strike
				</button>
				<button>Foul</button>
				<button>Hit</button>
			</div>
		);
	}

	handleBall = e => {
		if (this.state.balls >= 3)
			return this.setState({
				balls: 0,
				strikes: 0,
				fouls: 0,
				hits: 0
			});

		this.setState({
			...this.state,
			balls: this.state.balls + 1
		});
	};

	handleStrike = e => {
		if (this.state.strikes >= 2)
			return this.setState({
				balls: 0,
				strikes: 0,
				fouls: 0,
				hits: 0
			});

		this.setState({
			...this.state,
			strikes: this.state.strikes + 1
		});
	};
}

export default Dashboard;
