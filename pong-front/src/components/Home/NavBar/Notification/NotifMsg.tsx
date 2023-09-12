interface Props {
    profile: string,
    name: string,
    requestType: string,
    time: string;
}

export function NotifMsg ( {profile, name, requestType, time}: Props ) {
    return (
        <>
            <div className="flex pt-14">
                    <div>
                        <img src={profile} className="rounded-full w-[48px] h-[48px]"></img>
                    </div>
                    <div className="pl-6 flex flex-col gap-[6px]">
                        <div className="flex">
                            <div>{name}</div>
                            <div className="text-[#808191] absolute right-0 pr-16">{time}</div>
                        </div>
                        <div className="text-[#808191]">{requestType}</div>
                    </div>
                </div>
                <div className="flex gap-2 pt-4 pl-16">
                    <button className="flex justify-center items-center border rounded-xl bg-[#E4E4E47F] border-[#E4E4E47F] h-[38px] w-[86px]">
                        <div className="text-[#808191] font-semibold">Refuse</div>
                    </button>
                    <button className="flex justify-center items-center border rounded-xl bg-[#6C5DD3] border-[#6C5DD3] h-[38px] w-[86px]">
                        <div className="text-white font-semibold">Accept</div>
                    </button>
                </div>
        </>
    )
}

// accepted

                
                // <div className="flex gap-2 pt-4 pl-16">
                //     <button className="flex justify-center items-center border rounded-xl bg-[#E4E4E47F] border-[#E4E4E47F] h-[38px] w-[86px]">
                //         <div className="text-[#808191] font-semibold">Refuse</div>
                //     </button>
                //     <button className="flex justify-center items-center border rounded-xl bg-[#E9DCE5] border-[#E9DCE5] h-[38px] w-[86px]">
                //         <div className="text-[#6C5DD3] font-semibold">Accepted</div>
                //     </button>
                // </div>
