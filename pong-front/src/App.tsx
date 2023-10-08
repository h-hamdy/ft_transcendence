import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SignIn } from "./pages/SignIn"
import { Home } from "./pages/Home"
import { Profile } from "./pages/Profile"
import { Game } from "./pages/Game"
import { Chat } from "./pages/Chat"
import "./style.css"
import { SetUsername } from "./pages/SetUsername"


function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/set_username" element={<SetUsername/>}/>
          <Route path="/11" element={<SignIn/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Profile" element={<Profile/>}/>
		      <Route path="Game" element={<Game/>}/>
		      <Route path="Chat" element={<Chat/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App