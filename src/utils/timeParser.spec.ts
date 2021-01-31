import { secondsToStringParser, stringToTimeParser } from './timeParser';
describe('Seconds to Time String Parser', () => {
	it('should parse seconds in number to time string of format "mm:ss"', () => {
		expect(secondsToStringParser(921)).toEqual('15:21');
	});
	it('should pad seconds string when less than 10', () => {
		expect(secondsToStringParser(61)).toEqual('1:01');
	});
});

describe('Time String to Seconds Parser', () => {
	it('should parse the time string to seconds in integer', () => {
		expect(stringToTimeParser('15:21')).toEqual(921);
	});
});
