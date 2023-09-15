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
                <img src={notif} className="absolute md:w-[50px] md:h-[50px]" alt="burger button"></img>
                <div>
                    <div className="relative left-[12px] bottom-[10px] flex items-center justify-center border border-[#FF5F1F] bg-[#FF5F1F] rounded-full md:w-[40px] md:h-[40px]  w-[20px] h-[20px]">
                        <div className="text-white text-sm md:text-2xl">{msgnum}</div>
                    </div> 
                </div>
                </div>
            </button>
        </>
    )
}