interface Props {
    TableType: string,
    GameType: string,
    imgPath: string,
    Views: string,
}

export function GameCard ( {TableType, GameType ,imgPath, Views}: Props ) {
    return (
        <>
            <div className="flex justify-center items-center w-full pr-10 pt-10 pl-10 pb-10 lg:pl-32">
                <div className="flex items-center pt-9 border bg-[#FFF] drop-shadow-2xl rounded-custom w-full lg:w-[550px] lg:h-[350px]">
                        <div className="flex flex-col p-4 pb-12">
                            <img className="bbc lg:w-[350px]" src={imgPath} alt="3WinGame"></img>
                        </div> 
                        <div className="flex flex-col pb-14 pr-3">
                            <div className="pt-8">
                                <div className="border flex items-center justify-center border-gray-100 rounded-2xl w-[70px] lg:w-[150px] lg:h-[40px] bg-gray-100 drop-shadow-2xl">
                                    <h1 className="text-[#5E74FF] Inter text-xs lg:text-2xl font-extrabold">{TableType}</h1>
                                </div>
                            </div>
                            <h1 className=" Poppins lg:text-2xl font-bold">{GameType}</h1>
                            <div className="flex pt-6 pl-3 pb-0 items-center justify-center">
                                <img src="./src/assets/dot_green.svg" className="w-[5px] h-[5px] lg:w-[10px] lg:h-[10px]"></img>
                                <h1 className="pl-2 Inter text-xs font-semibold lg:text-xl text-[#808191]">{Views}</h1>
                            </div>
                            <div className="pt-2 pr-3">
                                <button className="border border-gray-100 rounded-2xl w-[90px] lg:w-[120px] lg:h-[30px] bg-gray-100 drop-shadow-2xl">
                                    <h1 className="text-[#5961F9] text-sm lg:text-2xl font-extrabold">Start Play</h1>
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}