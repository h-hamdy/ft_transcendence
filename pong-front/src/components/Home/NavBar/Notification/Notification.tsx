import notif from "/src/assets/bell.png"

interface Props {
    clicked: () => void
    msgnum: string,
}

export function Notification ({clicked, msgnum}: Props) {
    return (
        <>
            <button onClick={clicked}>
                <div className="flex items-center justify-center">
                <img src={notif} className="flex items-center justify-center absolute sm:w-[30px] sm:h-[30px]"></img>
                <div>
                    <div className="relative left-[12px] bottom-[10px] flex items-center justify-center border border-[#FF5F1F] bg-[#FF5F1F] rounded-full md:w-[30px] md:h-[30px]  w-[20px] h-[20px]">
                        <div className="text-white text-sm sm:text-md lg:text-2xl">{msgnum}</div>
                    </div> 
                </div>
                </div>
            </button>
        </>
    )
}