import hhamdy from "/src/assets/hhamdy.jpg"
import ban from "/src/assets/ban.svg"
import mute from "/src/assets/mute.svg"
import kick from "/src/assets/kickOut.svg"
import React from "react"
import { useParams } from "react-router-dom"

interface Props {
	avatar: string,
	username: string
}

export function GroupRestriction ({avatar, username}: Props) {

	const Id = useParams();
	const conf = {
		avatar: avatar,
		username: username,
		id: Id,
	}
	return (
		<>
		<div className="pb-5">

			<div className="w-full h-[75px] shadow-lg border-[#6C5DD3] border-gray-200 rounded-custom flex flex-row items-center justify-around">
				<button className="flex items-center gap-[5px]">
					<img src={conf.avatar} className="w-[30px] h-[30px] rounded-full"></img>
					<div className="text-sm text-[#353E6C]">{conf.username}</div>
				</button>
				<button className="flex items-center">
					<img src={ban} className="pt-2"></img>
					<div className="text-xs text-[#353E6C]">ban</div>
				</button>
				<button className="flex items-center gap-[4px]">
					<img src={mute} className=""></img>
					<div className="text-xs text-[#353E6C]">Mute</div>
				</button>
				<button className="flex items-center">
					<img src={kick} className=""></img>
					<div className="text-xs text-[#353E6C]">Kick out</div>
				</button>
				<button className="flex items-center">
					<img src={kick} className=""></img>
					<div className="text-xs text-[#353E6C]">member</div>
				</button>
			</div>
		</div>
		</>
	)
}