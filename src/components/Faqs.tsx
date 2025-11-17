
import { useState, type ReactNode } from "react";
import "../styles/Faq.css";

type FaqItem = { q: string; a: ReactNode };

const FAQS: FaqItem[] = [
    {
        q: "What is CerviTech App?",
        a: (
            <p>
                CerviTech App is a mobile health application designed to track and manage spine health.
            </p>
        ),
    },
    {
        q: "How does it work?",
        a: (
            <p>
                It uses advanced algorithms and user-input data to provide personalized insights and recommendations.
            </p>
        ),
    },
    {
        q: "What features does the CerviTech App offer for cervical health management?",
        a: (
            <div>
                <p>The app offers features such as:</p>
                <ul>
                    <li>
                        Neck angle calculation in real time based on the relative position of the face and phone
                    </li>
                    <li>
                        Standard tailored exercises for the relief of neck, shoulder, and back pain
                    </li>
                    <li>
                        Monitoring of the average neck angle over time with notifications sent to users
                    </li>
                    <li>
                        The ability to set daily, weekly, and monthly goals to track progress
                    </li>
                </ul>
            </div>
        ),
    },
    {
        q: "Is the CerviTech App compatible with my smartphone/tablet?",
        a: (
            <div>
                <p>The CerviTech App is compatible with Android devices.</p>
                <p>An iOS version will be launched soon.</p>
            </div>
        ),
    },
    {
        q: "How do I download and install the CerviTech App?",
        a: (
            <div>
                <p>
                    You can download the CerviTech App from the Google Play Store (for Android devices).
                </p>
                <p>Follow the on-screen instructions to install and set up the app.</p>
            </div>
        ),
    },
    {
        q: "What kind of data does the CerviTech App collect, and how is it secured?",
        a: (
            <div>
                <p>
                    The app collects user-input data related to spine health, which is stored securely on our servers.
                </p>
                <p>
                    We use industry-standard encryption and follow best practices to ensure data protection and
                    confidentiality.
                </p>
            </div>
        ),
    },
    {
        q: "Can I share my CerviTech App data with my healthcare provider?",
        a: (
            <div>
                <p>Yes, you can choose to share your data with your healthcare provider.</p>
                <p>
                    This can help them better understand your spine health and provide more informed care.
                </p>
            </div>
        ),
    },
    {
        q: "How accurate is the CerviTech App in tracking abnormal posture of the spine (forward head posture)?",
        a: (
            <div>
                <p>The app uses advanced algorithms and is designed to provide accurate insights.</p>
                <p>
                    However, it’s essential to consult with a healthcare professional for personalized advice and diagnosis.
                </p>
            </div>
        ),
    },
    {
        q: "Are there any costs or subscription fees associated with using the CerviTech App?",
        a: (
            <div>
                <p>We offer both free and premium features (monthly and yearly plans).</p>
                <p>
                    Please visit our website for more information on pricing and subscription plans.
                </p>
            </div>
        ),
    },
    {
        q: "How do I contact support if I have questions or issues with the CerviTech App?",
        a: (
            <p>
                You can reach out to our support team through: <span role="img" aria-label="email">📧</span>{" "}
                <a href="mailto:devs.cervitech@gmail.com">devs.cervitech@gmail.com</a>
            </p>
        ),
    },
];

function Faqs() {
    const [open, setOpen] = useState<Set<number>>(new Set());

    const toggle = (i: number) => {
        setOpen((prev) => {
            const next = new Set(prev);
            if (next.has(i)) next.delete(i);
            else next.add(i);
            return next;
        });
    };

    return (
        <section className="faq-page">
            <h1 className="faq-title">
                Frequently Asked <span>Questions</span>
            </h1>

            <div className="faq-content">
                <div className="faq-left">
                    {FAQS.map((item, i) => {
                        const isOpen = open.has(i);
                        const contentId = `faq-panel-${i}`;
                        return (
                            <div className={`faq-accordion ${isOpen ? "open" : ""}`} key={i}>
                                <div className="faq-item">
                                    <div className="faq-item-text">{item.q}</div>
                                    <button
                                        type="button"
                                        className="faq-toggle"
                                        aria-expanded={isOpen}
                                        aria-controls={contentId}
                                        onClick={() => toggle(i)}
                                    >
                                        <span className="faq-item-icon" aria-hidden>
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M6 9l6 6 6-6"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                                <div id={contentId} className="faq-answer" role="region">
                                    <p>{item.a}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="faq-right">
                    <img src="/faq.jpg" alt="FAQ" className="faq-illustration" />
                </div>
            </div>
        </section>
    );
}

export default Faqs;