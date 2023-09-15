import BlueDot from "/src/assets/BlueDot.svg"

interface Props {
    Number: string;
}

export function PlayerNum ( {Number}: Props ) {
    return (
        <>
            <div className="flex gap-3 flex justify-center items-center absolute right-5 pt-4 lg:pr-10">
                <img src={BlueDot} className="lg:w-[20px] lg:h-[20px]"></img>
                <div className="text-[#808191] text-sm lg:text-2xl font-normal">{Number} player</div>
            </div>
        </>
    )
}