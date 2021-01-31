import React, { useLayoutEffect, useRef, useState } from 'react';
import { secondsToStringParser } from '../../utils/timeParser';
import TimerButton from '../TimerButton/TimerButton';
import './Timer.css';

const Timer = () => {
	// const [minutes, setMinutes] = useState<number>(25);
	const [seconds, setSeconds] = useState<number>(25 * 60);
	// const [milliseconds, setMilliseconds] = useState<number>(0);
	const [isOn, setIsOn] = useState<boolean>(false);
	// const myInterval = useRef<null | number | NodeJS.Timeout|undefined>(null);
	const myInterval = useRef<any>(null);

	useLayoutEffect(() => {
		if (isOn === true && seconds > 0) {
			setTimeout(() => {
				setSeconds(seconds - 1);
			}, 1000);
		}
		if (seconds === 0) {
			setIsOn(false);
		}
	}, [seconds, setSeconds, isOn]);

	const startTimer = () => {
		// console.log('Starting Timer');
		setIsOn(true);
	};

	const stopTimer = () => {
		// console.log('Stopping Timer');
		clearInterval(myInterval.current);
		setIsOn(false);
	};

	const resetTimer = () => {
		// console.log('Resetting Timer');
		stopTimer();
		setSeconds(25 * 60);
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
