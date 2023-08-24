import Login from "../components/Login"
import Authentication from "../components/Authentication";
import Google from "../components/Google";
import BackToSignIn from "../components/BackToSignIn"


export function SignUp() {
    return (
        <>
            <div className="h-screen w-screen m-0 p-0 relative">
                <div
                    className='bg-fixed bg-[url("/nfs/homes/hhamdy/Desktop/ft_transcendence/pong-front/src/assets/onboarding.png")] bg-no-repeat bg-cover bg-center h-full w-full blur-lg'
                ></div>
                <div className="border drop-shadow-sm bg-gray-100 border-white-800 shadow-lg rounded-[40px] w-96 h-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="pt-11 pl-10 text-4xl font-semibold">
                        Sign Up
                    </div>
                    {/* <div className="rounded-full">
                        <BackToSignIn/>
                    </div> */}
                    <div className="flex">
                        <div className="pl-10 pt-2 text-gray-500 text-sm">
                            <h6>Already a user?</h6>
                        </div>
                        <div className="pl-10 pt-2 text-[#6c5dd3] text-sm">
                            <Login/>
                        </div>
                    </div>
                    <div>
                        <div className="pl-10 pt-20 font-semibold text-sm drop-shadow-lg">
                            <Authentication/>
                        </div>
                    </div>
                    <div>
                        <div className="pl-10 pt-4 font-semibol text-sm drop-shadow-sm">
                            <Google/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}




