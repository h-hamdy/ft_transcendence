import React from "react";
import { Burger } from "./Burger/burger"
import { Notification } from "./Notification/Notification"
import { Avatar } from "./Avatar"
import { Notif } from "../../../pages/notif";


export function NavBar() {
  const [showNotif, setShowNotif] = React.useState<boolean>(false);

  return (
    <>
    <div>
      <nav>
        <div className="border h-24">
          <div className="flex justify-between items-center h-full px-7">
            <Burger />
            <div className="flex items-center">
              <div className="pr-16">
                <Notification clicked={() => setShowNotif(!showNotif)} />
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
    </>
  );
}
