import CervitechLogo from "../assets/Cervitech Logo White.png"
//import { Link } from "react-router-dom";
import FacebookIcon from "../assets/Socials Icons/bi_facebook.png";
import TwitterIcon from "../assets/Socials Icons/akar-icons_twitter-fill.png";
import InstagramIcon from "../assets/Socials Icons/ant-design_instagram-filled.png";
import LinkedInIncon from "../assets/Socials Icons/akar-icons_linkedin-fill.png";
import "../styles/Footer.css";
function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-content">
        <div className="left">
          <img src={CervitechLogo} />
          <p>
            We develop and deliver cutting-edge digital technology to help you
            prevent, correct, and manage abnormal posture and spinal pain. Our
            focus is on empowering you to achieve optimal spinal well-being and
            live a pain-free life.
          </p>
        </div>

        <div className="links">
          <p className="link">FAQs</p>
          <p className="link">Contact Us</p>
          <p className="link">Privacy Policy</p>
        </div>

        <div className="socials">
          <img src={TwitterIcon} alt="Twitter icon" />
          <img src={InstagramIcon} alt="Instagram icon" />
          <img src={FacebookIcon} alt="Facebook icon" />
          <img src={LinkedInIncon} alt="Linked icon" />
        </div>
      </div>

      <hr />

      <footer>Copyright © 2024 Cervitech App. All rights reserved.</footer>
    </div>
  );
}

export default Footer;
