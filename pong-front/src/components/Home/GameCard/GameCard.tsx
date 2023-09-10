interface Props {
    TableType: string,
    GameType: string,
    imgPath: string,
    Views: string,
}

export function GameCard ( {TableType, GameType ,imgPath, Views}: Props ) {
    return (
        <>
            <div className="flex justify-center items-center p-10 pb-0">
                <div className="flex items-center pt-9 border bg-[#FFF] drop-shadow-2xl rounded-custom w-full h-[200px]">
                        <div className="flex flex-col p-4 pb-12">
                            <img className="bbc" src={imgPath} alt="3WinGame"></img>
                        </div> 
                        <div className="flex flex-col pb-14 pr-3">
                            <div className="pt-8">
                                <div className="border border-gray-100 rounded-2xl w-[70px] bg-gray-100 drop-shadow-2xl">
                                    <h1 className="text-[#5E74FF] Inter text-xs font-extrabold">{TableType}</h1>
                                </div>
                            </div>
                            <h1 className=" Poppins text-s font-bold">{GameType}</h1>
                            <div className="flex pt-6 pl-3 pb-0 items-center justify-center">
                                <img src="./src/assets/dot_green.svg" className="w-[5px] h-[5px]"></img>
                                <h1 className="pl-2 Inter text-xs font-semibold text-[#808191]">{Views}</h1>
                            </div>
                            <div className="pt-2 pr-3">
                                <button className="border border-gray-100 rounded-2xl w-[90px] bg-gray-100 drop-shadow-2xl">
                                    <h1 className="text-[#5961F9] text-sm font-extrabold">Start Play</h1>
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}