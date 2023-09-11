import Plus from "/src/assets/Add_Friend.svg"
import { FriendStatus } from "./FriendsStatus"
import React from "react"
import { AddFriend } from "./AddFriend";

export function Friends () {

    const [invite, SetInvite] = React.useState(false);

    return (
        <>
             <div className="pt-10 pl-10 relative">
                <div className="flex flex-col border bg-[#FFF] drop-shadow-2xl rounded-custom-b h-[270px] scrollable-div-hor">
                    <div className="pl-28 pt-10 pb-6">
                        <div className="text-blue-900 font-poppins text-2xl font-semibold leading-normal tracking-wider">Friends</div>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col pl-10 pt-2">
                            <button onClick={() => SetInvite(!invite)} className="border border-[#6C5DD3] bg-[#6C5DD3] rounded-full w-[72px] h-[72px]">
                                <div className="flex">

                                    <img src={Plus}></img>
                                    {/* {invite && <AddFriend/>} */}
                                </div>
                            </button>
                            <div className="pt-2 pl-3">
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
        </>
    )
}