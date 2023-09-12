import setting from "/src/assets/Setting.svg"

export function BrSettings () {
    return (
        <>
            <button className="flex gap-5 pb-8 items-center">
                <div>
                    <img src={setting}></img>
                </div>
                <div className="text-[#808191]">Settings</div>
            </button>
        </>
    )
}