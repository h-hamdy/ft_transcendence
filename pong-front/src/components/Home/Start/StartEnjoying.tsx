import { StartGaming } from "./StartGaming"

export function StartEnjoying () {
    return (
        <>
            <div className="pt-11 p-10 flex items-center justify-center lg:pr-[32px] lg:pl-0 lg:pr-0">
                <div className="path1 bg-black bg-cover bg-no-repeat bg-center rounded-custom w-full h-[200px] lg:h-[500px] sm:h-[300px] lg:w-11/12">
                    <div className="flex flex-col pt-10 justify-center items-center font-normal text-xl lg:text-6xl sm:text-4xl lg:pt-36 sm:pt-20 rubik-moonrocks text-[#FFF]">
                        <h1>START ENJOYING</h1>
                        <h1>THE GAME</h1>
                    </div>
                    <div className="pt-6 pr-12 pl-12 lg:pt-12">
                        <StartGaming/>
                    </div>
                </div>
            </div>
        </>
    )
}