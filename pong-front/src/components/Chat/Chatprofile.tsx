import { Enline } from "../Home/Friends/status/Enline"
import { Chatconv } from "./Chatconv";
import { DkChatConv } from "./DkChatConv";
import avatar from "/src/assets/hkhalil.jpg"

interface Props {
	room: any;
	profile: any;
	isClicked: boolean;
	onClick: () => void;
}


export function Chatprofile({ room, profile, isClicked, onClick }: Props) {

	const [msg, setmsg] = useState([]);
	return (
		<>
			<div>
				<button
					onClick={onClick}
					className={`flex items-center w-full  border border-white rounded-2xl h-[80px] pl-5 ${isClicked ? 'bg-[#6C5DD3]' : ''} `}
				>
					<div className="relative flex items-center justify-center border border-[2px] border-[#0049C6] rounded-full w-[48px] h-[48px]">
						<img src={room.members[0].avatar} className="bbc rounded-full w-[40px] h-[40px]" alt="Avatar" />
						<div className="absolute top-0 mt-[-3px] lg:mt-[-10px] lg:mr-[-10px] right-0 mr-[-5px]">
							{/* <Enline /> */}
						</div>
					</div>
					<div>
						<div className={`pl-3 lg:text-lg ${isClicked ? 'text-white' : 'text-[#11142D]'}`}>
								{room.name || room.members.find(member => member.username !== profile.username).username}</div>
						<div className={`pl-3 Inter text-sm lg:text-sm font-meduim ${isClicked ? 'text-white' : 'text-[#808191CC]'}`}>offline</div>
					</div>
				</button>
				{/* {isClicked && <Chatconv/>} */}
				{isClicked && <DkChatConv room={room} profile={profile} />}
			</div>

		</>
	)
}