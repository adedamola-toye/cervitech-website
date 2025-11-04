import React, { useState } from "react";
import "../styles/GetInTouch.css";

function IconLocation() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M12 22s7-5.14 7-11a7 7 0 10-14 0c0 5.86 7 11 7 11z" stroke="currentColor" strokeWidth="2" fill="none"/>
            <circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
}

function IconPhone() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M22 16.92v2a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012 4.18 2 2 0 014 2h2a2 2 0 012 1.72c.12.9.33 1.77.61 2.6a2 2 0 01-.45 2.11L7.1 9.9a16 16 0 006 6l1.47-1.47a2 2 0 012.11-.45c.83.28 1.7.49 2.6.61A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
    );
}

function IconMail() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
    );
}

function GetInTouch() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        // Replace with your real submit integration
        // Keeping a console for now so you can verify the payload
        // without needing a backend just yet
        console.log({ name, email, message });
        alert("Thanks for reaching out! We'll get back to you soon.");
        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <section className="getintouch">
            <div className="getintouch__inner">
                <header className="getintouch__header">
                    <h2>Get in Touch?</h2>
                    <p>
                        Feel free to reach out to us, we'll always be happy to assist
                        you in any way we can.
                    </p>
                </header>

                <div className="getintouch__grid">
                    <ul className="getintouch__contacts" aria-label="Contact details">
                        <li>
                            <span className="icon" aria-hidden>
                                <IconLocation />
                            </span>
                            <div>
                                <strong>Lagos, Nigeria</strong>
                                <p>Department of Physiotherapy, University of Lagos, Akoka.</p>
                            </div>
                        </li>
                        <li>
                            <span className="icon" aria-hidden>
                                <IconPhone />
                            </span>
                            <a href="tel:+2348059643996">+234-805-964-3996</a>
                        </li>
                        <li>
                            <span className="icon" aria-hidden>
                                <IconMail />
                            </span>
                            <a href="mailto:contact.cervitech@gmail.com">contact.cervitech@gmail.com</a>
                        </li>
                    </ul>

                    <form className="getintouch__form" onSubmit={handleSubmit} noValidate>
                        <div className="field">
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                placeholder="Your name"
                            />
                        </div>

                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="you@example.com"
                            />
                        </div>

                        <div className="field field--full">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={6}
                                required
                                placeholder="How can we help?"
                            />
                        </div>

                        <div className="actions">
                            <button type="submit" className="btn-primary">
                                Send message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default GetInTouch;