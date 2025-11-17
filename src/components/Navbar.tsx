import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/Cervitech Logo.png";
import "../styles/Navbar.css";
import { useState, useEffect, useRef } from "react";
import WaitlistButton from "./WaitlistButton";
import "../styles/WaitlistButton.css";
function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
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

  const handleScroll = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <div className="nav-section" ref={navRef}>
      <Link to="/">
        <img src={Logo} alt="Cervitech logo" />
      </Link>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault(); 
            handleScroll("header");
            setMenuOpen(false);
          }}
        >
          ABOUT
        </a>

        <a
          href="#how-it-works"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("how-it-works");
            setMenuOpen(false);
          }}
        >
          HOW IT WORKS
        </a>

        <a
          href="#faqs"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("faqs");
            setMenuOpen(false);
          }}
        >
          FAQS
        </a>

        <Link to="/privacy-policy" onClick={() => setMenuOpen(false)}>
          PRIVACY POLICY
        </Link>
      </nav>

      {/* <Link to="/waitlist">
        <button className="join-btn">Join waitlist</button>
      </Link> */}
      <WaitlistButton className="navbar-btn" />
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </button>
    </div>
  );
}

export default Navbar;
