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
                    <img src={Profile} className="rounded-full w-[46px] h-[46px]"></img>
                </button>
                <div className="flex items-center justify-center border bg-gray-100 rounded-lg h-[26px] w-[26px]">
                    <div className="font-poppins text-sm text-[#5961F9] font-bold">{rank}</div>
                </div>
                <div className="text-gray-400 text-center font-poppins font-semibold text-xs font-normal leading-5">
                    {name}
                </div>
                <div className="flex">
                    <div className="flex flex-col">
                        <div className="text-[#14D1A4] text-base font-bold">Win</div>
                        <div className="text-[#FF5473] text-base font-bold">Losses</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-[#14D1A4] text-base font-bold pl-2">{win}</div>
                        <div className="text-[#FF5473] text-base font-bold pl-2">{Losses}</div>
                    </div>
                </div> 
            </div>
            <div className="pr-5 pl-5">
                <div className="border-t border-gray-300"></div>
            </div>
        </>
    )
}