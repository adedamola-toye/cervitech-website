import "../styles/Launch.css";

function Launch(){
    return(
        <>
        <section className="launch-section">
            <div className="launch-text">
                <h1>Be the first to know when CerviTech App launches!</h1>
                <p>Join our waitlist to stay updated on our progress, receive exclusive updates, and get ready to take control of your spine health.</p>
                <button className="launch-button">Join the Waitlist</button>
            </div>
            <div className="launch-image">
                <img src="/launch.png" alt="Launch Coming Soon" />
            </div>

        </section>
        </>
    )
}
export default Launch;