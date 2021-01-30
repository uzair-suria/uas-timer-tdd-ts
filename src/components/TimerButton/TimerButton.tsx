import React from 'react';
import './TimerButton.css';

interface TimerButtonProps {
	buttonAction: () => void;
	buttonValue: string;
	className?: string;
	id?: string;
}

const TimerButton = ({ buttonAction, buttonValue }: TimerButtonProps) => {
	return (
		<div className="button-container" onClick={buttonAction}>
			<p className="button-value">{buttonValue}</p>
		</div>
	);
};

export default TimerButton;
