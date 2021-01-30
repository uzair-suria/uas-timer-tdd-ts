export const secondsToStringParser = (seconds: number) => {
	return `${Math.trunc(seconds / 60)}:${(seconds % 60)
		.toString()
		.padStart(2, '0')}`;
};

export const stringToTimeParser = (time: string) => {
	return parseInt(time.slice(0, -3)) * 60 + parseInt(time.slice(-2));
};
