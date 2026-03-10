import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <div className="logo">
          <Link to="/">MJovem</Link>
        </div>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/events">Eventos</Link>
          <Link to="/login">Login</Link>
        </nav>

        <div className="nav-cta">
          <Link to="/events" className="nav-button">
            Participar
          </Link>
        </div>

      </div>
    </header>
  )
}