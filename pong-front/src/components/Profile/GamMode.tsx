import { useState } from "react"
import { GameCard } from "../Home/GameCard/GameCard";
import rmv from "/src/assets/remove.svg"

export function GameMode () {
	const [remove, Setremove] = useState(false);

	const handleremove = () => {
		Setremove(!remove);
	}
	return (
		<>
			{
				remove ? null : (
					<div className="blur-background z mobile-nav-bar lg:block">
						<div className="centered-component pt-32">
							<div className="flex flex-col lg:w-[800px] lg:h-[320px] bg-white shadow-lg pt-10 rounded-custom pb-5 lg:px-10">
								<div className="flex items-center justify-between px-10 pt-5 lg:pt-0">
									<div className="flex items-center justify-center text-xl p-5 pt-5 text-[#11142D] font-bold">Game Mode</div>
									<button
										onClick={handleremove}
										className="flex items-center justify-center border border-white rounded-full w-12 h-12 shadow-xl"
									>
										<img src={rmv} alt="Remove"/>
									</button>
								</div>
							<div className="flex lg:flex-row overflow-x-auto pt-3">
								<GameCard TableType="AI Table" GameType="5" imgPath="/src/assets/Bot_Img.png"/>
								<GameCard TableType="world Table" GameType="2" imgPath="/src/assets/3_win_game.png"/>
								<GameCard TableType="friend Table" GameType="1" imgPath="/src/assets/7_win_game.png"/>
							</div>
							</div>
						</div>
					</div>
	
					)	
			}
		</>
	)
}