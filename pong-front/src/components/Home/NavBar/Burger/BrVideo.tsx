import video from "/src/assets/video.svg"

export function BrVideo () {
    return (
        <>
           <div className="pr-8 pl-8">
                <button className="flex items-center pl-8 w-full h-[56px] rounded-2xl">
                    <img src={video} className="w-[24px] h-[24px]"></img>
                    <div className="pl-8 text-gray-400 font-semibold text-base">Live Games</div>
                </button>
            </div>
        </>
    )
}