import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Events from "./pages/Event"
import Login from "./pages/Login"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

