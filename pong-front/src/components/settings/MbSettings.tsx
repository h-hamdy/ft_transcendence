import rmv from "/src/assets/remove.svg"
import avatar from "/src/assets/ahamdy.jpg"
import React, { useState } from "react";
import { MbTwoFA } from "./MbTwoFA";
import { GameSetting } from "./GameSettings";
import { MbGameSettings } from "./MbGameSetting";
import { TwoFa } from "./TwoFA";	

export function MbSettings () {

    const [remove, SetRemove] = React.useState(false);
	const [twoFA, setTwoFa] = useState(false);
	const [gameSetting, setgameSetting] = useState(false);
	

	return (
		<>
		{
			remove ? null : (
				<div className="blur-background z bg-white sm:hidden">
				<div className="centered-component pt-32">
				<div className="flex items-center justify-between pr-10">
					<div className="text-[#11142D] font-semibold text-lg p-10">Account Settings</div>
					<button onClick={() => SetRemove(!remove)}  className="flex items-center justify-center border border-white rounded-full w-[48px] h-[48px] lg:w-[50px] h-[50px] shadow-xl">
                        <img src={rmv}></img>
                    </button>
				</div>
				<div className="flex items-center justify-around gap-[10px] pt-5 p-10 pt-0">
				<button  className={`flex items-center justify-center border  border-[2px] w-[110px] h-[35px] rounded-xl bg-[#6C5DD3] border-[#6C5DD3]`} >
					<div className={`text-white font-semibold`}>Your Profile</div>
				</button> 
				<button className={`flex bg-[#6C5DD3] border-[#6C5DD3] items-center justify-center border border-[2px] bg-white border-[#FF754C] w-[80px] h-[35px] rounded-xl`} onClick={() => {setTwoFa(!twoFA), SetRemove(!remove)}}>
					<div className={`font-semibold text-balck`}>2FA</div>
				</button>
				<button className={`flex items-center justify-center border  border-[2px] w-[110px] h-[35px] rounded-xl bg-white border-[#FF754C]`} onClick={() => {setgameSetting(!gameSetting), SetRemove(!remove)}}>
					<div className={`text-black font-semibold`}>Game Setting</div>
				</button> 
				</div>
				<div className="pt- pl-5 pr-5">
					<div className="flex flex-col gap-1">
						<div className="font-light text-sm text-[#808191]">Your Avatar</div>
						<div className="flex gap-2 items-center">
							<div className="w-[65px] h-[65px]">
								<img src={avatar} className="rounded-full"></img>
							</div>
							<div className="flex flex-col gap-1">
							<div className="flex gap-[10px]">
								<button className="flex justify-center items-center border rounded-xl bg-[#6C5DD3] border-[#6C5DD3] h-[45px] w-[100px] pr-">
									<div className="text-white font-semibold text-sm">Upload New</div>
								</button>
							</div>
							<div className="text-sm font-extralight text-[#808191]">Avatar help your friends recognize you in CyberPong.</div>
							</div>
						</div>
						<div className="border-t-2 border-gray-300"></div>
					</div>
				</div>
				<div className="flex flex-col gap-[8px] justify-center pt-10 pl-5">
					<div className="text-[#808191]">Update Your name</div>
					<div className="flex flex-col gap-9">
					<form className="flex  justify-center items-center rounded-xl h-[70px] w-[200px]">
						<input className="rounded-xl w-full h-full border bg-gray-100 border-[3px]  pr-3 pl-3 focus:border-[#6C5DD3] focus:outline-none text-[#888EFF] text-center"></input>
					</form>
					<div className="pb-10">

					<button className="flex justify-center items-center border rounded-xl bg-[#6C5DD3] border-[#6C5DD3] h-[50px] w-[120px]">
						<div className="text-white font-semibold text-sm">Update Profile</div>
					</button>
					</div>
					</div>
				</div>
				</div>
			</div>
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