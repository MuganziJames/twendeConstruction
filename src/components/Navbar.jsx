import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setScrolled(window.scrollY > heroHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled || !isHome ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo">
            <span className="navbar-logo-icon">🏗️</span>
            <span>Mizuho Enterprise</span>
          </Link>
        </div>

        <button
          className={`navbar-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={() => setMenuOpen(false)}>
              Services
            </NavLink>
          </li>
        </ul>

        <div className="navbar-cta">
          <Link to="/contact" className="btn btn-primary">
            Contact →
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
