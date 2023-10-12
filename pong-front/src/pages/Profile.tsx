import { NavBar } from "../components/Home/NavBar/NavBar";
import { HeadProfile } from "../components/Profile/HeadProfile/HeadProfile";
import { LastMatch } from "../components/Profile/LastMatch/LastMatch";
import { ProfileCard } from "../components/Profile/ProfileCard/ProfileCard";
import { States } from "../components/Profile/States/States";
import { StartEnjoying } from "../components/Home/Start/StartEnjoying";
import { MyFriends } from "../components/Profile/MyFriends/MyFriends";
import { Achivement } from "../components/Profile/Achivement/Achivement";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function Profile() {
//   const [Me, setMe] = useState<boolean>(true);
	const { username } = useParams();

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



  return (
    <>
      <div>
        <NavBar avatar={userData.user_data.avatar} username={userData.user_data.username} />
        <HeadProfile
          profile={userData.user_data.avatar}
          name={userData.user_data.username}
          friendNum={userData.friends.length.toString()}
		  me={userData.user_data.me}
        />
        <div className="md:flex md:flex-row md:justify-center md:justify-around  md:w-full lg:pl-28">
          <div>
            <LastMatch
              date="18 January 2023"
              name1={userData.user_data.username}
              profile1={userData.user_data.avatar}
              name2="hassan d3if"
              profile2="/src/assets/hkhalil.jpg"
            />
            <div className="mobile-nav-bar sm:hidden xl:block scrollable-div-hor1">
              <States res1="18" res2="24" res3="6" res4="66" />
            </div>
          </div>
          <ProfileCard
            profile={userData.user_data.avatar}
            name={userData.user_data.username}
            winNum={userData.wins.toString()}
            LoseNum={userData.loses.toString()}
            achivNum={userData.achievements.length.toString()}
          />
        </div>
        <div className="xl:hidden">
          <States res1="18" res2="24" res3="6" res4="66" />
        </div>
        <div className="sm:pt-10 lg:pl-36">
          <StartEnjoying />
        </div>
        <div className="md:flex md:flex-row md:justify-around md:pt-10 md:w-full lg:pl-28">
          <div className="md:w-6/12">
            <MyFriends />
          </div>
          <div className="md:w-6/12">
            <Achivement />
          </div>
        </div>
      </div>
    </>
  );
}
