import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/GetInTouch.css";
import LocationIcon from "../assets/Contact icons/Location icon.png";
import EmailIcon from "../assets/Contact icons/Email icon.png";
import PhoneIcon from "../assets/Contact icons/Phone icon.png";

function GetInTouch() {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<string>("");

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log("EmailJS success:", result.text);
        setStatus("Message sent successfully! 🎉");
        form.current?.reset();
        setTimeout(() => setStatus(""), 4000);
      },
      (error) => {
        console.error("EmailJS failed:", error.text);
        setStatus("Failed to send message. Please try again later.");
        setTimeout(() => setStatus(""), 4000);
      }
    );
  };

  return (
    <div className="get-in-touch-section">
      <div className="heading">
        <h1>Get in Touch?</h1>
        <p>
          Feel free to reach out to us, we'll always be happy to assist you in
          any way we can.
        </p>
      </div>

      {/*Main section */}
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

        {/* Form  */}
        <form ref={form} onSubmit={sendEmail} className="form">
          {/* Name and Email */}
          <div className="name-email">
            <div className="name-input">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="user_name"
                id="name"
                required
                className="input"
              />
            </div>
            <div className="email-input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="user_email"
                id="email"
                required
                className="input"
              />
            </div>
          </div>

          {/* Message */}
          <div className="message">
            <div className="message-input">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={7}
                placeholder="Type your message here..."
                required
                className="input"
              ></textarea>
            </div>

            <button className="send-msg-btn" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
      {/* Status message */}
      {status && <p className="status">{status}</p>} 
    </div>
  );
}
export default GetInTouch;
