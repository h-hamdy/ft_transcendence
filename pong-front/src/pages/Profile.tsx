import { NavBar } from "../components/Home/NavBar/NavBar"
import { HeadProfile } from "../components/Profile/HeadProfile/HeadProfile"
import { LastMatch } from "../components/Profile/LastMatch/LastMatch"
import { ProfileCard } from "../components/Profile/ProfileCard/ProfileCard"
import { States } from "../components/Profile/States/States"
import { StartEnjoying } from "../components/Home/Start/StartEnjoying"
import { MyFriends } from "../components/Profile/MyFriends/MyFriends"
import { Achivement } from "../components/Profile/Achivement/Achivement"
import React, { useState, useEffect } from "react"
import axios from "axios"

export function Profile () {

	const [userData, setUserData] = useState({
		user_data: {
		  id: 0,
		  username: '',
		  avatar: '',
		  rating: 0,
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
			const response = await axios.get('http://localhost:3000/profile/me');
			setUserData(response.data);
			console.log("here");
			console.log(response.data.user_data.username);
		  } catch (error) {
			console.error('Error fetching user data:', error);
		  }
		};
	
		fetchData();
	  }, []);



	return (
		<>
			<div>
				<NavBar/>
				<HeadProfile profile={userData.user_data.avatar} name={userData.user_data.username} friendNum={(userData.friends.length).toString()}/>
				<div className="md:flex md:flex-row md:justify-center md:justify-around  md:w-full lg:pl-28">
					<div>
						<LastMatch date="18 January 2023" name1="houssam nadi" profile1="/src/assets/hhamdy.jpg" name2="hassan d3if" profile2="/src/assets/hkhalil.jpg"/>
						<div className="mobile-nav-bar sm:hidden xl:block scrollable-div-hor1">
							<States res1="18" res2="24" res3="6" res4="66"/>
						</div>
					</div>
					<ProfileCard profile="/src/assets/hkhalil.jpg" name="Saad Mney" winNum="15" LoseNum="4" achivNum="3"/>
				</div>
				<div className="xl:hidden">
					<States res1="18" res2="24" res3="6" res4="66"/>
				</div>
				<div className="sm:pt-10 lg:pl-36">
					<StartEnjoying/>
				</div>
				<div className="md:flex md:flex-row md:justify-around md:pt-10 md:w-full lg:pl-28">
					<div className="md:w-6/12">
						<MyFriends/>
					</div>
					<div className="md:w-6/12">
						<Achivement/>
					</div>
				</div>
				</div>
		</>
	)
}