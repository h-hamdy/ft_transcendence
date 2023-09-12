import chat from "/src/assets/Chat.svg"

interface Props {
    msgnum: string
}

export function BrChat ( {msgnum}: Props ) {
    return (
        <>
            <button className="flex gap-5 items-center">
                    <div>
                        <img src={chat}></img>
                    </div>
                    <div className="text-[#808191]">Chat</div>
                    <div className="flex items-center justify-center absolute right-0 pr-16">
                        <div className="flex items-center justify-center border border-[#FF5F1F] bg-[#FF5F1F] rounded-full w-[24px] h-[24px]">
                            <div className="text-white text-sm">{msgnum}</div>
                        </div>  
                    </div>
                </button>
        </>
    )
}