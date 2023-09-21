import Plus from "/src/assets/Add_Friend.svg"
import { FriendStatus } from "./FriendsStatus"
import React from "react"
import { AddFriend } from "./AddFriend"
import { Add } from "../NavBar/Notification/add"

export function Friends () {

    const [invite, SetInvite] = React.useState(false);

    return (
        <>
             <div className="pt-10 lg:pt-0 pl-10 lg:pl-0 lg:flex lg:items-center lg:justify-center">
                <div className="flex flex-col border bg-[#FFF] drop-shadow-md rounded-custom lg:rounded-custom h-[270px] lg:h-[280px] scrollable-div-hor">
                    <div className="pl-10 pt-10 pb-6">
                        <div className="text-blue-900 font-poppins text-2xl font-semibold leading-normal tracking-wider lg:text-2xl">Friends</div>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col items-center justify-center pl-10 pb-6">
                            <button onClick={() => SetInvite(!invite)} className="flex items-center justify-center border border-[#6C5DD3] bg-[#6C5DD3] rounded-full w-[72px] h-[72px] lg:w-[80px] lg:h-[80px]">
                                <div>
                                    <img src={Plus} className="lg:w-[80px] lg:h-[80px]"></img>
                                </div>
                            </button>
                            <div className="pt-2 lg:text-md">
                                Add Yours
                            </div>
                        </div>
                        <div className="flex">
                            <FriendStatus avatar="/src/assets/hkhalil.jpg" name="hkhalil" time="enligne"/>
                            <FriendStatus avatar="/src/assets/ahamdy.jpg" name="ahdmdy" time="14m ago"/>
                            <FriendStatus avatar="/src/assets/hhamdy.jpg" name="ahdmdy" time="14m ago"/>
                            <FriendStatus avatar="/src/assets/hhamdy.jpg" name="ahdmdy" time="14m ago"/>
                            <FriendStatus avatar="/src/assets/hkhalil.jpg" name="hkhalil" time="enligne"/>
                            <FriendStatus avatar="/src/assets/hkhalil.jpg" name="hkhalil" time="enligne"/>
                        </div>
                    </div>
                </div>
            </div>
			{invite && <Add/>}
        </>
    )
}