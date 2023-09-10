import burger from "/src/assets/burger.png"

export function Burger () {
    return (
        <>
            <button onClick={() => (console.log("clicked!"))}>
                <img src={burger} alt="burger button"></img>
            </button>
        </>
    )
}