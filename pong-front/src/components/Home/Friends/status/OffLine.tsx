import offsign from "/src/assets/offsign.svg"

export function OffLine () {
    return (
        <>
            <div className="border rounded-full bg-[#FF5F1F] w-[30px] h-[30px] flex items-center justify-center">
                <img src={offsign}></img>
            </div>
        </>
    )
}