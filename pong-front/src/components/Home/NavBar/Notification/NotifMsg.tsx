interface Props {
    profile: string,
    name: string,
    requestType: string,
    time: string,
    // msgnum: string
}

export function NotifMsg ( {profile, name, requestType, time}: Props ) {
    return (
        <>
		<div className="lg:flex lg:items-center lg:pr-10 lg:pl-10">

            <div className="flex pt-14">
                    <div>
                        <img src={profile} className="rounded-full w-[48px] h-[48px] lg:w-[70px] lg:h-[70px]"></img>
                    </div>
                    <div className="pl-6 flex flex-col gap-[6px]">
                        <div className="flex">
                            <div className="lg:text-2xl">{name}</div>
                            <div className="text-[#808191] absolute right-0 pr-16 lg:text-xl sm:hidden">{time}</div>
                        </div>
                        <div className="text-[#808191] lg:text-xl">{requestType}</div>
                    </div>
            </div>
                <div className="flex gap-2 pt-4 pl-16 lg:pl-32">
                    <button className="flex justify-center items-center border rounded-xl bg-[#E4E4E47F] border-[#E4E4E47F] h-[38px] w-[86px] lg:h-[50px] lg:w-[110px]">
                        <div className="text-[#808191] font-semibold lg:text-2xl">Refuse</div>
                    </button>
                    <button className="flex justify-center items-center border rounded-xl bg-[#6C5DD3] border-[#6C5DD3] h-[38px] w-[86px] lg:h-[50px] lg:w-[110px]">
                        <div className="text-white font-semibold lg:text-2xl">Accept</div>
                    </button>
					<div className="text-[#808191] flex items-center text-xl">{time}</div>
                </div>
		</div>
        </>
    )
}

// accepted

                
                // <div className="flex gap-2 pt-4 pl-16">
                //     <button className="flex justify-center items-center border rounded-xl bg-[#E4E4E47F] border-[#E4E4E47F] h-[38px] w-[86px] lg:h-[50px] lg:w-[110px]">
                //         <div className="text-[#808191] font-semibold lg:text-2xl">Refuse</div>
                //     </button>
                //     <button className="flex justify-center items-center border rounded-xl bg-[#E9DCE5] border-[#E9DCE5] h-[38px] w-[86px] lg:h-[50px] lg:w-[110px]">
                //         <div className="text-[#6C5DD3] font-semibold lg:text-2xl">Accepted</div>
                //     </button>
                // </div>
