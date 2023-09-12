import rmv from "/src/assets/remove.svg"
import rec from "/src/assets/rectangle.svg"
import done from "/src/assets/done.svg"
import React from "react"

export function Add () {
    const [remove, SetRemove] = React.useState(false);

    return (

        <>
        {remove ? null : (
            <div className="absolute">
            <div className="relative bottom-32 zz pl-14">
                <div className="border bg-white rounded-custom w-[316px] h-[330px]">
                    <div className="flex flex-col">
                        <div className="flex justify-between items-center p-8">
                            <div className="text-[#11142D] font-medium">Send invite to a friend</div>
                            <button onClick={() => SetRemove(!remove)} className="flex items-center justify-center border border-white rounded-full w-[48px] h-[48px] shadow-xl">
                                <img src={rmv}></img>
                            </button>
                        </div>
                        <div className="pr-8 pl-8 pb-2">
                            <form className="flex items-center border border-[#6C5DD3] rounded-xl w-full h-[56px]">
                                <input  className="border-none rounded-xl w-full h-full pr-3 pl-3" placeholder="Username"></input>
                            </form>
                            <div className="absolute pt-[10px]">
                                <div className="border bg-[#E9DCE5] rounded-xl w-[200px] h-[39px] flex gap-1 items-center justify-center">
                                    <div className="text-sm font-semibold text-[#6C5DD3]">This user not found</div>
                                    <div>
                                        <div  style={{ backgroundImage: `url(${rec})`}} className="w-[18px] h-[18px] bg-center bg-no-repeat bg-cover">
                                            <div className="text-white flex items-center justify-center text-xs font-semibold">
                                                !
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="flex justify-around pt-16">
                            <button className="flex justify-center items-center border rounded-xl bg-[#E4E4E47F] border-[#E4E4E47F] h-[45px] w-[100px]">
                                <div className="text-[#808191] font-semibold">Cancel</div>
                            </button>

                            <button className="flex justify-center items-center border rounded-xl bg-[#6C5DD3] border-[#6C5DD3] h-[45px] w-[100px]">
                                <div className="text-white font-semibold">Invite</div>
                            </button>

                            {/* <button className= "absolute flex gap-[6px] justify-center items-center border rounded-xl bg-[#E9DCE5] border-[#E9DCE5] h-[45px] w-[100px]">
                                <div className="text-[#5961F9] font-semibold">Done</div>
                                <img src={done}></img>
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )}
        </>
    )
}