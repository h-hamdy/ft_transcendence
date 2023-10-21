import axios from "axios"
import { useState } from "react"
import React from "react"


interface Props {
	name: string,
}

export function Deblock ( { name }: Props ) {


	const UnblockFriend = async () => {
		try {
			const response = await axios.post(`http://localhost:3000/unblock-friend/${name}`, null, {withCredentials: true}).then (function(response) {console.log(response)})
		}
		catch (error) {
			console.log(error);
		}
	}
	return (
		<>
			<div className="flex items-center justify-around w-[120px] h-[40px] bg-gray-100 rounded-md">
				<div className="text-sm text-[#5961F9]">{name}</div>
				<button onClick={UnblockFriend}>
					<div className="text-lg font-semibold text-[#ff0000]">X</div>
				</button>
			</div>
		</>
	)
}