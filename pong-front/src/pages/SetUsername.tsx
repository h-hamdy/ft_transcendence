import rec from "/src/assets/rectangle.svg"
import imgPath from "/src/assets/onboarding.png"
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const SetUsername = () => {

    const [formData, setFormData] = useState<{username: string}>({
        username: '',
      });
    
      const handleFormSubmit = async () => {    
        try {
          const response = await axios.post('http://localhost:3000/set-username', formData, { withCredentials: true }).then (function (response) {console.log(response)});
        } catch (error) {
          console.error('POST request failed:', error);
        }
      };

    return (
        <> 
        <div className="mobile-nav-bar sm:hidden lg:block">
           <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center" >
            <div className="border flex flex-col items-center justify-center bg-white w-[500px] h-[500px] shadow-xl rounded-custom">
                <div className="flex items-center justify-center text-[#808191]">Enter Your Full Name</div>
                <div className="flex flex-col gap-9 pt-5">
                <form className="flex justify-center items-center rounded-xl h-[70px] w-[300px]" onSubmit={handleFormSubmit}>
                    <input className="rounded-xl w-full h-full border bg-gray-100 border-[3px]  pr-3 pl-3 focus:border-[#6C5DD3] focus:outline-none text-[#888EFF] text-center" 
                    value={formData.username}
                    onChange={(e) => {
						setFormData({ ...formData, username: e.target.value });
					  }}
                />
                </form>
				{/* <button className="flex justify-center items-center border rounded-xl bg-[#6C5DD3] border-[#6C5DD3] h-[45px] w-[100px]" onClick={handleFormSubmit}>
					<div className="text-white font-semibold lg:text-sm">Submit</div>
				</button> */}
                </div>
                <div className="pt-[10px] lg:pt-[20px]">
                    <div className="border bg-[#E9DCE5] rounded-lg w-[300px] h-[30px]  flex gap-1 items-center justify-center">
                        <div className="text-xs font-semibold text-[#6C5DD3]">This user not found</div>
                        <div>
                            <div  style={{ backgroundImage: `url(${rec})`}} className="w-[14px] h-[14px] bg-center bg-no-repeat bg-cover">
                                <div className="text-white flex items-center justify-center text-xs font-semibold">
                                    !
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="flex items-center justify-center h-screen">
            <div className="lg:hidden">
                <div className="flex items-center justify-center text-[#808191]">Enter Your Full Name</div>
                <div className="flex flex-col gap-9 pt-5">
                <form className="flex justify-center items-center rounded-xl h-[70px] w-[300px]">
                    <input className="rounded-xl w-full h-full border bg-gray-100 border-[3px]  pr-3 pl-3 focus:border-[#6C5DD3] focus:outline-none text-[#888EFF] text-center" />
                </form>
                </div>
                <div className="pt-[10px] lg:pt-[20px]">
                <div className="border bg-[#E9DCE5] rounded-lg w-[300px] h-[30px]  flex gap-1 items-center justify-center">
                    <div className="text-xs font-semibold text-[#6C5DD3]">This username is invalid or already used</div>
                    <div>
                        <div  style={{ backgroundImage: `url(${rec})`}} className="w-[14px] h-[14px] bg-center bg-no-repeat bg-cover">
                            <div className="text-white flex items-center justify-center text-xs font-semibold">
                                !
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>

        </>
    )
}