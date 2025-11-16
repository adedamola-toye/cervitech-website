import Navbar from "./Navbar";
import "../styles/Navbar.css";
import IphonePic from "../assets/HeaderIphonePic.png";
import "../styles/Header.css";
import WaitlistButton from "./WaitlistButton";
import "../styles/WaitlistButton.css"

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
          {/* <Link to="/waitlist">
            <button className="join-btn">Join waitlist</button>
          </Link> */}
          <WaitlistButton className="header-join-btn"/>
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
