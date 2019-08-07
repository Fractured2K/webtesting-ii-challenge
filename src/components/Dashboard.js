import React, { Component } from 'react';

import Display from './Display';

class Dashboard extends Component {
	state = {
		balls: 0,
		strikes: 0
	};

	render() {
		return (
			<div>
				<button onClick={this.handleBall}>Ball</button>
				<Display {...this.state} />
				<button onClick={this.handleStrike}>
					Strike
				</button>
				<button onClick={this.handleFoul}>Foul</button>
				<button onClick={this.handleHit}>Hit</button>
			</div>
		);
	}

	handleBall = e => {
		if (this.state.balls >= 3)
			return this.setState({
				balls: 0,
				strikes: 0,
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

	handleFoul = e => {
		if (this.state.strikes === 2) return;

		this.setState({
			...this.state,
			strikes: this.state.strikes + 1
		});
	};

	handleHit = e => {
		this.setState({
			balls: 0,
			strikes: 0
		});
	};
}

export default Dashboard;
