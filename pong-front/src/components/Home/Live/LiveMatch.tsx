import arrow from "/src/assets/Arrrow.svg"
import img from "/src/assets/img4.png"

export function LiveMatch () {
    return (
        <>
        <div className="flex flex-col justify-center items-center">
            <div className="pt-12 text-blue-900 font-poppins text-2xl font-semibold leading-normal tracking-wider pb-10">Live Matches</div>
            <button className="border bg-gray-100 w-3/5 h-[48px] rounded-xl flex justify-center items-center">
                <div className="mr-auto pl-10 font-normal text-[#808191]">
                    Popular
                </div>
                <div className="ml-auto pr-10">
                    <img src={arrow}></img>
                </div>
            </button>
        </div>
            <div className="flex flex-col items-center justify-center p-10">
                <div className="flex flex-col bg-white drop-shadow-xl border rounded-custom h-[390px] w-full">
                    <div className="">
                        <img src={img} className="w-full"></img>
                    </div>
                </div>
            </div>
        </>
    )
}