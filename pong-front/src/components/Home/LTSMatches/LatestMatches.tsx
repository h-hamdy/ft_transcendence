import { GameRes } from "./GameRes"

export function LatestMatches () {
    return (
        <>
            <div className="flex flex-col justify-center items-center pr-10 pl-10 pb-10 lg:pt-10">
                <div className="border bg-white drop-shadow-xl rounded-custom w-full h-[350px] lg:h-[900px]">
					<div className="flex justify-center items-center text-blue-900 font-poppins text-xl pt-10 font-semibold leading-normal tracking-wider lg:pb-5 lg:pt-10 lg:text-4xl">Last Played Matches </div>
                    <div className="flex flex-col items-center justify-center gap-y-6 p-3 pt-10 lg:pt-0">
                        <GameRes/>
                        <GameRes/>
                        <GameRes/>
                        <GameRes/>
                        <GameRes/>

                    </div>
                </div>
            </div>
        </>
    )
}