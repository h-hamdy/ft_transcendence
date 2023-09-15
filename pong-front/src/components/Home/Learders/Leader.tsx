interface Props {
    Profile: string,
    rank: string,
    name: string,
    win: string,
    Losses: string;
}

export function Leader ( {Profile, rank, name, win, Losses}: Props ) {
    return (
        <>
            <div className="flex items-center justify-around pb-7 pt-10 p-5 ">
                <button>
                    <img src={Profile} className="rounded-full w-[46px] h-[46px] lg:w-[70px] lg:h-[70px]"></img>
                </button>
                <div className="flex items-center justify-center border bg-gray-100 rounded-lg h-[26px] w-[26px] lg:w-[60px] lg:h-[60px]">
                    <div className="font-poppins text-sm lg:text-2xl text-[#5961F9] font-bold">{rank}</div>
                </div>
                <div className="text-gray-400 flex items-center justify-center text-center font-poppins font-semibold text-xs lg:text-2xl font-normal leading-5">
                    {name}
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex flex-col lg:gap-2">
                        <div className="text-[#14D1A4] text-base font-bold lg:text-2xl">Win</div>
                        <div className="text-[#FF5473] text-base font-bold lg:text-2xl">Losses</div>
                    </div>
                    <div className="flex flex-col lg:gap-2">
                        <div className="text-[#14D1A4] text-base font-bold pl-2 lg:text-2xl">{win}</div>
                        <div className="text-[#FF5473] text-base font-bold pl-2 lg:text-2xl">{Losses}</div>
                    </div>
                </div> 
            </div>
            <div className="pr-5 pl-5">
                <div className="border-t border-gray-300"></div>
            </div>
        </>
    )
}