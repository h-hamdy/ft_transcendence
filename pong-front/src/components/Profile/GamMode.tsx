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
					<div className="blur-background z">
						<div className="centered-component sm:pt-28 pt-32">
							<div className="flex flex-col sm:w-[700px] sm:h-[600px] w-screen h-screen bg-white shadow-2xl rounded-custom pb-5">
								<div className="flex items-center justify-between pr-10 pl-10 pt-5">
									<div className="flex items-center justify-center text-xl p-5 pt-10 text-[#11142D] font-bold">Game Mode</div>
									<button
										onClick={handleremove}
										className="flex items-center justify-center border border-white rounded-full w-12 h-12 shadow-xl"
									>
										<img src={rmv} alt="Remove" />
									</button>
								</div>
							<div className="overflow-y-auto">
								<GameCard TableType="Astro Table" GameType="3 Win Game" Views="13.9k playing" imgPath="/src/assets/3_win_game.png"/>
								<GameCard TableType="Sky Table" GameType="7 Win Game" Views="13.9k playing" imgPath="/src/assets/7_win_game.png"/>
								<GameCard TableType="Sky Table" GameType="1 Win Game" Views="13.9k playing" imgPath="/src/assets/1_win_game.png"/>
								<GameCard TableType="Sky Table" GameType="5 Win Game" Views="13.9k playing" imgPath="/src/assets/5_win_game.png"/>
								<GameCard TableType="Simple Table" GameType="Bot Game" Views="0 playing" imgPath="/src/assets/Bot_Img.png"/>
							</div>
							</div>
						</div>
					</div>
	
					)	
			}
		</>
	)
}