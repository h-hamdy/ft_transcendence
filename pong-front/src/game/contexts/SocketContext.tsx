import { createContext, ReactNode } from "react";
import { io, Socket } from "socket.io-client";
import React from "react";
interface customParam
{
  user_id : number;
  gameDuration: string;
}

interface SocketProviderProps {
  children: ReactNode
  customParam : customParam;
}

export const SocketContext = createContext<Socket>({} as Socket);

// console.log()
export const SocketProvider = ({ children, customParam }: SocketProviderProps) => {
  // console.log(customParam.username + " r");
    const socket = io("http://localhost:3000", {
      query: {
        // gameMode: customParam.gameMode,
        gameDuration : customParam.gameDuration,
        user_id : customParam.user_id,
      },
      // extraHeaders: {
      //   'Cookie': 'yourCookieName=yourCookieValue',
      //   // Add other headers if needed
      // },
    });

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
  };