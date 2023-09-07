import { GameRes } from "./GameRes"

export function LatestMatches () {
    return (
        <>
            <div className="flex justify-center items-center text-blue-900 font-poppins text-2xl font-semibold leading-normal tracking-wider pb-10">Last Played Matches </div>
            <div className="flex flex-col justify-center items-center pr-10 pl-10 pb-10">
                <div className="border bg-white drop-shadow-xl rounded-custom w-full h-[350px]">
                    <div className="flex flex-col items-center justify-center gap-y-5 p-3 pt-10">
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