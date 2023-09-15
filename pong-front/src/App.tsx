import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SignIn } from "./pages/SignIn"
import { Home } from "./pages/Home"
import "./style.css"
import { DkNotif } from "./components/Home/NavBar/Notification/DkNotif"


function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/mb" element={<DkNotif/>}/>

        </Routes>
    </BrowserRouter>
  )
}

export default App