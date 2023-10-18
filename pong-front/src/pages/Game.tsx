import { NavBar } from "../components/Home/NavBar/NavBar";
import { GameTitle } from "../components/Game/GameTitle";
import { Enemy } from "../components/Game/Enemy";
import { Me } from "../components/Game/Me";
import { SocketContext, SocketProvider } from "../game/contexts/SocketContext";
import GameApp from "../game/GameApp";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { useContext , createContext} from "react";
import { Scorecontext } from "../game/components/Sketch";



interface customParam
{
//   gameMode : string;
  gameDuration: string;
}

// const  Param : customParam = 
// {
//   // gameMode  : 'simple',
//   gameDuration: '6',
// }

// const Score : number[] = [];
// Score[0] = 0;
// Score[1] = 0;
// export const MyContext = createContext(Score);

// state = {
// 	name: "",
// }

// // Callback function to handle data received from the 
// //child component
// handleCallback = (childData) => {
// 	// Update the name in the component's state
// 	this.setState({ name: childData }) 
// }

// render() {
// 	const { name } = this.state;
// 	return (
// 		<div>
// 			<Child parentCallback={this.handleCallback} />
// 			{name}
// 		</div>
// 	)
// }
// }
// export default App

export function Game () {

		// const {state} = useLocation();
		const socket = useContext(SocketContext);
		// const Score : string[] = [];
		// const [one, Setone] = useState(0);
		// const [two, Settwo] = useState(0);
		// const [score, setScore] = useSt	ate([0, 0]);

		// const handleScoreUpdate = (receivedScore : any) => {
		// 	setScore(receivedScore.map(String));
		// };
		
		//     // Listen for 'Score' event when the component mounts
		// useEffect(() => {
		// socket.on('Score', handleScoreUpdate);
		// },[]);

    // Cleanup the event listener when the component unmounts
//     return () => {
//       socket.off('Score', handleScoreUpdate);
//     };
//   }, [socket]); // Make sure 
	// useEffect(() => {
	// 	const handle = () {

	// 	}
	//   }, [score]);
		
		// console.log("score = ");
		// socket.on("getScore", ()=>
		// {
		// 	console.log("makhdemsh");
		// })
		// const [Score[0], setName] = useState('');
		// const [score1, Setscore1] = useState(0);
		// const [score2, Setscore2] = useState(0);
		// const Score : string[] = [];
		// const handleCallback = (Score_holder : number[]) => {
		// 	// Update the name in the component's state
		// 	Setscore1(Score_holder[0]);
		// 	Setscore2(Score_holder[1]);
		// }
		// const { Score } = this.state;
		// const Score_holder = useContext(Scorecontext);
		// const [score1, Setscore1] = useState<number>(0);
		// const [score2, Setscore2] = useState<number>(0);

		// const handleScore1 = (newScore1: number) => {
		// 	Setscore1(newScore1);
		// }

		// const handleScore2 = (newScore2: number) => {
		// 	Setscore2(newScore2);
		// }

	return (
		<>
		{/* <SocketProvider gameDuration={state.gameDuration}> */}
			<NavBar/>
			<div className="pl-8">
			<div className="flex flex-col items-center lg:pl-28 pr-10 pl-10">
			<div className="flex lg:flex-row flex-col justify-between w-full items-center pt-32">
				<Enemy profile="/src/assets/ahamdy.jpg" name="Adnan hamdy" friendNum="1337"/>
				<Me profile="/src/assets/hkhalil.jpg" name="hssan khalil" friendNum="0"/>
			</div>
			{/* <p>{score[0]}</p> */}
			{/* {Score[0]}	 */}
				 {/* <div>{Score[0]}</div>
				<div>{Score[1]}</div> */}

			{/* <MyContext.Provider value={Score}> */}
				<GameApp />
			{/* </x`.Provider> */}
			<div className="pt-32 lg:pl-28 pl-10 pb-10">
				<GameTitle/>
			</div>
			</div>
			</div>
			{/* </SocketProvider>; */}
		</>
	)
}