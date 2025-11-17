import IphonePic from "../assets/LaunchCtaIphonePic.png";
import WaitlistButton from "./WaitlistButton";
import "../styles/LaunchCta.css"

function LaunchCtaSection() {
  return (
    <div className="launch-cta-section">
      <div className="left">
        <h1>Be the first to know when the CerviTech App <span>launches!</span></h1>
        <p>
          Join our waitlist to stay updated on our progress, receive exclusive
          updates, and get ready to take control of your spine health.
        </p>
        <WaitlistButton className="launch-join-btn-big-screen"/>
      </div>
      <img src={IphonePic}/>
      <WaitlistButton className="launch-join-btn-mobile"/>
    </div>
  );
}

export default LaunchCtaSection;
