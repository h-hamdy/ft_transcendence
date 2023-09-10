import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SignIn } from "./pages/SignIn"
import { Home } from "./pages/Home"
import { Brb } from "./pages/Tmp"
import { Notif } from "./pages/notif"
import "./style.css"

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/tmp" element={<Brb/>}/>
          <Route path="/Notif" element={<Notif/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App