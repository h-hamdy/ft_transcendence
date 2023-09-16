import avatar from "../../../assets/hhamdy.jpg"

export function Avatar () {
    return (
        <>
            <button>
                <img src={avatar} className="rounded-full w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]" alt="profile"></img>
            </button>
        </>
    )
}