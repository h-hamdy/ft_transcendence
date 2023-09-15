import { StartGaming } from "./StartGaming";

export function Start () {
    return (
        <>
            <div className="px-10 lg:pl-44 lg:pr-44">
                <div className="path p-14 md:p-36 bg-cover bg-no-repeat bg-center rounded-custom w-full h-[500px] flex-col pt-40">
                    <div className="flex flex-col items-center text-white Montserrat text-3xl pb-10 md:text-5xl font-extrabold pt-24">
                        <h1>Welcome To</h1>
                        <h1>Cyberponk</h1>
                    </div>
                    <StartGaming/>
                </div>
            </div>
        </>
    )
}