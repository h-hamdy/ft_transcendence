interface Props {
    profile: string,
    name: string,
    RoomName: string,
    time: string
}

export function NotifRoom ( {profile, name, RoomName, time}: Props ) {
    return (
        <>
            <div className="pt-10">
            <div className="flex p-8 items-center border w-full h-[90px] bg-[#6C5DD3] rounded-2xl">
                <div>
                    <img src={profile} className="rounded-full w-[48px] h-[48px]"></img>
                </div>
                <div className="pl-6 flex flex-col gap-[6px]">
                    <div className="flex">
                        <div className="text-white">{name}</div>
                        <div className="text-white absolute right-0 pr-16">{time}</div>
                    </div>
                    <div className="text-white">Add you to a room <span className="font-bold">{RoomName}.</span> </div>
                </div>
            </div>
            </div>
        </>
    )
}