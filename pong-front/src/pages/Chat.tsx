import { MbChat } from "../components/Chat/MbChat";
import { NavBar } from "../components/Home/NavBar/NavBar";
import { useEffect } from "react";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export function Chat () {

	const navigate = useNavigate();
	const [userData, setUserData] = React.useState({
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


	useEffect(() => {
		const fetchData = async () => {
		  try {
			const response = await axios.get(`http://localhost:3000/profile/me`, { withCredentials: true });
			setUserData(response.data);
		  } catch (error) {
			console.error("Error fetching user data:");
			// navigate("/error");
		  }
		};
	
		fetchData();
	  }, []);


	return (
		<>
			<div>
				<NavBar username={userData.user_data.username} avatar={userData.user_data.avatar} id={userData.user_data.id}/>
				<MbChat/>
			</div>
		</>
	)
}