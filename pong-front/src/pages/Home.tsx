import { NavBar } from "../components/Home/NavBar/NavBar";
import { Start } from "../components/Home/Start/Start"
import { GameCard } from "../components/Home/GameCard/GameCard";
import { Friends } from "../components/Home/Friends/friends";
import { StartEnjoying } from "../components/Home/Start/StartEnjoying";
import { LeaderBoard } from "../components/Home/Learders/LeaderBoard";
import { LiveMatch } from "../components/Home/Live/LiveMatch";
import { LatestMatches } from "../components/Home/LTSMatches/LatestMatches";

export function Home() {
    return (
        <>
            <div className="w-screen">
                <NavBar/>
                <div className="pt-[140px] lg:pl-36">
                <Start/>
                <h1 className="flex items-center justify-center pt-16 lg:pt-20 text-[#353E6C] text-xl font-bold md:text-4xl">Start Game</h1>
                <div className="lg:flex w-full lg:pr-32 lg:pl-28 scrollable-div-ver lg:scrollable-div-hor lg:pl-50">
                    <GameCard TableType="Astro Table" GameType="3 Win Game" Views="13.9k playing" imgPath="./src/assets/3_win_game.png"/>
                    <GameCard TableType="Sky Table" GameType="7 Win Game" Views="13.9k playing" imgPath="./src/assets/7_win_game.png"/>
                    <GameCard TableType="Sky Table" GameType="1 Win Game" Views="13.9k playing" imgPath="./src/assets/1_win_game.png"/>
                    <GameCard TableType="Sky Table" GameType="5 Win Game" Views="13.9k playing" imgPath="./src/assets/5_win_game.png"/>
                    <GameCard TableType="Simple Table" GameType="Bot Game" Views="0 playing" imgPath="./src/assets/Bot_Img.png"/>
                </div>
				<div className="lg:flex lg:justify-center gap-9 lg:h-[1000px] lg:pr-20 lg:pl-32">
					<div className="lg:flex-col items-center justify-center lg:w-4/12">
						<div>
							<Friends/>
						</div>
						<div>
							<StartEnjoying/>
						</div>
					</div>
					<div className="lg:w-4/12">
						<LeaderBoard/>
					</div>
					<div className=" lg:w-4/12">
						<LatestMatches/>
					</div>
				</div>
                {/* <div>
                    <LiveMatch/>
                </div> */}
                <div className="flex justify-center items-center text-blue-900 font-poppins text-sm font-semibold leading-normal tracking-wider pb-5 lg:text-2xl">1337 Future Is Loading</div>
                </div>
            </div>
        </>
    )
}