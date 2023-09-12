import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SignIn } from "./pages/SignIn"
import { Home } from "./pages/Home"
import "./style.css"


function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/Home" element={<Home/>}/>

        </Routes>
    </BrowserRouter>
  )
}

export default App