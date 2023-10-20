import { NavBar } from "../components/Home/NavBar/NavBar";
import { HeadProfile } from "../components/Profile/HeadProfile/HeadProfile";
import { LastMatch } from "../components/Profile/LastMatch/LastMatch";
import { ProfileCard } from "../components/Profile/ProfileCard/ProfileCard";
import { States } from "../components/Profile/States/States";
import { StartEnjoying } from "../components/Home/Start/StartEnjoying";
// import { MyFriends } from "../components/Profile/MyFriends/MyFriends";
import { Achivement } from "../components/Profile/Achivement/Achivement";
import { LatestMatches } from "../components/Home/LTSMatches/LatestMatches";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function Profile() {
	const { username } = useParams();


	React.useEffect(() => {
		var timer = sessionStorage.getItem("Timer");
		var table = sessionStorage.getItem("Table");
		if (table == null)
			table = '#000000'
		if (timer == null) {
			timer = '1';
		}
		sessionStorage.setItem("Timer", timer);
		sessionStorage.setItem("Table", table);
	  }, []);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/profile/${username}`, { withCredentials: true });
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:");
      }
    };

    fetchData();
  }, []);

  var BASE_URL;
  const url = userData.user_data.avatar.substring(0, 30);

  console.log(userData.user_data.avatar);
  if (url === "https://cdn.intra.42.fr/users/")
  	BASE_URL = userData.user_data.avatar;	
  else
  	BASE_URL = `http://localhost:3000/avatars/${userData.user_data.avatar}`;

	console.log(BASE_URL);


  return (
    <>
      <div>
        <NavBar avatar={BASE_URL} username={userData.user_data.username} id={userData.user_data.id}/>
        <HeadProfile
          profile={BASE_URL}
          name={userData.user_data.username}
          friendNum={userData.friends.length.toString()}
		  me={userData.user_data.me}
        />
        <div className="md:flex md:flex-row md:justify-center md:justify-around  md:w-full lg:pl-28">
          <div>
            <LastMatch
              date="18 January 2023"
              name1={userData.user_data.username}
              profile1={BASE_URL}
              name2="hassan d3if"
              profile2="/src/assets/hkhalil.jpg"
            />
            <div className="mobile-nav-bar sm:hidden xl:block scrollable-div-hor1">
              <States res1={userData.wins.toString()} res2={userData.loses.toString()} res3={userData.draws.toString()} res4={(userData.wins + userData.loses + userData.draws).toString()} />
            </div>
          </div>
          <ProfileCard
            profile={`http://localhost:3000/avatars/${userData.user_data.avatar}`}
            name={userData.user_data.username}
            winNum={userData.wins.toString()}
            LoseNum={userData.loses.toString()}
            achivNum={userData.achievements.length.toString()}
          />
        </div>
        <div className="xl:hidden">
          <States res1={userData.wins.toString()} res2={userData.loses.toString()} res3={userData.draws.toString()} res4={(userData.wins + userData.loses + userData.draws).toString()} />
        </div>
        <div className="md:flex md:flex-row md:justify-around md:pt-10 md:w-full lg:pl-28 pt-10">
		<div className="md:w-6/12">
			<LatestMatches/>
		</div>
          <div className="md:w-6/12">
            <Achivement />
          </div>
        </div>
      </div>
    </>
  );
}
