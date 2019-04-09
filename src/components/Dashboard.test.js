import React from 'react';

import { render, fireEvent } from 'react-testing-library';

import Dashboard from './Dashboard';

describe('Dashboard component tests', () => {
	test('should add 1 to strikes', () => {
		const { getByText } = render(<Dashboard />);

		const button = getByText('Strike');
		fireEvent.click(button);
		getByText('Strikes: 1');
	});

	test('should add 1 to balls', () => {
		const { getByText } = render(<Dashboard />);

		const button = getByText('Ball');

		fireEvent.click(button);
		getByText('Balls: 1');
	});

	test('should add 1 to strikes on foul button click', () => {
		const { getByText } = render(<Dashboard />);

		const button = getByText(/foul/i);
		fireEvent.click(button);

		getByText(/strikes: 2/i);
	});
});
