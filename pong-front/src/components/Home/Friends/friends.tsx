import Plus from "/src/assets/Add_Friend.svg"
import { FriendStatus } from "./FriendsStatus"

export function Friends () {
    return (
        <>
             <div className="pt-10 pl-10 inline-block">
                <div className="flex flex-col border bg-[#FFF] drop-shadow-2xl rounded-2xl h-[270px]">
                    <div className="pl-28 pt-10 pb-6">
                        <div className="text-blue-900 font-poppins text-2xl font-semibold leading-normal tracking-wider">Friends</div>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col pl-10 pt-2">
                            <button className="border border-[#6C5DD3] bg-[#6C5DD3] rounded-full w-[72px] h-[72px]">
                                <img src={Plus}></img>
                            </button>
                            <div className="pt-2 pl-3">
                                Add Yours
                            </div>
                        </div>
                        <div className="flex">
                            <FriendStatus avatar="/src/assets/hkhalil.jpg" name="hkhalil" time="enligne"/>
                            <FriendStatus avatar="/src/assets/ahamdy.jpg" name="ahdmdy" time="14m ago"/>
                            <FriendStatus avatar="/src/assets/hhamdy.jpg" name="ahdmdy" time="14m ago"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}