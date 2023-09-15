import avatar from "../../../assets/hhamdy.jpg"

export function Avatar () {
    return (
        <>
            <button>
                <img src={avatar} className="rounded-full w-[50px] h-[50px] lg:w-[80px] lg:h-[80px]" alt="profile"></img>
            </button>
        </>
    )
}