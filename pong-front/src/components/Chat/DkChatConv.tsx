
import rmv from "/src/assets/remove.svg"
import React from "react";
import { Msg } from "./Msg";



interface DkChatConvProps {
	room: any;
	profile: any // Update the type accordingly
  }

export function DkChatConv ({room }: DkChatConvProps) {
	const [remove, SetRemove] = React.useState(false);
  
	const number = 5;

		for (let i = 0; i < 5; i++) {
		room.messages.push({
		  user_id: 5,
		  message: 'message',
		  date: true,
		});
	  }

	return (
	  <>

		{!remove && (
		<div className="w-full absolute lg:w-8/12 bg-white lg:pl-32 xl:pl-0 top-0 right-0 mobile-nav-bar sm:hidden lg:block">

		  <div className="pl-16	 z px-8 h-[90vh] sm:hidden mobile-nav-bar lg:block">
			<div className="w-full h-full flex flex-col justify-around">

			  <div className="text-white text-xl">
				<div className="flex items-center justify-between lg:pr-10 lg:pb-10">
				  <div className="text-[#1B1D21] md:text-2xl">{room.name || room.members.find(member => member.username !== profile.username).username}</div>
				  <button
					onClick={() => SetRemove(!remove)}
					className="flex items-center justify-center border border-white rounded-full w-12 h-12 shadow-xl lg:hidden"
					>
					<img src={rmv} alt="Remove" />
				  </button>
				</div>
			  </div>
				<div className="overflow-y-auto">
			  	{room.messages.map((message, index) => (
					  <Msg
					  // key={index}
                    profile="/src/assets/hkhalil.jpg"
                    name={}
                    // time="2m ago"
                    msg={message.message}
					/>
					))}
			  {/* <div className="px-8 h-[100%] scrollable-container">
				<Msg profile="/src/assets/hkhalil.jpg" name="hassan" time="2m ago" msg="ach wach"/>
			</div> */}
			</div>
			<div className="flex items-center justify-center">

			  <div className="flex w-[50%]">
				  <form className="w-[100%] h-[100px]">
					<input
					  className="w-full px-4 bg-gray-100 h-[50px] focus:outline-none rounded-custom focus:border-[#6C5DD3] text-[#808191]"
					  placeholder="Write Something"
					  />
				  </form>
					<div className="">
					<button className="flex justify-center items-center border rounded-xl bg-[#6C5DD3] border-[#6C5DD3] h-[45px] w-[100px]">
							<div className="text-white font-semibold lg:text-sm">send</div>
					</button>
					</div>
				  </div>
					  </div>
			</div>
		 </div>
		</div>
		)}
	  </>
	);
  }

  