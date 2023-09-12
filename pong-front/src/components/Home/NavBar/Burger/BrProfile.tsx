import profile from "/src/assets/Profile.svg"

export function BrProfile () {
    return (
        <>
           <div className="pr-8 pl-8">
                <button className="flex items-center pl-8 w-full h-[56px] rounded-2xl">
                    <img src={profile} className="w-[24px] h-[24px]"></img>
                    <div className="pl-8 text-gray-400 font-semibold text-base">Profile</div>
                </button>
            </div>
        </>
    )
}