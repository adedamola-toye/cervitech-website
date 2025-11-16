import "../styles/GetInTouch.css";
import LocationIcon from "../assets/Contact icons/Location icon.png";
import EmailIcon from "../assets/Contact icons/Email icon.png";
import PhoneIcon from "../assets/Contact icons/Phone icon.png";

function GetInTouch() {
  return (
    <div className="get-in-touch-section">
      <div className="heading">
        <h1>Get in Touch?</h1>
        <p>
          Feel free to reach out to us, we'll always be happy to assist you in
          any way we can.
        </p>
      </div>

      {/*   Main section */}
      <div className="main">
        {/* Contact info */}
        <div className="contact-info">
          <div className="each-contact">
            <img src={LocationIcon} alt="" className="icon" />
            <p>
              Lagos, Nigeria <span>Department of Physiotherapy</span>{" "}
              <span>University of Lagos, Akoka</span>
            </p>
          </div>
          <div className="phone-email">
            <div className="each-contact">
              <img src={PhoneIcon} alt="" className="icon" />
              <p>+234-805-964-3996</p>
            </div>
            <div className="each-contact" id="contact-email">
              <img src={EmailIcon} alt="" className="icon" />
              <p>contact.cervitech@gmail.com</p>
            </div>
          </div>
        </div>

        <form action="" className="form">
          {/* Name and Email */}
          <div className="name-email">
            <div className="name-input">
              <label htmlFor="">Name</label>
              <input type="text" required className="input" />
            </div>
            <div className="email-input">
              <label htmlFor="">Email</label>
              <input type="email" required className="input" />
            </div>
          </div>

          {/* Message */}
          <div className="message">
            <div className="message-input">
              <label htmlFor="">Message</label>
              <textarea
                id="message"
                name="message"
                rows={7}
                placeholder="Type your message here..."
                required
                className="input"
              ></textarea>
            </div>

            <button className="send-msg-btn">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default GetInTouch;
