import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SignUp } from "./pages/SignUp"
import "./style.css"

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
