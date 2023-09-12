import game from "/src/assets/Game.svg"

export function BrGame () {
    return (
        <>
            <div className="pr-8 pl-8">
                    <button className="flex items-center pl-8 w-full h-[56px] rounded-2xl">
                        <img src={game} className="w-[24px] h-[24px]"></img>
                        <div className="pl-8 text-gray-400 font-semibold text-base">Games</div>
                    </button>
                </div>
        </>
    )
}