import React from 'react';
import { mount, shallow, ShallowWrapper } from 'enzyme';
import Timer from './Timer';
import { stringToTimeParser } from '../../utils/timeParser';

describe('Timer', () => {
	let container: ShallowWrapper<
		any,
		Readonly<{}>,
		React.Component<{}, {}, any>
	>;
	beforeEach(() => (container = shallow(<Timer />)));
	it('should render a <div />', () => {
		expect(container.find('div').length).toBeGreaterThanOrEqual(1);
	});

	it('should render instances of the TimerButton component', () => {
		expect(container.find('TimerButton').length).toEqual(3);
	});
});

describe('mounted Timer', () => {
	// let container: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

	let container: any;

	beforeEach(() => (container = mount(<Timer />)));

	it('invokes startTimer when the start button is clicked', () => {
		const beforeClick = stringToTimeParser(
			container.find('.time-display').text()
		);
		container.find('.timer-start').simulate('click');
		setTimeout(() => {
			const afterClick = stringToTimeParser(
				container.find('.time-display').text()
			);
			expect(afterClick).toBeLessThan(beforeClick);
		}, 3000);
	});

	it('invokes stopTimer when the stop button is clicked', () => {
		const beforeClick = stringToTimeParser(
			container.find('.time-display').text()
		);
		container.find('.timer-stop').simulate('click');
		setTimeout(() => {
			const afterClick = stringToTimeParser(
				container.find('.time-display').text()
			);
			expect(afterClick).toEqual(beforeClick);
		}, 3000);
	});

	it('invokes resetTimer when the reset button is clicked', () => {
		// const beforeClick = stringToTimeParser(
		// 	container.find('.time-display').text()
		// );
		container.find('.timer-reset').simulate('click');
		setTimeout(() => {
			const afterClick = stringToTimeParser(
				container.find('.time-display').text()
			);
			expect(afterClick).toEqual(25 * 60);
		}, 3000);
	});
});
