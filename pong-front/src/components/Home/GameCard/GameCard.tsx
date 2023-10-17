import React from "react"
import { AddFriend } from "../Friends/AddFriend";
import { FriendPoints } from "../../Profile/MyFriends/Friendpoints";
import { Friends } from "../Friends/friends";

interface Props {
    TableType: string,
    GameType: string,
    imgPath: string,
}

export function GameCard ( {TableType, GameType ,imgPath}: Props ) {

	const [click, Setclick] = React.useState(false);

	const handleClick = () => {
		console.log(GameType);
		if (GameType === "Friend Game")
			Setclick(!click);
	}

    return (
        <>
            <div className="flex justify-center items-center w-full pr-10 pt-8 pl-10 pb-10 sm:pl-0 sm:pt-0">
                <div className="flex items-center pt-9 border bg-[#FFF] drop-shadow-md rounded-custom w-full w-[320px] h-[170px]">
                        <div className="flex flex-col p-3 pb-12">
                            <img className="bbc lg:w-[200px]" src={imgPath} alt="3WinGame"></img>
                        </div> 
                        <div className="flex flex-col pb-14">
                            <div className="pt-8">
                                <div className="flex items-center justify-center w-[70px] lg:w-[150px] lg:h-[40px]">
                                    <h1 className="text-[#5E74FF] Inter text-xs lg:text-lg font-extrabold">{TableType}</h1>
                                </div>
                            </div>
                            <h1 className=" Poppins flex items-center justify-center lg:text-md font-bold">{GameType}</h1>
                            <div className="pt-2 flex items-center justify-center">
                                <button className="border border-gray-100 rounded-xl w-[90px] lg:w-[100px] lg:h-[30px] bg-gray-100 drop-shadow-md" onClick={handleClick}>
                                    <h1 className="text-[#5961F9] text-sm lg:text-md font-extrabold">Start Play</h1>
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
			{click && <Friends/>}
        </>
    )
}