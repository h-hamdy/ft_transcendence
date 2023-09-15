import { Avatar } from "../Avatar"
import game from "/src/assets/Game.svg"
import profile from "/src/assets/Profile.svg"
import video from "/src/assets/video.svg"
import chat from "/src/assets/Chat.svg"
import setting from "/src/assets/Setting.svg"
import down from "/src/assets/small-down.svg"
import logo from "/src/assets/mainLogo.svg"


export function MBburger () {
	return (
		<>
		<div className="h-screen w-[110px] lg:w-[150px] 2xl:w-[200px] flex justify-center pt-10">

			<div className="flex flex-col gap-8 p-5">
				<img src={logo} className="w-[100px] h-[100px]"></img>
				<button className="pt-6 pl-3 pt-32">
					<img src={game} className="w-[45px] h-[45px]"></img>
				</button>
				<button className="pl-3">
                    <img src={profile} className="w-[45px] h-[45px]"></img>
                </button>
				<button className="pl-3">
                    <img src={video} className="w-[45px] h-[45px]"></img>
                </button>
				<button className="pl-3">
					<img src={game} className="w-[45px] h-[45px]"></img>
				</button>

                <div className="text-[#808191] text-sm lg:text-2xl pb-3 pt-16">Friends</div>
				<div className="flex flex-col pl-1 gap-5 scrollable-div-ver">
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
					<img src={down} className="w-[18px] h-[18px]"></img>
				</div>

				<button className="pt-16 pl-3">
					<img src={chat} className="w-[45px] h-[45px]"></img>
				</button>
				<button className="pl-3">
					<img src={setting} className="w-[45px] h-[45px]"></img>
				</button>
			</div>
		</div>
		</>
	)
}