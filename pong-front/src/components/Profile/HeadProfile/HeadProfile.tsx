import { Enline } from "../../Home/Friends/status/Enline"
import check from "/src/assets/check.svg"
import friend from "/src/assets/Friendly.png"
import play from "/src/assets/Game.svg"
import plusFriend from "/src/assets/PersonPlusFill.svg"

interface Props {
	profile: string,
	name: string,
	friendNum: string,
}

export function HeadProfile ( {profile, name, friendNum}: Props ) {
	return (
		<>
		<div className="pt-32 pl-10 pr-10 lg:pl-48 lg:pr-28">
			<div className="w-full h-[215px] sm:h-[150px] pr-6 pl-6 border border-white rounded-custom shadow">
				<div className="flex flex-col sm:flex-row sm:justify-around pt-8 gap-8">
					<div className="flex gap-6">
					<div className="flex items-center justify-center border border-[3px] border-[#0049C6] rounded-full w-[75px]  h-[75px] sm:w-[85px] sm:h-[85px]">
							<img src={profile} className="absolute bbc rounded-full w-[57px] h-[57px] sm:w-[67px] sm:h-[67px]"></img>
							<div className="absolute pb-12 pl-14 lg:pb-14 lg:pl-16">
								<Enline/>
							</div>
					</div>
					<div className="flex flex-col justify-center gap-4">
						<div className="flex">
							<div className="whitespace-nowrap text-xl">{name}</div>
							<div className="pl-4">
								<img src={check} className="w-[25px] h-[25px]"></img>
							</div>
						</div>
						<div className="text-sm text-[#808191]">{friendNum} Friends</div>
					</div>
					</div>
					<div className="flex gap-7 items-center justify-around">
					<button className="flex justify-center items-center border rounded-xl bg-[#6C5DD3] border-[#6C5DD3] h-[45px] w-[100px] pr-">
							<div className="text-white font-semibold lg:text-sm">Message</div>
					</button>
						<button className="flex items-center justify-center border border-[#6C5DD3] bg-[#6C5DD3] w-[50px] h-[45px] shadow rounded-xl">
							<img src={plusFriend}></img>
						</button>
						<button className="flex items-center justify-center pb-[4px] border border-[#6C5DD3] bg-[#6C5DD3] w-[50px] h-[45px] shadow rounded-xl">
							<img src={play}></img>
						</button>
					</div>
				</div>
			</div>
		</div>
		</>
	)
}