import home from "/src/assets/Home.svg"

export function BrHome () {
    return (
        <>
            <div className="pr-8 pl-8">
                    <button className="flex items-center pl-8 bg-[#6C5DD3] w-full h-[56px] rounded-2xl">
                        <img src={home} className="w-[24px] h-[24px]"></img>
                        <div className="pl-8 text-white font-semibold text-base">Home</div>
                    </button>
                </div>
        </>
    )
}