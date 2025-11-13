import Navbar from "./Navbar";
import "../styles/Navbar.css";
import IphonePic from "../assets/iPhone 15 Pro 1.png";
import "../styles/Header.css";

export default function Header() {
  return (
    <div id="header">
      <Navbar />
      <div className="header" id="header">
        <div className="left">
          <h1>
            Monitor Your <span>Neck Posture</span> With Your Smart Phone
          </h1>
          <p>
            Cervitech helps you correct your neck posture while using your
            devices and provides posture correction exercises
          </p>
          <div className="join-btn-wrapper"></div>
          <a href="https://forms.gle/4GwVpzgQ2QqT37fs8" target="_blank" rel="noopener noreferrer">
            <button className="join-btn">Join waitlist</button>
          </a>
        </div>
        <img
          className="iphone-pic"
          src={IphonePic}
          alt="Iphone picture showing Cervitech"
        />
      </div>
    </div>
  );
}
