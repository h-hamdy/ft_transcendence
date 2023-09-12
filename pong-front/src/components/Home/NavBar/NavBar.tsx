import React from "react";
import { Burger } from "./Burger/burger"
import { Notification } from "./Notification/Notification"
import { Avatar } from "./Avatar"
import { Notif } from "./Notification/notif";
import { Brb } from "../../../pages/Tmp";
import { Home } from "../../../pages/Home";


export function NavBar() {
  const [showNotif, setShowNotif] = React.useState(false);
  const [showBurger, setShowBurger] = React.useState(false)

  return (
    <>
    <div className="nav-container zz">
      <nav>
        <div className="border h-24">
          <div className="flex justify-between items-center h-full px-7">
            <Burger clicked={() => setShowBurger(!showBurger)}/>
            <div className="flex items-center">
              <div className="pr-16">
                <Notification clicked={() => setShowNotif(!showNotif)} msgnum="5"/>
              </div>
              <div className="pr-5">
                <Avatar/>
              </div>
            </div>
          </div>
        </div>
      </nav>
     
    </div>
    { showNotif && <Notif />}
    { showBurger && <Brb />}
    </>
  );
}
