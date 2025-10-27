import Navbar from "./Navbar"
import "../styles/Navbar.css"
import IphonePic from "../assets/iPhone 15 Pro 1.png"
import "../styles/Header.css"
export default function Header(){
    return(
        <>
            <Navbar/>
            <div className="header">
                <div className="left">
                    <h1>Monitor Your <span>Neck Posture</span> With Your Smart Phone</h1>
                    <p>Cervitech helps you correct your neck posture while using your devices and provides posture correction exercises</p>
                    <button className="join-btn">Join waitlist</button>
                </div>
                <img src={IphonePic} alt="Iphone picture showing Cervitech" />
            </div>
        </>
    )
}