import avatar from "../../../assets/hhamdy.jpg"

export function Avatar () {
    return (
        <>
            <button>
                <img src={avatar} className="rounded-full w-[30px] h-[30px] lg:w-[45px] lg:h-[45px]" alt="profile"></img>
            </button>
        </>
    )
}