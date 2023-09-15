import { Enline } from "./status/Enline"
import { OffLine } from "./status/OffLine";
import { Playing } from "./status/Playing"


interface Props {
    avatar: string,
    // status: string,
    name: string,
    time: string;
}

export function FriendStatus ( {avatar, name, time}: Props ) {
    return (
        <>
            <div className="flex flex-col pl-10">
                <button className="flex items-center justify-center border border-[3px] border-[#0049C6] rounded-full w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]">
                    <img src={avatar} className="absolute bbc rounded-full w-[62px] h-[62px] lg:w-[82px] lg:h-[82px]"></img>
                    <div className="absolute pb-12 pl-14 lg:pb-20 lg:pl-16">
                        <Enline/>
                    </div>
                </button>
                <div className="pt-2 pl-3 lg:text-2xl">
                    {name}
                </div>
                 <div className="pt-2 pl-3 text-[#808191CC] Inter text-sm lg:text-xl font-meduim">
                    {time}
                </div>
            </div>
        </>
    )
}