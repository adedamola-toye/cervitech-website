
import "../styles/Faq.css";

const QUESTIONS: string[] = [
    "What is CerviTech App",
    "How does it work",
    "What features does the CerviTech App offer for cervical health management?",
    "Is the CerviTech App compatible with my smartphone/tablet?",
    "How do I download and install the CerviTech App?",
    "What kind of data does the CerviTech App collect, and how is it secured?",
    "Can I share my CerviTech App data with my healthcare provider?",
    "How accurate is the CerviTech App in tracking abnormal posture of the spine (forwardhead posture)?",
    "Are there any costs or subscription fees associated with using the CerviTech App?",
    "How do I contact support if I have questions or issues with the CerviTech App?",
];

function Faqs() {
    return (
        <section className="faq-page">
            <h1 className="faq-title">
                Frequently Asked <span>Questions</span>
            </h1>

            <div className="faq-content">
                <div className="faq-left">
                    {QUESTIONS.map((q, i) => (
                        <div className="faq-item" key={i}>
                            <div className="faq-item-text">{q}</div>
                            <div className="faq-item-icon" aria-hidden>
                                {/* chevron-down icon */}
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
                            </div>
                        </div>
                    ))}
                </div>

                <div className="faq-right">
                    <img src="/faq.jpg" alt="FAQ" className="faq-illustration" />
                </div>
            </div>
        </section>
    );
}

export default Faqs;