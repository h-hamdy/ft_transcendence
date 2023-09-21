import React from "react";
import { Burger } from "./Burger/burger";
import { Notification } from "./Notification/Notification";
import { Avatar } from "./Avatar";
import { Notif } from "./Notification/notif";
import { Brb } from "./Burger/Brb";
import { Home } from "../../../pages/Home";
import { MBburger } from "./Burger/MBburger";

export function NavBar() {
  const [showNotif, setShowNotif] = React.useState(false);
  const [showBurger, setShowBurger] = React.useState(false);

  return (
    <>
      <div className="nav-container zz">
        <nav>
          <div className="border h-24 sm:h-20">
            <div className="flex justify-between items-center h-full px-7">
              <div>
                <Burger clicked={() => setShowBurger(!showBurger)} />
                <div className="fixed left-0 top-0 bg-white zz sm:hidden lg:block mobile-nav-bar">
                  <MBburger />
                </div>
              </div>
              <div className="flex items-center">
                <div className="pr-20">
                  <Notification
                    clicked={() => setShowNotif(!showNotif)}
                    msgnum="5"
                  />
                </div>
                <div className="lg:pr-16">
                  <Avatar />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {showNotif && <Notif />}
      {showBurger && <Brb />}
    </>
  );
}