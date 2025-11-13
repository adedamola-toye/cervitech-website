import { Link } from "react-router-dom";
import Logo from "../assets/Cervitech Logo.png";
import "../styles/Navbar.css";
import { useState, useEffect, useRef } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (navRef.current && !navRef.current.contains(target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="nav-section" ref={navRef}>
      <Link to="/">
        <img src={Logo} alt="Cervitech logo" />
      </Link>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </button>
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          ABOUT
        </Link>
        <Link to="/how-it-works" onClick={() => setMenuOpen(false)}>
          HOW IT WORKS
        </Link>
        <Link to="/faqs" onClick={() => setMenuOpen(false)}>
          FAQS
        </Link>
        <Link to="privacy-policy" onClick={() => setMenuOpen(false)}>
          PRIVACY POLICY
        </Link>
      </nav>

      <a href="" target="_blank" rel="noopener noreferrer">
        <button className="join-btn">Join waitlist</button>
      </a>
    </div>
  );
}

export default Navbar;
