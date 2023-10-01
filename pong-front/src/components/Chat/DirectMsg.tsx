import React from "react";
import { Chatprofile } from "./Chatprofile";
import up from "/src/assets/small_up.svg"

export function DirectMsg () {

	const [buttonStates, setButtonStates] = React.useState(Array(10).fill(false));
	const [Up, setUp] = React.useState(false);

	const handleClick = (index: number) => {
		const newButtonStates = Array(17).fill(false);
		newButtonStates[index] = !newButtonStates[index];
		setButtonStates(newButtonStates);
	  };
	return (
		<>
			<div className="flex flex-col gap-6 pb-4">
			<div className="flex items-center justify-between">
				<div className="text-[#808191] text-sm">Direct Message</div>
				<button onClick={() => setUp(!Up)}>
					<img src={up}
					></img>
				</button>
			</div>
		</div>
		{
		Up ? null : (
			<>
			<div className="scrollable-div-ver5 flex flex-col">
				{buttonStates.map((isClicked, index) => (
					<Chatprofile
					onClick={() => handleClick(index)}
					isClicked={isClicked}
					/>
					))}
				</div>
				<div className="border border-gray-300 bt-[5px]"></div>
			</>
		)
	}
		</>
	)
}