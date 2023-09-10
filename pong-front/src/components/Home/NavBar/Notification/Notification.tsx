import notif from "../../../../assets/bell.png"

interface Props {
    clicked: () => void;
}

export function Notification ({clicked}: Props) {
    return (
        <>
            <button onClick={clicked}>
                <img src={notif} alt="burger button"></img>
            </button>
        </>
    )
}