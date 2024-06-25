import React, { useState } from "react";

const Challenge = () => {
	const [step, setStep] = useState(1);
	const [count, setCount] = useState(0);
	const [date, setDate] = useState(new Date());

	const stepUpHandler = () => {
		setStep((s) => s + 1);
	};

	const stepDownHandler = () => {
		setStep((s) => s - 1);
	};

	const countUpHandler = () => {
		setCount((c) => {
			const newCount = c + step;
			setDate(new Date(date.getTime() + step * 24 * 60 * 60 * 1000));
			return newCount;
		});
	};

	const countDownHandler = () => {
		setCount((c) => {
			const newCount = c - step;
			setDate(new Date(date.getTime() - step * 24 * 60 * 60 * 1000));
			return newCount;
		});
	};

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
			}}
		>
			<div style={{ textAlign: "center" }}>
				<div style={{ marginBottom: "20px" }}>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							gap: "10px",
						}}
					>
						<button onClick={stepDownHandler}>-</button>
						<h3>Step : {step}</h3>
						<button onClick={stepUpHandler}>+</button>
					</div>
					<hr />
					<h3>{`${
						count === 0
							? "Today is "
							: count >= 0
							? count + " days from today is "
							: count + " days ago was "
					} ${date?.toDateString()}`}</h3>
					<hr />
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							gap: "10px",
						}}
					>
						<button onClick={countDownHandler}>-</button>
						<h3>Count : {count}</h3>
						<button onClick={countUpHandler}>+</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Challenge;
