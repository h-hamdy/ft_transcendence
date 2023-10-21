
import React, { useState, useEffect } from "react";
import { Chatprofile } from "./Chatprofile";
import up from "/src/assets/small_up.svg";
import axios from "axios";



export function DirectMsg() {

	const [Up, setUp] = React.useState(false);
	const [Rooms, setRooms] = useState([]);
	const [userData, setUserData] = useState({
		user_data: {
		  id: 0,
		  username: "",
		  avatar: "",
		  rating: 0,
		  me: false,
		  is_two_factor_auth_enabled: false,
		},
		friends: [],
		match_history: [],
		achievements: [],
		wins: 0,
		loses: 0,
		draws: 0,
	  });

	const updateIsClicked = (index) => {
		setRooms((prevRooms) => {
		  const updatedRooms = prevRooms.map((room, i) => {
			return { ...room, isClicked: i === index ? !room.isClicked : false };
		  });
		  return updatedRooms;
		});
	  };

	const handleProfileClick = (index: number) => {
	  updateIsClicked(index);
	};

	useEffect(() => {
	  const fetchData = async () => {
		try {
		  let response = await axios.get('http://localhost:3000/get-all-rooms', { withCredentials: true });
		  const roomsWithClickState = response.data.map(room => ({ ...room, isClicked: false }));
		  setRooms(roomsWithClickState);
			response = await axios.get('http://localhost:3000/profile/me', {withCredentials: true})
			setUserData(response.data);
			// console.log("user data" + userData.user_data);
		} catch (error) {
			console.error("Error fetching user data:", error);
		}
	  };
  
	  fetchData();
	}, []);
  
	return (
	  <>
		{/* ... your existing code ... */}
		<div className="flex flex-col h-[90vh] fixed w-full">
		  {Rooms.map((room, index) => (
			<Chatprofile room={room} profile={userData}
			  onClick={() => handleProfileClick(index)}
			  isClicked={room.isClicked}
			/>
		  ))}
		</div>
		{/* ... your existing code ... */}
	  </>
	);
  }