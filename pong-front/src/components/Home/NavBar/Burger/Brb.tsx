// import { StartGaming } from "../../Start/StartGaming";

import arrow from "/src/assets/small-down.svg";
// import start from "/src/assets/Start.png";
import React, { useEffect } from "react";

import { BrHome } from "./BrHome";
import { BrGame } from "./BrGame";
import { BrVideo } from "./BrVideo";
import { BrProfile } from "./BrProfile";

import { BrFriends } from "./BrFriends";

import { BrChat } from "./BrChat";
import { BrSettings } from "./BrSettings";
import { BrStart } from "./BrStart";

import { useState } from "react";
import { BrLogout } from "./BrLogout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Avatar } from "../Avatar";
import { Friends } from "../../Friends/friends";

export function Brb() {
  const initialColors: { [key: string]: string } = {
    button1: "initial",
    button2: "initial",
    button3: "initial",
    button4: "initial",
    button5: "initial",
    button6: "initial",
  };

  const strokeColors: { [key: string]: string } = {
    img1: "#808191",
    img2: "#808191",
    img3: "#808191",
    img4: "#808191",
    img5: "#808191",
    img6: "#808191",
  };

  const [buttonColors, setButtonColors] = useState(initialColors);
  const [strokeColor, setstrokeColor] = useState(strokeColors);
  const navigate = useNavigate();


  const handleClick = (buttonName: string, imgNum: string) => {
    const newColors = { ...initialColors };
    const newImgs = { ...strokeColors };

    newColors[buttonName] = "#6C5DD3";
    newImgs[imgNum] = "#FFF";
    setButtonColors(newColors);
    setstrokeColor(newImgs);
  };

  interface UserData {
	id: number;
	username: string;
	avatar: string;
	rating: number;
	me: boolean;
	is_two_factor_auth_enabled: boolean;
  }
  
  interface Friend {
	id: number;
	username: string;
	avatar: string;
  }
  
  interface UserState {
	user_data: UserData;
	friends: Friend[];
	match_history: any[];
	achievements: any[];
	wins: number;
	loses: number;
	draws: number;
  }
  
  const [userData, setUserData] = useState<UserState>({
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
		console.log("h2");
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
      <div className="pt-[60px] w-full h-screen notif-container lg:hidden">
        <div className="flex flex-col pt-20">
          {/* <BrHome
            buttonColors={buttonColors}
            strokeColor={strokeColor}
            handleClick={handleClick}
          /> */}
          <BrProfile
            buttonColors={buttonColors}
            strokeColor={strokeColor}
            handleClick={handleClick}
          />
          <BrChat
            buttonColors={buttonColors}
            strokeColor={strokeColor}
            handleClick={handleClick}
            msgnum="5"
          />
          <BrGame
            buttonColors={buttonColors}
            strokeColor={strokeColor}
            handleClick={handleClick}
          />
        </div>

        <div className="flex flex-col pt-10 pl-16">
          <div className="text-[#808191] text-sm pb-8">Friends</div>

          <div className="scrollable-div-ver6">
            <div>
				{userData.friends.map((friend, index: number) => (
					<div key={index}>
						<BrFriends profile={friend.avatar} name={friend.username} status="/src/assets/live.svg"/>
					</div>
				))
				}
			</div>
          </div>
          <div className="flex pt-8 items-center">
            <div>
              <img src={arrow}></img>
            </div>
            <div className="pl-3 text-[#808191]">Lead more</div>
          </div>
        </div>

        <div className="flex flex-col pt-16 pl-8 pb-10">
          <div className="text-[#808191] text-sm pb-8 pl-8">CyberPong</div>

          <BrSettings
            buttonColors={buttonColors}
            strokeColor={strokeColor}
            handleClick={handleClick}
			/>
			<BrLogout/>
        </div>
      </div>
    </>
  );
}
