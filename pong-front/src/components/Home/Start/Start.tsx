import { StartGaming } from "./StartGaming";

export function Start () {
    return (
        <>
            <div className="flex items-center justify-center px-10">
                <div className="path p-14 bg-cover bg-no-repeat bg-center rounded-custom w-full h-[500px] flex-col justify-center items-center">
                    <div className="flex flex-col items-center pb-10 text-white Montserrat text-3xl font-extrabold pt-56">
                        <h1>Welcome To</h1>
                        <h1>Cyberponk</h1>
                    </div>
                    <StartGaming/>
                </div>
            </div>
        </>
    )
}