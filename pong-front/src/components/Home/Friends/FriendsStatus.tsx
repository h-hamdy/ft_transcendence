import { Enline } from "./status/Enline"
import { OffLine } from "./status/OffLine";
import { Playing } from "./status/Playing"


interface Props {
    avatar: string,
    name: string,
    time: string;
}

export function FriendStatus ( {avatar, name, time}: Props ) {
    return (
        <>
            <div className="flex flex-col pl-10">
                <button className="flex items-center justify-center border border-[3px] border-[#0049C6] rounded-full w-[80px] h-[80px] lg:w-[80px] lg:h-[80px]">
                    <img src={avatar} className="absolute bbc rounded-full w-[62px] h-[62px] lg:w-[68px] lg:h-[68px]"></img>
                    <div className="absolute pb-12 pl-14 lg:pb-14 lg:pl-16">
                        <Enline/>
                    </div>
                </button>
                <div className="pt-2 pl-3 lg:text-lg">
                    {name}
                </div>
                 <div className="pt-2 pl-3 text-[#808191CC] Inter text-sm lg:text-sm font-meduim">
                    {time}
                </div>
            </div>
        </>
    )
}