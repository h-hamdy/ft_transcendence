import { Avatar } from "../Avatar"
import game from "/src/assets/Game.svg"
import profile from "/src/assets/Profile.svg"
import video from "/src/assets/video.svg"
import chat from "/src/assets/Chat.svg"
import setting from "/src/assets/Setting.svg"
import down from "/src/assets/small-down.svg"
import logo from "/src/assets/mainLogo.svg"
import { useState } from "react"


export function MBburger () {
	const [click, SetClick] = useState(false);

	return (
		<>
		<div className="h-screen w-[112px] flex justify-center">

			<div className="flex flex-col justify-center items-center gap-8 p-5">
				<img src={logo} className="w-[100px] h-[100px]"></img>
				<button className="pt-6 pt-12">
					<img src={game} onClick={() => SetClick(!click)} className={`w-[20px] h-[20px] ${click ? 'rounded-2xl bg-[#6C5DD3]' : ''}`}></img>
				</button>
				<button>
                    <img src={profile} onClick={() => SetClick(!click)} className={`w-[20px] h-[20px] ${click ? 'rounded-2xl bg-[#6C5DD3]' : ''}`}></img>
                </button>
				<button>
                    <img src={video} onClick={() => SetClick(!click)} className={`w-[20px] h-[20px] ${click ? 'rounded-2xl bg-[#6C5DD3]' : ''}`}></img>
                </button>
				<button>
					<img src={game} onClick={() => SetClick(!click)} className={`w-[20px] h-[20px] ${click ? 'rounded-2xl bg-[#6C5DD3]' : ''}`}></img>
				</button>

                <div className="flex items-center justify-center text-[#808191] text-sm lg:text-md pt-8">Friends</div>
				<div className="flex flex-col items-center justify-center pl-1 gap-3 scrollable-div-ver">
					<Avatar/>
					<Avatar/>
					<Avatar/>
					<Avatar/>
					<Avatar/>
					<Avatar/>
					<Avatar/>
					<Avatar/>
				</div>
				<div className="flex items-center justify-center">
					<img src={down} className="w-[12px] h-[12px]"></img>
				</div>

				<button className="pt-6">
					<img src={chat} onClick={() => SetClick(!click)} className={`w-[20px] h-[20px] ${click ? 'rounded-2xl bg-[#6C5DD3]' : ''}`}></img>
				</button>
				<button>
					<img src={setting} onClick={() => SetClick(!click)} className={`w-[20px] h-[20px] ${click ? 'rounded-2xl bg-[#6C5DD3]' : ''}`}></img>
				</button>
			</div>
		</div>
		</>
	)
}