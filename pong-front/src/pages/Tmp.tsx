import { StartGaming } from "../components/Home/Start/StartGaming"

import arrow from "/src/assets/small-down.svg"
import start from "/src/assets/Start.png"

import { BrHome } from "../components/Home/NavBar/Burger/BrHome"
import { BrGame } from "../components/Home/NavBar/Burger/BrGame"
import { BrVideo } from "../components/Home/NavBar/Burger/BrVideo"
import { BrProfile } from "../components/Home/NavBar/Burger/BrProfile"

import { BrFriends } from "../components/Home/NavBar/Burger/BrFriends"

import { BrChat } from "../components/Home/NavBar/Burger/BrChat"
import { BrSettings } from "../components/Home/NavBar/Burger/BrSettings"
import { BrStart } from "../components/Home/NavBar/Burger/BrStart"


import { MBburger } from "../components/Home/NavBar/Burger/MBburger"

export function Brb () {
    return (
        <>
        <div className="pt-[60px] w-full h-screen notif-container md:hidden">
            <div className="flex flex-col pt-20">
                <BrHome/>
                <BrProfile/>
                <BrVideo/>
                <BrGame/>
            </div>


            <div className="flex flex-col pt-10 pl-16">
                <div className="text-[#808191] text-sm pb-8">Friends</div>


                <BrFriends profile="/src/assets/hhamdy.jpg" name="hhamdy" status="/src/assets/active.svg"/>
                <BrFriends profile="/src/assets/hkhalil.jpg" name="Hassan d3if" status="/src/assets/live.svg"/>
                <BrFriends profile="/src/assets/ahamdy.jpg" name="hhamdy nadi" status="/src/assets/active.svg"/>
                <BrFriends profile="/src/assets/hhamdy.jpg" name="houwa" status="/src/assets/live.svg"/>

               <div className="flex pt-8 items-center">
                    <div>
                        <img src={arrow}></img>
                    </div>
                    <div className="pl-3 text-[#808191]">Lead more</div>
                </div>
            </div>

            <div className="flex flex-col gap-4 pt-16 pl-16">
                <div className="text-[#808191] text-sm pb-8">CyberPong</div>
                
                <BrChat msgnum="5"/>
                <BrSettings/>
                
            </div>

            <BrStart/>
        </div>
		<div className="fixed bg-white zz sm:hidden md:block mobile-nav-bar mobile-nav-bar">
			<MBburger/>
		</div>
		<BrStart/>
        </>
    )
}