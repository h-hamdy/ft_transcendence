import BlueDot from "/src/assets/BlueDot.svg"

interface Props {
    Number: string;
}

export function PlayerNum ( {Number}: Props ) {
    return (
        <>
            <div className="flex gap-3 absolute right-5 pt-4">
                <img src={BlueDot}></img>
                <div className="text-[#808191] text-sm font-normal">{Number} player</div>
            </div>
        </>
    )
}