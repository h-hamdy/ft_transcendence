import React from "react"
import hhamdy from "/src/assets/hhamdy.jpg"

interface Props {
	name: string,
	avatar: string,
}

export function AddMember ( {name, avatar}: Props ) {
	
	return (
		<>
		<div className="py-1">
			<div className="w-full h-[60px] shadow-md  bg-white rounded-custom flex flex-row items-center justify-around">
				<div className="flex gap-[8px] items-center">
					<img src={avatar} className="w-[30px] h-[30px] rounded-full"></img>
					<div className="text-sm text-[#353E6C]">{name}</div>
				</div>
				<button className="flex items-center justify-center bg-[#6C5DD3] h-[30px] shadow-lg rounded-custom w-[100px]">
					<div className="text-white text-xs font-semibold pt-[2px]">Add member</div>
				</button>
			</div>
		</div>
		</>
	)
}