interface Props {
    TableType: string,
    GameType: string,
    imgPath: string,
    Views: string,
}

export function GameCard ( {TableType, GameType ,imgPath, Views}: Props ) {
    return (
        <>
            <div className="flex justify-center items-center w-full pr-10 pt-8 pl-10 pb-10 sm:pl-0 sm:pt-0">
                <div className="flex items-center pt-9 border bg-[#FFF] drop-shadow-md rounded-custom w-full w-[350px] h-[180px]">
                        <div className="flex flex-col p-4 pb-12">
                            <img className="bbc lg:w-[200px]" src={imgPath} alt="3WinGame"></img>
                        </div> 
                        <div className="flex flex-col pb-14 pr-3">
                            <div className="pt-8">
                                <div className="flex items-center justify-center w-[70px] lg:w-[150px] lg:h-[40px]">
                                    <h1 className="text-[#5E74FF] Inter text-xs lg:text-lg font-extrabold">{TableType}</h1>
                                </div>
                            </div>
                            <h1 className=" Poppins flex items-center justify-center lg:text-md font-bold">{GameType}</h1>
                            <div className="flex items-center justify-center pt-6 pl-3 pb-0 items-center justify-center">
                                <img src="./src/assets/dot_green.svg" className="w-[5px] h-[5px] lg:w-[10px] lg:h-[10px]"></img>
                                <h1 className="pl-2 Inter text-xs font-semibold lg:text-md text-[#808191]">{Views}</h1>
                            </div>
                            <div className="pt-2 pr-3 flex items-center justify-center">
                                <button className="border border-gray-100 rounded-xl w-[90px] lg:w-[100px] lg:h-[30px] bg-gray-100 drop-shadow-md">
                                    <h1 className="text-[#5961F9] text-sm lg:text-md font-extrabold">Start Play</h1>
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}