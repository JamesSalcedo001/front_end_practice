import "./NavBar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">🌻</Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/sidebar" className="nav-links">SideBar</Link>
          </li>
          <li className="nav-item">
            <Link to="/search" className="nav-links">Search</Link>
          </li>
          <li className="nav-item">
            <Link to="/form" className="nav-links">Form</Link>
          </li>
          <li className="nav-item">
            <Link to="/grid" className="nav-links">Grid</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;


      // <li className="nav-item">
      //     <Link to="/" className="nav-links"></Link>
      // </li>

