import rmv from "/src/assets/remove.svg"
import React, { useState } from "react";
import { TwoFa } from "./TwoFA";
import { useEffect } from "react";
import axios from "axios";
import { GameSetting } from "./GameSettings";
import { MbTwoFA } from "./MbTwoFA";
import { MbGameSettings } from "./MbGameSetting";

export function DkSettings () {

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
			const response = await axios.get(`http://localhost:3000/profile/me`, { withCredentials: true });
			setUserData(response.data);
		  } catch (error) {
			console.error("Error fetching user data:");
		  }
		};
	
		fetchData();
	  }, []);

    const [remove, SetRemove] = React.useState(false);
	const [twoFA, setTwoFa] = useState(false);
    const [gameSetting, setgameSetting] = React.useState(false);

	return (
		<>
		{
			remove ? null : (
				(
					<div className="blur-background z mobile-nav-bar sm:block">
					<div className="centered-component pt-28">
					<div className="flex w-[480px] h-[600px] bg-white shadow-2xl rounded-custom">
						<div className="flex flex-col">
						<div className="flex justify-between">
							<div className="text-[#11142D] font-semibold text-lg p-10">Account Settings</div>
							<div className="pt-8 pr-5">
								<button onClick={() => SetRemove(!remove)} className="flex items-center justify-center border border-white rounded-full w-[48px] h-[48px] lg:w-[50px] h-[50px] shadow-xl">
									<img src={rmv}></img>
								</button>
							</div>
						</div>
						<div className="flex flex-col">

						<div className="flex items-center justify-around gap-10 pt-5 p-10 pl-5">
							<button  className={`flex items-center justify-center border  border-[2px] w-[120px] h-[35px] rounded-xl bg-[#6C5DD3] border-[#6C5DD3]`} >
								<div className={`text-white font-semibold`}>Your Profile</div>
							</button> 
							<button className={`flex bg-[#6C5DD3] border-[#6C5DD3] items-center justify-center border border-[2px] bg-white border-[#FF754C] w-[100px] h-[35px] rounded-xl`} onClick={() => {setTwoFa(!twoFA), SetRemove(!remove)}}>
								<div className={`font-semibold text-balck`}>2FA</div>
							</button>
							<button className={`flex items-center justify-center border  border-[2px] w-[120px] h-[35px] rounded-xl bg-white border-[#FF754C]`} onClick={() => {setgameSetting(!gameSetting), SetRemove(!remove)}}>
								<div className={`text-black font-semibold`}>Game Setting</div>
							</button> 
						</div>
						<div className="pt- pl-5 pr-5">
						<div className="flex flex-col gap-1">
							<div className="font-light text-sm text-[#808191]">Your Avatar</div>
							<div className="flex gap-2 items-center">
								<div className="w-[65px] h-[65px]">
									<img src={userData.user_data.avatar} className="rounded-full"></img>
								</div>
								<div className="flex flex-col gap-1">
								<div className="flex gap-9">
								<div className="file-input-wrapper">
									<button className="flex justify-center items-center border rounded-xl bg-[#6C5DD3] border-[#6C5DD3] h-[45px] w-[100px] pr-">
										<div className="text-white font-semibold text-sm">Upload New</div>
										<input type="file" className="file-input"/>
									</button>
									</div>
									<div>
									{/* <label >
										Choose a file
									</label> */}
									</div>
								</div>
								<div className="text-sm font-extralight text-[#808191]">Avatar help your friends recognize you in CyberPong.</div>
								</div>
							</div>
							<div className="border-t-2 border-gray-300"></div>
						</div>
						<div className="flex flex-col gap-[8px] justify-center pt-10 pl-5">
						<div className="text-[#808191]">Update Your Name</div>
						<div className="flex flex-col gap-9">
						<form className="flex  justify-center items-center rounded-xl h-[70px] w-[200px]">
							<input className="rounded-xl w-full h-full border bg-gray-100 border-[3px]  pr-3 pl-3 focus:border-[#6C5DD3] focus:outline-none  text-[#888EFF] text-center"></input>
						</form>
						<button className="flex justify-center items-center border rounded-xl bg-[#6C5DD3] border-[#6C5DD3] h-[50px] w-[120px]">
							<div className="text-white font-semibold text-sm">Update Profile</div>
						</button>
						</div>
					</div>
					</div>
						</div>
						</div>
					</div>
				</div>
			</div>

				)

			)
		}
		{ twoFA &&
			<div>
				<TwoFa/>
				<MbTwoFA/>
			</div>
		}
		{ gameSetting &&
			<div>
				<GameSetting/>
				<MbGameSettings/>
			</div>
		}
		</>
	)
}