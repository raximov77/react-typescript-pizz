import { Route, Routes } from "react-router-dom"
import { Home, Saved } from "../pages"


function CustomRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/saved" element={<Saved/>}/>
    </Routes>
  )
}

export default CustomRoutes