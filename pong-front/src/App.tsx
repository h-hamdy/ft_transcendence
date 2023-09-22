import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SignIn } from "./pages/SignIn"
import { Home } from "./pages/Home"
import { Profile } from "./pages/Profile"
import { Game } from "./pages/Game"
import { MbSettings } from "./components/settings/MbSettings"
import "./style.css"

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Profile" element={<Profile/>}/>
		  <Route path="Game" element={<Game/>}/>
		  <Route path="Settings" element={<MbSettings/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App