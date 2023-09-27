import { Chatprofile } from "./Chatprofile"
import { DirectMsg } from "./DirectMsg"
import { GroupMsg } from "./GroupMsg"

export function MbChat () {

	return (
		<>
			<div className="pr-8 pl-8 pt-28 lg:pl-32 lg:w-6/12 xl:w-5/12">
				{/* <div className="bg-black h-[45vh]"> */}
					<DirectMsg/>

				{/* </div> */}
				<div className="pt-8">
					<GroupMsg/>
				</div>
			</div>
		</>
	)
}