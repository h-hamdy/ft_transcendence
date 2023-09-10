import { Leader } from "./Leader"
import { PlayerNum } from "./PlayerNum"
import { SeeMore } from "./SeeMore"

export function LeaderBoard () {
    return (
        <>
        <div className="pt-10 p-10">
            <div className="flex flex-col border h-[730px] w-full rounded-custom drop-shadow-2xl bg-[#FFF]">
                <div className="flex justify-center items-center pt-12 text-blue-900 font-poppins text-2xl font-semibold leading-normal tracking-wider">Leader Board</div>
                <div className="flex flex-col">
                    <Leader Profile="/src/assets/ahamdy.jpg" rank="#1" name="Houssam" win="45" Losses="1"/>
                    <Leader Profile="/src/assets/hhamdy.jpg" rank="#2" name="adnan" win="30" Losses="3"/>
                    <Leader Profile="/src/assets/hkhalil.jpg" rank="#3" name="hassan" win="18" Losses="6"/>
                    <Leader Profile="/src/assets/hhamdy.jpg" rank="#4" name="Saad" win="17" Losses="9"/>
                    <Leader Profile="/src/assets/ahamdy.jpg" rank="#5" name="Lmadam" win="2" Losses="10"/>
                </div>
                <div className="flex">
                    <SeeMore/>
                    <PlayerNum Number="13"/>
                </div>
            </div>
        </div>
        </>
    )
}