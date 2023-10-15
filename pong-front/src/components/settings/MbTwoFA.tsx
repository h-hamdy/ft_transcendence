import React from "react";
import rmv from "/src/assets/remove.svg"
import { useState } from "react";
import pic from "/src/assets/hhamdy.jpg"
import group from "/src/assets/Group.svg"
import mobile from "/src/assets/mobiledow.svg"

import { GameSetting } from "./GameSettings";
import { MbSettings } from "./MbSettings";
import { DkSettings } from "./DkSettings";
import { MbGameSettings } from "./MbGameSetting";


export function MbTwoFA (  ) {
	const [remove, SetRemove] = React.useState(false);
	const [profile, setProfile] = useState(false);
	const [gameSetting, setgameSetting] = React.useState(false);


	return (
		<>
			{
				remove ? null : (
						<div className="blur-background z bg-white sm:hidden">
					<div className="centered-component pt-28">
							<div className="flex-col">
								<div className="flex justify-between">
									<div className="text-[#11142D] font-semibold text-lg p-10">Account Settings</div>
									<div className="pt-8 pr-[37px]">
										<button onClick={() => SetRemove(!remove)} className="flex items-center justify-center border border-white rounded-full w-[48px] h-[48px] lg:w-[50px] h-[50px] shadow-xl">
											<img src={rmv}></img>
										</button>
									</div>
								</div>
								<div className="flex items-center justify-around gap-[10px] pt-5 p-10 pt-0">
								<button  className={`flex items-center justify-center border  border-[2px] w-[120px] h-[35px] rounded-xl bg-white border-[#FF754C]`} onClick={() => {setProfile(!profile), SetRemove(!remove)}}>
										<div className={`"text-black font-semibold`}>Your Profile</div>
									</button> 
									<button className={`flex bg-[#6C5DD3] border-[#6C5DD3] items-center justify-center border border-[2px] w-[100px] h-[35px] rounded-xl`}>
										<div className={`font-semibold text-white`}>2FA</div>
									</button>
									<button  className={`flex items-center justify-center border  border-[2px] w-[120px] h-[35px] rounded-xl bg-white border-[#FF754C]`} onClick={() => {setgameSetting(!gameSetting) , SetRemove(!remove)}}>
										<div className={`text-black font-semibold`}>Game setting</div>
									</button>
								</div>
							<div className="scrollable-div-ver7">
									<div className="flex flex-col justify-center gap-[6px] items-center">
										<div className="text-[#11142D] text-xl font-semibold">Setup 2FA</div>
										<div>
											<img src={pic} className="w-[80px] h-[80px] rounded-full"></img>
										</div>
										<div className="text-[#11142D] text-sm">Hhamdy</div>
										<form className="flex  justify-center items-center rounded-xl h-[45px] w-[130px]">
											<input className="rounded-xl w-full h-full border bg-gray-100 border-[3px]  pr-3 pl-3 focus:border-[#6C5DD3] focus:outline-none text-[#888EFF] text-center"></input>
										</form>
										<button className="flex justify-center items-center border rounded-xl bg-[#6C5DD3] border-[#6C5DD3] h-[45px] w-[130px] pr-">
												<div className="text-white font-semibold lg:text-sm">Enable 2FA</div>
										</button>

									</div>
									<div className="flex flex-col justify-center gap-[6px] items-center pt-5">
									<div className="flex flex-col items-center pt-5 border border-[3px] border-[#BACCFD] rounded-custom w-[240px] h-[257px]">
											<div className="text-[#BACCFD]">Install Google Auth</div>
											<div className="pt-5">
												<img src={group}></img>
											</div>
											<div className="pt-5">
												<img src={mobile}></img>
											</div>
										</div>

									</div>
								<div className="relative flex flex-col items-center justify-center pt-5">
								<button className="flex items-center justify-center border rounded-xl bg-[#BACCFD] w-[220px] h-[220px]">
									<div className="flex flex-col items-center justify-center w-[150px] h-[150px]">
										<div className="text-[#888EFF] font-extrabold text-lg z">Click to generate your 2FA QR code</div>
										<div className="font-extrabold text-8xl text-[#888EFF] z">?</div>
									</div>
									<div className="absolute inset-0 flex items-center justify-center">
										<div className="path3 blur-sm w-[150px] h-[150px]"></div>
									</div>
								</button>
								</div>
								<div className="flex flex-col justify-center items-center pt-5 pb-14">
										<div className="flex flex-col items-center pt-5 border border-[3px] border-[#BACCFD] rounded-custom w-[240px] h-[257px] pt-5">
											<div className="text-[#888EFF] font-bold pb-16">Verify your device</div>
											<div className="text-[#888EFF] font-light pb-1">Enter your code</div>
											<form className="flex  justify-center items-center rounded-xl h-[30px] w-[160px]">
												<input className="flex rounded-xl text-[#888EFF] w-full h-full border bg-gray-100 border-[3px]  pr-3 pl-3 focus:border-[#6C5DD3] focus:outline-none text-center"></input>
											</form>
											<div className="pt-4">

											<button className="flex justify-center items-center border rounded-xl bg-[#6C5DD3] border-[#6C5DD3] h-[45px] w-[130px]">
													<div className="text-white font-semibold lg:text-sm">Enable 2FA</div>
											</button>
											</div>
										</div>
									</div>
									</div>
						</div>
						</div>

					</div>
						
				)
			}
			{ profile &&
			<div>
				<DkSettings/>
				<MbSettings/>
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