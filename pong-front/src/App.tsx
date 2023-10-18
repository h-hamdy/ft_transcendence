import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SignIn } from "./pages/SignIn"
import { Home } from "./pages/Home"
import { Profile } from "./pages/Profile"
import { Game } from "./pages/Game"
import { Chat } from "./pages/Chat"
import "./style.css"
import React from "react"
import { SetUsername } from "./pages/SetUsername"
import { SocketContext, SocketProvider } from "./game/contexts/SocketContext"
// import { SocketContext } from './contexts/SocketContext';
import { useContext } from "react"
import { useLocation } from "react-router-dom"

const GameSetup = () =>
{
  const {state} = useLocation();

    // const socket = useContext(SocketContext);
    // const handleScoreUpdated = (data : string) => {
    //   console.log('Score updated in GameSetup:', data);
    // };

    // socket.on("getScore", ()=>
    // {
    //   console.log("jere")
    // })

  return (
    <SocketProvider gameDuration={state.gameDuration}>
      <Game/>
    </SocketProvider>
  );
}

function App() {

  return (
    <BrowserRouter>
        <Routes>
			      <Route path="/set_username" element={<SetUsername />}/>
          	<Route path="/" element={<SignIn/>}/>
          	<Route path="/home" element={<Home/>}/>
          	<Route path={`/Profile/:username`} element={<Profile/>}/>
			{/* <MyContext.Provider value={Score}> */}
      		{/* <SocketProvider gameDuration={state.gameDuration}> */}
      <Route path="Game" element={<GameSetup/>}/>
			      <Route path="Chat" element={<Chat/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App