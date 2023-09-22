import gameType from "/src/assets/7_win_game.png"
import box from "/src/assets/box.svg"
import replay from "/src/assets/replay.svg"

export function GameTitle () {
	return (
		<>
		<div className="flex game-mobile justify-center sm:justify-between">
			<div className="flex gap-3 sm:gap-6">
				<div className="flex items-center justify-center border border-[2px] border-[#0049C6] rounded-full w-[80px] h-[80px] sm:w-[95px] sm:h-[95px]">
					<img src={gameType} className="w-[65px] h-[65px] sm:w-[80px] sm:h-[80px] rounded-full bbc"></img>
				</div>
				<div className="flex flex-col">
					<div  className="text-[#11142D] text-lg sm:text-2xl">7 win game</div>
					<div className="text-[#11142D] text-2xl sm:text-4xl font-bold sm:font-extrabold">Saad vs adnan</div>
					<div className="text-[#808191] text-xs font-extralight pt-3">You need almost 7 Round to win the Game .</div>
				</div>
			</div>
			<div className="flex  sm:flex-col lg:flex-row gap-6 sm:pr-10">
				<div className="flex gap-[10px] items-center justify-center border bg-[#E4E4E47F] hover:bg-gray-200 transition duration-400 ease-in-out border-[#E4E4E47F] rounded-2xl w-[140px] h-[55px]">
					<div>
						<img src={replay}></img>
					</div>
					<div className="text-[#808191] font-semibold text-md">Shuffle play</div>
				</div>
				<div className="flex gap-[10px] items-center justify-center border bg-[#FF754C] hover:bg-[#FF5722] transition duration-400 ease-in-out border[#FF754C] rounded-2xl w-[130px] h-[55px]">
					<div>
						<img src={box}></img>
					</div>
					<div className="text-white font-semibold text-md">ReGame</div>
				</div>
			</div>
		</div>
		</>
	)
}