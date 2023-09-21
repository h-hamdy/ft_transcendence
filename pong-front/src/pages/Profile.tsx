import { NavBar } from "../components/Home/NavBar/NavBar"
import { HeadProfile } from "../components/Profile/HeadProfile/HeadProfile"
import { LastMatch } from "../components/Profile/LastMatch/LastMatch"
import { ProfileCard } from "../components/Profile/ProfileCard/ProfileCard"
import { States } from "../components/Profile/States/States"
import { StartEnjoying } from "../components/Home/Start/StartEnjoying"
import { MyFriends } from "../components/Profile/MyFriends/MyFriends"
import { Achivement } from "../components/Profile/Achivement/Achivement"

export function Profile () {
	return (
		<>
			<div>
				<NavBar/>
				{/* <div className="pr-20 pl-20"> */}

				<HeadProfile profile="/src/assets/hkhalil.jpg" name="Saad Mny" friendNum="10"/>
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
				<div className="sm:pt-10 lg:pl-52 lg:pr-32">
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
			{/* </div> */}
		</>
	)
}