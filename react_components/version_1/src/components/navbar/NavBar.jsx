import "./NavBar.css"


const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="nav-logo">🌻</a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/"className="nav-links">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-links">About</a>
          </li>
          <li className="nav-item">
            <a href="/services" className="nav-links">Services</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-links">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;