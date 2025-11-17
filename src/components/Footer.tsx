import CervitechLogo from "../assets/Cervitech Logo White.png";
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
          <a
            href="https://x.com/cervitech?s=11"
            target="_blank"
            rel="noopener noreferrer"
          ><img src={TwitterIcon} alt="Twitter icon" /></a>
          
          <a
            href="https://www.instagram.com/cervitech_?igsh=MWI4ODRxeTlrdzU3NA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
              <img src={InstagramIcon} alt="Instagram icon" />
          </a>
         
          <a
            href="https://www.facebook.com/share/1MWbqr476d/?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
          ><img src={FacebookIcon} alt="Facebook icon" /></a>
          
           <a
            href="https://www.linkedin.com/in/ashiyat-akodu-25646a3a/"
            target="_blank"
            rel="noopener noreferrer"
          ><img src={LinkedInIncon} alt="Linked icon" /></a>
          
        </div>
      </div>

      <hr />

      <footer>Copyright © 2024 Cervitech App. All rights reserved.</footer>
    </div>
  );
}

export default Footer;
