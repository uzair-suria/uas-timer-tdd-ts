import React, { useState } from 'react';
import { secondsToStringParser } from '../../utils/timeParser';
import TimerButton from '../TimerButton/TimerButton';
import './Timer.css';

const Timer = () => {
	// const [minutes, setMinutes] = useState<number>(25);
	const [seconds, setSeconds] = useState<number>(1520);
	// const [milliseconds, setMilliseconds] = useState<number>(0);
	const [isOn, setIsOn] = useState<boolean>(false);

	const startTimer = () => {
		console.log('Starting Timer');

		return true;
	};

	const stopTimer = () => {
		console.log('Stopping Timer');
	};

	const resetTimer = () => {
		console.log('Resetting Timer');
	};
	return (
		<div className="timer-container">
			<div className="time-display">{secondsToStringParser(seconds)}</div>
			<div className="timer-button-container">
				<TimerButton
					buttonAction={startTimer}
					buttonValue={'Start'}
					className="timer-start"
					id="timer-start"
				/>
				<TimerButton
					buttonAction={stopTimer}
					buttonValue={'Stop'}
					className="timer-stop"
					id="timer-stop"
				/>
				<TimerButton
					buttonAction={resetTimer}
					buttonValue={'Reset'}
					className="timer-reset"
					id="timer-reset"
				/>
			</div>
		</div>
	);
};

export default Timer;
