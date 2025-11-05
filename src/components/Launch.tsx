import "../styles/Launch.css";

function Launch() {
    return (
        <section className="launch-section">
            <div className="launch-inner">
                <div className="launch-text">
                    <h1>
                        Be the first to know when CerviTech App <span className="accent">launches!</span>
                    </h1>
                    <p>
                        Join our waitlist to stay updated on our progress, receive exclusive updates, and get ready to
                        take control of your spine health.
                    </p>
                    <button className="launch-button">Join waitlist</button>
                </div>
                <div className="launch-image">
                    <img src="/launch.png" alt="CerviTech app preview on phones" />
                </div>
            </div>
        </section>
    );
}

export default Launch;