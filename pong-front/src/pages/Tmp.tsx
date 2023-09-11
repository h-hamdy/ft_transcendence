import { StartGaming } from "../components/Home/Start/StartGaming"
import home from "/src/assets/Home.svg"
import profile from "/src/assets/Profile.svg"
import video from "/src/assets/video.svg"
import game from "/src/assets/Game.svg"

import logo from "/src/assets/hhamdy.jpg"
import dot from "/src/assets/active.svg"
import live from "/src/assets/live.svg"
import arrow from "/src/assets/small-down.svg"
import chat from "/src/assets/Chat.svg"
import setting from "/src/assets/Setting.svg"
import start from "/src/assets/Start.png"

export function Brb () {
    return (
        <>
        <div className="pt-[60px] w-full h-screen notif-container">
            <div className="flex flex-col pt-20">
                <div className="pr-8 pl-8">
                    <button className="flex items-center pl-8 bg-[#6C5DD3] w-full h-[56px] rounded-2xl">
                        <img src={home} className="w-[24px] h-[24px]"></img>
                        <div className="pl-8 text-white font-semibold text-base">Home</div>
                    </button>
                </div>
                <div className="pr-8 pl-8">
                    <button className="flex items-center pl-8 w-full h-[56px] rounded-2xl">
                        <img src={profile} className="w-[24px] h-[24px]"></img>
                        <div className="pl-8 text-gray-400 font-semibold text-base">Profile</div>
                    </button>
                </div>
                <div className="pr-8 pl-8">
                    <button className="flex items-center pl-8 w-full h-[56px] rounded-2xl">
                        <img src={video} className="w-[24px] h-[24px]"></img>
                        <div className="pl-8 text-gray-400 font-semibold text-base">Live Games</div>
                    </button>
                </div>
                <div className="pr-8 pl-8">
                    <button className="flex items-center pl-8 w-full h-[56px] rounded-2xl">
                        <img src={game} className="w-[24px] h-[24px]"></img>
                        <div className="pl-8 text-gray-400 font-semibold text-base">Games</div>
                    </button>
                </div>
            </div>


            <div className="flex flex-col pt-10 pl-16">
                <div className="text-[#808191] text-sm pb-8">Friends</div>

                <button className="flex items-center">
                    <div className="w-[24px] h-[24px]">
                        <img src={logo} className="rounded-full"></img>
                    </div>
                    <div className="pl-4 text-[#808191]">
                        hhamdy
                    </div>
                    <div className="absolute right-0">
                        <img src={live} className="pr-16"></img>
                    </div>
                </button>

                <button className="flex items-center pt-5">
                    <div className="w-[24px] h-[24px]">
                        <img src={logo} className="rounded-full"></img>
                    </div>
                    <div className="pl-4 text-[#808191]">
                        wa hassan
                    </div>
                    <div className="absolute right-0">
                        <img src={live} className="pr-16"></img>
                    </div>
                </button>

                <button className="flex items-center pt-5">
                    <div className="w-[24px] h-[24px]">
                        <img src={logo} className="rounded-full"></img>
                    </div>
                    <div className="pl-4 text-[#808191]">
                        lmadam
                    </div>
                    <div className="absolute right-0">
                        <img src={dot} className="pr-16"></img>
                    </div>
                </button>

                <button className="flex items-center pt-5">
                    <div className="w-[24px] h-[24px]">
                        <img src={logo} className="rounded-full"></img>
                    </div>
                    <div className="pl-4 text-[#808191]">
                        Saad
                    </div>
                    <div className="absolute right-0">
                        <img src={dot} className="pr-16"></img>
                    </div>
                </button>

                <button className="flex items-center pt-5">
                    <div className="w-[24px] h-[24px]">
                        <img src={logo} className="rounded-full"></img>
                    </div>
                    <div className="pl-4 text-[#808191]">
                        adnan
                    </div>
                    <div className="absolute right-0">
                        <img src={live} className="pr-16"></img>
                    </div>
                </button>


                <div className="flex pt-8 items-center">
                    <div>
                        <img src={arrow}></img>
                    </div>
                    <div className="pl-3 text-[#808191]">Lead more</div>
                </div>
            </div>

            <div className="flex flex-col gap-4 pt-16 pl-16">
                <div className="text-[#808191] text-sm pb-8">CyberPong</div>
                <button className="flex gap-5 items-center">
                    <div>
                        <img src={chat}></img>
                    </div>
                    <div className="text-[#808191]">Chat</div>
                    <div className="flex items-center justify-center absolute right-0 pr-16">
                        <div className="flex items-center justify-center border border-[#FF5F1F] bg-[#FF5F1F] rounded-full w-[24px] h-[24px]">
                            <div className="text-white text-sm">13</div>
                        </div>
                            
                    </div>
                </button>

                <button className="flex gap-5 pb-8 items-center">
                    <div>
                        <img src={setting}></img>
                    </div>
                    <div className="text-[#808191]">Settings</div>
                </button>
            </div>

            <div className="p-8">
                    <div style={{backgroundImage:`url(${start})`}} className="bg-cover drop-shadow-xl bg-no-repeat bg-center rounded-custom w-full h-[350px]">
                    <div className="flex flex-col pl-10 pt-16">
                        <div className="flex flex-col text-white text-3xl font-bold">
                            <div>Join</div>
                            <div>Cyberpong</div>
                            <div>Game</div>
                        </div>
                        <div className="flex flex-col text-white text-md pt-5 pb-2">
                            <div>Discover the best</div>
                            <div>pong pong game</div>
                            <div>anywhere.</div>
                        </div>
                        <div className="pr-10">
                            <StartGaming/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        </>
    )
}