import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SignIn } from "./pages/SignIn"
import { Home } from "./pages/Home"
import { Profile } from "./pages/Profile"
import { Game } from "./pages/Game"
import { Chat } from "./pages/Chat"
import "./style.css"
import { SetUsername } from "./pages/SetUsername"

import { useLocation } from "react-router-dom"

function App() {

  const DynamicRoute = () => {
    const location = useLocation();
    const htmlContent = location.state?.htmlContent || '';
  
    return (
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
  };

  return (
    <BrowserRouter>
        <Routes>
        <Route path="/auth" element={<DynamicRoute />} />
        <Route path="set_username" element={<SetUsername/>}/>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Profile" element={<Profile/>}/>
		  <Route path="Game" element={<Game/>}/>
		  <Route path="Chat" element={<Chat/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App