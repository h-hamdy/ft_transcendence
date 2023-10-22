import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SignIn } from "./pages/SignIn"
// import { Home } from "./pages/Home"
import { Profile } from "./pages/Profile"
import { Game } from "./pages/Game"
import { Chat } from "./pages/Chat"
import "./style.css"
import React from "react"
import { SetUsername } from "./pages/SetUsername"
import { TwofaAuth } from "./pages/TwofaAuth"
import { ForOFor } from "./pages/ForOFor"
import { GameSetup } from "./components/Game/GameSetup"

function App() {

  return (
    <BrowserRouter>
        <Routes>
			<Route path="/set_username" element={<SetUsername />}/>
			<Route path="/" element={<SignIn/>}/>
			{/* <Route path="/home" element={<Home/>}/> */}
			<Route path="/2fa" element={<TwofaAuth/>}/>
			<Route path={`/Profile/:username`} element={<Profile/>}/>
			<Route path="/error" element={<ForOFor/>}/>
			<Route path="/Game" element={<GameSetup/>}/>
			<Route path="/Chat" element={<Chat/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App