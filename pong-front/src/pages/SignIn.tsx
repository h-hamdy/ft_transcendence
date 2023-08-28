import Authentication from "../components/Enbording/Authentication";
import Google from "../components/Enbording/Google";
import DiscoverMore from "../components/Enbording/DiscoverMore"
import { Cards } from "../components/Enbording/Cards"
import Logo from "../assets/mainLogo.svg"
// import img1 from "../assets/img1.png"
// // import img2 from "../assets/img2.png"
// import img3 from "../assets/img3.png"
// import dot from "../assets/dot.svg"
import background from "../assets/onboarding.png"

export function SignIn() {
    return (
        <>
            <div className="mobile-bg h-screen w-screen">
                <div>
                    <img src={background} className="hidden sm:block absolute bg-fixed bg-no-repeat bg-cover bg-center h-full w-full blur-lg"></img>
                </div> 
                <div className="bba flex h-full w-screen justify-around items-center">
                <div className="hidden sm:hidden md:hidden lg:block">
                <div>

                </div>
                <div className="flex h-full justify-center items-center">
                    <div className="flex flex-col h-screen gap-05 justify-center items-center">

                        <div className="zz">
                            <img src={Logo}></img>
                        </div>

                        <div className="p-3 zz">
                            <h1 className="text-white Poppins font-semibold text-x">Cyberponk Pingpong Game</h1>
                        </div>

                        <div className= "w-72 h-24 rounded-lg shadow-lg overflow-hidden z pl-paddingLeft-40">
                            <Cards gameType="1 Game to win" TableType="Astro Table" Views="3.8k viewers" imgPath="./src/assets/img1.png"/>
                        </div>

                        <div className= "w-72 h-24 rounded-lg shadow-lg overflow-hidden z pl-paddingLeft-40">
                            <Cards gameType="5 Game to win" TableType="Sky Table" Views="13.8k viewers" imgPath="./src/assets/img2.png"/>
                        </div>

                        <div className= "w-72 h-24 rounded-lg shadow-lg overflow-hidden z pl-paddingLeft-40">
                            <Cards gameType="7 Game to win" TableType="Sky Table" Views="2.8k viewers" imgPath="./src/assets/img3.png"/>
                        </div>

                        <div className="zz">
                            <DiscoverMore/>
                        </div>
                    </div>
                    </div>

                    <div className="">

                    </div>
                </div>
                <div className="h-full flex justify-center items-center">
                <div className="border hidden sm:block drop-shadow-sm bg-gray-100 border-white-800 shadow-lg rounded-[40px] w-96 h-[350px]">
                    <div className="pt-11 pl-10 text-4xl font-semibold">
                        Sign In
                    </div>
                    <div className="flex">
                        <div className="pl-10 pt-2 text-gray-500 text-sm">
                            <h6>New user?</h6>
                        </div>
                        <div className="pl-7 pt-2 text-[#6c5dd3] text-sm">
                            Login now
                        </div>
                    </div>
                    <div>
                        <div className="pl-10 pt-16 font-semibold text-sm drop-shadow-lg">
                            <Authentication/>
                        </div>
                    </div>  
                    <div>
                        <div className="pl-10 pt-4 font-semibol text-sm drop-shadow-sm">
                            <Google/>
                        </div>
                    </div>
                </div>
                <div className="mobile-show sm:hidden zz">
                    <div className="flex-col">

                    <div className="pt-11 pl-10 text-4xl font-semibold">
                        Sign In
                    </div>
                    <div className="pl-10 pt-16 font-semibold text-sm drop-shadow-lg">
                            <Authentication/>
                        </div>
                    </div>
                     <div className="pl-10 pt-4 font-semibol text-sm drop-shadow-sm">
                            <Google/>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </>
    );
}