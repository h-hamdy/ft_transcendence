import { useEffect, useState } from "react"
import { GameCard } from "../Home/GameCard/GameCard";
import rmv from "/src/assets/remove.svg"
import axios from "axios";
// import { useEffect } from "react";
export function GameMode () {
	const [remove, Setremove] = useState(false);

	const [userData, setUserData] = useState({
	user_data: {
		id: 0,
		username: "",
		avatar: "",
		rating: 0,
		me: false,
		is_two_factor_auth_enabled: false,
	},
	friends: [],
	match_history: [],
	achievements: [],
	wins: 0,
	loses: 0,
	draws: 0,
	});

	useEffect(() => {
	const fetchData = async () => {
		try {
		// const response = await axios.get(http://localhost:3000/profile/${username}, { withCredentials: true });
		const response = await axios.get('http://localhost:3000/profile/me', {withCredentials: true})
		setUserData(response.data);
		} catch (error) {
		console.error("Error fetching user data:");
		}
	};

	fetchData();
	}, []);

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
								<GameCard TableType="AI Table" GameType="5" imgPath="/src/assets/Bot_Img.png" user_id={userData.user_data.id}/>
								<GameCard TableType="world Table" GameType="2" imgPath="/src/assets/3_win_game.png" user_id={userData.user_data.id}/>
								<GameCard TableType="friend Table" GameType="1" imgPath="/src/assets/7_win_game.png" user_id={userData.user_data.id}/>
							</div>
							</div>
						</div>
					</div>
	
					)	
			}
		</>
	)
}