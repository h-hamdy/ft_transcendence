import { NavBar } from "../components/Home/NavBar/NavBar";
import { GameTitle } from "../components/Game/GameTitle";
import { Enemy } from "../components/Game/Enemy";
import { Me } from "../components/Game/Me";

export function Game () {
	return (
		<>
			<NavBar/>
			<div className="pl-8">
			<div className="pt-32 lg:pl-28 pl-10 pb-10">
				<GameTitle/>
			</div>
			<div className="flex flex-col items-center lg:pl-28 pr-10 pl-10">
				<div className="border bg-black w-full rounded-custom h-[500px]">
				</div>
			</div>
			<div className="flex game-mobile justify-between items-center pr-10">
				<Enemy profile="/src/assets/ahamdy.jpg" name="Adnan hamdy" friendNum="1337"/>
				<Me profile="/src/assets/hkhalil.jpg" name="hssan khalil" friendNum="0"/>
			</div>
			</div>
		</>
	)
}