import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Chatprofile } from "./Chatprofile";
import { useParams } from "react-router-dom";
import { DkChatConv } from "./DkChatConv";
import { ChatConv } from "./Chatconv";
import { CreateRoom } from "./CreateRoom";
import { JoinRoom } from "./JoinRoom";
import { GroupSettings } from "./GroupSettings";
// import { UserContext } from "../../pages/Profile";
// import { UserContext } from "../../pages/Chat";
// import { ChatSocketContext } from "./contexts/chatContext";
interface Friend {
  id: number;
  username: string;
  avatar: string;
}

interface MyUserData {
  user_data: {
    id: 0,
    username: '',
    me: false,
    is_two_factor_auth_enabled: false,
  },
  friends: [],
  blocks: [],
  match_history: [],
  achievements: [],
  wins: 0,
  loses: 0,
  draws: 0,
}

interface MbChatProps {
  profile: MyUserData | undefined;
}

interface room {
  id: string,
  name: string,
  type: string,
}
export function DirectMsg({ profile }: MbChatProps) {
  // const {RoomId} = useParams();

  // const Data = useContext(UserContext);
  // console.log('context data-------------------------------------->',Data.user_data);
  const [Rooms, setRooms] = useState([]);
  const [OtherRooms, setOtherRooms] = useState([]);
  const [Myid, setMyId] = useState('');
  // console.log('in DirectMsg', profile.user_data);
  const { id } = useParams();
  // let Id;
  // if (id)
  //   Id = parseInt(id.toString());
  // else
  //   Id = undefined;
  console.log(id);

  const updateIsClicked = (index: number) => {
    setRooms((prevRooms: any) => {
      const updatedRooms = prevRooms.map((room: any, i: number) => {
        return { ...room, isClicked: false };
      });
      updatedRooms[index].isClicked = true;
      return updatedRooms;
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(
          `http://${import.meta.env.VITE_API_URL}/get-all-rooms`,
          { withCredentials: true }
        );
        setRooms(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(
          `http://${import.meta.env.VITE_API_URL}/get-other-rooms`,
          { withCredentials: true }
        );
        setOtherRooms(response.data);
		// console.log(OtherRooms.)
	} catch (error) {
		console.error("Error fetching data:", error);
	}
};

fetchData();
}, []);

  const [remove, setremove] = useState(false);
  const [rooms, setrooms] = React.useState(false);
  const [setting, setSettings] = useState(false);

  return (
    <>
	<div className="flex flex-col h-[70vh] fixed w-[40%]">
		{
			rooms ? 
			<div className=" h-full bg-black">
				{OtherRooms.map((otheRroom: {id:number, type: string, name: string, avatar: string}, index: number) => (
					<JoinRoom
						avatar={otheRroom.avatar}
						roomName={otheRroom.name}
						RoomType={otheRroom.type}
				/>
				
				))}
			</div>
			:
				<div>
			{Rooms.map((room: any, index: number) => (
				<Chatprofile
				key={room.id}
				room={room}
				hide={() => setSettings(!setting)}
				/>
				))}
			</div>
		}
	  <div className="flex items-center justify-center">

	  <div className="flex absolute top-[100%] pt-10 items-center gap-2 lg:pl-18 pl-14 justify-center">
			<button onClick={() => setremove(!remove)} className="border border-[#6C5DD3] shadow-md bg-[#6C5DD3] lg:w-[200px] w-[140px] h-[50px] rounded-2xl">
				<div className="text-white font-semibold lg:text-sm text-xs">Create New Room Chat</div>
			</button>
			{

				rooms ? <button className="text-sm text-[#6C5DD3]" onClick={() => setrooms(!rooms)}>Back To Direct Msg</button> :
				<button onClick={() => setrooms(!rooms)}>
					<div className="text-sm text-[#6C5DD3]">Join New rooms</div>
				</button>
			}
		</div>
	  </div>
	</div>
      <div className="w-[50%] absolute left-[49%] h-[87vh]">
        {(id && Rooms.find((room: room) => room.id.toString() === id?.toString())) && <ChatConv room={Rooms.find((room: room) => room.id.toString() === id?.toString())} profile={profile} />}
      </div>
	  <div>
		{
			remove ?
			<div className="w-screen h-screen blur-background">
				<CreateRoom hide={() => setremove(!remove)}/>
			</div> : null
		}
		{
			setting ?
			<div className="w-screen h-screen">
			 	<GroupSettings hide={() => setSettings(!setting)}/>
			</div> : null
		}

	  </div>

    </>
  );
}