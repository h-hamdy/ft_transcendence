import playing from "/src/assets/Playing.svg"

export function Playing () {
    return (
        <>
            <button className="border rounded-full bg-[#6C5DD3] w-[30px] h-[30px] flex items-center justify-center">
                <img src={playing} className="pl-[1px]"></img>
            </button>
        </>
    )
}