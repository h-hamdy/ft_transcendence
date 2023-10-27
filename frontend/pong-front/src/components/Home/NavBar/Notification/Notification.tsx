import React, { useContext } from "react"
import notif from "/src/assets/bell.png"
import { MyContext } from "../../../../pages/Profile"

interface Props {
    clicked: () => void
    msgnum: string,
}

export function Notification ({clicked, msgnum}: Props) {

	const data = useContext(MyContext);
    return (
        <>
            <button onClick={clicked} className="flex items-center justify-center">
                <div className="flex items-center justify-center">
					<img src={notif} className="flex items-center justify-center absolute w-[25px] h-[25px]"></img>
				{
					data?.MyuserData.pending_requests.length !== 0 ?
					<div>
					<div>
						<div className="relative left-[12px] bottom-[10px] pt-[2px] flex items-center justify-center border border-[#FF5F1F] bg-[#FF5F1F] rounded-full w-[20px] h-[20px]">
							<div className="text-white text-sm">{data?.MyuserData.pending_requests.length}</div>
						</div> 
					</div>
					</div> : null

				}
                </div>
            </button>
        </>
    )
}