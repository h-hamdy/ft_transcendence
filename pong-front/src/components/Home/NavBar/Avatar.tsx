import avatar from "../../../assets/hhamdy.jpg"

export function Avatar () {
    return (
        <>
            <button>
                <img src={avatar} className="rounded-full" width="40px" height="40px" alt="profile"></img>
            </button>
        </>
    )
}