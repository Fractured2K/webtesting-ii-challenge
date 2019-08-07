import React from 'react';

import { render } from 'react-testing-library';

import Display from './Display';

describe('Display component tests', () => {
	test('should receive strikes from props', () => {
		const { getByText } = render(<Display strikes={1} />);

		getByText('Strikes: 1');
	});

	test('should receive balls from props', () => {
		const { getByText } = render(<Display balls={3} />);

		getByText('Balls: 3');
	});
});
