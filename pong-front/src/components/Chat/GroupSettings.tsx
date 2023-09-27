import { AddMember } from "./AddMember";
import { GroupRestriction } from "./GroupRestriction";
import rmv from "/src/assets/remove.svg"
import React from "react";


export function GroupSettings() {
	const [remove, setRemove] = React.useState(false);
  
	return (
	  <>
		{remove ? null : (
			<div className="lg:blur-background bg-black">
				<div className="z bg-white w-full h-[100vh] pt-28 centered-component lg:w-6/12 lg:blur-background">
					<div className="px-8">
					<div className="flex items-center justify-between">
						<div className="text-[#1B1D21] font-semibold text-xl">Room Setting</div>
						<button
						onClick={() => setRemove(!remove)}
						className="flex items-center justify-center border border-white rounded-full w-12 h-12 shadow-xl"
						>
						<img src={rmv} alt="Remove" />
						</button>
					</div>
					<div className="pt-3">

					<div className="h-[calc(100vh-180px)]">
							<div className="w-full h-2/6 overflow-y-auto">
								<GroupRestriction/>
								<GroupRestriction/>
								<GroupRestriction/>
								<GroupRestriction/>
								<GroupRestriction/>
								<GroupRestriction/>
								<GroupRestriction/>
								<GroupRestriction/>
								<GroupRestriction/>
								<GroupRestriction/>
								<GroupRestriction/>
								<GroupRestriction/>

							</div>
								<div className="flex items-center justify-center text-2xl font-semibold font-sans text-[#11142D] pt-5">Add Friends to room</div>
								<div className="px-8 py-4">
									<input type="search" className="bg-gray-100 shadow-md h-[50px] w-full rounded-xl focus:outline-none px-4 pr-10" placeholder="Search..."/>
								</div>
							<div className="w-full h-4/6 pt-3 overflow-y-auto">
								<AddMember/>
								<AddMember/>
								<AddMember/>
								<AddMember/>
								<AddMember/>
								<AddMember/>
								<AddMember/>
								<AddMember/>
								<AddMember/>
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