import { StartGaming } from "./StartGaming"

export function StartEnjoying () {
    return (
        <>
            <div className="pt-11 p-10 flex items-center justify-center">
                <div className="path1 bg-black bg-cover bg-no-repeat bg-center rounded-3xl w-full h-[200px]">
                    <div className="flex flex-col pt-10 justify-center items-center font-normal text-xl rubik-moonrocks text-[#FFF]">
                        <h1>START ENJOYING</h1>
                        <h1>THE GAME</h1>
                    </div>
                    <div className="pt-6 pr-12 pl-12">
                        <StartGaming/>
                    </div>
                </div>
            </div>
        </>
    )
}