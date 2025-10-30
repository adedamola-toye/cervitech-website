import NeckPainIcon from "../assets/Neck Pain Icon.png";
import TechWorkersIcon from "../assets/Tech Workers icon.png";
import FHPIcon from "../assets/FHP icon.png"
import "../styles/WhoIsCervitechFor.css"
function WhoIsCervitechFor(){
    return(
        <div className="target-section">
            <h1><span>Who's</span> Cervitech for</h1>
            <p>Cervitech serves a broad demographic affected by spinal health challenges</p>
            <div className = "cards">
                <div className="single-card">
                    <img src={NeckPainIcon} alt="" />
                    <p>Individuals with neck pain:</p>
                    <p>People who suffer from neck, shoulder, and lower back pain</p>
                </div>
                <div className="single-card">
                    <img src={TechWorkersIcon} alt="" />
                    <p>Remote/Tech Workers: </p>
                    <p>People who suffer from neck, shoulder, and lower back pain</p>
                </div>
                <div className="single-card">
                    <img src={FHPIcon} alt="" />
                    <p>Individuals with neck pain</p>
                    <p>People who suffer from neck, shoulder, and lower back pain</p>
                </div>
            </div>
        </div>
        
    )
}
export default WhoIsCervitechFor;