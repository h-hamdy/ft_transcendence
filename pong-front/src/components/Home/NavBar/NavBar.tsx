import { Burger } from "./burger"
import { Notification } from "./Notification/Notification"
import { Avatar } from "./Avatar"

export function NavBar() {
  return (
    <div>
      <nav>
        <div className="border h-24">
          <div className="flex justify-between items-center h-full px-7">
            <Burger />
            <div className="flex items-center">
              <div className="pr-16">
                <Notification />
              </div>
              <div className="pr-5">
                <Avatar/>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
